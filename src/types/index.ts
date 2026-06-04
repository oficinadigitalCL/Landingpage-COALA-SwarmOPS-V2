export type Theme = 'dark' | 'light' | 'system';
export type Locale = 'es' | 'en';
export type SectionId =
  | 'hero'
  | 'problem'
  | 'solution'
  | 'how-it-works'
  | 'modes'
  | 'who-is-it-for'
  | 'pricing'
  | 'community';

export interface ParticleConfig {
  count: number;
  color: string;
  connectionRadius: number;
  mouseRadius: number;
  speed: number;
}

export interface SponsorTier {
  name: string;
  price: number;
  benefits: string[];
}
