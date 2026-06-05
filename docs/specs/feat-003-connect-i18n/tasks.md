# Tasks — FEAT-003: Conectar Componentes al Sistema i18n

**Spec Version:** 6.7  
**Feature ID:** FEAT-003  
**Slug:** feat-003-connect-i18n  
**Total Tasks:** 148  
**Story Points:** 8  
**Tier Sugerido:** T0.5 (Flash Fast Coder) para implementación · T0 (Qwen Fast Checker) para verificación · T2 para testing

---

## Phase 0 — Branch & Environment Setup (Tasks 1–8)

| # | Task | Owner | Status |
|---|------|-------|--------|
| 1 | Crear branch Git `feat/feat-003-connect-i18n` desde `master` | senior | ⬜ |
| 2 | Verificar que `npm run dev` arranca sin errores en el branch | qwen-fast-checker | ⬜ |
| 3 | Verificar que los 4 idiomas (es/en/zh/zh-TW) funcionan en LanguageSwitcher antes de modificar | qwen-fast-checker | ⬜ |
| 4 | Leer [`design.md`](docs/specs/feat-003-connect-i18n/design.md) para entender arquitectura objetivo | flash-fast-coder | ⬜ |
| 5 | Verificar estado actual de [`HeroSection.tsx`](src/components/sections/HeroSection.tsx) — anotar líneas con strings hardcodeados | qwen-fast-checker | ⬜ |
| 6 | Verificar estado actual de [`Footer.tsx`](src/components/layout/Footer.tsx) — anotar líneas con strings hardcodeados | qwen-fast-checker | ⬜ |
| 7 | Verificar que los 4 JSON existen y tienen estructura idéntica (diff de keys entre es/en/zh/zh-TW) | qwen-fast-checker | ⬜ |
| 8 | Confirmar que [`useLanguage.tsx`](src/hooks/useLanguage.tsx) exporta `useLanguage` y `contentMap` correctamente | qwen-fast-checker | ⬜ |

---

## Phase 1 — Data Layer: Nuevas Claves en es.json (Tasks 9–16)

| # | Task | Owner | Status |
|---|------|-------|--------|
| 9 | Agregar `problem.comparison.staticTitle`: "Static Workflow" en [`es.json`](src/data/es.json) | flash-fast-coder | ⬜ |
| 10 | Agregar `problem.comparison.swarmTitle`: "Swarm Workflow" en [`es.json`](src/data/es.json) | flash-fast-coder | ⬜ |
| 11 | Agregar `problem.comparison.staticItems`: array con 4 bullets en [`es.json`](src/data/es.json) | flash-fast-coder | ⬜ |
| 12 | Agregar `problem.comparison.swarmItems`: array con 4 bullets en [`es.json`](src/data/es.json) | flash-fast-coder | ⬜ |
| 13 | Agregar `pricing.popularBadge`: "Más popular" en [`es.json`](src/data/es.json) | flash-fast-coder | ⬜ |
| 14 | Agregar `pricing.freeMessage`: texto "100% open source..." en [`es.json`](src/data/es.json) | flash-fast-coder | ⬜ |
| 15 | Agregar `community.repos`: array con 2 objetos (v2, v1) con title/description/cta en [`es.json`](src/data/es.json) | flash-fast-coder | ⬜ |
| 16 | Validar que [`es.json`](src/data/es.json) parsea correctamente tras las adiciones | qwen-fast-checker | ⬜ |

---

## Phase 2 — Data Layer: Nuevas Claves en en.json (Tasks 17–24)

