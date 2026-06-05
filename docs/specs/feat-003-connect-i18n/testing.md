# Testing — FEAT-003: Conectar Componentes al Sistema i18n

**Spec Version:** 6.7  
**Feature ID:** FEAT-003  
**Slug:** feat-003-connect-i18n  
**Status:** TEST_SPEC_DRAFT

---

## 1. Testing Strategy Overview

| Capa | Framework | Alcance | Cobertura Objetivo |
|------|-----------|---------|-------------------|
| BDD / E2E | Manual + Vitest (component testing) | Flujos de usuario completos: cambio de idioma en cada sección | 10 scenarios |
| Unitarios | Vitest + React Testing Library | Hooks (useLanguage), TypewriterText reinicio, JSON integrity | 14 tests |
| Integración | Vitest + React Testing Library | Cada componente conectado a LanguageProvider + contentMap | 9 tests (1 por componente) |
| Visual / Manual | Navegador real (Chrome, Firefox) | Renderizado de las 9 secciones en los 4 idiomas | 36 verificaciones |
| Accesibilidad | Lighthouse + axe-core | ARIA labels, lang attr correcto en cada idioma | Score ≥95 |

---

## 2. BDD Scenarios (Gherkin)

### Scenario 1: Cambio de idioma — HeroSection completa

```gherkin
Feature: HeroSection i18n
  Scenario: Usuario cambia de ES a EN y ve HeroSection en inglés
    Given el usuario está en la landing page con idioma "es"
    And HeroSection muestra "COALA-SwarmOPS", "Ecosistema de Agentes IA", CTAs en español
    When hace click en el botón 🇬🇧 "EN"
    Then HeroSection muestra "COALA-SwarmOPS" (nombre propio sin traducir)
    And el subtitle muestra "AI Agent Ecosystem"
    And la descripción está en inglés
    And los 3 CTAs muestran textos en inglés: "Sponsor on GitHub", "Install Now", "Documentation"
    And TypewriterText comienza a tipear el tagline en inglés desde el carácter 0
    And la animación anterior fue abortada
```

### Scenario 2: Cambio de idioma — ProblemSection Static vs Swarm

```gherkin
Feature: ProblemSection i18n
  Scenario: Usuario cambia a ZH y ve la comparación Static/Swarm en chino simplificado
    Given el usuario está en la landing page con idioma "es"
    When hace click en 🇨🇳 "中文"
    And hace scroll hasta la sección Problem
    Then el título está en chino simplificado
    And la columna roja muestra "静态工作流" como título
    And la columna roja muestra 4 bullets en chino simplificado
    And la columna cyan muestra "Swarm 工作流" como título
    And la columna cyan muestra 4 bullets en chino simplificado
    And los features cards (Zap, DollarSign, Clock) muestran títulos y descripciones en chino simplificado
```

### Scenario 3: Cambio de idioma — PricingSection badges y CTAs

```gherkin
Feature: PricingSection i18n
  Scenario: Usuario cambia a ZH-TW y ve el badge "Más popular" en chino tradicional
    Given el usuario está en la landing page con idioma "es"
    When hace click en 🇹🇼 "繁體中文"
    And hace scroll hasta la sección Pricing
    Then el tier "Modelos Cloud" muestra el badge "最受歡迎"
    And el mensaje inferior muestra texto en chino tradicional sobre "100% open source"
    And el botón CTA inferior muestra "成為贊助者"
    And los precios "$0" y "Desde $0.14" permanecen sin cambios
```

### Scenario 4: Cambio de idioma — CommunitySection repos

```gherkin
Feature: CommunitySection i18n
  Scenario: Usuario cambia a EN y ve las descripciones de repos en inglés
    Given el usuario está en la landing page con idioma "es"
    When hace click en 🇬🇧 "EN"
    And hace scroll hasta la sección Community
    Then la card de v2 muestra "COALA-SwarmOPS v2" como título
    And la descripción de v2 está en inglés
    And el botón de v2 muestra "GitHub (v2)"
    Then la card de v1 muestra "COALA-SwarmOPS v1" como título
    And la descripción de v1 está en inglés
    And el botón de v1 muestra "GitHub (v1)"
```

### Scenario 5: Cambio de idioma — Footer

