# Tasks — FEAT-002: Soporte Chino Tradicional (ZH-TW)

**Spec Version:** 6.7  
**Feature ID:** FEAT-002  
**Slug:** feat-002-i18n-zhtw  
**Total Tasks:** 136  
**Story Points:** 5  
**Tier Sugerido:** T0.5

---

## Phase 0 — Branch & Environment Setup (Tasks 1–8)

| # | Task | Owner | Status |
|---|------|-------|--------|
| 1 | Crear branch Git `feat/feat-002-i18n-zhtw` desde `master` | senior | ⬜ |
| 2 | Verificar que `npm run dev` arranca sin errores en el branch | qwen-fast-checker | ⬜ |
| 3 | Verificar que los 3 idiomas existentes (es/en/zh) funcionan correctamente antes de modificar | qwen-fast-checker | ⬜ |
| 4 | Hacer backup mental del estado actual de [`useLanguage.tsx`](src/hooks/useLanguage.tsx) (anotar hash/líneas) | evidence-checker | ⬜ |
| 5 | Hacer backup mental del estado actual de [`LanguageSwitcher.tsx`](src/components/layout/LanguageSwitcher.tsx) | evidence-checker | ⬜ |
| 6 | Verificar que [`es.json`](src/data/es.json) tiene 144 líneas y estructura completa como referencia | qwen-fast-checker | ⬜ |
| 7 | Verificar que [`zh.json`](src/data/zh.json) existe y tiene estructura idéntica a [`es.json`](src/data/es.json) | qwen-fast-checker | ⬜ |
| 8 | Leer [`design.md`](docs/specs/feat-002-i18n-zhtw/design.md) para entender arquitectura objetivo | flash-fast-coder | ⬜ |

---

## Phase 1 — zh-TW.json: Navbar & Hero Section (Tasks 9–20)

| # | Task | Owner | Status |
|---|------|-------|--------|
| 9 | Crear archivo [`src/data/zh-TW.json`](src/data/zh-TW.json) con `{}` vacío | flash-fast-coder | ⬜ |
| 10 | Traducir `navbar.logo` → mantener "COALA SwarmOPS" (nombre propio, sin traducción) | flash-fast-coder | ⬜ |
| 11 | Traducir `navbar.links[0]` → "首頁" (Inicio → 首頁) | flash-fast-coder | ⬜ |
| 12 | Traducir `navbar.links[1]` → "運作方式" (Cómo Funciona → 運作方式) | flash-fast-coder | ⬜ |
| 13 | Traducir `navbar.links[2]` → "模式" (Modos → 模式) | flash-fast-coder | ⬜ |
| 14 | Traducir `navbar.links[3]` → "價格" (Precios → 價格) | flash-fast-coder | ⬜ |
| 15 | Traducir `navbar.links[4]` → "社群" (Comunidad → 社群) | flash-fast-coder | ⬜ |
| 16 | Traducir `hero.title` → mantener "COALA-SwarmOPS" (nombre propio) | flash-fast-coder | ⬜ |
| 17 | Traducir `hero.subtitle` → "AI 智慧體生態系統" (Ecosistema de Agentes IA → AI 智慧體生態系統) | flash-fast-coder | ⬜ |
| 18 | Traducir `hero.description` → texto completo con terminología tradicional (軟體, 資料, 設定) | flash-fast-coder | ⬜ |
| 19 | Traducir `hero.tagline` → "停止為單一智慧體付費。統籌所有。" | flash-fast-coder | ⬜ |
| 20 | Traducir `hero.ctas[0,1,2]` → "GitHub 贊助", "立即安裝", "文件" | flash-fast-coder | ⬜ |

---

## Phase 2 — zh-TW.json: Problem & Solution Sections (Tasks 21–32)

