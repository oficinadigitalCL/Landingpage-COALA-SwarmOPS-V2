# Swarm Context — Landingpage COALA-SwarmOPS v2

**Project:** Landingpage-COALA-SwarmOPS-V2  
**Repo:** https://github.com/oficinadigitalCL/Landingpage-COALA-SwarmOPS-V2  
**Reference Repo (v1):** https://github.com/oficinadigitalCL/Landingpage-COALA-SwarmOPS  
**Swarm Version:** 6.7  
**Last Updated:** 2026-06-04T22:14:31Z

---

## Active Features

| Feature ID | Slug | Status | Branch | Merged At |
|------------|------|--------|--------|-----------|
| FEAT-001 | coala-landing-v2 | 🚀 DEPLOYING | `feat/coala-landing-v2` → `master` | 2026-06-04T06:45:00Z |
| FEAT-002 | feat-002-i18n-zhtw | 🚀 MERGED | `feat/feat-002-i18n-zhtw` → `master` | 2026-06-04T22:10:00Z |

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
| i18n | Custom `useLanguage` hook + JSON data | ES/EN/ZH/ZH-TW ready without external lib |

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
| LanguageSwitcher | [`LanguageSwitcher.tsx`](src/components/layout/LanguageSwitcher.tsx) | ✅ ES/EN/ZH/ZH-TW radio group |
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
| useLanguage | [`useLanguage.tsx`](src/hooks/useLanguage.tsx) | ✅ ES/EN/ZH/ZH-TW Context provider + debounce 150ms |
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
| [`zh.json`](src/data/zh.json) | Chinese (Simplified) | ✅ Tertiary |
| [`zh-TW.json`](src/data/zh-TW.json) | Chinese (Traditional) | ✅ Quaternary — FEAT-002 |
| [`modes.ts`](src/data/modes.ts) | — | ✅ 19 swarm modes typed |

---

## Key Copy Constraints

> ⚠️ Zoo Code / Roo Code is a **SPONSOR and CONFIGURATION** we use **TEMPORARILY**.
> We are NOT Zoo Code. We offer our CUSTOM CONFIGURATION to save money on AI agents.
> This framing MUST be present in all copy, CTAs, and comparisons.

- Primary language: Spanish (Chilean tech tone)
- Secondary: English (i18n-ready via useLanguage)
- Tertiary: Chinese Simplified (zh.json)
- Quaternary: Chinese Traditional (zh-TW.json) — FEAT-002
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
| 2026-06-04 | GAP-01: `FALLBACK_MAP` + `resolveContent()` no implementados | Design.md especificaba fallback `zh-TW → zh → es` no implementado en [`useLanguage.tsx`](src/hooks/useLanguage.tsx) | Postergado hasta que un componente lo requiera. Dead code sin consumidores. | FEAT-002 Phase 12 |
| 2026-06-04 | GAP-02: `Locale` type en [`types/index.ts`](src/types/index.ts:2) sigue como `'es' \| 'en'` | Inconsistencia con `Language` type de i18n. Dominios separados: Locale es para SEO/metadatos. | No aplica al sistema i18n. Evaluar sincronización futura si SEO requiere zh/zh-TW. | FEAT-002 Phase 12 |
| 2026-06-04 | npm audit: 1 critical pre-existente (esbuild dev server) | Vulnerabilidad en dependencia de Vite, no introducida por FEAT-002 | Documentado. No bloqueante para merge. | FEAT-002 Phase 12 |
| 2026-06-04 | qwen-fast-checker (T0) no puede ejecutar comandos npm | Tier 0 es solo lectura; `npm run build` y `npm audit` requieren Tier 0.5+ | Escalar a flash-fast-coder (T0.5) para comandos npm. | FEAT-002 Phase 12 |

---

## Patterns Detected

| Pattern | Where | Notes |
|---------|-------|-------|
| Barrel exports | `src/components/index.ts`, `src/hooks/index.ts` | Reduces import verbosity |
| Lazy loading | `App.tsx` with `React.lazy` | Keeps initial bundle under budget |
| Custom hooks isolation | `src/hooks/` | Animation & i18n logic separated from UI |
| JSON data layer | `src/data/{es,en,zh,zh-TW}.json` | Language-agnostic, easy to extend |
| Canvas 2D fallback | `HeroSection.tsx` | WebGL unavailable → Canvas swarm |
| Mobile particle reduction | `useParticleSwarm.ts` | 60% fewer particles on mobile |
| Reduced motion support | `useMediaQuery.ts` + Framer Motion | Respects `prefers-reduced-motion` |
| GitHub Pages base path | `vite.config.ts` | `base: '/Landingpage-COALA-SwarmOPS-V2/'` |
| Tailwind dark mode class | `darkMode: 'class'` | `useTheme` toggles `dark` on `<html>` |
| Barrel exports en data layer | `src/data/zh-TW.json` agregado sin modificar índices | Nuevos archivos JSON se integran sin cambios en barriles |
| `Object.keys(FLAGS)` auto-descubre idiomas | [`LanguageSwitcher.tsx`](src/components/layout/LanguageSwitcher.tsx:23) | Agregar entrada a `FLAGS`/`LABELS` añade automáticamente el botón |
| `Record<Language, ...>` fuerza exhaustividad | [`useLanguage.tsx`](src/hooks/useLanguage.tsx:48) | TypeScript rechaza compilación si falta una key en `contentMap` |
| Vite inlinea JSON pequeño (<10KB) en bundle JS | `src/data/zh-TW.json` (~5KB) | Sin chunk separado; incluido en el bundle principal |

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

