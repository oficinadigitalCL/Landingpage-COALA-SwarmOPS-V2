# Swarm Context — Landingpage COALA-SwarmOPS v2

**Project:** Landingpage-COALA-SwarmOPS-V2  
**Repo:** https://github.com/oficinadigitalCL/Landingpage-COALA-SwarmOPS-V2  
**Reference Repo (v1):** https://github.com/oficinadigitalCL/Landingpage-COALA-SwarmOPS  
**Swarm Version:** 6.7  
**Last Updated:** 2026-06-04

---

## Active Features

| Feature ID | Slug | Status | Branch |
|------------|------|--------|--------|
| FEAT-001 | coala-landing-v2 | PLANNING_COMPLETE | feat/coala-landing-v2 |

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

---

## Performance Budgets

| Metric | Budget |
|--------|--------|
| Initial bundle | < 500 KB |
| Lighthouse Perf | ≥ 90 |
| Lighthouse A11y | ≥ 95 |
| Lighthouse Best | 100 |
| Lighthouse SEO | ≥ 95 |

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
| — | — | — | — | — |

---

## Patterns Detected

| Pattern | Where | Notes |
|---------|-------|-------|
| Barrel exports | `src/components/index.ts`, `src/hooks/index.ts` | Reduces import verbosity |
| Lazy loading | `App.tsx` with `React.lazy` | Keeps initial bundle under budget |
| Custom hooks isolation | `src/hooks/` | Animation logic separated from UI |
| JSON data layer | `src/data/{es,en}.json` | Easy i18n migration later |

---

## Reference Links

- Custom modes v6.0 YAML: https://github.com/Aquilesnake/COALA-SwarmOps/blob/main/docs/custom_modes/custom_modes_v6.0.yaml
- Local docs: `D:\repositorios\enjambre\docs`
- GitHub org: https://github.com/oficinadigitalCL