| # | Task | Owner | Status |
|---|------|-------|--------|
| 21 | Traducir `problem.title` → "厭倦了靜態 AI 智慧體？" | flash-fast-coder | ⬜ |
| 22 | Traducir `problem.subtitle` → "傳統開發的問題" | flash-fast-coder | ⬜ |
| 23 | Traducir `problem.description` → texto completo con terminología tradicional | flash-fast-coder | ⬜ |
| 24 | Traducir `problem.features[0]` (Zap) → "沒有協調" + descripción | flash-fast-coder | ⬜ |
| 25 | Traducir `problem.features[1]` (DollarSign) → "隱藏成本" + descripción | flash-fast-coder | ⬜ |
| 26 | Traducir `problem.features[2]` (Clock) → "時間流失" + descripción | flash-fast-coder | ⬜ |
| 27 | Traducir `solution.title` → "為你工作的生態系統" | flash-fast-coder | ⬜ |
| 28 | Traducir `solution.subtitle` → "智慧多智慧體協調" | flash-fast-coder | ⬜ |
| 29 | Traducir `solution.description` → texto completo con terminología tradicional | flash-fast-coder | ⬜ |
| 30 | Traducir `solution.features[0]` (GitBranch, v6.0) → "v6.0 — 自訂模式" + descripción | flash-fast-coder | ⬜ |
| 31 | Traducir `solution.features[1]` (Shield, v6.5) → "v6.5 — 熔斷器" + descripción | flash-fast-coder | ⬜ |
| 32 | Traducir `solution.features[2]` (Network, v6.7) → "v6.7 — CoALA 蜂群" + descripción | flash-fast-coder | ⬜ |

---

## Phase 3 — zh-TW.json: HowItWorks & ModesShowcase Sections (Tasks 33–44)

| # | Task | Owner | Status |
|---|------|-------|--------|
| 33 | Traducir `howItWorks.title` → "生態系統如何運作" | flash-fast-coder | ⬜ |
| 34 | Traducir `howItWorks.subtitle` → "三步馴服複雜性" | flash-fast-coder | ⬜ |
| 35 | Traducir `howItWorks.description` → texto completo con enlace a guía de instalación | flash-fast-coder | ⬜ |
| 36 | Traducir `howItWorks.steps[0]` (Download, Instala) → "安裝" + descripción | flash-fast-coder | ⬜ |
| 37 | Traducir `howItWorks.steps[1]` (FileText, Describe) → "描述你的功能" + descripción | flash-fast-coder | ⬜ |
| 38 | Traducir `howItWorks.steps[2]` (Rocket, Ejecuta) → "生態系統執行" + descripción | flash-fast-coder | ⬜ |
| 39 | Traducir `howItWorks.ctas[0]` → "立即開始" | flash-fast-coder | ⬜ |
| 40 | Traducir `modesShowcase.title` → "19 種模式。一個生態系統。" | flash-fast-coder | ⬜ |
| 41 | Traducir `modesShowcase.subtitle` → "每個智慧體都是其任務專家" | flash-fast-coder | ⬜ |
| 42 | Traducir `modesShowcase.description` → texto completo | flash-fast-coder | ⬜ |
| 43 | Traducir `modesShowcase.ctas[0]` → "探索所有模式" | flash-fast-coder | ⬜ |
| 44 | Traducir `solution.ctas[0]` → "查看可用模式" | flash-fast-coder | ⬜ |

---

## Phase 4 — zh-TW.json: WhoIsItFor & Pricing Sections (Tasks 45–56)