| # | Task | Owner | Status |
|---|------|-------|--------|
| 17 | Traducir `problem.comparison.staticTitle` → "Static Workflow" (igual, nombre propio) en [`en.json`](src/data/en.json) | flash-fast-coder | ⬜ |
| 18 | Traducir `problem.comparison.swarmTitle` → "Swarm Workflow" (igual) en [`en.json`](src/data/en.json) | flash-fast-coder | ⬜ |
| 19 | Traducir `problem.comparison.staticItems` → 4 bullets EN en [`en.json`](src/data/en.json) | flash-fast-coder | ⬜ |
| 20 | Traducir `problem.comparison.swarmItems` → 4 bullets EN en [`en.json`](src/data/en.json) | flash-fast-coder | ⬜ |
| 21 | Traducir `pricing.popularBadge` → "Most Popular" en [`en.json`](src/data/en.json) | flash-fast-coder | ⬜ |
| 22 | Traducir `pricing.freeMessage` → EN en [`en.json`](src/data/en.json) | flash-fast-coder | ⬜ |
| 23 | Traducir `community.repos` → 2 objetos con textos EN en [`en.json`](src/data/en.json) | flash-fast-coder | ⬜ |
| 24 | Validar que [`en.json`](src/data/en.json) tiene las mismas keys que [`es.json`](src/data/es.json) | qwen-fast-checker | ⬜ |

---

## Phase 3 — Data Layer: Nuevas Claves en zh.json (Tasks 25–32)

| # | Task | Owner | Status |
|---|------|-------|--------|
| 25 | Traducir `problem.comparison.staticTitle` → "静态工作流" en [`zh.json`](src/data/zh.json) | flash-fast-coder | ⬜ |
| 26 | Traducir `problem.comparison.swarmTitle` → "Swarm 工作流" en [`zh.json`](src/data/zh.json) | flash-fast-coder | ⬜ |
| 27 | Traducir `problem.comparison.staticItems` → 4 bullets ZH en [`zh.json`](src/data/zh.json) | flash-fast-coder | ⬜ |
| 28 | Traducir `problem.comparison.swarmItems` → 4 bullets ZH en [`zh.json`](src/data/zh.json) | flash-fast-coder | ⬜ |
| 29 | Traducir `pricing.popularBadge` → "最受欢迎" en [`zh.json`](src/data/zh.json) | flash-fast-coder | ⬜ |
| 30 | Traducir `pricing.freeMessage` → ZH en [`zh.json`](src/data/zh.json) | flash-fast-coder | ⬜ |
| 31 | Traducir `community.repos` → 2 objetos con textos ZH en [`zh.json`](src/data/zh.json) | flash-fast-coder | ⬜ |
| 32 | Validar que [`zh.json`](src/data/zh.json) tiene las mismas keys que [`es.json`](src/data/es.json) | qwen-fast-checker | ⬜ |

---

## Phase 4 — Data Layer: Nuevas Claves en zh-TW.json (Tasks 33–40)

| # | Task | Owner | Status |
|---|------|-------|--------|
| 33 | Traducir `problem.comparison.staticTitle` → "靜態工作流" en [`zh-TW.json`](src/data/zh-TW.json) | flash-fast-coder | ⬜ |
| 34 | Traducir `problem.comparison.swarmTitle` → "Swarm 工作流" en [`zh-TW.json`](src/data/zh-TW.json) | flash-fast-coder | ⬜ |
| 35 | Traducir `problem.comparison.staticItems` → 4 bullets ZH-TW (caracteres tradicionales) en [`zh-TW.json`](src/data/zh-TW.json) | flash-fast-coder | ⬜ |
| 36 | Traducir `problem.comparison.swarmItems` → 4 bullets ZH-TW (caracteres tradicionales) en [`zh-TW.json`](src/data/zh-TW.json) | flash-fast-coder | ⬜ |
| 37 | Traducir `pricing.popularBadge` → "最受歡迎" (tradicional) en [`zh-TW.json`](src/data/zh-TW.json) | flash-fast-coder | ⬜ |
| 38 | Traducir `pricing.freeMessage` → ZH-TW en [`zh-TW.json`](src/data/zh-TW.json) | flash-fast-coder | ⬜ |
| 39 | Traducir `community.repos` → 2 objetos con textos ZH-TW en [`zh-TW.json`](src/data/zh-TW.json) | flash-fast-coder | ⬜ |
| 40 | Validar diff estructural: [`zh-TW.json`](src/data/zh-TW.json) vs [`es.json`](src/data/es.json) — zero missing keys, zero extra keys | evidence-checker | ⬜ |

