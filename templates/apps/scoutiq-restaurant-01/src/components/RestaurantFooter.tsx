import type { SiteContent } from '@scoutiq/site-shared'
import type { SiteColors } from '@/lib/theme'

interface FooterProps {
  content: SiteContent
  colors: SiteColors
}

export function RestaurantFooter({ content, colors }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className="px-6 pt-20 pb-10" style={{ background: colors.dark }}>
      <div className="max-w-6xl mx-auto">
        {/* Brand mark centered like the reference */}
        <div className="text-center mb-14">
          <p className="font-display text-3xl font-medium text-white mb-3">
            {content.businessName}
          </p>
          <p className="font-accent italic text-base" style={{ color: colors.primary }}>
            {content.tagline}
          </p>
          <div className="flex justify-center mt-8">
            <div className="gold-rule" />
          </div>
        </div>

        {/* Quick links */}
        <nav className="flex flex-wrap justify-center gap-x-10 gap-y-3 mb-14">
          {[
            { href: '#story', label: 'About' },
            { href: '#dishes', label: 'Dishes' },
            { href: '#menu', label: 'Menu' },
            { href: '#gallery', label: 'Gallery' },
            { href: '#contact', label: 'Contact' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[12px] font-medium uppercase tracking-[0.25em] text-white/60 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-light border-t"
          style={{ borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.4)' }}
        >
          <p>© {year} {content.businessName}. All rights reserved.</p>
          <p>
            Preview powered by{' '}
            <strong style={{ color: colors.primary }}>ScoutIQ</strong>
          </p>
        </div>
      </div>
    </footer>
  )
}