| # | Task | Owner | Status |
|---|------|-------|--------|
| 45 | Traducir `whoIsItFor.title` → "COALA-SwarmOPS 適合誰？" | flash-fast-coder | ⬜ |
| 46 | Traducir `whoIsItFor.subtitle` → "從初學者到企業" | flash-fast-coder | ⬜ |
| 47 | Traducir `whoIsItFor.description` → texto completo con enlace al README | flash-fast-coder | ⬜ |
| 48 | Traducir `whoIsItFor.columns[0]` (Developers) → "開發者" + descripción + 4 bullets | flash-fast-coder | ⬜ |
| 49 | Traducir `whoIsItFor.columns[1]` (Beginners) → "初學者" + descripción + 4 bullets | flash-fast-coder | ⬜ |
| 50 | Traducir `whoIsItFor.columns[2]` (Enterprises) → "企業" + descripción + 4 bullets | flash-fast-coder | ⬜ |
| 51 | Traducir `pricing.title` → "免費。開源。永久。" | flash-fast-coder | ⬜ |
| 52 | Traducir `pricing.subtitle` → "只需支付你消耗的 tokens" | flash-fast-coder | ⬜ |
| 53 | Traducir `pricing.description` → texto completo | flash-fast-coder | ⬜ |
| 54 | Traducir `pricing.tiers[0]` (Modelos Locales) → "本地模型" + fields | flash-fast-coder | ⬜ |
| 55 | Traducir `pricing.tiers[1]` (Modelos Cloud) → "雲端模型 (T0.5–T3)" + fields | flash-fast-coder | ⬜ |
| 56 | Traducir `pricing.ctas[0]` → "成為贊助者" | flash-fast-coder | ⬜ |

---

## Phase 5 — zh-TW.json: Community, Footer & JSON Validation (Tasks 57–68)

| # | Task | Owner | Status |
|---|------|-------|--------|
| 57 | Traducir `community.title` → "加入生態系統" | flash-fast-coder | ⬜ |
| 58 | Traducir `community.subtitle` → "開源社群" | flash-fast-coder | ⬜ |
| 59 | Traducir `community.description` → texto completo | flash-fast-coder | ⬜ |
| 60 | Traducir `community.ctas[0]` → mantener "COALA SwarmOPS v2" (nombre propio) | flash-fast-coder | ⬜ |
| 61 | Traducir `community.ctas[1]` → mantener "COALA SwarmOPS v1" (nombre propio) | flash-fast-coder | ⬜ |
| 62 | Traducir `footer.copyright` → "© 2026 COALA-SwarmOPS — Oficina Digital CL。保留所有權利。" | flash-fast-coder | ⬜ |
| 63 | Traducir `footer.links[0]` → mantener "GitHub" | flash-fast-coder | ⬜ |
| 64 | Traducir `footer.links[1]` → "贊助者" | flash-fast-coder | ⬜ |
| 65 | Traducir `footer.links[2]` → "文件" | flash-fast-coder | ⬜ |
| 66 | Validar que [`zh-TW.json`](src/data/zh-TW.json) tiene estructura JSON idéntica a [`es.json`](src/data/es.json) (mismas keys, mismos tipos) | qwen-fast-checker | ⬜ |
| 67 | Validar que [`zh-TW.json`](src/data/zh-TW.json) no contiene caracteres simplificados accidentalmente | evidence-checker | ⬜ |
| 68 | Validar que todas las claves requeridas existen (diff estructural con [`es.json`](src/data/es.json)) | qwen-fast-checker | ⬜ |

---

## Phase 6 — Type System Updates (Tasks 69–78)