---

## Phase 5 — Component Refactor: HeroSection + TypewriterText (Tasks 41–52)

| # | Task | Owner | Status |
|---|------|-------|--------|
| 41 | Eliminar array `TAGLINES` hardcodeado en [`HeroSection.tsx:14`](src/components/sections/HeroSection.tsx:14) | flash-fast-coder | ⬜ |
| 42 | Agregar `import { useLanguage, contentMap } from '../../hooks/useLanguage'` en [`HeroSection.tsx`](src/components/sections/HeroSection.tsx) | flash-fast-coder | ⬜ |
| 43 | Agregar `const { language } = useLanguage()` y `const content = contentMap[language].hero` en el cuerpo del componente | flash-fast-coder | ⬜ |
| 44 | Reemplazar título hardcodeado "COALA-SwarmOPS" (línea 81-83) por `{content.title}` con split para mantener el span cyan | flash-fast-coder | ⬜ |
| 45 | Reemplazar tagline en [`TypewriterText`](src/components/ui/TypewriterText.tsx) (línea 88) de `TAGLINES[0]` por `content.tagline` | flash-fast-coder | ⬜ |
| 46 | Reemplazar descripción hardcodeada (líneas 97-99) por `{content.description}` | flash-fast-coder | ⬜ |
| 47 | Reemplazar CTA "Sponsor en GitHub" (línea 110) por `{content.ctas[0].text}` | flash-fast-coder | ⬜ |
| 48 | Reemplazar CTA "Instalar Ahora" (línea 119) por `{content.ctas[1].text}` | flash-fast-coder | ⬜ |
| 49 | Reemplazar CTA "Ver Modos" (línea 125) por `{content.ctas[2].text}` | flash-fast-coder | ⬜ |
| 50 | Mantener hrefs de CTAs desde `content.ctas[n].href` (ya están en JSON, no cambian con idioma) | flash-fast-coder | ⬜ |
| 51 | Verificar que badge "v2.0 — Swarm 6.7" (línea 77) permanece sin cambios (no es traducible) | qwen-fast-checker | ⬜ |
| 52 | Verificar que TypewriterText recibe `text={content.tagline}` y se reinicia al cambiar idioma | qwen-fast-checker | ⬜ |

---

## Phase 6 — Component Refactor: ProblemSection (Tasks 53–64)

| # | Task | Owner | Status |
|---|------|-------|--------|
| 53 | Eliminar `import content from '../../data/es.json'` en [`ProblemSection.tsx:10`](src/components/sections/ProblemSection.tsx:10) | flash-fast-coder | ⬜ |
| 54 | Eliminar `const problemContent = content.problem` en [`ProblemSection.tsx:12`](src/components/sections/ProblemSection.tsx:12) | flash-fast-coder | ⬜ |
| 55 | Agregar `import { useLanguage, contentMap } from '../../hooks/useLanguage'` | flash-fast-coder | ⬜ |
| 56 | Agregar `const { language } = useLanguage()` y `const content = contentMap[language].problem` | flash-fast-coder | ⬜ |
| 57 | Reemplazar referencias a `problemContent` por `content` en title, description, features | flash-fast-coder | ⬜ |
| 58 | Reemplazar "Static Workflow" hardcodeado (línea 64) por `{content.comparison.staticTitle}` | flash-fast-coder | ⬜ |
| 59 | Reemplazar "Swarm Workflow" hardcodeado (línea 92) por `{content.comparison.swarmTitle}` | flash-fast-coder | ⬜ |
| 60 | Reemplazar 4 bullets de Static Workflow (líneas 69-83) por `content.comparison.staticItems.map()` | flash-fast-coder | ⬜ |
| 61 | Reemplazar 4 bullets de Swarm Workflow (líneas 97-111) por `content.comparison.swarmItems.map()` | flash-fast-coder | ⬜ |
| 62 | Verificar que `iconMap` sigue funcionando con los iconos de `content.features` | qwen-fast-checker | ⬜ |
| 63 | Verificar que `aria-label="Problema"` es aceptable sin traducción (atributo de accesibilidad interna) | qwen-fast-checker | ⬜ |
| 64 | Verificar que la sección renderiza correctamente en los 4 idiomas | qwen-fast-checker | ⬜ |

