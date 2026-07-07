import type { SiteContent } from '@scoutiq/site-shared'
import type { SiteColors } from '@/lib/theme'
import { AnimateIn } from './AnimateIn'

interface TestimonialsProps {
  content: SiteContent
  colors: SiteColors
}

const TESTIMONIALS = [
  {
    name: 'Eleanor Whitmore',
    role: 'Food Critic',
    text: 'Every course arrived like a small ceremony. The tasting menu is easily among the finest I have had this year — restrained, confident, and deeply seasonal.',
  },
  {
    name: 'Daniel Okafor',
    role: 'Regular Guest',
    text: 'We celebrated our anniversary here and the staff made the whole evening feel effortless. The wine pairings were inspired. We will be back.',
  },
  {
    name: 'Sofia Marchetti',
    role: 'Local Guide',
    text: 'The room glows, the service is warm without hovering, and the handmade pasta is the best in the city. A neighbourhood treasure.',
  },
]

export function TestimonialsSection({ content, colors }: TestimonialsProps) {
  return (
    <section className="py-24 md:py-28 px-6" style={{ background: colors.background }}>
      <div className="max-w-6xl mx-auto">
        <AnimateIn>
          <div className="text-center mb-16">
            <p className="text-[12px] font-medium uppercase tracking-[0.4em] mb-4" style={{ color: colors.primary }}>
              Kind Words
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium mb-6" style={{ color: colors.dark }}>
              What Our Guests Say
            </h2>
            <div className="gold-rule mx-auto" />
          </div>
        </AnimateIn>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <AnimateIn key={i} delay={i * 120}>
              <div
                className="p-9 h-full flex flex-col transition-transform duration-500 hover:-translate-y-2"
                style={{ background: colors.dark }}
              >
                {/* Gold stars */}
                <div className="flex gap-1.5 mb-6">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="text-sm" style={{ color: colors.primary }}>★</span>
                  ))}
                </div>

                <p className="font-accent italic text-lg leading-relaxed text-white/85 flex-1 mb-8">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="pt-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
                  <p className="font-display text-base font-medium text-white">{t.name}</p>
                  <p className="text-[11px] uppercase tracking-[0.25em] mt-1" style={{ color: colors.primary }}>
                    {t.role}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
