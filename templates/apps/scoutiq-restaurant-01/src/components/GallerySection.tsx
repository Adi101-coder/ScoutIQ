import type { SiteContent } from '@scoutiq/site-shared'
import type { SiteColors } from '@/lib/theme'
import { AnimateIn } from './AnimateIn'

interface GalleryProps {
  content: SiteContent
  colors: SiteColors
}

const BANNER_IMG =
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=2000&q=80'

const GALLERY = [
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=800&q=80',
]

export function GallerySection({ content, colors }: GalleryProps) {
  return (
    <>
      {/* ── Full-width photographic banner with centered text ─────────────── */}
      <section className="relative py-32 md:py-44 px-6 overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={BANNER_IMG} alt="Restaurant ambience" className="w-full h-full object-cover" style={{ position: 'absolute', inset: 0 }} />
          <div className="absolute inset-0" style={{ background: 'rgba(27,26,23,0.55)' }} />
        </div>
        <AnimateIn className="relative z-10 text-center max-w-2xl mx-auto">
          <p className="text-[12px] font-medium uppercase tracking-[0.4em] mb-5" style={{ color: colors.primary }}>
            The Experience
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-white leading-[1.15] mb-6 text-balance">
            An Evening to Remember
          </h2>
          <p className="font-accent italic text-lg text-white/80">
            {content.tagline}
          </p>
        </AnimateIn>
      </section>

      {/* ── Gallery grid ───────────────────────────────────────────────────── */}
      <section id="gallery" className="py-24 md:py-28 px-6" style={{ background: colors.surface }}>
        <div className="max-w-6xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-16">
              <p className="text-[12px] font-medium uppercase tracking-[0.4em] mb-4" style={{ color: colors.primary }}>
                Moments
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-medium mb-6" style={{ color: colors.dark }}>
                From Our Gallery
              </h2>
              <div className="gold-rule mx-auto" />
            </div>
          </AnimateIn>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {GALLERY.map((src, i) => (
              <AnimateIn key={i} delay={i * 80}>
                <div className={`img-zoom shadow-card ${i === 1 || i === 4 ? 'md:-translate-y-6' : ''}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={`Gallery ${i + 1}`}
                    className="w-full h-56 md:h-72 object-cover"
                  />
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
