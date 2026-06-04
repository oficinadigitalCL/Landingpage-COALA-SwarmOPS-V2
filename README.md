# 🐨 COALA SwarmOPS — Landing Page v2.0

**Enjambre de agentes IA · Ahorra en AI Agents · Open Source**

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-deployed-brightgreen)](https://oficinadigitalcl.github.io/Landingpage-COALA-SwarmOPS-V2/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Swarm Version](https://img.shields.io/badge/swarm-v6.7-00FFFF)](https://github.com/Aquilesnake/COALA-SwarmOps)

Landing page interactiva para COALA-SwarmOPS, construida con React 18, TypeScript, Vite, Tailwind CSS y Three.js. Muestra los 19 modos especializados del swarm con animaciones 3D, partículas Canvas 2D, y diseño responsive mobile-first.

---

## 🚀 Instalación

```bash
git clone https://github.com/oficinadigitalCL/Landingpage-COALA-SwarmOPS-V2.git
cd Landingpage-COALA-SwarmOPS-V2
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📦 Build

```bash
npm run build
```

El output se genera en `dist/`, listo para deploy en GitHub Pages.

## 🧪 Tests

```bash
npm test
```

## 🎨 Tech Stack

| Capa | Tecnología |
|------|-----------|
| Framework | React 18 + TypeScript |
| Build | Vite 5 |
| Estilos | Tailwind CSS 3 |
| Animaciones | Framer Motion 11 |
| 3D / Partículas | Three.js + @react-three/fiber |
| Íconos | Lucide React |
| Seguridad | DOMPurify, CSP meta tag |
| Testing | Vitest + React Testing Library |

## 📂 Estructura

```
src/
├── components/
│   ├── layout/     # Navbar, Footer, ThemeToggle, MobileMenu
│   ├── sections/   # Hero, Problem, Solution, HowItWorks, Modes, etc.
│   └── ui/         # GlowButton, AnimatedCard, FlipCard, TypewriterText
├── hooks/          # useParticleSwarm, useTheme, useReveal, useTypingEffect
├── types/          # TypeScript type definitions
├── data/           # JSON content (es/en), modes data
└── lib/            # utils, CSP, sanitize, env
```

## 🔒 Seguridad

- Content-Security-Policy via meta tag
- Sin dependencias CDN externas
- DOMPurify para sanitización
- Variables de entorno con `import.meta.env`
- `console.log` stripping en producción
- Ver [`SECURITY.md`](SECURITY.md)

## 🌐 Deploy

El proyecto se despliega automáticamente en GitHub Pages al hacer push a `main`.

**URL:** [https://oficinadigitalcl.github.io/Landingpage-COALA-SwarmOPS-V2/](https://oficinadigitalcl.github.io/Landingpage-COALA-SwarmOPS-V2/)

## 📄 Licencia

MIT © 2026 Oficina Digital CL

## 🐨 Sponsors

¿Te gusta COALA-SwarmOPS? [Hazte sponsor en GitHub](https://github.com/sponsors/oficinadigitalCL)

---

**⚠️ Zoo Code / Roo Code** es un **SPONSOR y CONFIGURACIÓN** que usamos **temporalmente**. 
No somos Zoo Code. Ofrecemos nuestra **configuración custom** para ahorrar plata en agentes IA.
