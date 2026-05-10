import React from 'react';
import { useI18n, LANGUAGES } from '../../hooks/i18nContext';

export default function LanguageSwitcher({ className = '' ,sticky}) {
  const { lang, switchLang } = useI18n();

  const toggle = () => {
    const codes = Object.keys(LANGUAGES);
    const next  = codes[(codes.indexOf(lang) + 1) % codes.length];
    switchLang(next);
  };

  const current = LANGUAGES[lang];
  const next    = Object.entries(LANGUAGES).find(([code]) => code !== lang);

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${next?.[1]?.label}`}
      className={`flex ${sticky?"bg-primary/30":"bg-gradient-to-r from-primary via-secondary to-third"} items-center gap-[6px] px-5 py-2 rounded-full border  text-white cursor-pointer  text-[14px] font-medium whitespace-nowrap transition-all duration-200 hover:border-white/70 ${className}`}
    >
      <span className="text-[18px] leading-none">{current.flag}</span>
      <span>{current.label}</span>
    </button>
  );
}