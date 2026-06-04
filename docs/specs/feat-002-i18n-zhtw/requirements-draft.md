# Requirements Draft - FEAT-002: Soporte Chino Tradicional (ZH-TW)

## Historia de Usuario

Como **visitante de habla china tradicional (Taiwán, Hong Kong, Macau)**,  
Quiero **poder leer el landing page en chino tradicional (ZH-TW) seleccionando la bandera correspondiente**,  
Para **comprender el valor del ecosistema COALA-SwarmOPS y aumentar la adopción en mercados sinohablantes tradicionales**.

---

## Criterios de Aceptación (EARS)

### AC-01: Cambio de Idioma a ZH-TW
WHEN el usuario hace click en la bandera de chino tradicional (🇹🇼)  
THEN el sistema SHALL cambiar TODOS los textos visibles al idioma ZH-TW dentro de 200ms.

### AC-02: Atributo HTML Lang
WHEN el sistema cambia a ZH-TW  
THEN el atributo `lang` del elemento `<html>` SHALL actualizarse a `zh-TW` para SEO y accesibilidad.

### AC-03: Estado Visual Activo
WHEN el idioma ZH-TW está activo  
THEN el LanguageSwitcher SHALL resaltar la opción ZH-TW con el estado visual activo (`bg-coala-cyan/20`, `border-coala-cyan/50`).

### AC-04: Persistencia localStorage
WHEN el usuario recarga la página  
THEN el sistema SHALL persistir la selección de ZH-TW usando localStorage bajo la clave `coala-language`.

### AC-05: Auto-detección de Navegador
WHEN se carga la página por primera vez AND el navegador reporta `zh-TW` o `zh-HK` en `navigator.language`  
THEN el sistema SHALL auto-seleccionar ZH-TW como idioma inicial.

### AC-06: Caracteres Tradicional vs Simplificado
WHEN se renderizan textos en ZH-TW  
THEN el sistema SHALL usar caracteres tradicionales (繁體中文), NO simplificados (简体中文).

### AC-07: Fallback de Traducciones Faltantes
WHEN el archivo `zh-TW.json` tiene claves faltantes  
THEN el sistema SHALL hacer fallback a `zh.json` (simplificado) AND loggear warning en consola en modo desarrollo.

### AC-08: Soporte Mobile
WHEN el sistema detecta dispositivos móviles  
THEN el selector de idioma SHALL mostrar ZH-TW como opción clickeable en el menú hamburguesa/mobile.

---

## Edge Cases

| ID | Caso Límite | Comportamiento Esperado |
|----|-------------|------------------------|
| EC-01 | localStorage corrupto o valor inválido | Fallback a `es` (español), ignorar valor corrupto sin crash |
| EC-02 | Navegador sin soporte para caracteres tradicionales | Usar `font-family` con fallbacks: `"Noto Sans TC", "Microsoft JhengHei", "PingFang TC", system-ui` |
| EC-03 | Cambio rápido de idioma (<100ms entre clicks) | Debounce de 150ms para evitar race conditions |
| EC-04 | Archivo `zh-TW.json` no existe o está corrupto | Fallback a `zh.json`, error silencioso en consola, no romper UI |
| EC-05 | Cambio de idioma durante animación/typewriter | Abortar animación, aplicar nuevo idioma inmediatamente, reiniciar efecto |
| EC-06 | Texto en ZH-TW excede ancho de contenedor | Aplicar `word-break: keep-all` y `overflow-wrap: break-word` para ZH-TW |

---

## Escenarios BDD (Gherkin)

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

## Definition of Done

- [ ] Archivo `src/data/zh-TW.json` creado con todas las traducciones (144 líneas, estructura idéntica a `es.json`)
- [ ] Tipo `Language` en `useLanguage.tsx` extendido para incluir `'zh-TW'`
- [ ] `contentMap` actualizado para importar y mapear `zh-TW.json`
- [ ] `LanguageSwitcher.tsx` actualizado con bandera 🇹🇼 y label "繁體中文"
- [ ] Función `detectLanguage()` actualizada para reconocer `zh-TW` y `zh-HK` del navegador
- [ ] `document.documentElement.lang` se actualiza correctamente a `zh-TW`
- [ ] CSS verificado para renderizado de caracteres tradicionales
- [ ] Testing manual completado (cambio, persistencia, mobile)
- [ ] Sin errores en consola
- [ ] Lighthouse accesibilidad sin problemas

---

## Riesgos

| Riesgo | Prob. | Impacto | Mitigación |
|--------|-------|---------|------------|
| Confusión entre ZH y ZH-TW | Media | Media | Labels claros: "中文" vs "繁體中文" |
| Aumento bundle size | Baja | Baja | Lazy load de zh-TW.json |
| Traducción incorrecta de términos técnicos | Media | Alta | Revisar con hablante nativo |
| Rotura de layout con caracteres complejos | Baja | Media | Test responsive específico |

---

## Dependencias

- **Internas:** `useLanguage.tsx`, `LanguageSwitcher.tsx`
- **Externas:** Ninguna
- **Datos:** Traducciones ZH-TW (aprox 50 claves, 144 líneas JSON)

---

## Estimación

| Aspecto | Valor |
|---------|-------|
| Story Points | **5** |
| Tier sugerido | **T0.5** |
| Tiempo estimado | 2-4 horas |
| Complejidad | Media |

---

## FEAT-ID

**FEAT-002**

---

## Notas de Traducción (ZH-TW vs ZH-CN)

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
| Feature | 功能 | 功能 (igual) |

---

## Estructura del Archivo zh-TW.json

```json
{
  "navbar": { "logo": "...", "links": [...] },
  "hero": { "title": "...", "subtitle": "...", "description": "...", ... },
  "problem": { "title": "...", "subtitle": "...", "features": [...] },
  "solution": { "title": "...", "subtitle": "...", "features": [...] },
  "howItWorks": { "title": "...", "steps": [...] },
  "modesShowcase": { "title": "...", ... },
  "whoIsItFor": { "title": "...", "columns": [...] },
  "pricing": { "title": "...", "tiers": [...] },
  "community": { "title": "...", ... },
  "footer": { "copyright": "...", "links": [...] }
}
```
