# Requirements Draft - FEAT-003: Conectar Componentes al Sistema i18n

## Historia de Usuario

Como **visitante del landing page**,  
Quiero **que al hacer click en cualquier bandera de idioma (🇪🇸 🇬🇧 🇨🇳 🇹🇼) TODOS los textos cambien al idioma seleccionado**,  
Para **poder leer el contenido en mi idioma preferido**.

---

## Contexto Técnico

- El sistema i18n ya está implementado: `useLanguage.tsx` + `contentMap` + 4 archivos JSON
- Los componentes de sección tienen TODOS los textos hardcodeados en español
- NINGÚN componente consume `useLanguage` o `contentMap`
- Los archivos JSON ya están completos: `es.json`, `en.json`, `zh.json`, `zh-TW.json`

---

## Criterios de Aceptación (EARS)

### AC-01: HeroSection traducible
WHEN el usuario cambia de idioma  
THEN [`HeroSection.tsx`](src/components/sections/HeroSection.tsx) SHALL renderizar título, subtitle, tagline, descripción y CTAs desde `contentMap[language].hero`.

### AC-02: ProblemSection traducible
WHEN el usuario cambia de idioma  
THEN [`ProblemSection.tsx`](src/components/sections/ProblemSection.tsx) SHALL renderizar título, subtitle, descripción y 3 features desde `contentMap[language].problem`.

### AC-03: SolutionSection traducible
WHEN el usuario cambia de idioma  
THEN [`SolutionSection.tsx`](src/components/sections/SolutionSection.tsx) SHALL renderizar título, subtitle, descripción, 3 features y CTA desde `contentMap[language].solution`.

### AC-04: HowItWorksSection traducible
WHEN el usuario cambia de idioma  
THEN [`HowItWorksSection.tsx`](src/components/sections/HowItWorksSection.tsx) SHALL renderizar título, subtitle, descripción, 3 steps y CTA desde `contentMap[language].howItWorks`.

### AC-05: ModesShowcaseSection traducible
WHEN el usuario cambia de idioma  
THEN [`ModesShowcaseSection.tsx`](src/components/sections/ModesShowcaseSection.tsx) SHALL renderizar título, subtitle, descripción y CTA desde `contentMap[language].modesShowcase`.

### AC-06: WhoIsItForSection traducible
WHEN el usuario cambia de idioma  
THEN [`WhoIsItForSection.tsx`](src/components/sections/WhoIsItForSection.tsx) SHALL renderizar título, subtitle, descripción y 3 columnas con bullets desde `contentMap[language].whoIsItFor`.

### AC-07: PricingSection traducible
WHEN el usuario cambia de idioma  
THEN [`PricingSection.tsx`](src/components/sections/PricingSection.tsx) SHALL renderizar título, subtitle, descripción, 2 tiers y CTA desde `contentMap[language].pricing`.

### AC-08: CommunitySection traducible
WHEN el usuario cambia de idioma  
THEN [`CommunitySection.tsx`](src/components/sections/CommunitySection.tsx) SHALL renderizar título, subtitle, descripción y 2 CTAs desde `contentMap[language].community`.

### AC-09: Footer traducible
WHEN el usuario cambia de idioma  
THEN [`Footer.tsx`](src/components/layout/Footer.tsx) SHALL renderizar copyright y links desde `contentMap[language].footer`.

### AC-10: TypewriterText dinámico
WHEN el idioma cambia AND [`TypewriterText`](src/components/ui/TypewriterText.tsx) está activo  
THEN el componente SHALL abortar la animación actual, reiniciar con el nuevo texto, y respetar `contentMap[language].hero.tagline`.

---

## Edge Cases

| ID | Caso Límite | Comportamiento |
|----|-------------|---------------|
| EC-01 | Cambio de idioma durante animación | Abortar y reiniciar desde 0 |
| EC-02 | JSON con clave faltante | Fallback a `es.json` silenciosamente |
| EC-03 | Texto chino excede ancho | `word-break: keep-all` ya está en CSS |
| EC-04 | Iconos Lucide no cambian | Correcto — iconos son visuales, no traducibles |
| EC-05 | Hrefs/URLs no cambian | Correcto — URLs son invariantes |

---

## Definition of Done

- [ ] 9 componentes consumen `useLanguage` + `contentMap`
- [ ] 0 textos hardcodeados en español en componentes de sección
- [ ] Click en 🇬🇧 → todo en inglés
- [ ] Click en 🇨🇳 → todo en chino simplificado
- [ ] Click en 🇹🇼 → todo en chino tradicional
- [ ] Click en 🇪🇸 → todo en español
- [ ] TypewriterText se reinicia al cambiar idioma
- [ ] Tests existentes siguen pasando
- [ ] Build sin errores
- [ ] Lighthouse sin regresión

---

## Dependencias

- **FEAT-002** (completado): Sistema i18n + zh-TW.json listos
- **Ninguna externa**

---

## Estimación

| Aspecto | Valor |
|---------|-------|
| Story Points | **8** |
| Tier | **T0.5** (Flash Fast Coder) |
| Tiempo | 3-5 horas |
| Complejidad | Media-Alta (mecánica pero extensa) |

---

## FEAT-ID

**FEAT-003**

---

## Patrón de Implementación

```tsx
// ANTES (hardcodeado)
function HeroSection() {
  return <h1>COALA-SwarmOPS</h1>;
}

// DESPUÉS (conectado a i18n)
import { useLanguage, contentMap } from '../../hooks/useLanguage';

function HeroSection() {
  const { language } = useLanguage();
  const content = contentMap[language].hero;
  
  return <h1>{content.title}</h1>;
}
```

---

## Nota sobre TypewriterText

El componente [`TypewriterText`](src/components/ui/TypewriterText.tsx) usa `TAGLINES` hardcodeado en [`HeroSection.tsx`](src/components/sections/HeroSection.tsx:14). Debe reemplazarse por `content.tagline` y reiniciar al cambiar idioma.

---

## Lista de Componentes a Refactorizar

1. [`src/components/sections/HeroSection.tsx`](src/components/sections/HeroSection.tsx)
2. [`src/components/sections/ProblemSection.tsx`](src/components/sections/ProblemSection.tsx)
3. [`src/components/sections/SolutionSection.tsx`](src/components/sections/SolutionSection.tsx)
4. [`src/components/sections/HowItWorksSection.tsx`](src/components/sections/HowItWorksSection.tsx)
5. [`src/components/sections/ModesShowcaseSection.tsx`](src/components/sections/ModesShowcaseSection.tsx)
6. [`src/components/sections/WhoIsItForSection.tsx`](src/components/sections/WhoIsItForSection.tsx)
7. [`src/components/sections/PricingSection.tsx`](src/components/sections/PricingSection.tsx)
8. [`src/components/sections/CommunitySection.tsx`](src/components/sections/CommunitySection.tsx)
9. [`src/components/layout/Footer.tsx`](src/components/layout/Footer.tsx)