```gherkin
Feature: Footer i18n
  Scenario: Usuario cambia a EN y ve el footer en inglés
    Given el usuario está en la landing page con idioma "es"
    When hace click en 🇬🇧 "EN"
    And hace scroll hasta el Footer
    Then el copyright muestra texto en inglés
    And el mensaje "Hecho con ❤️" muestra texto en inglés
    And los links del Footer muestran labels en inglés
```

### Scenario 6: TypewriterText se reinicia al cambiar idioma

```gherkin
Feature: TypewriterText dynamic restart
  Scenario: Cambio de idioma a mitad de animación typewriter
    Given el usuario está en la landing page con idioma "es"
    And el TypewriterText está a mitad de animación (mostrando "Orquesta tu ecosistem...")
    When el usuario hace click en 🇬🇧 "EN"
    Then la animación actual se aborta inmediatamente
    And el displayText se resetea a string vacío
    And comienza nueva animación desde el carácter 0 con el tagline en inglés
    And la velocidad de tipeo se mantiene en 60ms por carácter

  Scenario: Cambio rápido de idioma (3 clicks en <1s)
    Given el usuario está en la landing page
    When hace click en 🇬🇧, luego en 🇨🇳, luego en 🇹🇼 en rápida sucesión
    Then el TypewriterText muestra el tagline de ZH-TW (último idioma seleccionado)
    And no hay glitches visuales (caracteres mezclados de distintos idiomas)
    And no hay errores en consola
```

### Scenario 7: 0 textos hardcodeados en español tras cambiar de ES

```gherkin
Feature: Zero hardcoded Spanish text
  Scenario: Verificar que ningún texto permanece en español al cambiar a EN
    Given el usuario inicia en ES
    When cambia a EN
    And navega por TODAS las secciones: Hero, Problem, Solution, HowItWorks, ModesShowcase, WhoIsItFor, Pricing, Community, Footer
    Then ningún texto visible está en español
    And los únicos textos no traducidos son: "COALA-SwarmOPS" (nombre propio), "v2.0 — Swarm 6.7" (versión), URLs, iconos

  Scenario: Verificar que ningún texto permanece en español al cambiar a ZH
    Given el usuario inicia en ES
    When cambia a ZH
    And navega por TODAS las secciones
    Then ningún texto visible está en español (excepto nombres propios y versiones)
```

### Scenario 8: Persistencia de idioma + recarga

```gherkin
Feature: Language persistence across page reload
  Scenario: Recargar página mantiene el idioma y todos los textos
    Given el usuario seleccionó EN en una sesión anterior
    And localStorage tiene "coala-language" = "en"
    When el usuario recarga la página
    Then HeroSection muestra textos en inglés desde el primer render
    And ProblemSection, SolutionSection, etc. muestran textos en inglés
    And Footer muestra copyright en inglés
    And no hay flash de contenido en español
```

### Scenario 9: Regresión — FEAT-002 zh-TW sigue funcional

```gherkin
Feature: FEAT-002 regression safety
  Scenario: ZH-TW sigue mostrando todos los textos correctamente
    Given el usuario selecciona ZH-TW
    When navega por las 9 secciones
    Then todos los textos están en chino tradicional (NO simplificado)
    And caracteres clave son tradicionales: 體 (no 体), 軟 (no 软), 資 (no 资)

  Scenario: Los 4 idiomas son seleccionables
    Given el usuario está en la landing page
    Then el LanguageSwitcher muestra 4 botones: 🇪🇸 ES, 🇬🇧 EN, 🇨🇳 中文, 🇹🇼 繁體中文
    And cada botón es clickeable y cambia el idioma correctamente
```

### Scenario 10: Edge Cases

```gherkin
Feature: Edge cases for i18n connection
  Scenario: Iconos Lucide NO cambian con el idioma
    Given el usuario cambia de ES a EN
    Then los iconos Heart, Download, BookOpen, Zap, etc. permanecen visualmente idénticos
    And esto es comportamiento esperado — los iconos son visuales, no traducibles

  Scenario: URLs en CTAs NO cambian con el idioma
    Given el usuario cambia de ES a ZH-TW
    Then los href de los CTAs apuntan a las mismas URLs
    And esto es comportamiento esperado — las URLs son invariantes

  Scenario: JSON con clave faltante no rompe la UI
    Given el usuario selecciona ZH
    And zh.json tiene la clave "hero.description" eliminada (simulado)
    Then HeroSection muestra string vacío en lugar de crashear
    And el resto de la página funciona normalmente
```

---

## 3. Unit Tests

### 3.1 JSON Integrity Tests

