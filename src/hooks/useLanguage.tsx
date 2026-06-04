import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { ReactNode } from 'react';

export type Language = 'es' | 'en' | 'zh';

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = 'coala-language';

const LANGUAGES: Language[] = ['es', 'en', 'zh'];

function isValidLanguage(value: string | null): value is Language {
  return value !== null && (LANGUAGES as string[]).includes(value);
}

function detectLanguage(): Language {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (isValidLanguage(stored)) return stored;

  const browserLang = navigator.language.slice(0, 2);
  if (isValidLanguage(browserLang)) return browserLang;

  return 'es';
}

import esContent from '../data/es.json';
import enContent from '../data/en.json';
import zhContent from '../data/zh.json';

export const contentMap: Record<Language, typeof esContent> = {
  es: esContent,
  en: enContent,
  zh: zhContent,
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(detectLanguage);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : language;
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