| # | Task | Owner | Status |
|---|------|-------|--------|
| 69 | Extender `Language` type en [`useLanguage.tsx:4`](src/hooks/useLanguage.tsx:4) para incluir `'zh-TW'` | flash-fast-coder | ⬜ |
| 70 | Extender array `LANGUAGES` en [`useLanguage.tsx:15`](src/hooks/useLanguage.tsx:15) para incluir `'zh-TW'` | flash-fast-coder | ⬜ |
| 71 | Verificar que `isValidLanguage()` en [`useLanguage.tsx:17`](src/hooks/useLanguage.tsx:17) acepta `'zh-TW'` automáticamente | qwen-fast-checker | ⬜ |
| 72 | Agregar import de [`zh-TW.json`](src/data/zh-TW.json) en [`useLanguage.tsx`](src/hooks/useLanguage.tsx) | flash-fast-coder | ⬜ |
| 73 | Extender `contentMap` en [`useLanguage.tsx:35`](src/hooks/useLanguage.tsx:35) para incluir `'zh-TW': zhTWContent` | flash-fast-coder | ⬜ |
| 74 | Agregar tipado `Record<Language, ...>` verificando que `zh-TW` no falte | flash-fast-coder | ⬜ |
| 75 | Extender `FLAGS` record en [`LanguageSwitcher.tsx:4`](src/components/layout/LanguageSwitcher.tsx:4) con `'zh-TW': '🇹🇼'` | flash-fast-coder | ⬜ |
| 76 | Extender `LABELS` record en [`LanguageSwitcher.tsx:10`](src/components/layout/LanguageSwitcher.tsx:10) con `'zh-TW': '繁體中文'` | flash-fast-coder | ⬜ |
| 77 | Verificar que TypeScript compila sin errores tras cambios de tipos | qwen-fast-checker | ⬜ |
| 78 | Extender tipo `Locale` en [`src/types/index.ts:2`](src/types/index.ts:2) si se usa en otros lugares | flash-fast-coder | ⬜ |

---

## Phase 7 — Hook Layer: detectLanguage & HTML Lang (Tasks 79–88)

| # | Task | Owner | Status |
|---|------|-------|--------|
| 79 | Actualizar `detectLanguage()` en [`useLanguage.tsx:21`](src/hooks/useLanguage.tsx:21) para detectar `zh-TW` del navegador | flash-fast-coder | ⬜ |
| 80 | Agregar lógica: si `navigator.language` es `zh-TW` → retornar `'zh-TW'` | flash-fast-coder | ⬜ |
| 81 | Agregar lógica: si `navigator.language` es `zh-HK` → retornar `'zh-TW'` | flash-fast-coder | ⬜ |
| 82 | Mantener lógica existente: si `navigator.language` empieza con `zh` (no TW/HK) → retornar `'zh'` | flash-fast-coder | ⬜ |
| 83 | Actualizar `useEffect` de `document.documentElement.lang` en [`useLanguage.tsx:49`](src/hooks/useLanguage.tsx:49) para mapear `zh-TW` → `'zh-TW'` | flash-fast-coder | ⬜ |
| 84 | Verificar que caso `zh` sigue mapeando a `'zh-CN'` (sin cambios) | qwen-fast-checker | ⬜ |
| 85 | Verificar que casos `es` y `en` siguen mapeando a sí mismos (sin cambios) | qwen-fast-checker | ⬜ |
| 86 | Agregar debounce de 150ms en `setLanguage` para prevenir race conditions (edge case EC-03) | flash-fast-coder | ⬜ |
| 87 | Implementar `FALLBACK_MAP` para resolución zh-TW → zh cuando falten claves | flash-fast-coder | ⬜ |
| 88 | Agregar `console.warn` condicional (`import.meta.env.DEV`) cuando se usa fallback | flash-fast-coder | ⬜ |

---

## Phase 8 — Component Layer: LanguageSwitcher (Tasks 89–98)

