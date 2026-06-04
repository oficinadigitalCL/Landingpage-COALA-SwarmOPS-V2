# Tasks — Landingpage COALA-SwarmOPS v2.0

**Spec Version:** 6.7  
**Feature ID:** FEAT-001  
**Slug:** coala-landing-v2  
**Total Tasks:** 192

---

## Phase 0 — Project Scaffold & Tooling (Tasks 1–24)

| # | Task | Owner | Status |
|---|------|-------|--------|
| 1 | Initialize Git repo and create initial commit on `main` | senior | ⬜ |
| 2 | Create Git branch `feat/coala-landing-v2` from `main` | senior | ⬜ |
| 3 | Create `package.json` with React 18+, TypeScript, Vite dependencies | senior | ⬜ |
| 4 | Install core deps: `react`, `react-dom`, `typescript` | qwen-coder-executor | ⬜ |
| 5 | Install build tools: `vite`, `@vitejs/plugin-react` | qwen-coder-executor | ⬜ |
| 6 | Install styling: `tailwindcss`, `postcss`, `autoprefixer` | qwen-coder-executor | ⬜ |
| 7 | Install animation: `framer-motion` | qwen-coder-executor | ⬜ |
| 8 | Install 3D: `three`, `@react-three/fiber`, `@react-three/drei` | qwen-coder-executor | ⬜ |
| 9 | Install icons: `lucide-react` | qwen-coder-executor | ⬜ |
| 10 | Install router: `react-router-dom` | qwen-coder-executor | ⬜ |
| 11 | Install dev tools: `eslint`, `@typescript-eslint/*`, `prettier` | qwen-coder-executor | ⬜ |
| 12 | Install security: `dompurify`, `@types/dompurify` | qwen-coder-executor | ⬜ |
| 13 | Create `tsconfig.json` with strict mode | flash-fast-coder | ⬜ |
| 14 | Create `vite.config.ts` with `base` for GitHub Pages | flash-fast-coder | ⬜ |
| 15 | Create `tailwind.config.js` extending custom `coala` colors | flash-fast-coder | ⬜ |
| 16 | Create `postcss.config.js` | flash-fast-coder | ⬜ |
| 17 | Create `.gitignore` (node_modules, dist, .env, *.log) | flash-fast-coder | ⬜ |
| 18 | Create `.env.example` with `VITE_APP_NAME` placeholder | flash-fast-coder | ⬜ |
| 19 | Create `index.html` with CSP meta tag and preconnect | flash-fast-coder | ⬜ |
| 20 | Create `src/main.tsx` entry point | flash-fast-coder | ⬜ |
| 21 | Create `src/App.tsx` root component with Suspense wrapper | flash-fast-coder | ⬜ |
| 22 | Create `src/index.css` with Tailwind directives and CSS vars | flash-fast-coder | ⬜ |
| 23 | Create `src/vite-env.d.ts` | flash-fast-coder | ⬜ |
| 24 | Create folder structure: `src/{components,hooks,types,data,lib}` | qwen-coder-executor | ⬜ |

---

## Phase 1 — Types & Data Layer (Tasks 25–48)

| # | Task | Owner | Status |
|---|------|-------|--------|
| 25 | Create `src/types/index.ts` with base types | flash-fast-coder | ⬜ |
| 26 | Create `src/types/mode.ts` — `Mode`, `ModeCapability`, `ModeTier` | flash-fast-coder | ⬜ |
| 27 | Create `src/types/section.ts` — `SectionData`, `CTA` | flash-fast-coder | ⬜ |
| 28 | Create `src/data/es.json` — full Spanish content | flash-fast-coder | ⬜ |
| 29 | Create `src/data/en.json` — full English content | flash-fast-coder | ⬜ |
| 30 | Create `src/data/modes.ts` — typed array from v6.0 YAML | flash-fast-coder | ⬜ |
| 31 | Define mode data: Strategic Planner | flash-fast-coder | ⬜ |
| 32 | Define mode data: FastForward Writer | flash-fast-coder | ⬜ |
| 33 | Define mode data: Spec Validator | flash-fast-coder | ⬜ |
| 34 | Define mode data: Evidence Checker | flash-fast-coder | ⬜ |
| 35 | Define mode data: Test Engineer | flash-fast-coder | ⬜ |
| 36 | Define mode data: Code Reviewer | flash-fast-coder | ⬜ |
| 37 | Define mode data: Security Auditor | flash-fast-coder | ⬜ |
| 38 | Define mode data: US Enricher | flash-fast-coder | ⬜ |
| 39 | Define mode data: Senior Engineer K | flash-fast-coder | ⬜ |
| 40 | Define mode data: DevOps Architect | flash-fast-coder | ⬜ |
| 41 | Define mode data: MicroManager | flash-fast-coder | ⬜ |
| 42 | Define mode data: Context Guardian | flash-fast-coder | ⬜ |
| 43 | Define mode data: Qwen Coder Executor | flash-fast-coder | ⬜ |
| 44 | Define mode data: Qwen Fast Checker | flash-fast-coder | ⬜ |
| 45 | Define mode data: Granite Context Scout | flash-fast-coder | ⬜ |
| 46 | Define mode data: Flash Code Scout | flash-fast-coder | ⬜ |
| 47 | Define mode data: Flash Fast Coder | flash-fast-coder | ⬜ |
| 48 | Define mode data: Flash Deep Thinker | flash-fast-coder | ⬜ |

