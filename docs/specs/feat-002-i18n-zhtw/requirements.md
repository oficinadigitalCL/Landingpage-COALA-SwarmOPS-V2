# Requirements — FEAT-002: Soporte Chino Tradicional (ZH-TW)

**Spec Version:** 6.7  
**Feature ID:** FEAT-002  
**Slug:** feat-002-i18n-zhtw  
**Status:** ENRICH_APPROVED  
**Story Points:** 5  
**Tier Sugerido:** T0.5  
**Tiempo Estimado:** 2-4 horas

---

## 1. Overview

Agregar soporte para Chino Tradicional (ZH-TW, 繁體中文) como 4to idioma en el sistema i18n existente de la landing page COALA-SwarmOPS v2. El sistema actual soporta español (es), inglés (en) y chino simplificado (zh) mediante el hook [`useLanguage`](src/hooks/useLanguage.tsx) y archivos JSON en [`src/data/`](src/data/).

**Mercado objetivo:** Visitantes de Taiwán, Hong Kong y Macau que usan caracteres tradicionales.

---

## 2. Contexto Técnico

### 2.1 Sistema i18n Actual

| Componente | Archivo | Rol |
|-----------|---------|-----|
| Language type | [`useLanguage.tsx:4`](src/hooks/useLanguage.tsx:4) | `'es' \| 'en' \| 'zh'` |
| LanguageProvider | [`useLanguage.tsx:41`](src/hooks/useLanguage.tsx:41) | Context + localStorage |
| LanguageSwitcher | [`LanguageSwitcher.tsx`](src/components/layout/LanguageSwitcher.tsx) | UI radio group con banderas |
| Data ES | [`es.json`](src/data/es.json) | 144 líneas, ~50 claves |
| Data EN | [`en.json`](src/data/en.json) | Estructura idéntica a es.json |
| Data ZH | [`zh.json`](src/data/zh.json) | Chino simplificado (简体中文) |
| Storage Key | `coala-language` | localStorage |
| HTML lang | `document.documentElement.lang` | SEO + a11y |

### 2.2 Lo que se debe modificar

| Archivo | Cambio |
|---------|--------|
| [`useLanguage.tsx`](src/hooks/useLanguage.tsx) | Extender `Language` type, `LANGUAGES[]`, `detectLanguage()`, `contentMap`, `useEffect` lang |
| [`LanguageSwitcher.tsx`](src/components/layout/LanguageSwitcher.tsx) | Agregar `FLAGS['zh-TW']`, `LABELS['zh-TW']` |
| `src/data/zh-TW.json` | **NUEVO** — 144 líneas, estructura idéntica a [`es.json`](src/data/es.json) |
| [`src/index.css`](src/index.css) | Font stack para caracteres tradicionales |
| [`src/types/index.ts`](src/types/index.ts) | Extender `Locale` si se usa |

---

## 3. Criterios de Aceptación (EARS)

### AC-01: Cambio de Idioma a ZH-TW
**WHEN** el usuario hace click en la bandera de chino tradicional (🇹🇼)  
**THEN** el sistema **SHALL** cambiar TODOS los textos visibles al idioma ZH-TW dentro de 200ms.

### AC-02: Atributo HTML Lang
**WHEN** el sistema cambia a ZH-TW  
**THEN** el atributo `lang` del elemento `<html>` **SHALL** actualizarse a `zh-TW` para SEO y accesibilidad.

### AC-03: Estado Visual Activo
**WHEN** el idioma ZH-TW está activo  
**THEN** el [`LanguageSwitcher`](src/components/layout/LanguageSwitcher.tsx) **SHALL** resaltar la opción ZH-TW con el estado visual activo (`bg-coala-cyan/20`, `border-coala-cyan/50`).

### AC-04: Persistencia localStorage
**WHEN** el usuario recarga la página  
**THEN** el sistema **SHALL** persistir la selección de ZH-TW usando localStorage bajo la clave `coala-language`.