| # | Task | Owner | Status |
|---|------|-------|--------|
| 89 | Verificar que [`LanguageSwitcher`](src/components/layout/LanguageSwitcher.tsx) itera sobre `Object.keys(FLAGS)` (automágicamente incluye zh-TW) | qwen-fast-checker | ⬜ |
| 90 | Verificar que el orden visual de botones es: ES, EN, 中文, 繁體中文 | qwen-fast-checker | ⬜ |
| 91 | Verificar que el botón zh-TW usa las clases de estado activo correctas (`bg-coala-cyan/20`, `border-coala-cyan/50`) | qwen-fast-checker | ⬜ |
| 92 | Verificar que `aria-label` y `title` del botón zh-TW son "繁體中文" | evidence-checker | ⬜ |
| 93 | Verificar que `role="radio"` y `aria-checked` funcionan para zh-TW | evidence-checker | ⬜ |
| 94 | Probar que el botón zh-TW es clickeable y dispara `setLanguage('zh-TW')` | test-engineer | ⬜ |
| 95 | Verificar que en mobile (<768px) la etiqueta "繁體中文" se muestra correctamente en el menú hamburguesa | qwen-fast-checker | ⬜ |
| 96 | Verificar que en desktop (≥768px) la etiqueta "繁體中文" es visible con la clase `sm:inline` | qwen-fast-checker | ⬜ |
| 97 | Verificar que el `MobileMenu` incluye el [`LanguageSwitcher`](src/components/layout/LanguageSwitcher.tsx) y muestra las 4 opciones | qwen-fast-checker | ⬜ |
| 98 | Verificar que no hay regresión en los botones ES, EN, ZH existentes | test-engineer | ⬜ |

---

## Phase 9 — CSS, Font Stack & Accessibility (Tasks 99–108)

| # | Task | Owner | Status |
|---|------|-------|--------|
| 99 | Agregar variable CSS `--font-zh-tw` en [`src/index.css`](src/index.css) con font stack para chino tradicional | flash-fast-coder | ⬜ |
| 100 | Agregar regla `html[lang="zh-TW"] body { font-family: var(--font-zh-tw); }` en [`src/index.css`](src/index.css) | flash-fast-coder | ⬜ |
| 101 | Agregar `word-break: keep-all` para `html[lang="zh-TW"]` en [`src/index.css`](src/index.css) | flash-fast-coder | ⬜ |
| 102 | Agregar `overflow-wrap: break-word` para `html[lang="zh-TW"]` en [`src/index.css`](src/index.css) | flash-fast-coder | ⬜ |
| 103 | Verificar que `"Noto Sans TC"` está en el font stack como primera opción | qwen-fast-checker | ⬜ |
| 104 | Verificar que `system-ui` es el fallback final del font stack | qwen-fast-checker | ⬜ |
| 105 | Probar visualmente que los caracteres tradicionales se renderizan correctamente en Chrome | test-engineer | ⬜ |
| 106 | Probar visualmente que los caracteres tradicionales se renderizan correctamente en Firefox | test-engineer | ⬜ |
| 107 | Probar visualmente que los caracteres tradicionales se renderizan correctamente en Safari | test-engineer | ⬜ |
| 108 | Ejecutar Lighthouse audit de accesibilidad con idioma zh-TW activo (target ≥95) | evidence-checker | ⬜ |

---

## Phase 10 — Unit Testing (Tasks 109–118)

| # | Task | Owner | Status |
|---|------|-------|--------|
| 109 | Test unitario: `detectLanguage()` retorna `'zh-TW'` cuando localStorage tiene `'zh-TW'` | test-engineer | ⬜ |
| 110 | Test unitario: `detectLanguage()` retorna `'zh-TW'` cuando `navigator.language` es `'zh-TW'` | test-engineer | ⬜ |
| 111 | Test unitario: `detectLanguage()` retorna `'zh-TW'` cuando `navigator.language` es `'zh-HK'` | test-engineer | ⬜ |
| 112 | Test unitario: `detectLanguage()` retorna `'zh'` cuando `navigator.language` es `'zh-CN'` | test-engineer | ⬜ |
| 113 | Test unitario: `detectLanguage()` retorna `'es'` cuando localStorage está corrupto | test-engineer | ⬜ |
| 114 | Test unitario: `isValidLanguage('zh-TW')` retorna `true` | test-engineer | ⬜ |
| 115 | Test unitario: `isValidLanguage('invalid')` retorna `false` | test-engineer | ⬜ |
| 116 | Test unitario: `setLanguage('zh-TW')` actualiza estado y persiste en localStorage | test-engineer | ⬜ |
| 117 | Test unitario: `document.documentElement.lang` es `'zh-TW'` cuando language es `'zh-TW'` | test-engineer | ⬜ |
| 118 | Test unitario: `contentMap['zh-TW']` es accesible y tiene las claves esperadas | test-engineer | ⬜ |