---

## Phase 7 — Component Refactor: SolutionSection (Tasks 65–72)

| # | Task | Owner | Status |
|---|------|-------|--------|
| 65 | Eliminar `import content from '../../data/es.json'` en [`SolutionSection.tsx:4`](src/components/sections/SolutionSection.tsx:4) | flash-fast-coder | ⬜ |
| 66 | Eliminar `const solutionContent = content.solution` en [`SolutionSection.tsx:6`](src/components/sections/SolutionSection.tsx:6) | flash-fast-coder | ⬜ |
| 67 | Agregar `import { useLanguage, contentMap } from '../../hooks/useLanguage'` | flash-fast-coder | ⬜ |
| 68 | Agregar `const { language } = useLanguage()` y `const content = contentMap[language].solution` | flash-fast-coder | ⬜ |
| 69 | Reemplazar referencias a `solutionContent` por `content` en title, description, features | flash-fast-coder | ⬜ |
| 70 | Verificar que `iconMap` sigue funcionando con features (GitBranch, Shield, Network) | qwen-fast-checker | ⬜ |
| 71 | Verificar que no hay strings hardcodeados restantes en SolutionSection | qwen-fast-checker | ⬜ |
| 72 | Verificar que la sección renderiza correctamente en los 4 idiomas | qwen-fast-checker | ⬜ |

---

## Phase 8 — Component Refactor: HowItWorksSection (Tasks 73–80)

| # | Task | Owner | Status |
|---|------|-------|--------|
| 73 | Eliminar `import content from '../../data/es.json'` en [`HowItWorksSection.tsx:5`](src/components/sections/HowItWorksSection.tsx:5) | flash-fast-coder | ⬜ |
| 74 | Eliminar `const howItWorksContent = content.howItWorks` en [`HowItWorksSection.tsx:7`](src/components/sections/HowItWorksSection.tsx:7) | flash-fast-coder | ⬜ |
| 75 | Agregar `import { useLanguage, contentMap } from '../../hooks/useLanguage'` | flash-fast-coder | ⬜ |
| 76 | Agregar `const { language } = useLanguage()` y `const content = contentMap[language].howItWorks` | flash-fast-coder | ⬜ |
| 77 | Reemplazar referencias a `howItWorksContent` por `content` en title, description, steps | flash-fast-coder | ⬜ |
| 78 | Verificar que `iconMap` (Download, FileText, Rocket) funciona con `content.steps` | qwen-fast-checker | ⬜ |
| 79 | Verificar que no hay strings hardcodeados restantes en HowItWorksSection | qwen-fast-checker | ⬜ |
| 80 | Verificar que la sección renderiza correctamente en los 4 idiomas | qwen-fast-checker | ⬜ |

---

## Phase 9 — Component Refactor: ModesShowcaseSection (Tasks 81–88)

