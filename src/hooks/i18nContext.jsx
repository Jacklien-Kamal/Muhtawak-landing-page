import React, { createContext, useContext, useState, useEffect } from 'react';
import { en } from '../locales/en';
import { ar } from '../locales/ar';

// ─── Supported languages ──────────────────────────────────────────────────────
export const LANGUAGES = {
  en: { label: 'English', locale: en, flag: '🇬🇧' },
  ar: { label: 'العربية', locale: ar, flag: '🇸🇦' },
};

// ─── Context ──────────────────────────────────────────────────────────────────
const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  // Initialise from localStorage or browser preference
  const getInitialLang = () => {
    const saved = localStorage.getItem('muhtawak_lang');
    if (saved && LANGUAGES[saved]) return saved;
    const browser = navigator.language?.slice(0, 2);
    return LANGUAGES[browser] ? browser : 'en';
  };

  const [lang, setLang] = useState(getInitialLang);

  const locale = LANGUAGES[lang].locale;

  // Sync <html dir> and <html lang> attributes whenever language changes
  useEffect(() => {
    document.documentElement.dir = locale.dir;
    document.documentElement.lang = locale.lang;
    localStorage.setItem('muhtawak_lang', lang);
  }, [lang, locale]);

  const switchLang = (newLang) => {
    if (LANGUAGES[newLang]) setLang(newLang);
  };

  return (
    <I18nContext.Provider value={{ lang, locale, switchLang, dir: locale.dir, isRTL: locale.dir === 'rtl' }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used inside <I18nProvider>');
  return ctx;
}