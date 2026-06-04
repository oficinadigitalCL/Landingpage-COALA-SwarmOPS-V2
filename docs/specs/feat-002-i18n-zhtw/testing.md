# Testing — FEAT-002: Soporte Chino Tradicional (ZH-TW)

**Spec Version:** 6.7  
**Feature ID:** FEAT-002  
**Slug:** feat-002-i18n-zhtw  
**Status:** TEST_SPEC_DRAFT

---

## 1. Testing Strategy Overview

| Capa | Framework | Alcance | Cobertura Objetivo |
|------|-----------|---------|-------------------|
| BDD / E2E | Manual + Cypress / Playwright (opcional) | Flujos de usuario completos | 5 scenarios |
| Unitarios | Vitest + React Testing Library | Hooks, detectLanguage, contentMap | 10 tests |
| Integración | Vitest + React Testing Library | LanguageSwitcher + Provider | 10 tests |
| Visual / Manual | Navegador real (Chrome, Firefox, Safari) | Renderizado de caracteres, layout | 3 navegadores |
| Accesibilidad | Lighthouse + axe-core | ARIA labels, contraste, lang attr | Score ≥95 |

---

## 2. BDD Scenarios (Gherkin)

### Scenario 1: Usuario selecciona chino tradicional desde el navbar

```gherkin
Feature: Cambio de idioma a ZH-TW

  Scenario: Usuario selecciona chino tradicional desde el navbar
    Given el usuario está en la landing page "https://oficinadigitalcl.github.io/Landingpage-COALA-SwarmOPS-V2/"
    And el idioma actual es "es"
    And el LanguageSwitcher muestra 4 botones: 🇪🇸 ES, 🇬🇧 EN, 🇨🇳 中文, 🇹🇼 繁體中文
    When hace click en el botón 🇹🇼 "繁體中文"
    Then todos los textos visibles cambian a chino tradicional en menos de 200ms
    And el botón 🇹🇼 muestra el estado activo con clases "bg-coala-cyan/20 border-coala-cyan/50"
    And localStorage.getItem("coala-language") retorna "zh-TW"
    And document.documentElement.lang es "zh-TW"
    And el texto del Hero contiene "AI 智慧體生態系統" (NO "AI 智能体生态系统")
```

### Scenario 2: Detección automática de idioma del navegador (zh-TW)

```gherkin
Feature: Auto-detección de ZH-TW

  Scenario: Detección automática para navegador configurado en zh-TW
    Given el usuario visita la landing page por primera vez
    And navigator.language es "zh-TW"
    And localStorage no tiene la clave "coala-language"
    When la página carga completamente
    Then el idioma activo es ZH-TW
    And el botón 🇹🇼 muestra el estado activo
    And document.documentElement.lang es "zh-TW"

  Scenario: Detección automática para navegador configurado en zh-HK
    Given el usuario visita la landing page por primera vez
    And navigator.language es "zh-HK"
    And localStorage no tiene la clave "coala-language"
    When la página carga completamente
    Then el idioma activo es ZH-TW
    And el botón 🇹🇼 muestra el estado activo
```

### Scenario 3: Persistencia de idioma tras recarga

```gherkin
Feature: Persistencia de selección ZH-TW

  Scenario: Persistencia de idioma tras recarga de página
    Given el usuario seleccionó ZH-TW en una sesión anterior
    And localStorage tiene "coala-language" = "zh-TW"
    When el usuario recarga la página
    Then el idioma mostrado es ZH-TW inmediatamente
    And no hay flash de contenido en español/inglés
    And el botón 🇹🇼 está activo desde el primer render

  Scenario: localStorage corrupto no rompe la aplicación
    Given localStorage tiene "coala-language" = "{corrupt-json"
    When el usuario recarga la página
    Then el idioma mostrado es "es" (fallback seguro)
    And no hay errores en consola (excepto posible warning)
    And la aplicación es completamente funcional
```

### Scenario 4: Fallback de traducciones faltantes

