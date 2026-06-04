
# PROMPT: Implementar Sistema de Traducción Multilingüe (ES / EN / ZH) para Landing Page COALA-SwarmOPS V2

## Contexto del Proyecto
- **Repositorio**: Landingpage-COALA-SwarmOPS-V2
- **URL actual**: https://oficinadigitalcl.github.io/Landingpage-COALA-SwarmOPS-V2/
- **Tecnología**: Landing page estática (HTML/CSS/JS) — verificar si usa framework (React/Vue/Next.js) o vanilla JS
- **Estado actual**: Las banderas de idioma (🇨🇱 🇺🇸 🇨🇳) ya están visualmente presentes en la UI pero NO están funcionales
- **Idiomas objetivo**: 
  - Español (ES) — idioma base/default
  - Inglés (EN) 
  - Chino Simplificado (ZH-CN) — NOTA: usar ZH-CN, no ZH-TW

---

## TAREA 1: Análisis del Código Actual

1. Inspeccionar el archivo principal `index.html` (o el entry point del framework)
2. Identificar TODOS los textos visibles en español que necesitan traducción:
   - Títulos (H1, H2, H3)
   - Párrafos y descripciones
   - Botones CTA (Call-to-Action)
   - Labels de formularios
   - Navigation/menu items
   - Footer text
   - Meta tags (title, description, og tags)
   - Alt text de imágenes
3. Verificar si ya existe algún sistema de i18n o si es vanilla JS puro
4. Identificar dónde están ubicadas las banderas en el DOM (clase, ID, o selector)

---

## TAREA 2: Estructura de Archivos de Traducción

Crear el siguiente esquema de archivos:

```
/landingpage/
├── index.html                 # HTML base con placeholders
├── js/
│   ├── i18n.js               # Motor de traducción
│   └── translations.js       # Diccionario de traducciones
├── css/
│   └── (estilos existentes)
└── assets/
    └── flags/                # Si las banderas son imágenes, verificar paths
```

### Formato del diccionario (`translations.js`):
```javascript
const translations = {
  es: {
    // Español (default)
    "nav.home": "Inicio",
    "nav.features": "Características",
    "nav.pricing": "Precios",
    "nav.contact": "Contacto",
    "hero.title": "COALA SwarmOPS",
    "hero.subtitle": "Operaciones enjambre inteligentes",
    "hero.cta": "Comenzar ahora",
    // ... etc
  },
  en: {
    "nav.home": "Home",
    "nav.features": "Features",
    "nav.pricing": "Pricing",
    "nav.contact": "Contact",
    "hero.title": "COALA SwarmOPS",
    "hero.subtitle": "Intelligent Swarm Operations",
    "hero.cta": "Get Started",
    // ... etc
  },
  "zh-CN": {
    "nav.home": "首页",
    "nav.features": "功能",
    "nav.pricing": "价格",
    "nav.contact": "联系我们",
    "hero.title": "COALA SwarmOPS",
    "hero.subtitle": "智能群体操作",
    "hero.cta": "立即开始",
    // ... etc
  }
};
```

---

## TAREA 3: Motor de Traducción (i18n.js)

Implementar un motor lightweight compatible con vanilla JS:

```javascript
class I18n {
  constructor() {
    this.currentLang = localStorage.getItem('lang') || 'es';
    this.translations = translations;
    this.init();
  }

  init() {
    this.applyLanguage(this.currentLang);
    this.bindFlagEvents();
  }

  setLanguage(lang) {
    if (!this.translations[lang]) return;
    this.currentLang = lang;
    localStorage.setItem('lang', lang);
    this.applyLanguage(lang);
    this.updateMetaTags(lang);
    this.updateHtmlLang(lang);
  }

  applyLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (this.translations[lang][key]) {
        el.textContent = this.translations[lang][key];
      }
    });

    // Para placeholders de inputs
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (this.translations[lang][key]) {
        el.placeholder = this.translations[lang][key];
      }
    });
  }

  bindFlagEvents() {
    // Selector: buscar elementos de banderas existentes
    // Asumir que tienen clases como .flag-es, .flag-en, .flag-zh
    document.querySelector('.flag-es')?.addEventListener('click', () => this.setLanguage('es'));
    document.querySelector('.flag-en')?.addEventListener('click', () => this.setLanguage('en'));
    document.querySelector('.flag-zh')?.addEventListener('click', () => this.setLanguage('zh-CN'));

    // O si usan IDs: #lang-es, #lang-en, #lang-zh
    document.querySelector('#lang-es')?.addEventListener('click', () => this.setLanguage('es'));
    document.querySelector('#lang-en')?.addEventListener('click', () => this.setLanguage('en'));
    document.querySelector('#lang-zh')?.addEventListener('click', () => this.setLanguage('zh-CN'));
  }

  updateHtmlLang(lang) {
    document.documentElement.lang = lang;
  }

  updateMetaTags(lang) {
    // Actualizar title y meta description según el idioma
    const titleKey = 'meta.title';
    const descKey = 'meta.description';
    if (this.translations[lang][titleKey]) {
      document.title = this.translations[lang][titleKey];
    }
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && this.translations[lang][descKey]) {
      metaDesc.setAttribute('content', this.translations[lang][descKey]);
    }
  }
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
  window.i18n = new I18n();
});
```

---

## TAREA 4: Modificar el HTML

### 4.1 Agregar atributos `data-i18n` a todos los elementos con texto:

ANTES:
```html
<h1>COALA SwarmOPS</h1>
<p>Operaciones enjambre inteligentes para tu negocio</p>
<button>Comenzar ahora</button>
```