---

## Phase 2 — Utility & Security Layer (Tasks 49–64)

| # | Task | Owner | Status |
|---|------|-------|--------|
| 49 | Create `src/lib/utils.ts` — `cn()` helper (clsx + tailwind-merge) | flash-fast-coder | ⬜ |
| 50 | Create `src/lib/csp.ts` — CSP header builder / validator | flash-fast-coder | ⬜ |
| 51 | Create `src/lib/sanitize.ts` — DOMPurify wrapper | flash-fast-coder | ⬜ |
| 52 | Create `src/lib/env.ts` — runtime env validation | flash-fast-coder | ⬜ |
| 53 | Add `robots.txt` generation to Vite build | flash-fast-coder | ⬜ |
| 54 | Add `sitemap.xml` generation to Vite build | flash-fast-coder | ⬜ |
| 55 | Verify CSP meta tag blocks inline scripts | security-auditor | ⬜ |
| 56 | Verify no secrets in `.env.example` | security-auditor | ⬜ |
| 57 | Add `.env` to `.gitignore` | qwen-coder-executor | ⬜ |
| 58 | Add `console.log` stripping for production builds | flash-fast-coder | ⬜ |
| 59 | Create `SECURITY.md` with CSP and env notes | flash-fast-coder | ⬜ |
| 60 | Verify all `import.meta.env` usage is typed | flash-fast-coder | ⬜ |
| 61 | Add ` noreferrer noopener` to all external links | flash-fast-coder | ⬜ |
| 62 | Add HTTPS-only enforcement comments in code | flash-fast-coder | ⬜ |
| 63 | Verify no mixed content warnings possible | security-auditor | ⬜ |
| 64 | Add integrity check comments for external deps | flash-fast-coder | ⬜ |

---

## Phase 3 — Animation & Hook Layer (Tasks 65–88)

| # | Task | Owner | Status |
|---|------|-------|--------|
| 65 | Create `src/hooks/useMediaQuery.ts` | flash-fast-coder | ⬜ |
| 66 | Create `src/hooks/useTheme.ts` — dark/light/system | flash-fast-coder | ⬜ |
| 67 | Create `src/hooks/useReveal.ts` — IntersectionObserver | flash-fast-coder | ⬜ |
| 68 | Create `src/hooks/useScrollAnimation.ts` — scroll progress | flash-fast-coder | ⬜ |
| 69 | Create `src/hooks/useTypingEffect.ts` | flash-fast-coder | ⬜ |
| 70 | Create `src/hooks/useParticleSwarm.ts` — Canvas 2D swarm | flash-fast-coder | ⬜ |
| 71 | Implement particle class with position, velocity, pulse | flash-fast-coder | ⬜ |
| 72 | Implement node-to-node connection logic (distance threshold) | flash-fast-coder | ⬜ |
| 73 | Implement mouse interaction (repel/attraction) | flash-fast-coder | ⬜ |
| 74 | Implement mobile particle count reduction (≤60% of desktop) | flash-fast-coder | ⬜ |
| 75 | Implement color theming for particles (cyan/purple) | flash-fast-coder | ⬜ |
| 76 | Add `requestAnimationFrame` loop with cleanup | flash-fast-coder | ⬜ |
| 77 | Add resize observer for canvas dimensions | flash-fast-coder | ⬜ |
| 78 | Create `src/hooks/useParallax.ts` — multi-layer parallax | flash-fast-coder | ⬜ |
| 79 | Implement reduced motion support (`prefers-reduced-motion`) | flash-fast-coder | ⬜ |
| 80 | Test hook: `useTheme` toggles correctly | test-engineer | ⬜ |
| 81 | Test hook: `useReveal` fires on intersection | test-engineer | ⬜ |
| 82 | Test hook: `useTypingEffect` completes cycle | test-engineer | ⬜ |
| 83 | Test hook: `useParticleSwarm` cleans up on unmount | test-engineer | ⬜ |
| 84 | Test hook: `useMediaQuery` returns correct boolean | test-engineer | ⬜ |
| 85 | Create barrel export `src/hooks/index.ts` | flash-fast-coder | ⬜ |
| 86 | Verify all hooks have JSDoc comments | evidence-checker | ⬜ |
| 87 | Run TypeScript strict check on hooks | qwen-fast-checker | ⬜ |
| 88 | Verify no memory leaks in animation hooks | evidence-checker | ⬜ |