```gherkin
Feature: Fallback zh-TW → zh

  Scenario: Fallback cuando zh-TW.json tiene clave faltante
    Given el archivo zh-TW.json existe con 100% de claves
    But la clave "hero.tagline" fue eliminada intencionalmente para este test
    When el usuario selecciona ZH-TW
    Then el valor de "hero.tagline" se obtiene de zh.json (simplificado)
    And el resto del contenido de la sección Hero usa traducciones de zh-TW.json
    And en modo desarrollo (DEV), se muestra console.warn con el mensaje apropiado

  Scenario: Archivo zh-TW.json corrupto o inaccesible
    Given el archivo zh-TW.json no se puede parsear (JSON malformado)
    When el usuario selecciona ZH-TW
    Then el sistema hace fallback completo a zh.json
    And la UI no se rompe (no hay pantalla en blanco)
    And se loggea error en consola
```

### Scenario 5: Cambio de idioma en dispositivo móvil

```gherkin
Feature: Soporte ZH-TW en mobile

  Scenario: Selección de ZH-TW desde menú hamburguesa
    Given el usuario está en viewport móvil (ancho < 768px)
    And el menú hamburguesa está cerrado
    When el usuario abre el menú hamburguesa
    Then el LanguageSwitcher muestra las 4 opciones de idioma
    And la opción "繁體中文" 🇹🇼 es visible y clickeable
    When el usuario selecciona "繁體中文"
    Then el menú se cierra (o permanece abierto según diseño)
    And todos los textos cambian a chino tradicional
```

---

## 3. Unit Tests

### 3.1 detectLanguage() Tests

```typescript
// src/hooks/__tests__/useLanguage.test.ts (o detectLanguage.test.ts)

import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('detectLanguage', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  // Test 1: localStorage tiene 'zh-TW' → retorna 'zh-TW'
  it('SHALL return "zh-TW" when localStorage has "zh-TW"', () => {
    localStorage.setItem('coala-language', 'zh-TW');
    const result = detectLanguage();
    expect(result).toBe('zh-TW');
  });

  // Test 2: navigator.language es 'zh-TW' → retorna 'zh-TW'
  it('SHALL return "zh-TW" when navigator.language is "zh-TW"', () => {
    Object.defineProperty(navigator, 'language', {
      value: 'zh-TW',
      configurable: true,
    });
    const result = detectLanguage();
    expect(result).toBe('zh-TW');
  });

  // Test 3: navigator.language es 'zh-HK' → retorna 'zh-TW'
  it('SHALL return "zh-TW" when navigator.language is "zh-HK"', () => {
    Object.defineProperty(navigator, 'language', {
      value: 'zh-HK',
      configurable: true,
    });
    const result = detectLanguage();
    expect(result).toBe('zh-TW');
  });

  // Test 4: navigator.language es 'zh-CN' → retorna 'zh' (simplificado)
  it('SHALL return "zh" when navigator.language is "zh-CN"', () => {
    Object.defineProperty(navigator, 'language', {
      value: 'zh-CN',
      configurable: true,
    });
    const result = detectLanguage();
    expect(result).toBe('zh');
  });

  // Test 5: navigator.language es 'zh' (genérico) → retorna 'zh'
  it('SHALL return "zh" when navigator.language is "zh"', () => {
    Object.defineProperty(navigator, 'language', {
      value: 'zh',
      configurable: true,
    });
    const result = detectLanguage();
    expect(result).toBe('zh');
  });

  // Test 6: localStorage corrupto → retorna 'es' (fallback)
  it('SHALL fallback to "es" when localStorage is corrupted', () => {
    localStorage.setItem('coala-language', '{invalid');
    const result = detectLanguage();
    expect(result).toBe('es');
  });

  // Test 7: Sin localStorage, navegador en 'fr' → retorna 'es'
  it('SHALL fallback to "es" for unsupported browser language', () => {
    Object.defineProperty(navigator, 'language', {
      value: 'fr-FR',
      configurable: true,
    });
    const result = detectLanguage();
    expect(result).toBe('es');
  });
});
```