### AC-05: Auto-detección de Navegador
**WHEN** se carga la página por primera vez **AND** el navegador reporta `zh-TW` o `zh-HK` en `navigator.language`  
**THEN** el sistema **SHALL** auto-seleccionar ZH-TW como idioma inicial.

### AC-06: Caracteres Tradicional vs Simplificado
**WHEN** se renderizan textos en ZH-TW  
**THEN** el sistema **SHALL** usar caracteres tradicionales (繁體中文), **NO** simplificados (简体中文).

### AC-07: Fallback de Traducciones Faltantes
**WHEN** el archivo `zh-TW.json` tiene claves faltantes  
**THEN** el sistema **SHALL** hacer fallback a [`zh.json`](src/data/zh.json) (simplificado) **AND** loggear warning en consola en modo desarrollo.

### AC-08: Soporte Mobile
**WHEN** el sistema detecta dispositivos móviles  
**THEN** el selector de idioma **SHALL** mostrar ZH-TW como opción clickeable en el menú hamburguesa/mobile.

---

## 4. Edge Cases

| ID | Caso Límite | Comportamiento Esperado |
|----|-------------|------------------------|
| EC-01 | localStorage corrupto o valor inválido | Fallback a `es` (español), ignorar valor corrupto sin crash |
| EC-02 | Navegador sin soporte para caracteres tradicionales | Usar `font-family` con fallbacks: `"Noto Sans TC", "Microsoft JhengHei", "PingFang TC", system-ui` |
| EC-03 | Cambio rápido de idioma (<100ms entre clicks) | Debounce de 150ms para evitar race conditions |
| EC-04 | Archivo `zh-TW.json` no existe o está corrupto | Fallback a `zh.json`, error silencioso en consola, no romper UI |
| EC-05 | Cambio de idioma durante animación/typewriter | Abortar animación, aplicar nuevo idioma inmediatamente, reiniciar efecto |
| EC-06 | Texto en ZH-TW excede ancho de contenedor | Aplicar `word-break: keep-all` y `overflow-wrap: break-word` para ZH-TW |

---

## 5. Escenarios BDD (Gherkin)

```gherkin
Scenario: Usuario selecciona chino tradicional desde el navbar
  Given el usuario está en la landing page
  And el idioma actual es "es"
  When hace click en la bandera 🇹🇼 "繁體中文"
  Then todos los textos cambian a chino tradicional
  And el botón ZH-TW muestra el estado activo
  And localStorage contiene "zh-TW"

Scenario: Detección automática de idioma del navegador
  Given el usuario visita por primera vez
  And navigator.language es "zh-TW"
  And no hay valor en localStorage
  When carga la página
  Then el idioma seleccionado es ZH-TW
  And se muestra la bandera 🇹🇼 activa

Scenario: Persistencia de idioma tras recarga
  Given el usuario seleccionó ZH-TW previamente
  And localStorage tiene "zh-TW"
  When recarga la página
  Then el idioma mostrado es ZH-TW
  And no hay flash de idioma anterior

Scenario: Fallback de traducciones faltantes
  Given el archivo zh-TW.json existe
  But falta la clave "hero.tagline"
  When el usuario selecciona ZH-TW
  Then el sistema muestra el valor de zh.json para esa clave
  And el resto del contenido usa ZH-TW

Scenario: Cambio de idioma en dispositivo móvil
  Given el usuario está en viewport móvil (<768px)
  When abre el menú hamburguesa
  Then ve la opción "繁體中文" 🇹🇼 en el LanguageSwitcher
  And puede seleccionarla normalmente
```

---

## 6. Definition of Done