| # | Task | Owner | Status |
|---|------|-------|--------|
| 81 | Eliminar `import content from '../../data/es.json'` en [`ModesShowcaseSection.tsx:4`](src/components/sections/ModesShowcaseSection.tsx:4) | flash-fast-coder | ⬜ |
| 82 | Eliminar `const modesContent = content.modesShowcase` en [`ModesShowcaseSection.tsx:6`](src/components/sections/ModesShowcaseSection.tsx:6) | flash-fast-coder | ⬜ |
| 83 | Agregar `import { useLanguage, contentMap } from '../../hooks/useLanguage'` | flash-fast-coder | ⬜ |
| 84 | Agregar `const { language } = useLanguage()` y `const content = contentMap[language].modesShowcase` | flash-fast-coder | ⬜ |
| 85 | Reemplazar referencias a `modesContent` por `content` en title, description | flash-fast-coder | ⬜ |
| 86 | Reemplazar CTA hardcodeado "Explorar Todos los Modos ({modes.length})" (línea 87) por `{content.ctas[0].text} ({modes.length})` | flash-fast-coder | ⬜ |
| 87 | Verificar que las FlipCards de modos (de `modes.ts`) no requieren i18n — nombres y capabilities son datos internos | qwen-fast-checker | ⬜ |
| 88 | Verificar que la sección renderiza correctamente en los 4 idiomas | qwen-fast-checker | ⬜ |

---

## Phase 10 — Component Refactor: WhoIsItForSection (Tasks 89–96)

| # | Task | Owner | Status |
|---|------|-------|--------|
| 89 | Eliminar `import content from '../../data/es.json'` en [`WhoIsItForSection.tsx:4`](src/components/sections/WhoIsItForSection.tsx:4) | flash-fast-coder | ⬜ |
| 90 | Eliminar `const whoContent = content.whoIsItFor` en [`WhoIsItForSection.tsx:6`](src/components/sections/WhoIsItForSection.tsx:6) | flash-fast-coder | ⬜ |
| 91 | Agregar `import { useLanguage, contentMap } from '../../hooks/useLanguage'` | flash-fast-coder | ⬜ |
| 92 | Agregar `const { language } = useLanguage()` y `const content = contentMap[language].whoIsItFor` | flash-fast-coder | ⬜ |
| 93 | Reemplazar referencias a `whoContent` por `content` en title, description, columns | flash-fast-coder | ⬜ |
| 94 | Verificar que `iconMap` (Code2, GraduationCap, Building2) funciona con `content.columns` | qwen-fast-checker | ⬜ |
| 95 | Verificar que bullets dentro de columns se mapean correctamente desde `content.columns[n].bullets` | qwen-fast-checker | ⬜ |
| 96 | Verificar que la sección renderiza correctamente en los 4 idiomas | qwen-fast-checker | ⬜ |

---

## Phase 11 — Component Refactor: PricingSection (Tasks 97–108)

| # | Task | Owner | Status |
|---|------|-------|--------|
| 97 | Eliminar `import content from '../../data/es.json'` en [`PricingSection.tsx:4`](src/components/sections/PricingSection.tsx:4) | flash-fast-coder | ⬜ |
| 98 | Eliminar `const pricingContent = content.pricing` en [`PricingSection.tsx:6`](src/components/sections/PricingSection.tsx:6) | flash-fast-coder | ⬜ |
| 99 | Agregar `import { useLanguage, contentMap } from '../../hooks/useLanguage'` | flash-fast-coder | ⬜ |
| 100 | Agregar `const { language } = useLanguage()` y `const content = contentMap[language].pricing` | flash-fast-coder | ⬜ |
| 101 | Reemplazar referencias a `pricingContent` por `content` en title, description, tiers | flash-fast-coder | ⬜ |
| 102 | Reemplazar badge "Más popular" hardcodeado (línea 36) por `{content.popularBadge}` | flash-fast-coder | ⬜ |
| 103 | Reemplazar mensaje "100% open source..." hardcodeado (líneas 74-76) por `{content.freeMessage}` | flash-fast-coder | ⬜ |
| 104 | Reemplazar CTA "Hazte Sponsor" hardcodeado (línea 82) por `{content.ctas[0].text}` con icono condicional | flash-fast-coder | ⬜ |
| 105 | Verificar que precios (`$0`, `Desde $0.14`) y features de tiers se renderizan desde `content.tiers` | qwen-fast-checker | ⬜ |
| 106 | Verificar que `tier.cta.icon` condicional (Heart) sigue funcionando con datos de JSON | qwen-fast-checker | ⬜ |
| 107 | Verificar que el tier highlighted (`ring-2 ring-coala-purple/50`) se aplica correctamente | qwen-fast-checker | ⬜ |
| 108 | Verificar que la sección renderiza correctamente en los 4 idiomas | qwen-fast-checker | ⬜ |

