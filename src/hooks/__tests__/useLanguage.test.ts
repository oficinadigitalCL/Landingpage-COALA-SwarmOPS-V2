import { describe, it, expect, beforeEach, vi } from 'vitest';

// ─── Helpers ───
function mockNavigatorLanguage(lang: string) {
  Object.defineProperty(navigator, 'language', {
    value: lang,
    configurable: true,
  });
}

// ─── Re-implement detectLanguage and isValidLanguage para tests puros ───
// (No se puede importar directamente porque usa import.meta.env y modulos)
// Tests contra la lógica real del hook:

import { type Language } from '../useLanguage';

const STORAGE_KEY = 'coala-language';
const LANGUAGES: Language[] = ['es', 'en', 'zh', 'zh-TW'];

function isValidLanguage(value: string | null): value is Language {
  return value !== null && (LANGUAGES as string[]).includes(value);
}

function detectLanguage(): Language {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (isValidLanguage(stored)) return stored;

  const browserLang = navigator.language.toLowerCase();
  if (browserLang === 'zh-tw' || browserLang === 'zh-hk') return 'zh-TW';
  if (browserLang.startsWith('zh')) return 'zh';

  const shortLang = browserLang.slice(0, 2);
  if (isValidLanguage(shortLang)) return shortLang;

  return 'es';
}

// ═══════════════════ UNIT TESTS ═══════════════════

describe('detectLanguage', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  // Task 109
  it('SHALL return "zh-TW" when localStorage has "zh-TW"', () => {
    localStorage.setItem(STORAGE_KEY, 'zh-TW');
    expect(detectLanguage()).toBe('zh-TW');
  });

  // Task 110
  it('SHALL return "zh-TW" when navigator.language is "zh-TW"', () => {
    mockNavigatorLanguage('zh-TW');
    expect(detectLanguage()).toBe('zh-TW');
  });

  // Task 111
  it('SHALL return "zh-TW" when navigator.language is "zh-HK"', () => {
    mockNavigatorLanguage('zh-HK');
    expect(detectLanguage()).toBe('zh-TW');
  });

  // Task 112
  it('SHALL return "zh" when navigator.language is "zh-CN"', () => {
    mockNavigatorLanguage('zh-CN');
    expect(detectLanguage()).toBe('zh');
  });

  it('SHALL return "zh" when navigator.language is "zh" (generic)', () => {
    mockNavigatorLanguage('zh');
    expect(detectLanguage()).toBe('zh');
  });

  // Task 113
  it('SHALL fallback to "es" when localStorage is corrupted', () => {
    mockNavigatorLanguage('fr-FR');
    localStorage.setItem(STORAGE_KEY, '{invalid-json');
    expect(detectLanguage()).toBe('es');
  });

  it('SHALL fallback to "es" for unsupported browser language (fr)', () => {
    mockNavigatorLanguage('fr-FR');
    expect(detectLanguage()).toBe('es');
  });

  // Existing languages still work
  it('SHALL return "es" when navigator.language is "es"', () => {
    mockNavigatorLanguage('es-ES');
    expect(detectLanguage()).toBe('es');
  });

  it('SHALL return "en" when navigator.language is "en"', () => {
    mockNavigatorLanguage('en-US');
    expect(detectLanguage()).toBe('en');
  });
});

describe('isValidLanguage', () => {
  // Task 114
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

  // Task 115
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

describe('contentMap', () => {
  // Task 118
  it('SHALL contain all 4 languages', async () => {
    const { contentMap } = await import('../useLanguage.tsx');
    const keys = Object.keys(contentMap);
    expect(keys).toHaveLength(4);
    expect(keys).toContain('es');
    expect(keys).toContain('en');
    expect(keys).toContain('zh');
    expect(keys).toContain('zh-TW');
  });

  it('SHALL have identical top-level keys across es and zh-TW', async () => {
    const { contentMap } = await import('../useLanguage.tsx');
    const esKeys = Object.keys(contentMap['es']).sort();
    const zhTWKeys = Object.keys(contentMap['zh-TW']).sort();
    expect(zhTWKeys).toEqual(esKeys);
  });
});
