import type { SiteContent } from '@scoutiq/site-shared'
import type { SiteColors } from '@/lib/theme'
import { AnimateIn } from './AnimateIn'

interface StoryProps {
  content: SiteContent
  colors: SiteColors
}

const STORY_IMG =
  'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80'
const STORY_IMG_SMALL =
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80'

export function StorySection({ content, colors }: StoryProps) {
  return (
    <section id="story" className="py-24 md:py-32 px-6" style={{ background: colors.background }}>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* Framed photography — like the reference's bordered image */}
        <AnimateIn>
          <div className="relative">
            {/* Gold frame offset behind */}
            <div
              className="absolute -top-4 -left-4 w-full h-full border"
              style={{ borderColor: colors.primary }}
            />
            <div className="relative img-zoom shadow-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={STORY_IMG} alt="Dining room" className="w-full h-[460px] object-cover" />
            </div>
            {/* Small overlapping image */}
            <div className="absolute -bottom-10 -right-6 md:-right-10 w-44 md:w-56 img-zoom shadow-lift border-8 border-white hidden sm:block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={STORY_IMG_SMALL} alt="Plated dish" className="w-full h-40 object-cover" />
            </div>
          </div>
        </AnimateIn>

        {/* Editorial copy */}
        <AnimateIn delay={150}>
          <div>
            <p
              className="text-[12px] font-medium uppercase tracking-[0.4em] mb-4"
              style={{ color: colors.primary }}
            >
              Our Story
            </p>
            <h2
              className="font-display text-4xl md:text-5xl font-medium leading-[1.15] mb-6 text-balance"
              style={{ color: colors.dark }}
            >
              {content.about.headline}
            </h2>
            <div className="gold-rule mb-8" />
            <p className="leading-relaxed mb-6 font-light text-[15px]" style={{ color: colors.textMuted }}>
              {content.about.body}
            </p>
            <p
              className="font-accent italic text-lg mb-10"
              style={{ color: colors.text }}
            >
              &ldquo;{content.description}&rdquo;
            </p>

            {/* Highlights as a refined two-column list */}
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
              {content.about.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-1 text-sm" style={{ color: colors.primary }}>✦</span>
                  <span className="text-sm font-light" style={{ color: colors.text }}>{h}</span>
                </div>
              ))}
            </div>

            <a
              href="#menu"
              className="inline-flex items-center gap-3 px-8 py-3.5 text-[13px] font-semibold uppercase tracking-[0.18em] border transition-all duration-300 hover:text-white"
              style={{ borderColor: colors.primary, color: colors.primary }}
            >
              Explore the Menu
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
