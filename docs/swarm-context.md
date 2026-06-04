# Swarm Context — Landingpage COALA-SwarmOPS v2

**Project:** Landingpage-COALA-SwarmOPS-V2  
**Repo:** https://github.com/oficinadigitalCL/Landingpage-COALA-SwarmOPS-V2  
**Reference Repo (v1):** https://github.com/oficinadigitalCL/Landingpage-COALA-SwarmOPS  
**Swarm Version:** 6.7  
**Last Updated:** 2026-06-04T06:50:00Z

---

## Active Features

| Feature ID | Slug | Status | Branch | Merged At |
|------------|------|--------|--------|-----------|
| FEAT-001 | coala-landing-v2 | ✅ COMPLETED | `feat/coala-landing-v2` → `master` | 2026-06-04T06:45:00Z |

---

## Tech Stack Decisions

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | React 18+ + TypeScript | Modern, typed, ecosystem maturity |
| Build | Vite | Fast HMR, modern output, GitHub Pages ready |
| Styling | Tailwind CSS | Utility-first, dark mode support, small bundle |
| Animations | Framer Motion | Declarative, whileInView, excellent perf |
| 3D / Particles | Three.js + @react-three/fiber | Hero swarm visual, WebGL with fallback |
| Icons | Lucide-React | Tree-shakeable, no CDN dependency |
| Router | React Router | SPA section anchors if needed |

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

## Key Copy Constraints

> ⚠️ Zoo Code / Roo Code is a **SPONSOR and CONFIGURATION** we use **TEMPORARILY**.
> We are NOT Zoo Code. We offer our CUSTOM CONFIGURATION to save money on AI agents.
> This framing MUST be present in all copy, CTAs, and comparisons.

- Primary language: Spanish (Chilean tech tone)
- Secondary: English (i18n-ready JSON structure)
- Forbidden: "synergy", "leverage", corporate fluff
- Required: "ahorra plata en agentes", "instala en 5 minutos", "battle-tested"

---

## Error Learning Log

| Date | Error | Cause | Fix | Phase |
|------|-------|-------|-----|-------|
| 2026-06-04 | `react-dom/client` type not found | Missing `@types/react-dom` or TS config gap | Added `src/types/react-dom-client.d.ts` shim | Phase 0 |
| 2026-06-04 | Three.js JSX types missing | `@react-three/fiber` types not auto-resolved | Added `src/types/three-jsx.d.ts` with module declarations | Phase 6 |

---

## Patterns Detected

| Pattern | Where | Notes |
|---------|-------|-------|
| Barrel exports | `src/components/index.ts`, `src/hooks/index.ts` | Reduces import verbosity |
| Lazy loading | `App.tsx` with `React.lazy` | Keeps initial bundle under budget |
| Custom hooks isolation | `src/hooks/` | Animation logic separated from UI |
| JSON data layer | `src/data/{es,en}.json` | Easy i18n migration later |
| Canvas 2D fallback | `HeroSection.tsx` | WebGL unavailable → Canvas swarm |
| Mobile particle reduction | `useParticleSwarm.ts` | 60% fewer particles on mobile |
| Reduced motion support | `useMediaQuery.ts` + Framer Motion | Respects `prefers-reduced-motion` |
| GitHub Pages base path | `vite.config.ts` | `base: '/Landingpage-COALA-SwarmOPS-V2/'` |

---

## Post-Merge Actions

| # | Action | Owner | Status |
|---|--------|-------|--------|
| 1 | Push `master` to `origin/master` | senior / qwen-coder-executor | ⬜ PENDING |
| 2 | Verify GitHub Actions deploy workflow triggers | devops-inspector | ⬜ PENDING |
| 3 | Confirm GitHub Pages site live at `https://oficinadigitalCL.github.io/Landingpage-COALA-SwarmOPS-V2/` | evidence-checker | ⬜ PENDING |
| 4 | Run Lighthouse audit on deployed site | evidence-checker | ⬜ PENDING |

---

## Reference Links

- Custom modes v6.0 YAML: https://github.com/Aquilesnake/COALA-SwarmOps/blob/main/docs/custom_modes/custom_modes_v6.0.yaml
- Local docs: `D:\repositorios\enjambre\docs`
- GitHub org: https://github.com/oficinadigitalCL
- Deploy workflow: [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