---

## Phase 4 — UI Components (Tasks 89–112)

| # | Task | Owner | Status |
|---|------|-------|--------|
| 89 | Create `src/components/ui/GlowButton.tsx` | flash-fast-coder | ⬜ |
| 90 | Create `src/components/ui/AnimatedCard.tsx` — lift + glow | flash-fast-coder | ⬜ |
| 91 | Create `src/components/ui/FlipCard.tsx` — 3D flip | flash-fast-coder | ⬜ |
| 92 | Create `src/components/ui/TypewriterText.tsx` | flash-fast-coder | ⬜ |
| 93 | Create `src/components/ui/SectionReveal.tsx` — wrap sections | flash-fast-coder | ⬜ |
| 94 | Create `src/components/ui/StepConnector.tsx` — SVG line | flash-fast-coder | ⬜ |
| 95 | Create `src/components/layout/Navbar.tsx` — sticky + glass | flash-fast-coder | ⬜ |
| 96 | Create `src/components/layout/ThemeToggle.tsx` | flash-fast-coder | ⬜ |
| 97 | Create `src/components/layout/Footer.tsx` | flash-fast-coder | ⬜ |
| 98 | Create `src/components/layout/MobileMenu.tsx` — slide-in | flash-fast-coder | ⬜ |
| 99 | Add smooth-scroll nav links to all sections | flash-fast-coder | ⬜ |
| 100 | Test `GlowButton` renders and is clickable | test-engineer | ⬜ |
| 101 | Test `AnimatedCard` hover state | test-engineer | ⬜ |
| 102 | Test `FlipCard` flips on hover | test-engineer | ⬜ |
| 103 | Test `TypewriterText` types correctly | test-engineer | ⬜ |
| 104 | Test `SectionReveal` animates on scroll | test-engineer | ⬜ |
| 105 | Test `Navbar` mobile menu opens/closes | test-engineer | ⬜ |
| 106 | Test `ThemeToggle` switches theme | test-engineer | ⬜ |
| 107 | Create barrel export `src/components/ui/index.ts` | flash-fast-coder | ⬜ |
| 108 | Create barrel export `src/components/layout/index.ts` | flash-fast-coder | ⬜ |
| 109 | Create barrel export `src/components/index.ts` | flash-fast-coder | ⬜ |
| 110 | Verify all UI components accept `className` | evidence-checker | ⬜ |
| 111 | Verify ARIA labels on interactive components | evidence-checker | ⬜ |
| 112 | Run a11y checks on UI components | qwen-fast-checker | ⬜ |

---

## Phase 5 — Section Components (Tasks 113–144)

