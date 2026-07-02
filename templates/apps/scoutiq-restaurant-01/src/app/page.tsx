import Link from 'next/link'

export default function HomePage() {
  const exampleId = 'f0fcdb52-0920-43fd-9e49-48afe55488b9'

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-950 px-6">
      <div className="max-w-md text-center">
        <p className="text-amber-400 text-xs font-semibold uppercase tracking-[0.3em] mb-4">
          ScoutIQ Preview
        </p>
        <h1 className="font-display text-3xl font-bold text-white mb-4">
          Restaurant Template
        </h1>
        <p className="text-stone-400 mb-8 leading-relaxed">
          This template renders a business preview at{' '}
          <code className="text-amber-200">/{'{businessId}'}</code>. Open a full preview link
          from your dashboard.
        </p>
        <Link
          href={`/${exampleId}`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-400 text-stone-900 font-semibold text-sm hover:scale-105 transition-transform"
        >
          View example preview →
        </Link>
      </div>
    </div>
  )
}
