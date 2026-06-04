export interface CTA {
  text: string;
  href: string;
  variant: 'primary' | 'secondary' | 'outline' | 'ghost';
  icon?: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
  icon: string;
}

export interface Column {
  icon: string;
  title: string;
  description: string;
  bullets: string[];
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: CTA;
  highlighted?: boolean;
}

export interface SectionData {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  ctas?: CTA[];
  tagline?: string;
  features?: Feature[];
  steps?: Step[];
  columns?: Column[];
  tiers?: PricingTier[];
}

export interface I18nContent {
  navbar: {
    logo: string;
    links: { text: string; href: string }[];
  };
  hero: SectionData;
  problem: SectionData;
  solution: SectionData;
  howItWorks: SectionData;
  modesShowcase: SectionData;
  whoIsItFor: SectionData;
  pricing: SectionData;
  community: SectionData;
  footer: {
    copyright: string;
    links: { text: string; href: string }[];
  };
}