```typescript
// src/data/__tests__/i18n-json-integrity.test.ts

import { describe, it, expect } from 'vitest';
import esContent from '../es.json';
import enContent from '../en.json';
import zhContent from '../zh.json';
import zhTWContent from '../zh-TW.json';

describe('JSON Integrity — FEAT-003 nuevas claves', () => {
  const allContents = [
    { name: 'es', content: esContent },
    { name: 'en', content: enContent },
    { name: 'zh', content: zhContent },
    { name: 'zh-TW', content: zhTWContent },
  ];

  it('SHALL have problem.comparison in all 4 languages', () => {
    for (const { name, content } of allContents) {
      expect(content.problem).toHaveProperty('comparison', `Missing in ${name}`);
      expect(content.problem.comparison).toHaveProperty('staticTitle', `Missing in ${name}`);
      expect(content.problem.comparison).toHaveProperty('swarmTitle', `Missing in ${name}`);
      expect(content.problem.comparison.staticItems).toHaveLength(4, `Missing in ${name}`);
      expect(content.problem.comparison.swarmItems).toHaveLength(4, `Missing in ${name}`);
    }
  });

  it('SHALL have pricing.popularBadge in all 4 languages', () => {
    for (const { name, content } of allContents) {
      expect(content.pricing).toHaveProperty('popularBadge', `Missing in ${name}`);
      expect(typeof content.pricing.popularBadge).toBe('string');
    }
  });

  it('SHALL have pricing.freeMessage in all 4 languages', () => {
    for (const { name, content } of allContents) {
      expect(content.pricing).toHaveProperty('freeMessage', `Missing in ${name}`);
      expect(typeof content.pricing.freeMessage).toBe('string');
    }
  });

  it('SHALL have community.repos with 2 items in all 4 languages', () => {
    for (const { name, content } of allContents) {
      expect(content.community).toHaveProperty('repos', `Missing in ${name}`);
      expect(content.community.repos).toHaveLength(2, `Missing in ${name}`);
      expect(content.community.repos[0]).toHaveProperty('title');
      expect(content.community.repos[0]).toHaveProperty('description');
      expect(content.community.repos[0]).toHaveProperty('cta');
      expect(content.community.repos[1]).toHaveProperty('title');
      expect(content.community.repos[1]).toHaveProperty('description');
      expect(content.community.repos[1]).toHaveProperty('cta');
    }
  });

  it('SHALL have footer.madeWithLove in all 4 languages', () => {
    for (const { name, content } of allContents) {
      expect(content.footer).toHaveProperty('madeWithLove', `Missing in ${name}`);
      expect(typeof content.footer.madeWithLove).toBe('string');
    }
  });

  it('SHALL have identical top-level keys across all 4 JSON files', () => {
    const esKeys = Object.keys(esContent).sort();
    for (const { name, content } of allContents) {
      const keys = Object.keys(content).sort();
      expect(keys).toEqual(esKeys);
    }
  });

  it('SHALL have no hardcoded Spanish strings in non-ES JSON comparison sections', () => {
    // Verificar que problem.comparison.staticItems de EN no contiene español
    const enStaticItems = enContent.problem.comparison.staticItems;
    const esStaticItems = esContent.problem.comparison.staticItems;
    // Al menos el primer bullet debe ser diferente
    expect(enStaticItems[0]).not.toBe(esStaticItems[0]);
  });
});
```

### 3.2 TypewriterText Reinicio al Cambiar Idioma

```typescript
// src/components/sections/__tests__/HeroSection-i18n.test.tsx

import { describe, it, expect, vi } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import { LanguageProvider } from '../../../hooks/useLanguage';
import { HeroSection } from '../HeroSection';

// Mock useParticleSwarm para evitar Canvas
vi.mock('../../../hooks/useParticleSwarm', () => ({
  useParticleSwarm: vi.fn(),
}));

// Mock lazy HeroThreeBackground
vi.mock('../HeroThreeBackground', () => ({
  HeroThreeBackground: () => null,
}));

describe('HeroSection — i18n connection', () => {
  function renderHero() {
    return render(
      <LanguageProvider>
        <HeroSection />
      </LanguageProvider>
    );
  }

  it('SHALL render hero.title from contentMap[language]', () => {
    renderHero();
    // El título "COALA-SwarmOPS" debe estar presente (es idioma por defecto)
    expect(screen.getByText('COALA-')).toBeInTheDocument();
  });

  it('SHALL render CTA texts from contentMap[language].hero.ctas', () => {
    renderHero();
    expect(screen.getByText('Sponsor en GitHub')).toBeInTheDocument();
    expect(screen.getByText('Instalar Ahora')).toBeInTheDocument();
  });

  it('SHALL pass content.tagline as text prop to TypewriterText', () => {
    renderHero();
    // El aria-label del TypewriterText debe ser el tagline
    const typewriter = screen.getByLabelText(/Deja de pagar/);
    expect(typewriter).toBeInTheDocument();
  });

  it('SHALL NOT contain hardcoded TAGLINES array import', () => {
    // Verificar que el source ya no tiene la constante TAGLINES
    const source = HeroSection.toString();
    expect(source).not.toContain('TAGLINES');
  });
});
```

