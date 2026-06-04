import { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import type { ReactNode } from 'react';

export type Language = 'es' | 'en' | 'zh' | 'zh-TW';

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = 'coala-language';

const LANGUAGES: Language[] = ['es', 'en', 'zh', 'zh-TW'];

function isValidLanguage(value: string | null): value is Language {
  return value !== null && (LANGUAGES as string[]).includes(value);
}

function detectLanguage(): Language {
  // 1. localStorage — máxima prioridad
  const stored = localStorage.getItem(STORAGE_KEY);
  if (isValidLanguage(stored)) return stored;

  // 2. navigator.language — soporte completo de locale
  const browserLang = navigator.language.toLowerCase();

  // Coincidencia exacta: zh-TW, zh-HK → chino tradicional
  if (browserLang === 'zh-tw' || browserLang === 'zh-hk') return 'zh-TW';

  // Coincidencia parcial: zh (simplificado, zh-CN, zh-SG, etc.)
  if (browserLang.startsWith('zh')) return 'zh';

  // Coincidencia directa: es, en
  const shortLang = browserLang.slice(0, 2);
  if (isValidLanguage(shortLang)) return shortLang;

  // 3. Default seguro
  return 'es';
}

import esContent from '../data/es.json';
import enContent from '../data/en.json';
import zhContent from '../data/zh.json';
import zhTWContent from '../data/zh-TW.json';

export const contentMap: Record<Language, typeof esContent> = {
  es: esContent,
  en: enContent,
  zh: zhContent,
  'zh-TW': zhTWContent,
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(detectLanguage);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const setLanguage = useCallback((lang: Language) => {
    // Actualizar estado inmediatamente para que el UI refleje el cambio al instante
    setLanguageState(lang);
    // Debounce solo el persist a localStorage para evitar escrituras innecesarias
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, lang);
    }, 150);
  }, []);

  useEffect(() => {
    switch (language) {
      case 'zh':
        document.documentElement.lang = 'zh-CN';
        break;
      case 'zh-TW':
        document.documentElement.lang = 'zh-TW';
        break;
      default:
        document.documentElement.lang = language;
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}
