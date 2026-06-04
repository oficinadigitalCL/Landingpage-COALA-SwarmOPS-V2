# Design Document — Landingpage COALA-SwarmOPS v2.0

**Spec Version:** 6.7  
**Feature ID:** FEAT-001  
**Slug:** coala-landing-v2

---

## 1. Project Structure

```
landingpage_Coala-swarmOPS-v2/
├── public/
│   ├── favicon.svg
│   ├── og-image.png               # 1200×630 social share image
│   ├── robots.txt                 # Generated at build time
│   ├── sitemap.xml                # Generated at build time
│   └── screenshots/               # Existing screenshots reused
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ThemeToggle.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ProblemSection.tsx
│   │   │   ├── SolutionSection.tsx
│   │   │   ├── HowItWorksSection.tsx
│   │   │   ├── ModesShowcaseSection.tsx
│   │   │   ├── WhoIsItForSection.tsx
│   │   │   ├── PricingSection.tsx
│   │   │   └── CommunitySection.tsx
│   │   ├── ui/
│   │   │   ├── AnimatedCard.tsx
│   │   │   ├── FlipCard.tsx
│   │   │   ├── GlowButton.tsx
│   │   │   ├── TypewriterText.tsx
│   │   │   └── SectionReveal.tsx
│   │   └── index.ts               # Barrel export
│   ├── hooks/
│   │   ├── useScrollAnimation.ts
│   │   ├── useParticleSwarm.ts
│   │   ├── useReveal.ts
│   │   ├── useTheme.ts
│   │   ├── useTypingEffect.ts
│   │   └── useMediaQuery.ts
│   ├── types/
│   │   ├── index.ts
│   │   ├── mode.ts                # Custom mode type definitions
│   │   └── section.ts             # Section data types
│   ├── data/
│   │   ├── es.json                # Spanish content
│   │   ├── en.json                # English content
│   │   └── modes.ts               # Parsed custom modes data
│   ├── lib/
│   │   ├── utils.ts               # cn() helper, class merge
│   │   ├── csp.ts                 # CSP header builder
│   │   └── sanitize.ts            # DOMPurify wrapper
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css                  # Tailwind directives + custom properties
│   └── vite-env.d.ts
├── .env.example
├── .gitignore
├── index.html                     # CSP meta tag, preconnect
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts                 # base: '/repo-name/', plugins
├── README.md
├── SECURITY.md
└── docs/
    └── specs/
        └── coala-landing-v2/
            ├── requirements.md
            ├── design.md
            ├── tasks.md
            ├── spec-validation.md
            ├── execution_plan.yaml
            └── planning-complete.md
```

---

## 2. Presentation Layer

### 2.1 Navbar
- Sticky on scroll, glassmorphism background (`backdrop-blur-md bg-white/5`)
- Logo left, nav links center (smooth scroll to sections), theme toggle right
- Mobile: hamburger menu with Framer Motion slide-in

### 2.2 HeroSection
- Full viewport (`100vh`)
- Background: WebGL particle swarm (Three.js / @react-three/fiber)
- Foreground: Title + tagline + 3 CTAs
- Parallax: 3 depth layers (background stars, mid swarm, foreground text)
- Typing effect on tagline

### 2.3 ProblemSection
- Two-column layout: text left, visual comparison right
- Visual: "Static workflow" vs "Swarm workflow" animated diagram
- Scroll reveal: fade-up

### 2.4 SolutionSection
- Feature grid with animated cards
- Highlight v6.0 and v6.5 capabilities
- Icons from Lucide-React

### 2.5 HowItWorksSection
- 3-step horizontal flow (vertical on mobile)
- Each step: numbered badge + icon + description
- Connecting line animation on scroll

### 2.6 ModesShowcaseSection
- Grid of flip cards (CSS 3D transform + Framer Motion)
- Front: mode name + icon + short desc
- Back: capabilities list
- Data sourced from `src/data/modes.ts`

### 2.7 WhoIsItForSection
- 3 columns: Developers | Beginners | Enterprises
- Each with distinct icon, value prop, bullet points
- Hover: card lifts + border glow

### 2.8 PricingSection
- Simple layout: "Free to install" + GitHub Sponsors CTA
- Donation tiers as cards (if defined)

### 2.9 CommunitySection
- Large GitHub CTA buttons
- Star/fork counts (static or fetched client-side with cache)
- Links to both repos

### 2.10 Footer
- Minimal: logo, links, security badge, copyright
- Dark variant always

---

## 3. Animation Layer (Hooks)

### 3.1 useScrollAnimation
```ts
// Returns scroll progress (0–1) for a given ref
// Used for parallax, progress bars, scrub animations
```

### 3.2 useParticleSwarm
```ts
// Manages Canvas 2D or WebGL particle system
// Config: count, color, connection radius, mouse interaction
// Mobile: reduce count by 60%
// Cleanup on unmount
```

### 3.3 useReveal
```ts
// IntersectionObserver wrapper
// Returns { ref, isVisible }
// Used with Framer Motion whileInView
```

### 3.4 useTheme
```ts
// Manages 'dark' | 'light' | 'system' preference
// Persists to localStorage
// Syncs with Tailwind 'dark' class on <html>
```

