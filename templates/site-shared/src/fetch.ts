import type { SiteContent } from './types'

export type SiteContentResult =
  | { status: 'ok'; content: SiteContent }
  | { status: 'expired' }
  | { status: 'unavailable' }

const MAX_ATTEMPTS = 3
const ATTEMPT_TIMEOUT_MS = 15_000
const RETRY_BASE_DELAY_MS = 1_500

/**
 * Fetches a preview's content from the API.
 *
 * Returns a tri-state so the UI can distinguish a genuinely expired preview
 * (API responds 404) from a backend that's merely unreachable/cold-starting
 * (network error, timeout, or 5xx). The latter is retried a few times — Render
 * free instances can take 15s+ to wake — and, if still unresolved, reported as
 * `unavailable` rather than `expired`, so a sleeping backend doesn't make a
 * live preview look dead.
 */
export async function fetchSiteContent(businessId: string): Promise<SiteContentResult> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000'

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      const res = await fetch(`${apiUrl}/sites/${businessId}/content`, {
        next: { revalidate: 60 },
        signal: AbortSignal.timeout(ATTEMPT_TIMEOUT_MS),
      })

      if (res.ok) {
        return { status: 'ok', content: (await res.json()) as SiteContent }
      }

      // 404 is the API's definitive "expired or never generated" — don't retry.
      if (res.status === 404) {
        return { status: 'expired' }
      }
      // Any other status (5xx, 502/503 from a cold-starting backend) is transient.
    } catch {
      // Network error or timeout (backend likely cold-starting) — fall through to retry.
    }

    if (attempt < MAX_ATTEMPTS) {
      await new Promise((resolve) => setTimeout(resolve, RETRY_BASE_DELAY_MS * attempt))
    }
  }

  return { status: 'unavailable' }
}
