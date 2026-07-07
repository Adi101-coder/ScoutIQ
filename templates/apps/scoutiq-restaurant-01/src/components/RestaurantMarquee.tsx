import type { SiteContent } from '@scoutiq/site-shared'
import type { SiteColors } from '@/lib/theme'

interface MarqueeProps {
  content: SiteContent
  colors: SiteColors
}

export function RestaurantMarquee({ content, colors }: MarqueeProps) {
  const words = [
    content.tagline || 'Fine Dining',
    'Seasonal Ingredients',
    'Handcrafted Dishes',
    'Curated Wines',
    'Warm Hospitality',
  ]

  const row = words.map((w, i) => (
    <span key={i} className="flex items-center gap-8 shrink-0">
      <span
        className="font-accent italic text-lg md:text-xl"
        style={{ color: colors.textMuted }}
      >
        {w}
      </span>
      <span style={{ color: colors.primary }}>✦</span>
    </span>
  ))

  return (
    <div
      className="py-6 overflow-hidden border-y"
      style={{ background: colors.background, borderColor: colors.border }}
    >
      <div className="flex gap-8 w-max animate-marquee">
        <div className="flex gap-8 shrink-0">{row}</div>
        <div className="flex gap-8 shrink-0" aria-hidden>{row}</div>
      </div>
    </div>
  )
}
