# Requirements — Landingpage COALA-SwarmOPS v2.0

**Spec Version:** 6.7  
**Feature ID:** FEAT-001  
**Slug:** coala-landing-v2  
**Status:** SPEC_VALID

---

## 1. Overview

Rebuild the COALA-SwarmOPS landing page from scratch as a modern, interactive, secure React + TypeScript application. The current version is static HTML/CSS/JS and must be fully migrated to a Vite-based React SPA with stunning visual effects, strict security practices, and mobile-first responsive design.

**Primary Repository:** `https://github.com/oficinadigitalCL/Landingpage-COALA-SwarmOPS-V2`  
**Reference Repository (v1):** `https://github.com/oficinadigitalCL/Landingpage-COALA-SwarmOPS`

---

## 2. Context Correction (MANDATORY)

⚠️ **THIS FRAMING MUST BE USED EXACTLY IN ALL COPY, COMPARISONS, AND CTAs:**

- Zoo Code / Roo Code is a **SPONSOR and CONFIGURATION** we use **TEMPORARILY**.
- In the future we will develop our **OWN independent model** (our own Zoo Code or Roo Code equivalent).
- Right now we **USE** it, we are **SPONSORS**, and we offer our **CUSTOM CONFIGURATION**.
- We **DO NOT yet have a packaged product**.
- We offer this for: Developers, People just starting out, Enterprises.
- **Why:** Because it saves money on AI agents.

**Forbidden phrases:** "we are Zoo Code", "our product Zoo Code", "we built Zoo Code", "synergy", "leverage".
**Required tone:** Bold, confident, developer-to-developer. Use phrases like "ahorra plata en agentes", "instala en 5 minutos", "configuración battle-tested", "Proyectos de calidad a bajo costo", "Custom modes probados", "Enjambre de agentes coordinados".

---

## 3. Tech Stack (Non-Negotiable)

| Layer | Technology | Purpose |
|-------|------------|---------|
| Framework | React 18+ with TypeScript | UI framework with type safety |
| Build Tool | Vite | Fast builds, modern dev experience |
| Styling | Tailwind CSS | Utility-first CSS |
| Animations | Framer Motion | Scroll-triggered reveals, transitions |
| 3D / Particles | Three.js + @react-three/fiber | Hero swarm animation, floating nodes |
| Routing | React Router (if needed) | Multi-section SPA behavior |
| Icons | Lucide-React | Self-hosted icons, zero CDN dependency |
| Fonts | Self-hosted (@font-face) | Zero external font CDN |

**Forbidden:** jQuery, Bootstrap, any legacy CSS framework, external CDN for critical rendering.

---

## 4. Architecture Layers

1. **Presentation Layer**: Hero, Sections, Footer — pure UI components, no business logic.
2. **Animation Layer**: Custom hooks isolating all motion logic:
   - [`useScrollAnimation`](src/hooks/useScrollAnimation.ts)
   - [`useParticleSwarm`](src/hooks/useParticleSwarm.ts)
   - [`useReveal`](src/hooks/useReveal.ts)
3. **Data Layer**: Static content JSONs in `src/data/` (en/es) for easy i18n later.
4. **Security Layer**: Middleware hooks for CSP, input sanitization, env validation.
5. **Performance Layer**: Lazy loading, code splitting by route/section, IntersectionObserver for below-fold content.

---

## 5. Security Requirements (Mandatory)

| # | Requirement | Implementation |
|---|-------------|----------------|
| 5.1 | Content-Security-Policy (CSP) headers | Meta tag in `index.html` + Vite plugin |
| 5.2 | No inline scripts | All JS bundled and hashed by Vite |
| 5.3 | Environment variables for keys | Use `import.meta.env`; NEVER hardcode |
| 5.4 | Sanitize user-facing dynamic content | DOMPurify if any dynamic rendering |
| 5.5 | HTTPS-only resource loading | No mixed content; all assets self-hosted |
| 5.6 | Subresource Integrity (SRI) | For any external scripts (prefer zero external) |
| 5.7 | No exposed `.env` files | `.env` in `.gitignore`; no secrets in builds |
| 5.8 | No `console.log` of secrets | Strip in production builds |
| 5.9 | `robots.txt` generation | At build time via Vite plugin |
| 5.10 | `sitemap.xml` generation | At build time via Vite plugin |
| 5.11 | `SECURITY.md` | Brief note on CSP and env handling |

---

## 6. Performance Requirements

| Metric | Target | How |
|--------|--------|-----|
| Initial bundle | < 500 KB | Code splitting by route/section, lazy loading |
| Lighthouse Performance | 90+ | Aggressive splitting, preconnect, font-display: swap |
| Lighthouse Accessibility | 95+ | ARIA labels, color contrast, keyboard nav |
| Lighthouse Best Practices | 100 | HTTPS, CSP, no errors |
| Lighthouse SEO | 95+ | Meta tags, OG image, semantic HTML, sitemap |
| Mobile particle count | Reduced vs desktop | Detect `navigator.hardwareConcurrency` or viewport width |
| Below-fold content | Lazy loaded | IntersectionObserver + React.lazy |