| # | Task | Owner | Status |
|---|------|-------|--------|
| 113 | Create `src/components/sections/HeroSection.tsx` | flash-fast-coder | ⬜ |
| 114 | Integrate `useParticleSwarm` into Hero background | flash-fast-coder | ⬜ |
| 115 | Integrate `useTypingEffect` into Hero tagline | flash-fast-coder | ⬜ |
| 116 | Add parallax layers to Hero | flash-fast-coder | ⬜ |
| 117 | Add CTA buttons (Sponsor / Install / Docs) to Hero | flash-fast-coder | ⬜ |
| 118 | Create `src/components/sections/ProblemSection.tsx` | flash-fast-coder | ⬜ |
| 119 | Add static vs swarm visual comparison | flash-fast-coder | ⬜ |
| 120 | Create `src/components/sections/SolutionSection.tsx` | flash-fast-coder | ⬜ |
| 121 | Add v6.0 and v6.5 capability highlights | flash-fast-coder | ⬜ |
| 122 | Create `src/components/sections/HowItWorksSection.tsx` | flash-fast-coder | ⬜ |
| 123 | Implement 3-step visual flow | flash-fast-coder | ⬜ |
| 124 | Add connecting line animation | flash-fast-coder | ⬜ |
| 125 | Create `src/components/sections/ModesShowcaseSection.tsx` | flash-fast-coder | ⬜ |
| 126 | Map `modes.ts` data to `FlipCard` grid | flash-fast-coder | ⬜ |
| 127 | Ensure flip animation works on mobile (tap) | flash-fast-coder | ⬜ |
| 128 | Create `src/components/sections/WhoIsItForSection.tsx` | flash-fast-coder | ⬜ |
| 129 | Add 3 columns: Developers, Beginners, Enterprises | flash-fast-coder | ⬜ |
| 130 | Create `src/components/sections/PricingSection.tsx` | flash-fast-coder | ⬜ |
| 131 | Add "Free to install" messaging | flash-fast-coder | ⬜ |
| 132 | Add GitHub Sponsors CTA | flash-fast-coder | ⬜ |
| 133 | Create `src/components/sections/CommunitySection.tsx` | flash-fast-coder | ⬜ |
| 134 | Add links to both GitHub repos | flash-fast-coder | ⬜ |
| 135 | Add star/fork badges (static or fetched) | flash-fast-coder | ⬜ |
| 136 | Create `src/components/sections/index.ts` barrel export | flash-fast-coder | ⬜ |
| 137 | Lazy-load all section components in `App.tsx` | flash-fast-coder | ⬜ |
| 138 | Add `Suspense` fallback (spinner / skeleton) | flash-fast-coder | ⬜ |
| 139 | Wire all sections in `App.tsx` with correct order | flash-fast-coder | ⬜ |
| 140 | Test `HeroSection` renders without crash | test-engineer | ⬜ |
| 141 | Test all 9 sections render in order | test-engineer | ⬜ |
| 142 | Test scroll navigation jumps to correct section | test-engineer | ⬜ |
| 143 | Verify sponsor/config framing in all copy | evidence-checker | ⬜ |
| 144 | Verify Spanish (Chilean) tone in all copy | evidence-checker | ⬜ |

---

## Phase 6 — 3D / Swarm Demo & Advanced Effects (Tasks 145–160)

| # | Task | Owner | Status |
|---|------|-------|--------|
| 145 | Create interactive swarm demo canvas component | flash-fast-coder | ⬜ |
| 146 | Implement click-to-spawn agent nodes | flash-fast-coder | ⬜ |
| 147 | Implement seek-target behavior for spawned nodes | flash-fast-coder | ⬜ |
| 148 | Add visual feedback on spawn (pulse, color flash) | flash-fast-coder | ⬜ |
| 149 | Optimize demo for mobile (touch events, fewer agents) | flash-fast-coder | ⬜ |
| 150 | Integrate swarm demo into appropriate section | flash-fast-coder | ⬜ |
| 151 | Add Three.js background variant for Hero (optional alt) | flash-fast-coder | ⬜ |
| 152 | Create floating node geometry with `@react-three/fiber` | flash-fast-coder | ⬜ |
| 153 | Add neon shader material for nodes | flash-fast-coder | ⬜ |
| 154 | Connect nodes with `Line` geometry when close | flash-fast-coder | ⬜ |
| 155 | Add mouse raycaster interaction for 3D nodes | flash-fast-coder | ⬜ |
| 156 | Test 3D scene renders on WebGL-capable devices | test-engineer | ⬜ |
| 157 | Test fallback to Canvas 2D when WebGL unavailable | test-engineer | ⬜ |
| 158 | Verify reduced motion disables complex animations | evidence-checker | ⬜ |
| 159 | Measure FPS on mid-tier mobile (target ≥30) | evidence-checker | ⬜ |
| 160 | Verify bundle chunk for Three.js is lazy-loaded | evidence-checker | ⬜ |

