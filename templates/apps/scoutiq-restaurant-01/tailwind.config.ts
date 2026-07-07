import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    '../../site-shared/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Jost"', 'system-ui', 'sans-serif'],
        accent: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      colors: {
        ivory: '#FAF6EF',
        gold: {
          DEFAULT: '#C8A15A',
          dark: '#A8833F',
        },
        ink: '#1B1A17',
      },
      boxShadow: {
        card: '0 16px 40px -16px rgba(27, 26, 23, 0.12)',
        lift: '0 28px 56px -20px rgba(27, 26, 23, 0.22)',
        glow: '0 0 48px -12px rgba(200, 161, 90, 0.45)',
      },
    },
  },
  plugins: [],
}
export default config
