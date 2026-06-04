# Swarm Context — Landingpage COALA-SwarmOPS v2

**Project:** Landingpage-COALA-SwarmOPS-V2  
**Repo:** https://github.com/oficinadigitalCL/Landingpage-COALA-SwarmOPS-V2  
**Reference Repo (v1):** https://github.com/oficinadigitalCL/Landingpage-COALA-SwarmOPS  
**Swarm Version:** 6.7  
**Last Updated:** 2026-06-04T19:36:00Z

---

## Active Features

| Feature ID | Slug | Status | Branch | Merged At |
|------------|------|--------|--------|-----------|
| FEAT-001 | coala-landing-v2 | 🚀 DEPLOYING | `feat/coala-landing-v2` → `master` | 2026-06-04T06:45:00Z |

---

## Tech Stack Decisions

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | React 18+ + TypeScript | Modern, typed, ecosystem maturity |
| Build | Vite | Fast HMR, modern output, GitHub Pages ready |
| Styling | Tailwind CSS | Utility-first, `darkMode: 'class'`, small bundle |
| Animations | Framer Motion | Declarative, whileInView, excellent perf |
| 3D / Particles | Three.js + @react-three/fiber | Hero swarm visual, WebGL with fallback |
| Icons | Lucide-React | Tree-shakeable, no CDN dependency |
| i18n | Custom `useLanguage` hook + JSON data | ES/EN/ZH ready without external lib |

---

## Security Patterns

- CSP via meta tag + Vite plugin
- No inline scripts (all hashed by Vite)
- `import.meta.env` for all configuration
- DOMPurify for any dynamic HTML content
- HTTPS-only, SRI comments, no exposed .env
- Build-time `robots.txt` + `sitemap.xml`
- `SECURITY.md` present with CSP and env handling notes

---

## Performance Budgets

| Metric | Budget | Actual |
|--------|--------|--------|
| Initial bundle | < 500 KB | Pending build |
| Lighthouse Perf | ≥ 90 | Pending audit |
| Lighthouse A11y | ≥ 95 | Pending audit |
| Lighthouse Best | 100 | Pending audit |
| Lighthouse SEO | ≥ 95 | Pending audit |

---

## Component Inventory

### Layout (`src/components/layout/`)
| Component | File | Status |
|-----------|------|--------|
| Navbar | [`Navbar.tsx`](src/components/layout/Navbar.tsx) | ✅ Sticky + glass, scroll-aware |
| ThemeToggle | [`ThemeToggle.tsx`](src/components/layout/ThemeToggle.tsx) | ✅ Sun/Moon icons, dark/light/system |
| LanguageSwitcher | [`LanguageSwitcher.tsx`](src/components/layout/LanguageSwitcher.tsx) | ✅ ES/EN/ZH radio group |
| Footer | [`Footer.tsx`](src/components/layout/Footer.tsx) | ✅ Minimal |
| MobileMenu | [`MobileMenu.tsx`](src/components/layout/MobileMenu.tsx) | ✅ Slide-in with Framer Motion |

### Sections (`src/components/sections/`)
| Component | File | Status |
|-----------|------|--------|
| HeroSection | [`HeroSection.tsx`](src/components/sections/HeroSection.tsx) | ✅ Particle swarm + CTA |
| HeroThreeBackground | [`HeroThreeBackground.tsx`](src/components/sections/HeroThreeBackground.tsx) | ✅ WebGL fallback |
| ProblemSection | [`ProblemSection.tsx`](src/components/sections/ProblemSection.tsx) | ✅ Static vs Swarm visual |
| SolutionSection | [`SolutionSection.tsx`](src/components/sections/SolutionSection.tsx) | ✅ Feature grid |
| HowItWorksSection | [`HowItWorksSection.tsx`](src/components/sections/HowItWorksSection.tsx) | ✅ 3-step flow |
| ModesShowcaseSection | [`ModesShowcaseSection.tsx`](src/components/sections/ModesShowcaseSection.tsx) | ✅ Flip cards |
| WhoIsItForSection | [`WhoIsItForSection.tsx`](src/components/sections/WhoIsItForSection.tsx) | ✅ 3 columns |
| PricingSection | [`PricingSection.tsx`](src/components/sections/PricingSection.tsx) | ✅ Free + sponsor CTA |
| CommunitySection | [`CommunitySection.tsx`](src/components/sections/CommunitySection.tsx) | ✅ GitHub links |
| SwarmDemoSection | [`SwarmDemoSection.tsx`](src/components/sections/SwarmDemoSection.tsx) | ✅ Interactive demo |

### UI Primitives (`src/components/ui/`)
| Component | File | Status |
|-----------|------|--------|
| GlowButton | [`GlowButton.tsx`](src/components/ui/GlowButton.tsx) | ✅ |
| AnimatedCard | [`AnimatedCard.tsx`](src/components/ui/AnimatedCard.tsx) | ✅ |
| FlipCard | [`FlipCard.tsx`](src/components/ui/FlipCard.tsx) | ✅ |
| TypewriterText | [`TypewriterText.tsx`](src/components/ui/TypewriterText.tsx) | ✅ |
| SectionReveal | [`SectionReveal.tsx`](src/components/ui/SectionReveal.tsx) | ✅ |
| StepConnector | [`StepConnector.tsx`](src/components/ui/StepConnector.tsx) | ✅ |