---

## Phase 7 — Assets, SEO & Public Files (Tasks 161–176)

| # | Task | Owner | Status |
|---|------|-------|--------|
| 161 | Copy existing `favicon.svg` to `public/` | qwen-coder-executor | ⬜ |
| 162 | Generate OG image (1200×630) with swarm visual | flash-fast-coder | ⬜ |
| 163 | Add OG meta tags to `index.html` | flash-fast-coder | ⬜ |
| 164 | Add Twitter Card meta tags to `index.html` | flash-fast-coder | ⬜ |
| 165 | Add canonical link to `index.html` | flash-fast-coder | ⬜ |
| 166 | Add semantic `<main>`, `<section>`, `<header>`, `<footer>` | flash-fast-coder | ⬜ |
| 167 | Add `lang="es"` to `<html>` with toggle-ready attribute | flash-fast-coder | ⬜ |
| 168 | Add `robots.txt` with allow all | flash-fast-coder | ⬜ |
| 169 | Add `sitemap.xml` with all section anchors | flash-fast-coder | ⬜ |
| 170 | Copy screenshots to `public/screenshots/` | qwen-coder-executor | ⬜ |
| 171 | Add `manifest.json` for PWA basics | flash-fast-coder | ⬜ |
| 172 | Add `apple-touch-icon` meta | flash-fast-coder | ⬜ |
| 173 | Verify all images have `alt` text | evidence-checker | ⬜ |
| 174 | Verify heading hierarchy (h1 → h2 → h3) | evidence-checker | ⬜ |
| 175 | Test SEO meta tags with validator tool | qwen-fast-checker | ⬜ |
| 176 | Verify no duplicate `<title>` or `<meta>` | qwen-fast-checker | ⬜ |

---

## Phase 8 — Build, Deploy & Documentation (Tasks 177–188)

| # | Task | Owner | Status |
|---|------|-------|--------|
| 177 | Create `README.md` with install/build/deploy instructions | flash-fast-coder | ⬜ |
| 178 | Add GitHub Actions workflow `.github/workflows/deploy.yml` | flash-fast-coder | ⬜ |
| 179 | Configure workflow to build on push to `main` | flash-fast-coder | ⬜ |
| 180 | Configure workflow to deploy to GitHub Pages | flash-fast-coder | ⬜ |
| 181 | Run `npm run build` and verify no errors | qwen-coder-executor | ⬜ |
| 182 | Verify `dist/` output is GitHub Pages compatible | qwen-coder-executor | ⬜ |
| 183 | Verify `base` path in `vite.config.ts` matches repo name | evidence-checker | ⬜ |
| 184 | Run Lighthouse audit locally (Performance ≥90) | evidence-checker | ⬜ |
| 185 | Run Lighthouse audit (Accessibility ≥95) | evidence-checker | ⬜ |
| 186 | Run Lighthouse audit (Best Practices 100) | evidence-checker | ⬜ |
| 187 | Run Lighthouse audit (SEO ≥95) | evidence-checker | ⬜ |
| 188 | Verify bundle size < 500KB initial | evidence-checker | ⬜ |

---

## Phase 9 — Security Audit & Final Review (Tasks 189–192)

| # | Task | Owner | Status |
|---|------|-------|--------|
| 189 | Run security audit on all dependencies (`npm audit`) | security-auditor | ⬜ |
| 190 | Verify no secrets committed in git history | security-auditor | ⬜ |
| 191 | Final code review by Code Reviewer (T2) | code-reviewer | ⬜ |
| 192 | Merge `feat/coala-landing-v2` → `main` via PR | senior | ⬜ |

---

## Task Legend

- **flash-fast-coder** = T0.5 · DS V4 Flash — Code generation (≤100 LOC)
- **qwen-coder-executor** = T0 · Local — Command execution, scaffolding
- **qwen-fast-checker** = T0 · Local — Lint/syntax/validation
- **test-engineer** = T2 · Kimi K2.5 — TDD validation, test review
- **evidence-checker** = T2 · Kimi K2.5 — Evidence verification
- **security-auditor** = T2 · Kimi K2.5 — Security audit
- **code-reviewer** = T2 · Kimi K2.5 — Code quality review
- **senior** = T1 · DS V4 Pro — Git operations, PR, commits