### 3.2 isValidLanguage() Tests

```typescript
describe('isValidLanguage', () => {
  it('SHALL return true for "zh-TW"', () => {
    expect(isValidLanguage('zh-TW')).toBe(true);
  });

  it('SHALL return true for "es"', () => {
    expect(isValidLanguage('es')).toBe(true);
  });

  it('SHALL return true for "en"', () => {
    expect(isValidLanguage('en')).toBe(true);
  });

  it('SHALL return true for "zh"', () => {
    expect(isValidLanguage('zh')).toBe(true);
  });

  it('SHALL return false for "fr"', () => {
    expect(isValidLanguage('fr')).toBe(false);
  });

  it('SHALL return false for null', () => {
    expect(isValidLanguage(null)).toBe(false);
  });

  it('SHALL return false for empty string', () => {
    expect(isValidLanguage('')).toBe(false);
  });
});
```

### 3.3 contentMap Tests

```typescript
describe('contentMap', () => {
  it('SHALL contain all 4 languages', () => {
    const keys = Object.keys(contentMap);
    expect(keys).toHaveLength(4);
    expect(keys).toContain('es');
    expect(keys).toContain('en');
    expect(keys).toContain('zh');
    expect(keys).toContain('zh-TW');
  });

  it('SHALL have identical structure across all languages', () => {
    const esKeys = getAllKeys(contentMap['es']);
    const zhTWKeys = getAllKeys(contentMap['zh-TW']);
    expect(zhTWKeys).toEqual(esKeys);
  });

  it('SHALL have zh-TW content with traditional characters (NOT simplified)', () => {
    const zhTW = contentMap['zh-TW'];
    // Check that key terms use traditional characters
    expect(zhTW.hero.subtitle).toContain('體');  // 體 not 体
    expect(zhTW.solution.features[0].title).toContain('自訂');  // 訂 not 订
  });
});
```

### 3.4 LanguageProvider Tests

```typescript
import { renderHook, act } from '@testing-library/react';

describe('LanguageProvider', () => {
  it('SHALL persist language to localStorage on setLanguage', () => {
    const { result } = renderHook(() => useLanguage(), {
      wrapper: LanguageProvider,
    });

    act(() => {
      result.current.setLanguage('zh-TW');
    });

    expect(result.current.language).toBe('zh-TW');
    expect(localStorage.getItem('coala-language')).toBe('zh-TW');
  });

  it('SHALL update document.documentElement.lang to "zh-TW"', () => {
    const { result } = renderHook(() => useLanguage(), {
      wrapper: LanguageProvider,
    });

    act(() => {
      result.current.setLanguage('zh-TW');
    });

    expect(document.documentElement.lang).toBe('zh-TW');
  });

  it('SHALL update document.documentElement.lang to "zh-CN" for "zh"', () => {
    const { result } = renderHook(() => useLanguage(), {
      wrapper: LanguageProvider,
    });

    act(() => {
      result.current.setLanguage('zh');
    });

    expect(document.documentElement.lang).toBe('zh-CN');
  });
});
```

---

## 4. Integration Tests

### 4.1 LanguageSwitcher Component Tests

```typescript
import { render, screen, fireEvent } from '@testing-library/react';

describe('LanguageSwitcher', () => {
  function renderSwitcher() {
    return render(
      <LanguageProvider>
        <LanguageSwitcher />
      </LanguageProvider>
    );
  }

  it('SHALL render 4 language buttons', () => {
    renderSwitcher();
    const buttons = screen.getAllByRole('radio');
    expect(buttons).toHaveLength(4);
  });

  it('SHALL render zh-TW button with flag 🇹🇼 and label 繁體中文', () => {
    renderSwitcher();
    const zhTWButton = screen.getByTitle('繁體中文');
    expect(zhTWButton).toBeInTheDocument();
    expect(zhTWButton.textContent).toContain('🇹🇼');
  });

  it('SHALL apply active styles to zh-TW button when selected', () => {
    renderSwitcher();
    const zhTWButton = screen.getByTitle('繁體中文');
    fireEvent.click(zhTWButton);
    expect(zhTWButton.className).toContain('bg-coala-cyan/20');
    expect(zhTWButton.className).toContain('border-coala-cyan/50');
  });

  it('SHALL set aria-checked="true" on active button', () => {
    renderSwitcher();
    const zhTWButton = screen.getByTitle('繁體中文');
    fireEvent.click(zhTWButton);
    expect(zhTWButton).toHaveAttribute('aria-checked', 'true');
  });
});
```