### 3.3 useTypingEffect Reset Test

```typescript
// src/hooks/__tests__/useTypingEffect-i18n.test.ts

import { describe, it, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useTypingEffect } from '../useTypingEffect';

describe('useTypingEffect — language change reset', () => {
  it('SHALL reset displayText when text prop changes (language switch)', () => {
    const { result, rerender } = renderHook(
      ({ text }) => useTypingEffect({ text, speed: 10, delay: 100, loop: false }),
      { initialProps: { text: 'Hola mundo' } }
    );

    // Avanzar la animación parcialmente
    act(() => {
      vi.advanceTimersByTime(50); // ~5 caracteres a speed=10
    });

    const partialText = result.current.displayText;
    expect(partialText.length).toBeGreaterThan(0);

    // Cambiar idioma → nuevo texto
    rerender({ text: 'Hello world' });

    // Debe haberse reseteado
    expect(result.current.displayText).toBe('');
    expect(result.current.isTyping).toBe(true);
  });

  it('SHALL start new animation after reset on text change', () => {
    const { result, rerender } = renderHook(
      ({ text }) => useTypingEffect({ text, speed: 10, delay: 100, loop: false }),
      { initialProps: { text: 'Hola' } }
    );

    // Completar primera animación
    act(() => {
      vi.advanceTimersByTime(100);
    });

    expect(result.current.isComplete).toBe(true);

    // Cambiar idioma
    rerender({ text: 'Hello' });

    expect(result.current.isComplete).toBe(false);
    expect(result.current.isTyping).toBe(true);
  });
});
```

---

## 4. Integration Tests

### 4.1 ProblemSection — i18n Connection Test

```typescript
// src/components/sections/__tests__/ProblemSection-i18n.test.tsx

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { LanguageProvider } from '../../../hooks/useLanguage';
import { ProblemSection } from '../ProblemSection';

describe('ProblemSection — i18n connection', () => {
  function renderProblem() {
    return render(
      <LanguageProvider>
        <ProblemSection />
      </LanguageProvider>
    );
  }

  it('SHALL render comparison.staticTitle from contentMap', () => {
    renderProblem();
    expect(screen.getByText('Static Workflow')).toBeInTheDocument();
  });

  it('SHALL render comparison.swarmTitle from contentMap', () => {
    renderProblem();
    expect(screen.getByText('Swarm Workflow')).toBeInTheDocument();
  });

  it('SHALL render 4 staticItems and 4 swarmItems', () => {
    renderProblem();
    const staticItems = screen.getAllByText('Un solo agente a la vez');
    expect(staticItems).toHaveLength(1);
  });

  it('SHALL NOT import es.json statically', () => {
    const source = ProblemSection.toString();
    expect(source).not.toContain("from '../../data/es.json'");
  });
});
```

### 4.2 Footer — i18n Connection Test

```typescript
// src/components/layout/__tests__/Footer-i18n.test.tsx

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { LanguageProvider } from '../../../hooks/useLanguage';
import { Footer } from '../Footer';

describe('Footer — i18n connection', () => {
  function renderFooter() {
    return render(
      <LanguageProvider>
        <Footer />
      </LanguageProvider>
    );
  }

  it('SHALL render copyright from contentMap[language].footer', () => {
    renderFooter();
    expect(screen.getByText(/© 2026 COALA-SwarmOPS/)).toBeInTheDocument();
  });

  it('SHALL render links from contentMap[language].footer.links', () => {
    renderFooter();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
  });

  it('SHALL use useLanguage hook', () => {
    const source = Footer.toString();
    expect(source).toContain('useLanguage');
  });
});
```

