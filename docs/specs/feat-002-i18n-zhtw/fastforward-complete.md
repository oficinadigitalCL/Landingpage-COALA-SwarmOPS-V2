# FastForward Complete — FEAT-002: Soporte Chino Tradicional (ZH-TW)

**Spec Version:** 6.7  
**Feature ID:** FEAT-002  
**Slug:** feat-002-i18n-zhtw  
**Status:** FASTFORWARD_COMPLETE ✓  
**Generated At:** 2026-06-04T20:26:00Z  
**Generator:** fastforward-writer (T3 · Kimi K2.6)

---

## Artifact Folder Contents

| # | Documento | Archivo | Líneas | Estado |
|---|-----------|---------|--------|--------|
| 1 | Requirements | [`requirements.md`](docs/specs/feat-002-i18n-zhtw/requirements.md) | 170+ | ✅ |
| 2 | Design | [`design.md`](docs/specs/feat-002-i18n-zhtw/design.md) | 260+ | ✅ |
| 3 | Tasks | [`tasks.md`](docs/specs/feat-002-i18n-zhtw/tasks.md) | 136 tasks | ✅ |
| 4 | Testing | [`testing.md`](docs/specs/feat-002-i18n-zhtw/testing.md) | 340+ | ✅ |
| 5 | Execution Plan | [`execution_plan.yaml`](docs/specs/feat-002-i18n-zhtw/execution_plan.yaml) | 13 phases | ✅ |

---

## Summary

La feature FEAT-002 agrega **Chino Tradicional (ZH-TW, 繁體中文)** como 4to idioma al sistema i18n existente de la landing page COALA-SwarmOPS v2.

### Archivos a modificar
- [`useLanguage.tsx`](src/hooks/useLanguage.tsx): Extender `Language` type, `LANGUAGES[]`, `detectLanguage()`, `contentMap`, `useEffect` lang, agregar `FALLBACK_MAP` + debounce
- [`LanguageSwitcher.tsx`](src/components/layout/LanguageSwitcher.tsx): Agregar `FLAGS['zh-TW'] = '🇹🇼'`, `LABELS['zh-TW'] = '繁體中文'`
- [`src/index.css`](src/index.css): Font stack `--font-zh-tw` + reglas `html[lang="zh-TW"]`

### Archivos a crear
- [`src/data/zh-TW.json`](src/data/zh-TW.json): 144 líneas, estructura idéntica a [`es.json`](src/data/es.json), caracteres tradicionales

### Decisiones clave
- **Tipo:** `'zh-TW'` (BCP 47 compliant, coincide con `navigator.language`)
- **Bandera:** 🇹🇼 (Taiwán)
- **Label:** `繁體中文`
- **Fallback:** zh-TW → zh → es (transparente al usuario)
- **Font stack:** `"Noto Sans TC", "Microsoft JhengHei", "PingFang TC", system-ui`
- **Debounce:** 150ms para prevenir race conditions

### Tareas totales
**136 tareas** en 13 fases (Phase 0 a Phase 12)

---

## Próximo Paso

Ejecutar: `/run_spec feat-002-i18n-zhtw`

El MicroManager (T3) leerá [`execution_plan.yaml`](docs/specs/feat-002-i18n-zhtw/execution_plan.yaml) y ejecutará las fases secuencialmente,
delegando cada tarea al worker apropiado según el `owner_tier` especificado.

---

FASTFORWARD_COMPLETE ✓