---

## 7. Interactivity & Visual Impact

The page must feel **ALIVE**. Specific effects:

| # | Effect | Tech | Details |
|---|--------|------|---------|
| 7.1 | Hero particle swarm | Canvas / WebGL (Three.js) | Dark theme, neon accents (`#00D9FF`, `#7B61FF`). Nodes pulse, connect with lines when close, react to mouse movement. |
| 7.2 | Scroll-triggered reveals | Framer Motion `whileInView` | Every section fades/slides in on scroll. |
| 7.3 | Interactive "Swarm" demo | Canvas | Visitors click to spawn agent nodes that seek targets. |
| 7.4 | Hover micro-interactions | Tailwind + Framer Motion | Cards lift, glow borders, icons animate on hover. |
| 7.5 | Typing effect | Custom hook or library | 1–2 impactful headlines only. |
| 7.6 | Parallax layers | Framer Motion useScroll | Hero background layers move at different speeds. |
| 7.7 | Dark/Light mode toggle | Tailwind dark mode + system pref | `prefers-color-scheme` detection, toggle button. |
| 7.8 | Mobile-first | Tailwind breakpoints | Desktop must be stunning. |

---

## 8. Content Sections (Order)

1. **Hero**: "COALA-SwarmOPS" + tagline + live swarm animation + CTA buttons (GitHub Sponsor / Install / Docs)
2. **Problem**: "Building with AI agents is expensive and chaotic" — visual comparison (static vs swarm)
3. **Solution**: "Orchestrate your AI swarm with proven custom modes" — showcase v6.0 and v6.5 capabilities
4. **How It Works**: 3-step visual flow (Install Config → Load Custom Modes → Deploy Swarm)
5. **Custom Modes Showcase**: Interactive cards showing modes from v6.0/v6.5. Each card flips on hover to show capabilities. Reference: [`custom_modes_v6.0.yaml`](https://github.com/Aquilesnake/COALA-SwarmOps/blob/main/docs/custom_modes/custom_modes_v6.0.yaml) and local docs at `D:\repositorios\enjambre\docs`.
6. **Who Is It For**: Three columns — Developers | Beginners | Enterprises. Different value prop each.
7. **Pricing/Access**: "Free to install. Support via GitHub Sponsors." Clear donation tiers or "Sponsor us on GitHub".
8. **Community/GitHub CTA**: Direct links to [`https://github.com/oficinadigitalCL/COALA-SwarmOps`](https://github.com/oficinadigitalCL/COALA-SwarmOps) and [`https://github.com/Aquilesnake/COALA-SwarmOps`](https://github.com/Aquilesnake/COALA-SwarmOps). "Star us, fork us, improve us."
9. **Footer**: Minimal, links, security badge.

---

## 9. Copy Tone & Language

- **Primary language:** Spanish (Chilean tech tone — direct, no corporate fluff)
- **Secondary:** English toggle ready (i18n JSON structure)
- **Tone:** Bold, confident, developer-to-developer.
- **Emphasize:** "Proyectos de calidad a bajo costo", "Custom modes probados", "Enjambre de agentes coordinados".

---

## 10. Assets & References

| Asset | Source / Action |
|-------|-----------------|
| Favicon | Reuse existing `favicon.svg` from assets/ |
| Color palette | Dark bg `#0A0A0F`, neon cyan `#00D9FF`, purple `#7B61FF`, white text, gray secondary |
| Custom modes content | v6.0 YAML and v6.5 docs from `D:\repositorios\enjambre\docs` |
| Screenshots | Use existing screenshots folder for before/after or examples |
| OG Image | Generate 1200×630 with swarm visual for social sharing |

---

## 11. Deliverables

1. Complete React + TypeScript + Vite project structure
2. All components in `src/components/` with index exports
3. All hooks in `src/hooks/`
4. All types in `src/types/`
5. All content in `src/data/` (JSON, ES/EN)
6. Public assets in `public/` (favicon, og-image, screenshots)
7. Build output configured for static hosting (GitHub Pages compatible)
8. `README.md` with install, build, and deploy instructions
9. `SECURITY.md` brief note on CSP and env handling

---

## 12. Constraints

- ❌ NO jQuery, Bootstrap, or legacy CSS frameworks.
- ❌ NO backend/API code. Static landing page only.
- ❌ NO hardcoded API keys, tokens, or secrets.
- ❌ Bundle size must stay under 500KB initial load (code split aggressively).
- ✅ Must pass Lighthouse audit: Performance 90+, Accessibility 95+, Best Practices 100, SEO 95+.
- ✅ All GitHub links must point to correct repos.
- ✅ Sponsor/config framing must be respected in all copy.