---

## Phase 12 — Component Refactor: CommunitySection (Tasks 109–120)

| # | Task | Owner | Status |
|---|------|-------|--------|
| 109 | Eliminar `import content from '../../data/es.json'` en [`CommunitySection.tsx:4`](src/components/sections/CommunitySection.tsx:4) | flash-fast-coder | ⬜ |
| 110 | Eliminar `const communityContent = content.community` en [`CommunitySection.tsx:6`](src/components/sections/CommunitySection.tsx:6) | flash-fast-coder | ⬜ |
| 111 | Agregar `import { useLanguage, contentMap } from '../../hooks/useLanguage'` | flash-fast-coder | ⬜ |
| 112 | Agregar `const { language } = useLanguage()` y `const content = contentMap[language].community` | flash-fast-coder | ⬜ |
| 113 | Reemplazar referencias a `communityContent` por `content` en title, description | flash-fast-coder | ⬜ |
| 114 | Reemplazar título "COALA-SwarmOPS v2" hardcodeado (línea 34) por `{content.repos[0].title}` | flash-fast-coder | ⬜ |
| 115 | Reemplazar descripción v2 hardcodeada (líneas 35-36) por `{content.repos[0].description}` | flash-fast-coder | ⬜ |
| 116 | Reemplazar CTA "GitHub (v2)" hardcodeado (línea 56) por `{content.repos[0].cta}` | flash-fast-coder | ⬜ |
| 117 | Reemplazar título "COALA-SwarmOPS v1" hardcodeado (línea 65) por `{content.repos[1].title}` | flash-fast-coder | ⬜ |
| 118 | Reemplazar descripción v1 hardcodeada (líneas 66-67) por `{content.repos[1].description}` | flash-fast-coder | ⬜ |
| 119 | Reemplazar CTA "GitHub (v1)" hardcodeado (línea 87) por `{content.repos[1].cta}` | flash-fast-coder | ⬜ |
| 120 | Verificar que la sección renderiza correctamente en los 4 idiomas | qwen-fast-checker | ⬜ |

---

## Phase 13 — Component Refactor: Footer (Tasks 121–128)

| # | Task | Owner | Status |
|---|------|-------|--------|
| 121 | Agregar `import { useLanguage, contentMap } from '../../hooks/useLanguage'` en [`Footer.tsx`](src/components/layout/Footer.tsx) | flash-fast-coder | ⬜ |
| 122 | Agregar `const { language } = useLanguage()` y `const content = contentMap[language].footer` | flash-fast-coder | ⬜ |
| 123 | Reemplazar copyright hardcodeado "© 2026 COALA-SwarmOPS — Oficina Digital CL" (línea 14) por `{content.copyright}` | flash-fast-coder | ⬜ |
| 124 | Reemplazar mensaje "Hecho con ❤️ para la comunidad open source" (líneas 17-23) por texto desde `content` (agregar clave `madeWithLove` si no existe) | flash-fast-coder | ⬜ |
| 125 | Reemplazar links del footer: iterar sobre `content.links` en lugar de hardcodear el link de GitHub (líneas 28-33) | flash-fast-coder | ⬜ |
| 126 | Agregar clave `footer.madeWithLove` a los 4 JSON con el mensaje "Hecho con {heart} para la comunidad open source" | flash-fast-coder | ⬜ |
| 127 | Verificar que `EXTERNAL_LINK_PROPS` se aplica correctamente a links dinámicos | qwen-fast-checker | ⬜ |
| 128 | Verificar que Footer renderiza correctamente en los 4 idiomas | qwen-fast-checker | ⬜ |

---

## Phase 14 — Verificación Cross-Idioma & Regresión (Tasks 129–140)