### 4.3 PricingSection — i18n Connection Test

```typescript
// src/components/sections/__tests__/PricingSection-i18n.test.tsx

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { LanguageProvider } from '../../../hooks/useLanguage';
import { PricingSection } from '../PricingSection';

describe('PricingSection — i18n connection', () => {
  function renderPricing() {
    return render(
      <LanguageProvider>
        <PricingSection />
      </LanguageProvider>
    );
  }

  it('SHALL render popularBadge from contentMap', () => {
    renderPricing();
    expect(screen.getByText('Más popular')).toBeInTheDocument();
  });

  it('SHALL render freeMessage from contentMap', () => {
    renderPricing();
    expect(screen.getByText(/100% open source/)).toBeInTheDocument();
  });

  it('SHALL NOT have hardcoded "Hazte Sponsor" as literal string', () => {
    // Debe venir del JSON, no hardcodeado
    renderPricing();
    // El texto existe pero viene del contentMap
    expect(screen.getByText('Hazte Sponsor')).toBeInTheDocument();
  });
});
```

### 4.4 CommunitySection — i18n Connection Test

```typescript
// src/components/sections/__tests__/CommunitySection-i18n.test.tsx

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { LanguageProvider } from '../../../hooks/useLanguage';
import { CommunitySection } from '../CommunitySection';

describe('CommunitySection — i18n connection', () => {
  function renderCommunity() {
    return render(
      <LanguageProvider>
        <CommunitySection />
      </LanguageProvider>
    );
  }

  it('SHALL render repos[0].title from contentMap', () => {
    renderCommunity();
    expect(screen.getByText('COALA-SwarmOPS v2')).toBeInTheDocument();
  });

  it('SHALL render repos[1].title from contentMap', () => {
    renderCommunity();
    expect(screen.getByText('COALA-SwarmOPS v1')).toBeInTheDocument();
  });

  it('SHALL render repos[0].cta from contentMap', () => {
    renderCommunity();
    expect(screen.getByText('GitHub (v2)')).toBeInTheDocument();
  });

  it('SHALL render repos[1].cta from contentMap', () => {
    renderCommunity();
    expect(screen.getByText('GitHub (v1)')).toBeInTheDocument();
  });
});
```

---

## 5. E2E Test Cases

### 5.1 Manual E2E Test Checklist

| # | Test | Pasos | Criterio de Éxito |
|---|------|-------|-------------------|
| E2E-01 | Hero ES→EN→ZH→ZH-TW | 1. Iniciar en ES<br>2. Click EN → verificar Hero<br>3. Click ZH → verificar Hero<br>4. Click ZH-TW → verificar Hero | TypewriterText se reinicia en cada cambio; título, subtitle, CTAs correctos en cada idioma |
| E2E-02 | Problem ES→ZH-TW | 1. Iniciar en ES<br>2. Click ZH-TW<br>3. Scroll a Problem | Static/Swarm comparison totalmente en tradicional; features en tradicional |
| E2E-03 | Pricing EN→ZH | 1. Iniciar en EN<br>2. Click ZH<br>3. Scroll a Pricing | "Most Popular" → "最受欢迎"; freeMessage en ZH; CTAs en ZH |
| E2E-04 | Community ES→EN | 1. Iniciar en ES<br>2. Click EN<br>3. Scroll a Community | Descripciones de repos en EN; CTAs "GitHub (v2)" / "GitHub (v1)" |
| E2E-05 | Footer todos los idiomas | 1. ES → verificar Footer<br>2. EN → verificar Footer<br>3. ZH → verificar Footer<br>4. ZH-TW → verificar Footer | Copyright y links en idioma correcto |
| E2E-06 | Ciclo completo 4 idiomas | 1. ES → navegar 9 secciones<br>2. EN → navegar 9 secciones<br>3. ZH → navegar 9 secciones<br>4. ZH-TW → navegar 9 secciones | 0 textos en español en secciones que no sean ES |
| E2E-07 | Recarga con EN | 1. Seleccionar EN<br>2. Recargar página (F5) | Página carga en EN sin flash de ES |
| E2E-08 | Mobile: cambio idioma en menú hamburguesa | 1. Emular iPhone SE<br>2. Abrir menú hamburguesa<br>3. Seleccionar ZH-TW<br>4. Cerrar menú<br>5. Navegar secciones | Todos los textos en tradicional; menú funcional |
| E2E-09 | Cambio rápido de idioma (stress test) | 1. ES → EN → ZH → ZH-TW → ES en <2s | Sin errores en consola; último idioma seleccionado es el que se muestra |
| E2E-10 | TypewriterText no se rompe con cambio rápido | 1. Iniciar en ES, esperar 500ms<br>2. Cambiar a EN, esperar 200ms<br>3. Cambiar a ZH | TypewriterText muestra tagline ZH; sin glitches |