DESPUÉS:
```html
<h1 data-i18n="hero.title">COALA SwarmOPS</h1>
<p data-i18n="hero.subtitle">Operaciones enjambre inteligentes para tu negocio</p>
<button data-i18n="hero.cta">Comenzar ahora</button>
```

### 4.2 Linkear las banderas existentes:

Buscar en el HTML actual las banderas. Si son imágenes:
```html
<!-- ANTES (solo visual) -->
<img src="assets/flags/chile.png" alt="Español">
<img src="assets/flags/usa.png" alt="English">
<img src="assets/flags/china.png" alt="中文">

<!-- DESPUÉS (clickables y accesibles) -->
<button class="lang-btn flag-es" aria-label="Cambiar a Español">
  <img src="assets/flags/chile.png" alt="ES">
</button>
<button class="lang-btn flag-en" aria-label="Switch to English">
  <img src="assets/flags/usa.png" alt="EN">
</button>
<button class="lang-btn flag-zh" aria-label="切换到中文">
  <img src="assets/flags/china.png" alt="ZH">
</button>
```

Si las banderas ya están en un componente específico (ej: navbar, header), mantener esa ubicación pero agregar los event listeners correspondientes.

### 4.3 Estado activo de la bandera seleccionada:

Agregar CSS para resaltar el idioma activo:
```css
.lang-btn {
  opacity: 0.6;
  transition: opacity 0.3s;
  background: none;
  border: none;
  cursor: pointer;
}
.lang-btn:hover {
  opacity: 0.8;
}
.lang-btn.active {
  opacity: 1;
  box-shadow: 0 0 0 2px #007bff;
  border-radius: 4px;
}
```

Y en el JS, agregar clase `active` al botón del idioma actual:
```javascript
highlightActiveLang(lang) {
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.querySelector(`.flag-${lang === 'zh-CN' ? 'zh' : lang}`);
  activeBtn?.classList.add('active');
}
```

---

## TAREA 5: Traducciones Específicas

### Consideraciones para Chino (ZH-CN):
- Usar caracteres simplificados (简体中文), NO tradicionales (繁體中文)
- Asegurar que la fuente soporte caracteres chinos (system-ui, "Noto Sans SC", "Microsoft YaHei", "PingFang SC")
- Verificar que el encoding del HTML sea UTF-8: `<meta charset="UTF-8">`
- Los textos chinos pueden requerir más o menos espacio visual; verificar layout responsive

### Consideraciones para Inglés:
- Mantener consistencia en terminología técnica (ej: "SwarmOPS" es marca, no traducir)
- Usar inglés estadounidense (US) como default
- Verificar que textos no se desborden de botones/containers

### SEO / Meta Tags por idioma:
```javascript
"meta.title": {
  es: "COALA SwarmOPS - Operaciones Enjambre Inteligentes",
  en: "COALA SwarmOPS - Intelligent Swarm Operations",
  "zh-CN": "COALA SwarmOPS - 智能群体操作平台"
},
"meta.description": {
  es: "Plataforma de operaciones multi-agente para automatización empresarial",
  en: "Multi-agent operations platform for business automation",
  "zh-CN": "多代理运营平台，实现企业自动化"
}
```

---

## TAREA 6: Persistencia y UX

1. **localStorage**: Guardar preferencia de idioma (`localStorage.setItem('lang', 'en')`)
2. **Detección de navegador**: Opcionalmente detectar `navigator.language` en primera visita
3. **URL hash**: Opcionalmente usar `#lang=en` para compartir links en idioma específico
4. **Smooth transition**: Agregar fade-in/out al cambiar idioma para evitar parpadeo brusco

---

## TAREA 7: Testing Checklist

- [ ] Click en bandera 🇨🇱 → todo el texto vuelve a español
- [ ] Click en bandera 🇺🇸 → todo el texto cambia a inglés
- [ ] Click en bandera 🇨🇳 → todo el texto cambia a chino simplificado
- [ ] Recargar página → mantiene el último idioma seleccionado (localStorage)
- [ ] Verificar que no queden textos "hardcoded" en español sin `data-i18n`
- [ ] Verificar que meta tags (title, description) cambian según idioma
- [ ] Verificar que `lang` attribute del `<html>` tag se actualiza (`es`, `en`, `zh-CN`)
- [ ] Verificar que los inputs/forms tienen placeholders traducidos
- [ ] Verificar visualmente que los textos en chino no rompen el layout
- [ ] Verificar en mobile que las banderas son clickeables

---

## OUTPUT ESPERADO

1. Archivo `js/translations.js` con TODAS las traducciones ES/EN/ZH-CN
2. Archivo `js/i18n.js` con el motor de traducción
3. `index.html` modificado con atributos `data-i18n` en todos los elementos textuales
4. Las banderas existentes linkeadas y funcionales
5. CSS actualizado para estado activo de bandera
6. localStorage funcionando para persistencia

---

## NOTAS IMPORTANTES

- NO usar librerías externas pesadas (no jQuery, no i18next, no react-i18next) — mantenerlo vanilla JS para compatibilidad con GitHub Pages estático
- Si el proyecto usa React/Vue/Next.js, adaptar el motor a hooks/components pero mantener la misma lógica de diccionario
- El texto en español que ya existe en el HTML debe quedar como fallback (texto dentro del tag) — el `data-i18n` sobrescribe al cargar
- Priorizar velocidad: el idioma debe aplicarse ANTES del primer paint si es posible (evitar flash de español antes de cambiar)
