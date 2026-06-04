import { useLanguage, type Language } from '../../hooks/useLanguage';
import { cn } from '../../lib/utils';

const FLAGS: Record<Language, string> = {
  es: '🇪🇸',
  en: '🇬🇧',
  zh: '🇨🇳',
  'zh-TW': '🇹🇼',
};

const LABELS: Record<Language, string> = {
  es: 'ES',
  en: 'EN',
  zh: '中文',
  'zh-TW': '繁體中文',
};

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1" role="radiogroup" aria-label="Seleccionar idioma">
      {(Object.keys(FLAGS) as Language[]).map((lang) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang)}
          className={cn(
            'px-2 py-1 text-sm rounded transition-all duration-200',
            language === lang
              ? 'bg-coala-cyan/20 text-coala-cyan border border-coala-cyan/50'
              : 'text-gray-500 hover:text-gray-300 hover:bg-white/5 border border-transparent',
          )}
          role="radio"
          aria-checked={language === lang}
          aria-label={LABELS[lang]}
          title={LABELS[lang]}
        >
          <span className="text-base leading-none">{FLAGS[lang]}</span>
          <span className="ml-1 hidden sm:inline text-xs">{LABELS[lang]}</span>
        </button>
      ))}
    </div>
  );
}

export { LanguageSwitcher };