### 4.2 Fallback Integration Tests

```typescript
describe('Content Fallback', () => {
  it('SHALL fallback to zh.json when zh-TW key is missing', () => {
    // Mock: zh-TW.json sin la clave "hero.tagline"
    const partialZhTW = { ...zhTWContent };
    delete (partialZhTW as any).hero.tagline;

    const resolved = resolveContent('zh-TW', ['hero', 'tagline']);
    expect(resolved).toBe(zhContent.hero.tagline); // valor de zh.json
  });

  it('SHALL log warning in DEV mode when fallback is used', () => {
    const consoleSpy = vi.spyOn(console, 'warn');
    // Simular import.meta.env.DEV = true
    const resolved = resolveContent('zh-TW', ['hero', 'missingKey']);
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('Missing key')
    );
    consoleSpy.mockRestore();
  });
});
```

---

## 5. E2E Test Cases

### 5.1 Manual E2E Test Checklist

| # | Test | Pasos | Criterio de Éxito |
|---|------|-------|-------------------|
| E2E-01 | Visitante zh-TW | 1. Configurar navegador a zh-TW<br>2. Visitar landing page | Página carga en chino tradicional; flag 🇹🇼 activa |
| E2E-02 | Cambio manual | 1. Iniciar en ES<br>2. Click en 🇹🇼<br>3. Navegar a TODAS las secciones | Cada sección muestra texto en tradicional; sin mezcla zh-CN/zh-TW |
| E2E-03 | Persistencia | 1. Seleccionar zh-TW<br>2. Cerrar pestaña<br>3. Abrir nueva pestaña | Página carga en zh-TW; sin flash de ES |
| E2E-04 | Mobile completo | 1. Emular iPhone SE en DevTools<br>2. Abrir menú hamburguesa<br>3. Seleccionar zh-TW<br>4. Cerrar menú<br>5. Navegar secciones | Menú muestra 4 opciones; zh-TW seleccionable; textos correctos |
| E2E-05 | Ciclo de idiomas | 1. ES → ZH-TW → EN → ZH → ZH-TW → ES | Cada transición es <200ms; sin errores en consola; sin texto mezclado |
| E2E-06 | Animaciones | 1. Iniciar typewriter en Hero<br>2. Cambiar a zh-TW a mitad de animación | Typewriter se reinicia con texto zh-TW; sin glitches visuales |

### 5.2 Lighthouse Audit (E2E automatizable)

```bash
# Usando Lighthouse CLI
npx lighthouse https://oficinadigitalcl.github.io/Landingpage-COALA-SwarmOPS-V2/ \
  --locale=zh-TW \
  --only-categories=accessibility,seo,best-practices \
  --output=json \
  --output-path=./docs/specs/feat-002-i18n-zhtw/lighthouse-zh-TW.json
```

**Criterios de aceptación Lighthouse:**
- Accessibility ≥ 95 (con `lang="zh-TW"`)
- SEO ≥ 95 (con `lang="zh-TW"` correcto)
- Best Practices = 100
- No hay errores de contraste ni ARIA faltantes específicos de zh-TW

---

## 6. Test Data

### 6.1 Mock de navigator.language