---

## Phase 11 — Integration Testing (Tasks 119–128)

| # | Task | Owner | Status |
|---|------|-------|--------|
| 119 | Test integración: [`LanguageSwitcher`](src/components/layout/LanguageSwitcher.tsx) renderiza 4 botones (ES, EN, 中文, 繁體中文) | test-engineer | ⬜ |
| 120 | Test integración: Click en botón zh-TW actualiza todos los textos de la página | test-engineer | ⬜ |
| 121 | Test integración: Cambiar de zh-TW → es → zh-TW mantiene consistencia | test-engineer | ⬜ |
| 122 | Test integración: Recargar página con `localStorage['coala-language'] = 'zh-TW'` muestra zh-TW | test-engineer | ⬜ |
| 123 | Test integración: No hay flash de idioma anterior al cargar con zh-TW en localStorage | test-engineer | ⬜ |
| 124 | Test integración: Fallback zh-TW → zh funciona cuando falta una clave en zh-TW.json | test-engineer | ⬜ |
| 125 | Test integración: Mobile menu muestra las 4 opciones de idioma correctamente | test-engineer | ⬜ |
| 126 | Test integración: Cambio rápido de idioma (5 clicks en <500ms) no causa race condition | test-engineer | ⬜ |
| 127 | Test integración: [`TypewriterText`](src/components/ui/TypewriterText.tsx) se reinicia correctamente al cambiar a zh-TW | test-engineer | ⬜ |
| 128 | Test integración: [`HeroSection`](src/components/sections/HeroSection.tsx) renderiza correctamente con contenido zh-TW | test-engineer | ⬜ |

---

## Phase 12 — E2E & Final Validation (Tasks 129–136)

| # | Task | Owner | Status |
|---|------|-------|--------|
| 129 | Test E2E: Flujo completo — visitante con `navigator.language = 'zh-TW'` ve la página en chino tradicional | test-engineer | ⬜ |
| 130 | Test E2E: Flujo completo — usuario cambia de es → zh-TW, navega por todas las secciones, todos los textos en tradicional | test-engineer | ⬜ |
| 131 | Test E2E: Flujo completo — usuario en mobile selecciona zh-TW desde menú hamburguesa | test-engineer | ⬜ |
| 132 | Validar que `npm run build` completa sin errores con el nuevo archivo zh-TW.json | qwen-fast-checker | ⬜ |
| 133 | Validar que el bundle size no aumenta más de 6KB (gzipped) con zh-TW.json | evidence-checker | ⬜ |
| 134 | Validar que los 3 idiomas existentes (es, en, zh) siguen funcionando sin regresión | evidence-checker | ⬜ |
| 135 | Ejecutar `npm audit` para verificar que no hay nuevas vulnerabilidades | security-auditor | ⬜ |
| 136 | Merge de `feat/feat-002-i18n-zhtw` → `master` con commit Conventional Commits | senior | ⬜ |

---

## Task Legend

| Owner | Tier | Rol |
|-------|------|-----|
| **flash-fast-coder** | T0.5 · DS V4 Flash | Code generation (≤100 LOC), traducciones |
| **qwen-fast-checker** | T0 · Local | Lint/syntax/validation rápido |
| **test-engineer** | T2 · Kimi K2.5 | TDD validation, test review |
| **evidence-checker** | T2 · Kimi K2.5 | Evidence verification, diff check |
| **security-auditor** | T2 · Kimi K2.5 | Security audit |
| **senior** | T1 · DS V4 Pro | Git operations, branch, merge |