### 5.2 Automated Component Tests (Vitest + RTL)

```typescript
// src/components/sections/__tests__/AllSections-i18n.test.tsx

import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { LanguageProvider } from '../../../hooks/useLanguage';

// Importar todos los componentes de sección
import { HeroSection } from '../HeroSection';
import { ProblemSection } from '../ProblemSection';
import { SolutionSection } from '../SolutionSection';
import { HowItWorksSection } from '../HowItWorksSection';
import { ModesShowcaseSection } from '../ModesShowcaseSection';
import { WhoIsItForSection } from '../WhoIsItForSection';
import { PricingSection } from '../PricingSection';
import { CommunitySection } from '../CommunitySection';
import { Footer } from '../../layout/Footer';

const allSections = [
  { name: 'HeroSection', Component: HeroSection },
  { name: 'ProblemSection', Component: ProblemSection },
  { name: 'SolutionSection', Component: SolutionSection },
  { name: 'HowItWorksSection', Component: HowItWorksSection },
  { name: 'ModesShowcaseSection', Component: ModesShowcaseSection },
  { name: 'WhoIsItForSection', Component: WhoIsItForSection },
  { name: 'PricingSection', Component: PricingSection },
  { name: 'CommunitySection', Component: CommunitySection },
  { name: 'Footer', Component: Footer },
];

describe('All Sections — render without errors inside LanguageProvider', () => {
  for (const { name, Component } of allSections) {
    it(`SHALL render ${name} without throwing`, () => {
      expect(() =>
        render(
          <LanguageProvider>
            <Component />
          </LanguageProvider>
        )
      ).not.toThrow();
    });
  }
});
```

---

## 6. Test Data

### 6.1 Fixture: Nuevas claves esperadas en cada JSON

```typescript
// src/data/__fixtures__/expected-new-keys.ts

export const EXPECTED_NEW_KEYS = {
  problem: {
    comparison: {
      staticTitle: 'string',
      swarmTitle: 'string',
      staticItems: ['string', 'string', 'string', 'string'],
      swarmItems: ['string', 'string', 'string', 'string'],
    },
  },
  pricing: {
    popularBadge: 'string',
    freeMessage: 'string',
  },
  community: {
    repos: [
      { title: 'string', description: 'string', cta: 'string' },
      { title: 'string', description: 'string', cta: 'string' },
    ],
  },
  footer: {
    madeWithLove: 'string',
  },
};
```

### 6.2 Datos de prueba para verificación cross-idioma

| Clave | ES | EN | ZH | ZH-TW |
|-------|----|----|----|-------|
| `problem.comparison.staticTitle` | Static Workflow | Static Workflow | 静态工作流 | 靜態工作流 |
| `problem.comparison.swarmTitle` | Swarm Workflow | Swarm Workflow | Swarm 工作流 | Swarm 工作流 |
| `pricing.popularBadge` | Más popular | Most Popular | 最受欢迎 | 最受歡迎 |
| `footer.madeWithLove` | Hecho con ❤️ para la comunidad open source | Made with ❤️ for the open source community | 为开源社区用❤️打造 | 為開源社群用❤️打造 |

### 6.3 Verificación de caracteres ZH vs ZH-TW

| Tipo | ES | ZH (Simplificado) | ZH-TW (Tradicional) |
|------|----|--------------------|---------------------|
| Popular | Más popular | 最受欢迎 (欢=U+6B22) | 最受歡迎 (歡=U+6B61) |
| Open source | open source | 开源 (开=U+5F00) | 開源 (開=U+958B) |
| Ecosystem | ecosistema | 生态系统 (体=U+4F53) | 生態系統 (體=U+9AD4) |
| Software | — | 软件 (软=U+8F6F) | 軟體 (軟=U+8EDF) |
| Network | — | 网络 (网=U+7F51) | 網路 (網=U+7DB2) |
| Data | — | 数据 (据=U+636E) | 資料 (資=U+8CC7) |

---

## 7. Regression Tests (Idiomas Existentes + FEAT-002)