### 3.5 useTypingEffect
```ts
// Types out text character by character
// Config: speed, delay, loop
```

### 3.6 useMediaQuery
```ts
// Wrapper around matchMedia
// Used for mobile detection, reduced motion preference
```

---

## 4. Data Layer

### 4.1 i18n Structure
```json
// src/data/es.json (excerpt)
{
  "hero": {
    "title": "COALA-SwarmOPS",
    "tagline": "Orquesta tu enjambre de agentes IA...",
    "cta": {
      "sponsor": "Sponsor en GitHub",
      "install": "Instalar",
      "docs": "Documentación"
    }
  },
  "problem": { ... },
  "solution": { ... },
  ...
}
```

### 4.2 Modes Data
- Parse v6.0 YAML and v6.5 docs into typed `Mode[]` array
- Fields: `id`, `name`, `tier`, `description`, `capabilities`, `icon`

### 4.3 Static Assets
- All text in JSON; components consume via context or prop drilling
- Future: migrate to react-i18next without structural changes

---

## 5. Security Layer

### 5.1 CSP Headers (index.html)
```html
<meta http-equiv="Content-Security-Policy"
  content="default-src 'self';
           script-src 'self';
           style-src 'self' 'unsafe-inline';
           img-src 'self' data:;
           font-src 'self';
           connect-src 'self';
           media-src 'self';
           object-src 'none';
           frame-ancestors 'none';
           base-uri 'self';
           form-action 'self';
           upgrade-insecure-requests;">
```

### 5.2 Vite Plugin CSP
- Use `vite-plugin-csp` or custom plugin to inject nonce/hash for inline styles

### 5.3 Env Validation
```ts
// src/lib/csp.ts
function validateEnv(): void {
  const required = ['VITE_APP_NAME'];
  // Fail build if missing in CI
}
```

### 5.4 Sanitization
- DOMPurify wrapper for any HTML-in-JSON content
- Default: treat all JSON strings as text nodes

---

## 6. Performance Layer

### 6.1 Code Splitting
```ts
// App.tsx
import { lazy, Suspense } from 'react';

const HeroSection = lazy(() => import('./components/sections/HeroSection'));
const ProblemSection = lazy(() => import('./components/sections/ProblemSection'));
// ... etc
```

### 6.2 IntersectionObserver Lazy Load
- Below-fold sections wrapped in `<Suspense>` + `useReveal`
- Only load Three.js chunk when Hero is near viewport

### 6.3 Font Loading
```css
/* index.css */
@font-face {
  font-family: 'Inter';
  src: url('/fonts/Inter-Variable.woff2') format('woff2');
  font-display: swap;
}
```

### 6.4 Image Optimization
- Screenshots in `public/screenshots/` as WebP with PNG fallback
- OG image pre-compressed

---

## 7. Build & Deploy

### 7.1 Vite Config
```ts
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa'; // optional

export default defineConfig({
  base: '/Landingpage-COALA-SwarmOPS-V2/',
  plugins: [
    react(),
    // robots.txt + sitemap generation plugin
  ],
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three', '@react-three/fiber'],
          framer: ['framer-motion'],
        },
      },
    },
  },
});
```

### 7.2 GitHub Pages
- Deploy via GitHub Actions workflow (`.github/workflows/deploy.yml`)
- Uses `actions/deploy-pages` with `vite build` output

### 7.3 Analytics (Optional)
- If Google Analytics or similar is added:
  - Use env vars (`VITE_GA_ID`)
  - Load lazily after user interaction (do not block render)

---

## 8. Color Palette & Tokens

```css
:root {
  --color-bg: #0A0A0F;
  --color-bg-light: #F5F5F7;
  --color-cyan: #00D9FF;
  --color-purple: #7B61FF;
  --color-white: #FFFFFF;
  --color-gray: #8A8A9A;
  --color-card: #12121A;
  --color-card-light: #FFFFFF;
}
```

Tailwind config extends these as `colors.coala.*`.

---

## 9. Component Interaction Diagram

```
App.tsx
├── ThemeProvider (useTheme)
│   └── Navbar
│       └── ThemeToggle
├── HeroSection
│   ├── useParticleSwarm (Canvas/WebGL)
│   ├── useTypingEffect
│   └── GlowButton × 3
├── ProblemSection
│   └── SectionReveal (useReveal)
├── SolutionSection
│   ├── SectionReveal
│   └── AnimatedCard[]
├── HowItWorksSection
│   ├── SectionReveal
│   └── StepConnector (animated SVG line)
├── ModesShowcaseSection
│   ├── SectionReveal
│   └── FlipCard[] (modes data)
├── WhoIsItForSection
│   ├── SectionReveal
│   └── AnimatedCard[]
├── PricingSection
│   └── SectionReveal
├── CommunitySection
│   └── GlowButton[]
└── Footer
```

---

## 10. State Management

- **No global state library** (Redux/Zustand not needed).
- Local state with `useState` / `useReducer`.
- Theme persisted via `localStorage` + `window.matchMedia`.
- Data flow: JSON → props → components.