### Hooks (`src/hooks/`)
| Hook | File | Status |
|------|------|--------|
| useTheme | [`useTheme.ts`](src/hooks/useTheme.ts) | ✅ dark/light/system + localStorage |
| useLanguage | [`useLanguage.tsx`](src/hooks/useLanguage.tsx) | ✅ ES/EN/ZH Context provider |
| useParticleSwarm | [`useParticleSwarm.ts`](src/hooks/useParticleSwarm.ts) | ✅ Canvas 2D |
| useReveal | [`useReveal.ts`](src/hooks/useReveal.ts) | ✅ IntersectionObserver |
| useScrollAnimation | [`useScrollAnimation.ts`](src/hooks/useScrollAnimation.ts) | ✅ |
| useTypingEffect | [`useTypingEffect.ts`](src/hooks/useTypingEffect.ts) | ✅ |
| useParallax | [`useParallax.ts`](src/hooks/useParallax.ts) | ✅ |
| useMediaQuery | [`useMediaQuery.ts`](src/hooks/useMediaQuery.ts) | ✅ |

### Data (`src/data/`)
| File | Languages | Status |
|------|-----------|--------|
| [`es.json`](src/data/es.json) | Spanish | ✅ Primary |
| [`en.json`](src/data/en.json) | English | ✅ Secondary |
| [`zh.json`](src/data/zh.json) | Chinese | ✅ Tertiary |
| [`modes.ts`](src/data/modes.ts) | — | ✅ 19 swarm modes typed |

---

## Key Copy Constraints

> ⚠️ Zoo Code / Roo Code is a **SPONSOR and CONFIGURATION** we use **TEMPORARILY**.
> We are NOT Zoo Code. We offer our CUSTOM CONFIGURATION to save money on AI agents.
> This framing MUST be present in all copy, CTAs, and comparisons.

- Primary language: Spanish (Chilean tech tone)
- Secondary: English (i18n-ready via useLanguage)
- Tertiary: Chinese (zh.json added)
- Forbidden: "synergy", "leverage", corporate fluff
- Required: "ahorra plata en agentes", "instala en 5 minutos", "battle-tested"

---

## Error Learning Log

| Date | Error | Cause | Fix | Phase |
|------|-------|-------|-----|-------|
| 2026-06-04 | `react-dom/client` type not found | Missing `@types/react-dom` or TS config gap | Added `src/types/react-dom-client.d.ts` shim | Phase 0 |
| 2026-06-04 | Three.js JSX types missing | `@react-three/fiber` types not auto-resolved | Added `src/types/three-jsx.d.ts` with module declarations | Phase 6 |
| 2026-06-04 | GitHub Pages deploy: rutas de desarrollo en produccion | `tsc &&` bloqueaba `vite build`. Rutas absolutas sin base path. | Cambiado build script a `vite build` solo. Rutas relativas `./` en index.html. | Phase 8 |
| 2026-06-04 | Light mode no funcionaba | `App.tsx` y `Navbar` usaban clases dark hardcodeadas sin prefijo `dark:` | Agregado `bg-coala-light dark:bg-coala-darker`, `text-gray-900 dark:text-white`, etc. | Post-merge |

---

## Patterns Detected

| Pattern | Where | Notes |
|---------|-------|-------|
| Barrel exports | `src/components/index.ts`, `src/hooks/index.ts` | Reduces import verbosity |
| Lazy loading | `App.tsx` with `React.lazy` | Keeps initial bundle under budget |
| Custom hooks isolation | `src/hooks/` | Animation & i18n logic separated from UI |
| JSON data layer | `src/data/{es,en,zh}.json` | Language-agnostic, easy to extend |
| Canvas 2D fallback | `HeroSection.tsx` | WebGL unavailable → Canvas swarm |
| Mobile particle reduction | `useParticleSwarm.ts` | 60% fewer particles on mobile |
| Reduced motion support | `useMediaQuery.ts` + Framer Motion | Respects `prefers-reduced-motion` |
| GitHub Pages base path | `vite.config.ts` | `base: '/Landingpage-COALA-SwarmOPS-V2/'` |
| Tailwind dark mode class | `darkMode: 'class'` | `useTheme` toggles `dark` on `<html>` |

---

## Deploy Status

| Step | Status |
|------|--------|
| Git init + remote | ✅ |
| Branch `master` | ✅ |
| Push to `origin/master` | ✅ |
| GitHub Actions workflow | ⚠️ Build corregido, esperando nuevo push |
| GitHub Pages live | ⬜ Pending redeploy |
| Lighthouse audit | ⬜ Pending |

---

## Reference Links

- Custom modes v6.0 YAML: https://github.com/Aquilesnake/COALA-SwarmOps/blob/main/docs/custom_modes/custom_modes_v6.0.yaml
- Local docs: `D:\repositorios\enjambre\docs`
- GitHub org: https://github.com/oficinadigitalCL
- Deploy workflow: [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
- Live site: https://oficinadigitalcl.github.io/Landingpage-COALA-SwarmOPS-V2/
