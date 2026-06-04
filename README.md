# COALA-SwarmOPS Landing Page v2

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222?logo=github)](https://oficinadigitalcl.github.io/Landingpage-COALA-SwarmOPS-V2/)

> **Parte del ecosistema COALA-SwarmOPS** — Landing page oficial del sistema de orquestación multi-agente para IA.
>
> 🌐 **Live:** [oficinadigitalcl.github.io/Landingpage-COALA-SwarmOPS-V2](https://oficinadigitalcl.github.io/Landingpage-COALA-SwarmOPS-V2/)

---

## 🎯 ¿Qué es COALA-SwarmOPS?

**COALA-SwarmOPS** es un ecosistema de orquestación de agentes de inteligencia artificial que coordina múltiples modelos especializados (T0 a T3) en un único flujo de trabajo. Esta landing page es la puerta de entrada al proyecto, explicando sus beneficios, modos disponibles y cómo empezar.

**COALA** = **Co**gnitive **A**rchitecture for **L**earning **A**gents (arquitectura cognitiva para agentes de aprendizaje).

---

## 🚀 Tecnologías

| Capa | Tecnología | Propósito |
|------|-----------|-----------|
| **Framework** | React 18.3 + TypeScript 5.6 | UI declarativa tipada |
| **Build Tool** | Vite 5.4 | Bundling rápido, HMR, GitHub Pages ready |
| **Styling** | Tailwind CSS 3.4 | Utility-first, dark mode (`class`), responsive |
| **Animaciones** | Framer Motion | Transiciones declarativas, scroll reveal |
| **3D / Particles** | Three.js + @react-three/fiber | Hero visual swarm, WebGL con fallback Canvas 2D |
| **Iconografía** | Lucide React | Tree-shakeable, sin CDN |
| **i18n** | Custom hook `useLanguage` + JSON | ES / EN / ZH (Simplificado) / ZH-TW (Tradicional) |
| **Testing** | Vitest 2.1 + jsdom | Unit + Integration tests |
| **Deploy** | GitHub Actions + GitHub Pages | CI/CD automatizado |

---

## 📁 Estructura del Proyecto

```
landingpage_Coala-swarmOPS-v2/
├── public/                    # Assets estáticos
│   ├── favicon.svg
│   ├── og-image.svg           # Social share (1200×630)
│   ├── robots.txt
│   ├── sitemap.xml
│   └── screenshots/
├── src/
│   ├── components/
│   │   ├── layout/            # Navbar, Footer, LanguageSwitcher, ThemeToggle
│   │   ├── sections/          # Hero, Problem, Solution, HowItWorks, etc.
│   │   └── ui/                # Primitives: GlowButton, FlipCard, TypewriterText
│   ├── data/                  # Traducciones i18n
│   │   ├── es.json            # Español (default)
│   │   ├── en.json            # Inglés
│   │   ├── zh.json            # Chino Simplificado (简体中文)
│   │   ├── zh-TW.json         # Chino Tradicional (繁體中文)
│   │   └── modes.ts           # 19 swarm modes tipados
│   ├── hooks/                 # Custom React hooks
│   │   ├── useLanguage.tsx    # Context provider i18n
│   │   ├── useTheme.ts        # Dark / Light / System
│   │   ├── useParticleSwarm.ts # Canvas 2D particle system
│   │   └── ...
│   ├── lib/                   # Utilidades
│   │   ├── utils.ts           # cn() helper (clsx + tailwind-merge)
│   │   ├── env.ts             # Validación de variables de entorno
│   │   ├── csp.ts             # Content Security Policy
│   │   └── sanitize.ts        # DOMPurify wrapper
│   ├── types/                 # Tipos globales TypeScript
│   ├── App.tsx                # Entry point con LanguageProvider
│   ├── main.tsx               # React DOM root
│   └── index.css              # Tailwind directives + custom vars
├── docs/
│   ├── swarm-context.md       # Memoria del swarm (features, errores, patrones)
│   ├── specs/                 # Artefactos de especificación por feature
│   └── prompt_traduccion_coala_swarmops.md
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md                  # Este archivo
```

---

## 🛡️ Seguridad

| Medida | Implementación |
|--------|---------------|
| **CSP** | Meta tag + Vite plugin; hash de scripts inline |
| **No inline scripts** | Todo via Vite, scripts hasheados automáticamente |
| **Variables de entorno** | `import.meta.env` con validación Zod en [`src/lib/env.ts`](src/lib/env.ts) |
| **Sanitización** | DOMPurify para cualquier contenido HTML dinámico |
| **HTTPS only** | GitHub Pages forza HTTPS |
| **SRI** | Comentarios de integridad en build (preparado) |
| **robots.txt + sitemap.xml** | Generados en build time |
| **Sin .env expuesto** | `.env.example` como template, `.env` en `.gitignore` |

> 📄 Ver [`SECURITY.md`](SECURITY.md) para detalles completos de CSP y manejo de entornos.

---

## 🎨 Arquitectura

### Patrones de Diseño

| Patrón | Ubicación | Descripción |
|--------|-----------|-------------|
| **Barrel Exports** | `src/components/index.ts`, `src/hooks/index.ts` | Reduce verbosidad de imports |
| **Lazy Loading** | `App.tsx` con `React.lazy` | Mantiene bundle inicial < 500 KB |
| **Custom Hooks** | `src/hooks/` | Lógica de animaciones e i18n separada de UI |
| **JSON Data Layer** | `src/data/{es,en,zh,zh-TW}.json` | Idioma-agnóstico, fácil de extender |
| **Canvas 2D Fallback** | `HeroSection.tsx` | WebGL no disponible → Canvas swarm |
| **Reduced Motion** | `useMediaQuery.ts` + Framer Motion | Respeta `prefers-reduced-motion` |

### Flujo de Datos i18n

```
User clicks 🇹🇼
    ↓
LanguageSwitcher.onClick() → setLanguage('zh-TW')
    ↓
useLanguage.tsx → setLanguageState('zh-TW')
    ↓
localStorage.setItem('coala-language', 'zh-TW')  [debounced 150ms]
    ↓
document.documentElement.lang = 'zh-TW'
    ↓
Component re-renders with contentMap['zh-TW']
    ↓
Texts update from zh-TW.json
```

---

## 🌍 Internacionalización (i18n)

| Idioma | Código | Bandera | Estado |
|--------|--------|---------|--------|
| Español | `es` | 🇪🇸 | ✅ Default |
| English | `en` | 🇬🇧 | ✅ Completo |
| 简体中文 | `zh` | 🇨🇳 | ✅ Completo |
| 繁體中文 | `zh-TW` | 🇹🇼 | ✅ Completo |

**Características:**
- Auto-detección via `navigator.language`
- Persistencia en `localStorage`
- Debounce 150ms en escritura de localStorage
- Fallback: `zh-TW` → `zh` → `es` si faltan claves
- Font stack específico para chino: `Noto Sans TC`, `Microsoft JhengHei`, `PingFang TC`

---

## 🏗️ Instalación y Desarrollo

```bash
# Clonar
git clone https://github.com/oficinadigitalCL/Landingpage-COALA-SwarmOPS-V2.git
cd Landingpage-COALA-SwarmOPS-V2

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Ejecutar tests
npm test

# Preview del build
npm run preview
```

---

## 🧪 Testing

| Tipo | Framework | Ubicación | Cantidad |
|------|-----------|-----------|----------|
| Unit | Vitest + jsdom | `src/hooks/__tests__/` | 17 tests |
| Integration | Vitest + jsdom | `src/components/layout/__tests__/` | 9 tests |
| Manual | Navegador | — | E2E visual |

```bash
# Todos los tests
npm test

# Con watch mode
npm test -- --watch

# Con coverage
npm test -- --coverage
```

---

## 📊 Performance Budgets

| Métrica | Objetivo | Estado |
|---------|----------|--------|
| Bundle inicial | < 500 KB | ⏳ Pendiente audit |
| Lighthouse Performance | ≥ 90 | ⏳ Pendiente |
| Lighthouse Accessibility | ≥ 95 | ⏳ Pendiente |
| Lighthouse Best Practices | 100 | ⏳ Pendiente |
| Lighthouse SEO | ≥ 95 | ⏳ Pendiente |

---

## 🚀 Deploy

El proyecto se despliega automáticamente en **GitHub Pages** via GitHub Actions:

1. Push a `master`
2. Workflow en `.github/workflows/deploy.yml` ejecuta `vite build`
3. Output en `/dist` se publica en `gh-pages`

**URL en vivo:** [oficinadigitalcl.github.io/Landingpage-COALA-SwarmOPS-V2](https://oficinadigitalcl.github.io/Landingpage-COALA-SwarmOPS-V2/)

---

## 🔗 Ecosistema COALA-SwarmOPS

| Proyecto | Descripción | Repo |
|----------|-------------|------|
| **Landing Page v2** (este repo) | Sitio web oficial | [oficinadigitalCL/Landingpage-COALA-SwarmOPS-V2](https://github.com/oficinadigitalCL/Landingpage-COALA-SwarmOPS-V2) |
| **Landing Page v1** | Versión anterior | [oficinadigitalCL/Landingpage-COALA-SwarmOPS](https://github.com/oficinadigitalCL/Landingpage-COALA-SwarmOPS) |
| **COALA-SwarmOps Core** | Sistema de orquestación | [Aquilesnake/COALA-SwarmOps](https://github.com/Aquilesnake/COALA-SwarmOps) |

---

## 📄 Licencia

MIT © 2026 [Oficina Digital CL](https://github.com/oficinadigitalCL)

---

<p align="center">
  <strong>COALA-SwarmOPS</strong> — Coordina tu ecosistema de agentes IA
  <br/>
  🇪🇸 🇬🇧 🇨🇳 🇹🇼
</p>