| # | Task | Owner | Status |
|---|------|-------|--------|
| 129 | Verificar HeroSection en ES: todos los textos en español, TypewriterText funcional | qwen-fast-checker | ⬜ |
| 130 | Verificar HeroSection en EN: todos los textos en inglés, TypewriterText funcional | qwen-fast-checker | ⬜ |
| 131 | Verificar HeroSection en ZH: todos los textos en chino simplificado, TypewriterText funcional | qwen-fast-checker | ⬜ |
| 132 | Verificar HeroSection en ZH-TW: todos los textos en chino tradicional, TypewriterText funcional | qwen-fast-checker | ⬜ |
| 133 | Verificar ProblemSection: comparación Static/Swarm traducida en los 4 idiomas | qwen-fast-checker | ⬜ |
| 134 | Verificar PricingSection: badge "Más popular" y freeMessage traducidos en los 4 idiomas | qwen-fast-checker | ⬜ |
| 135 | Verificar CommunitySection: repos titles/descriptions/CTAs traducidos en los 4 idiomas | qwen-fast-checker | ⬜ |
| 136 | Verificar Footer: copyright y links traducidos en los 4 idiomas | qwen-fast-checker | ⬜ |
| 137 | Navegar secuencialmente ES → EN → ZH → ZH-TW → ES verificando que 0 textos permanecen en español tras cambiar de ES | evidence-checker | ⬜ |
| 138 | Verificar que NO hay imports de `'../../data/es.json'` en ningún componente de sección | evidence-checker | ⬜ |
| 139 | Verificar que NO hay strings hardcodeados en español en JSX de los 9 componentes | evidence-checker | ⬜ |
| 140 | Verificar que el build no tiene warnings de TypeScript relacionados con tipos de contentMap | qwen-fast-checker | ⬜ |

---

## Phase 15 — Build, Test & Merge (Tasks 141–148)

| # | Task | Owner | Status |
|---|------|-------|--------|
| 141 | Ejecutar `npm run build` — debe completar sin errores | flash-fast-coder | ⬜ |
| 142 | Verificar que el bundle size no aumenta más de 2KB (solo nuevas claves JSON, sin nuevos archivos) | evidence-checker | ⬜ |
| 143 | Ejecutar tests existentes — deben pasar sin modificaciones (tests de useLanguage, LanguageSwitcher) | test-engineer | ⬜ |
| 144 | Ejecutar `npm audit` — verificar que no hay nuevas vulnerabilidades | security-auditor | ⬜ |
| 145 | Verificar Lighthouse: Accessibility ≥95, SEO ≥95, Best Practices = 100 en los 4 idiomas | evidence-checker | ⬜ |
| 146 | Verificar que no hay regresión en FEAT-002 (zh-TW sigue funcionando con todos los textos) | evidence-checker | ⬜ |
| 147 | Ejecutar `npm run dev` y verificar visualmente los 9 componentes en los 4 idiomas | test-engineer | ⬜ |
| 148 | Merge de `feat/feat-003-connect-i18n` → `master` con commit Conventional Commits: `feat(i18n): connect all section components to contentMap` | senior | ⬜ |

---

## Task Legend

| Owner | Tier | Rol |
|-------|------|-----|
| **flash-fast-coder** | T0.5 · DS V4 Flash | Implementación de cambios (≤100 LOC por archivo), agregar claves JSON |
| **qwen-fast-checker** | T0 · Local | Verificación de sintaxis, estructura, imports, regresiones visuales |
| **test-engineer** | T2 · Kimi K2.5 | Validación de tests existentes, test manual cross-idioma |
| **evidence-checker** | T2 · Kimi K2.5 | Verificación de evidencia: 0 hardcodeos, 0 imports de es.json, diff estructural |
| **security-auditor** | T2 · Kimi K2.5 | npm audit, verificación de seguridad |
| **senior** | T1 · DS V4 Pro | Git operations: branch, merge |
