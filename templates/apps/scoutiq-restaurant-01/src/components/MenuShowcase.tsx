import type { SiteContent } from '@scoutiq/site-shared'
import type { SiteColors } from '@/lib/theme'
import { AnimateIn } from './AnimateIn'

interface MenuProps {
  content: SiteContent
  colors: SiteColors
}

const DISH_IMAGES = [
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80',
]

const MENU_PHOTO =
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80'

const PRICES = ['24', '32', '18', '28', '21', '26']

export function MenuShowcase({ content, colors }: MenuProps) {
  const dishes = content.services.slice(0, 4)
  const menuItems = content.services

  return (
    <>
      {/* ── Special Dishes: circular photo cards ─────────────────────────── */}
      <section id="dishes" className="py-24 md:py-28 px-6" style={{ background: colors.surface }}>
        <div className="max-w-6xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-16">
              <p className="text-[12px] font-medium uppercase tracking-[0.4em] mb-4" style={{ color: colors.primary }}>
                Taste the Difference
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-medium mb-6" style={{ color: colors.dark }}>
                Our Special Dishes
              </h2>
              <div className="gold-rule mx-auto" />
            </div>
          </AnimateIn>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {dishes.map((dish, i) => (
              <AnimateIn key={i} delay={i * 120}>
                <div className="group text-center">
                  {/* Circular image with gold ring on hover */}
                  <div className="relative w-36 h-36 md:w-44 md:h-44 mx-auto mb-6">
                    <div
                      className="absolute inset-0 rounded-full border transition-all duration-500 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-100"
                      style={{ borderColor: colors.primary }}
                    />
                    <div className="w-full h-full rounded-full overflow-hidden img-zoom shadow-card">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={DISH_IMAGES[i % DISH_IMAGES.length]}
                        alt={dish.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-medium mb-2" style={{ color: colors.dark }}>
                    {dish.title}
                  </h3>
                  <p className="text-sm font-light leading-relaxed max-w-[220px] mx-auto" style={{ color: colors.textMuted }}>
                    {dish.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full Menu: editorial list with dot leaders + photography ─────── */}
      <section id="menu" className="py-24 md:py-32 px-6" style={{ background: colors.background }}>
        <div className="max-w-6xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-16">
              <p className="text-[12px] font-medium uppercase tracking-[0.4em] mb-4" style={{ color: colors.primary }}>
                À La Carte
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-medium mb-6" style={{ color: colors.dark }}>
                From Our Kitchen
              </h2>
              <div className="gold-rule mx-auto" />
            </div>
          </AnimateIn>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Menu list */}
            <AnimateIn>
              <div className="space-y-8">
                {menuItems.map((item, i) => (
                  <div key={i} className="group">
                    <div className="flex items-baseline">
                      <h3
                        className="font-display text-lg md:text-xl font-medium transition-colors group-hover:opacity-80"
                        style={{ color: colors.dark }}
                      >
                        <span className="mr-2">{item.icon}</span>
                        {item.title}
                      </h3>
                      <div className="dot-leader" />
                      <span className="font-display text-lg font-medium" style={{ color: colors.primary }}>
                        ${PRICES[i % PRICES.length]}
                      </span>
                    </div>
                    <p className="text-sm font-light mt-1.5 max-w-md" style={{ color: colors.textMuted }}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </AnimateIn>

            {/* Tall food photography with gold frame */}
            <AnimateIn delay={200}>
              <div className="relative hidden lg:block">
                <div
                  className="absolute -bottom-4 -right-4 w-full h-full border"
                  style={{ borderColor: colors.primary }}
                />
                <div className="relative img-zoom shadow-lift">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={MENU_PHOTO} alt="Signature dish" className="w-full h-[560px] object-cover" />
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  )
}