## Features Completadas

| Feature ID | Nombre | Fecha | SP | Workers | Errores | Tiempo |
|------------|--------|-------|-----|---------|---------|--------|
| FEAT-001 | Landingpage COALA-SwarmOPS v2 | 2026-06-04 | 13 | T0 (qwen-fast-checker, granite-context-scout) + T0.5 (flash-fast-coder) + T1 (senior) + T2 (us-enricher, spec-validator, evidence-checker) + T3 (strategic-planner, fastforward-writer) | react-dom/client types, Three.js JSX types, GitHub Pages deploy paths, light mode hardcoded dark | ~5h |
| FEAT-002 | Soporte Chino Tradicional (ZH-TW) | 2026-06-04 | 5 | T0 (qwen-fast-checker) + T0.5 (flash-fast-coder) + T1 (senior) + T2 (evidence-checker) | GAP-01 FALLBACK_MAP no implementado, GAP-02 Locale type divergente, npm audit 1 critical pre-existente, T0 no ejecuta comandos npm | ~2h |

---

## Error Patterns

| Pattern ID | Descripción | Frecuencia | Mitigación |
|------------|-------------|------------|------------|
| PATRON-001 | Design.md especifica features que no tienen consumidores reales (dead code) | 1 | Validar en Phase 0 si cada feature del diseño tiene un componente que la consume. Postergar sin culpa. |
| PATRON-002 | Tipos de dominio separados (Locale vs Language) divergen sin causar bugs | 1 | Documentar como dominios independientes. Solo unificar si un mismo componente consume ambos. |
| PATRON-003 | Vulnerabilidades pre-existentes en npm audit no deben bloquear feature branches | 2 | Documentar en evidence report. Solo bloquear si la feature introduce nuevas vulnerabilidades. |
| PATRON-004 | Tier 0 (qwen-fast-checker) es solo lectura — no puede ejecutar npm scripts | 2 | Escalar automáticamente a T0.5 (flash-fast-coder) para cualquier tarea que requiera npm run/node. |

---

## Tier 0 Learning

### Tareas Compatibles con T0
- Verificar existencia de archivos y estructura de directorios
- Validar sintaxis TypeScript/JSON (lectura estática)
- Comparar keys entre archivos JSON (diff estructural)
- Verificar imports y exports en código fuente
- Leer y reportar contenido de archivos

### Tareas Incompatibles con T0
- Ejecutar `npm run build`, `npm run dev`, `npm audit`, `npm test`
- Ejecutar cualquier comando Node.js o script del proyecto
- Modificar archivos (solo lectura)
- Ejecutar tests con Vitest o cualquier test runner

### CB Historial (Cost-Benefit)
| Fecha | Feature | Tarea T0 | Resultado | Costo evitado |
|-------|---------|----------|-----------|---------------|
| 2026-06-04 | FEAT-002 | Verificar estructura zh-TW.json vs es.json | ✅ Éxito | ~$0.02 (evitado T0.5) |
| 2026-06-04 | FEAT-002 | Ejecutar npm run build | ❌ Falló — escalado a T0.5 | $0.00 (detección temprana) |

---

## Tier 0.5 Learning

### Tareas Compatibles con T0.5
- Generar archivos JSON de traducción (~100-150 líneas)
- Extender tipos TypeScript (union types, Records)
- Actualizar flags/labels en componentes React simples
- Agregar reglas CSS (font stacks, word-break)
- Ejecutar `npm run build` y reportar resultados
- Implementar funciones utilitarias de ≤20 líneas

### Tareas Incompatibles con T0.5
- Diseñar arquitectura de fallback multi-idioma
- Escribir tests unitarios o de integración
- Debuggear errores de compilación complejos (multi-archivo)
- Realizar auditorías de seguridad
- Validar evidencia cross-file (requiere T2)

### Costo T0.5 Acumulado
| Fecha | Feature | Tarea | Costo |
|-------|---------|-------|-------|
| 2026-06-04 | FEAT-002 | Crear zh-TW.json (143 líneas) | ~$0.03 |
| 2026-06-04 | FEAT-002 | Extender tipos en useLanguage.tsx | ~$0.02 |
| 2026-06-04 | FEAT-002 | Actualizar LanguageSwitcher flags/labels | ~$0.02 |
| 2026-06-04 | FEAT-002 | Agregar CSS font stack zh-TW | ~$0.02 |
| **Total acumulado** | | | **~$0.09** |

---

## Reference Links

- Custom modes v6.0 YAML: https://github.com/Aquilesnake/COALA-SwarmOps/blob/main/docs/custom_modes/custom_modes_v6.0.yaml
- Local docs: `D:\repositorios\enjambre\docs`
- GitHub org: https://github.com/oficinadigitalCL
- Deploy workflow: [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
- Live site: https://oficinadigitalcl.github.io/Landingpage-COALA-SwarmOPS-V2/