- [ ] Archivo [`src/data/zh-TW.json`](src/data/zh-TW.json) creado con todas las traducciones (144 líneas, estructura idéntica a [`es.json`](src/data/es.json))
- [ ] Tipo `Language` en [`useLanguage.tsx`](src/hooks/useLanguage.tsx) extendido para incluir `'zh-TW'`
- [ ] `contentMap` actualizado para importar y mapear `zh-TW.json`
- [ ] [`LanguageSwitcher.tsx`](src/components/layout/LanguageSwitcher.tsx) actualizado con bandera 🇹🇼 y label "繁體中文"
- [ ] Función `detectLanguage()` actualizada para reconocer `zh-TW` y `zh-HK` del navegador
- [ ] `document.documentElement.lang` se actualiza correctamente a `zh-TW`
- [ ] CSS verificado para renderizado de caracteres tradicionales
- [ ] Testing manual completado (cambio, persistencia, mobile)
- [ ] Sin errores en consola
- [ ] Lighthouse accesibilidad sin problemas

---

## 7. Riesgos

| Riesgo | Prob. | Impacto | Mitigación |
|--------|-------|---------|------------|
| Confusión entre ZH y ZH-TW | Media | Media | Labels claros: "中文" vs "繁體中文" |
| Aumento bundle size | Baja | Baja | Lazy load de zh-TW.json |
| Traducción incorrecta de términos técnicos | Media | Alta | Revisar con hablante nativo |
| Rotura de layout con caracteres complejos | Baja | Media | Test responsive específico |

---

## 8. Dependencias

- **Internas:** [`useLanguage.tsx`](src/hooks/useLanguage.tsx), [`LanguageSwitcher.tsx`](src/components/layout/LanguageSwitcher.tsx)
- **Externas:** Ninguna
- **Datos:** Traducciones ZH-TW (aprox 50 claves, 144 líneas JSON)

---

## 9. Notas de Traducción (ZH-TW vs ZH-CN)

Usar terminología taiwanesa/hongkonesa:

| Concepto | ZH-CN (Simplificado) | ZH-TW (Tradicional) |
|----------|---------------------|---------------------|
| Software | 软件 | 軟體 |
| Data | 数据 | 資料 |
| Program | 程序 | 程式 |
| Network | 网络 | 網路 |
| Information | 信息 | 資訊 |
| File | 文件 | 檔案 |
| Setting | 设置 | 設定 |
| Installation | 安装 | 安裝 |
| Community | 社区 | 社群 |

---

## 10. Estructura del Archivo zh-TW.json

```json
{
  "navbar": { "logo": "...", "links": [...] },
  "hero": { "id": "hero", "title": "...", "subtitle": "...", "description": "...", "tagline": "...", "ctas": [...] },
  "problem": { "id": "problem", "title": "...", "subtitle": "...", "description": "...", "features": [...] },
  "solution": { "id": "solution", "title": "...", "subtitle": "...", "description": "...", "features": [...], "ctas": [...] },
  "howItWorks": { "id": "how-it-works", "title": "...", "subtitle": "...", "description": "...", "steps": [...], "ctas": [...] },
  "modesShowcase": { "id": "modes", "title": "...", "subtitle": "...", "description": "...", "ctas": [...] },
  "whoIsItFor": { "id": "who-is-it-for", "title": "...", "subtitle": "...", "description": "...", "columns": [...] },
  "pricing": { "id": "pricing", "title": "...", "subtitle": "...", "description": "...", "tiers": [...], "ctas": [...] },
  "community": { "id": "community", "title": "...", "subtitle": "...", "description": "...", "ctas": [...] },
  "footer": { "copyright": "...", "links": [...] }
}
```

---

## 11. Constraints

- ❌ NO usar librerías externas de i18n (react-i18next, etc.). El sistema custom existente es suficiente.
- ❌ NO modificar la estructura JSON. Debe ser idéntica a [`es.json`](src/data/es.json).
- ❌ NO romper los idiomas existentes (es, en, zh).
- ✅ El tipo `Language` debe ser `'es' | 'en' | 'zh' | 'zh-TW'`.
- ✅ La clave de localStorage y el nombre del contexto no cambian.
- ✅ El fallback ZH-TW → ZH debe ser transparente para el usuario.
