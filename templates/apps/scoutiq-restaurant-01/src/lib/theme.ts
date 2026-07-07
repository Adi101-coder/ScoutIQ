import type { SiteContent } from '@scoutiq/site-shared'

// Classic editorial restaurant palette — ivory, charcoal, gold.
// This template's identity IS this palette, so AI-provided colors are ignored.
export interface SiteColors {
  primary: string
  secondary: string
  accent: string
  background: string
  surface: string
  dark: string
  darkSurface: string
  text: string
  textMuted: string
  border: string
}

const CLASSIC: SiteColors = {
  primary: '#C8A15A',
  secondary: '#A8833F',
  accent: '#C8A15A',
  background: '#FAF6EF',
  surface: '#FFFFFF',
  dark: '#1B1A17',
  darkSurface: '#242219',
  text: '#2B2925',
  textMuted: '#8A8578',
  border: '#E9E2D4',
}

export function getRestaurantColors(_content: SiteContent): SiteColors {
  return CLASSIC
}