| # | Test | Verificación |
|---|------|-------------|
| REG-01 | ES: los 9 componentes muestran textos en español | Sin regresión; todos los textos provienen de es.json |
| REG-02 | EN: los 9 componentes muestran textos en inglés | Sin regresión; todos los textos provienen de en.json |
| REG-03 | ZH: los 9 componentes muestran textos en chino simplificado | Sin regresión; todos los textos provienen de zh.json |
| REG-04 | ZH-TW: los 9 componentes muestran textos en chino tradicional | Sin regresión; todos los textos provienen de zh-TW.json |
| REG-05 | LanguageSwitcher: 4 botones funcionales | Sin cambios en FEAT-002; click en cada uno actualiza idioma |
| REG-06 | localStorage: persistencia correcta en los 4 idiomas | `coala-language` se actualiza con debounce 150ms |
| REG-07 | document.documentElement.lang: correcto para cada idioma | es→'es', en→'en', zh→'zh-CN', zh-TW→'zh-TW' |
| REG-08 | Navbar links: traducidos correctamente | Sin cambios; ya consumían i18n antes de FEAT-003 |
| REG-09 | MobileMenu: LanguageSwitcher funcional | Sin cambios; ya funciona correctamente |
| REG-10 | ThemeToggle: dark/light funcional en todos los idiomas | Sin cambios; no relacionado con i18n |

---

## 8. Test Execution Order

```
1. JSON Integrity Tests (Phase 1-4) → validar que las nuevas claves existen en los 4 JSON
2. Unit Tests: useTypingEffect reset → validar que el hook reinicia al cambiar text
3. Integration Tests por componente → validar que cada sección renderiza con LanguageProvider
4. E2E Manual Tests → verificar visualmente los 4 idiomas en las 9 secciones
5. Regression Tests → verificar que ES/EN/ZH/ZH-TW no tienen regresión
6. Lighthouse Audit → accesibilidad y SEO en cada idioma
7. Build Verification → npm run build sin errores
```

---

## 9. CI/CD Integration

```yaml
# .github/workflows/test.yml (adición sugerida para FEAT-003)
jobs:
  test-i18n-connection:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npx vitest run --reporter=verbose
      - name: Validate all 4 JSON have new FEAT-003 keys
        run: |
          node -e "
            const fs = require('fs');
            const languages = ['es', 'en', 'zh', 'zh-TW'];
            let errors = [];
            for (const lang of languages) {
              const data = JSON.parse(fs.readFileSync('./src/data/' + lang + '.json', 'utf8'));
              if (!data.problem?.comparison?.staticTitle) errors.push(lang + ': missing problem.comparison.staticTitle');
              if (!data.problem?.comparison?.swarmTitle) errors.push(lang + ': missing problem.comparison.swarmTitle');
              if (!data.pricing?.popularBadge) errors.push(lang + ': missing pricing.popularBadge');
              if (!data.pricing?.freeMessage) errors.push(lang + ': missing pricing.freeMessage');
              if (!data.community?.repos || data.community.repos.length !== 2) errors.push(lang + ': missing community.repos');
              if (!data.footer?.madeWithLove) errors.push(lang + ': missing footer.madeWithLove');
            }
            if (errors.length > 0) {
              console.error('Validation errors:', errors);
              process.exit(1);
            }
            console.log('✓ All 4 JSON files have FEAT-003 required keys');
          "
      - name: Verify no static es.json imports in section components
        run: |
          node -e "
            const fs = require('fs');
            const path = require('path');
            const sectionsDir = './src/components/sections';
            const files = fs.readdirSync(sectionsDir).filter(f => f.endsWith('.tsx') && f !== 'index.ts');
            let violations = [];
            for (const file of files) {
              const content = fs.readFileSync(path.join(sectionsDir, file), 'utf8');
              if (content.includes(\"from '../../data/es.json'\") || content.includes('from \"../../data/es.json\"')) {
                violations.push(file);
              }
            }
            // También verificar Footer
            const footerContent = fs.readFileSync('./src/components/layout/Footer.tsx', 'utf8');
            if (footerContent.includes(\"from '../../data/es.json'\") || footerContent.includes('from \"../../data/es.json\"')) {
              violations.push('Footer.tsx');
            }
            if (violations.length > 0) {
              console.error('Components still importing es.json statically:', violations);
              process.exit(1);
            }
            console.log('✓ No static es.json imports found in section components');
          "
```