```typescript
// src/test-utils/language-mocks.ts

export function mockNavigatorLanguage(lang: string) {
  Object.defineProperty(navigator, 'language', {
    value: lang,
    configurable: true,
    writable: true,
  });
}

export const ZH_TW_LOCALES = ['zh-TW', 'zh-tw', 'zh_TW', 'zh-HK', 'zh-hk', 'zh_HK'];
export const ZH_CN_LOCALES = ['zh-CN', 'zh-cn', 'zh', 'zh-SG', 'zh-sg'];
export const OTHER_LOCALES = ['es-ES', 'es', 'en-US', 'en', 'fr-FR', 'ja-JP'];
```

### 6.2 Fixture: zh-TW.json parcial para tests de fallback

```typescript
// src/data/__fixtures__/zh-TW-partial.json
{
  "navbar": {
    "logo": "COALA SwarmOPS",
    "links": [
      { "text": "首頁", "href": "#hero" }
    ]
  },
  "hero": {
    "id": "hero",
    "title": "COALA-SwarmOPS"
    // "subtitle" y "tagline" faltan intencionalmente para test de fallback
  }
}
```

### 6.3 Caracteres de verificación visual

| Tipo | Carácter | Unicode | Esperado en | NO esperado en |
|------|----------|---------|-------------|----------------|
| Tradicional | 體 | U+9AD4 | zh-TW | — |
| Simplificado | 体 | U+4F53 | — | zh-TW |
| Tradicional | 軟 | U+8EDF | zh-TW | — |
| Simplificado | 软 | U+8F6F | — | zh-TW |
| Tradicional | 資 | U+8CC7 | zh-TW | — |
| Simplificado | 资 | U+8D44 | — | zh-TW |
| Tradicional | 網 | U+7DB2 | zh-TW | — |
| Simplificado | 网 | U+7F51 | — | zh-TW |
| Tradicional | 開 | U+958B | zh-TW | — |
| Simplificado | 开 | U+5F00 | — | zh-TW |
| Tradicional | 關 | U+95DC | zh-TW | — |
| Simplificado | 关 | U+5173 | — | zh-TW |

---

## 7. Regression Tests (Idiomas Existentes)

| # | Test | Verificación |
|---|------|-------------|
| REG-01 | ES: todos los textos en español | Sin cambios en es.json; LanguageSwitcher muestra 🇪🇸 |
| REG-02 | EN: todos los textos en inglés | Sin cambios en en.json; LanguageSwitcher muestra 🇬🇧 |
| REG-03 | ZH: todos los textos en chino simplificado | Sin cambios en zh.json; LanguageSwitcher muestra 🇨🇳 |
| REG-04 | localStorage 'es' persiste correctamente | Sin regresión en detectLanguage |
| REG-05 | localStorage 'en' persiste correctamente | Sin regresión en detectLanguage |
| REG-06 | localStorage 'zh' persiste correctamente | Sin regresión en detectLanguage |
| REG-07 | document.documentElement.lang = 'zh-CN' para zh | Sin cambios en useEffect |
| REG-08 | Mobile menu muestra 3 idiomas existentes + zh-TW | 4 opciones total, layout no roto |

---

## 8. Test Execution Order

```
1. Unit tests (Phase 10) → validar lógica pura sin DOM
2. Integration tests (Phase 11) → validar interacción de componentes
3. Manual visual tests → verificar caracteres en navegadores reales
4. E2E tests (Phase 12) → flujos completos
5. Regression tests → verificar que ES/EN/ZH siguen funcionando
6. Lighthouse audit → accesibilidad y SEO con zh-TW
```

---

## 9. CI/CD Integration

```yaml
# .github/workflows/test.yml (adición sugerida)
jobs:
  test-i18n:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npx vitest run --reporter=verbose
      - name: Validate zh-TW.json structure
        run: |
          node -e "
            const es = require('./src/data/es.json');
            const zhtw = require('./src/data/zh-TW.json');
            const esKeys = JSON.stringify(Object.keys(es).sort());
            const zhtwKeys = JSON.stringify(Object.keys(zhtw).sort());
            if (esKeys !== zhtwKeys) {
              console.error('Key mismatch between es.json and zh-TW.json');
              process.exit(1);
            }
            console.log('✓ zh-TW.json structure matches es.json');
          "
```
