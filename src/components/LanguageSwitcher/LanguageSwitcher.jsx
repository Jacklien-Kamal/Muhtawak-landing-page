import React, { useState, useRef, useEffect } from 'react';
import { useI18n, LANGUAGES } from '../../hooks/i18nContext';

/**
 * LanguageSwitcher
 *
 * Drop-in component — place it anywhere in your Header or Navbar.
 *
 * Usage:
 *   import LanguageSwitcher from './components/LanguageSwitcher';
 *   <LanguageSwitcher />
 */
export default function LanguageSwitcher({ className = '' }) {
  const { lang, switchLang, isRTL } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const current = LANGUAGES[lang];

  return (
    <div
      ref={ref}
      className={`language-switcher ${className}`}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      {/* Trigger button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '6px 12px',
          background: 'transparent',
          border: '1px solid rgba(255,255,255,0.35)',
          borderRadius: '6px',
          cursor: 'pointer',
          color: 'inherit',
          fontSize: '14px',
          fontWeight: 500,
          transition: 'border-color 0.2s',
          whiteSpace: 'nowrap',
        }}
      >
        <span style={{ fontSize: '18px', lineHeight: 1 }}>{current.flag}</span>
        <span>{current.label}</span>
        <span
          style={{
            fontSize: '10px',
            marginLeft: isRTL ? 0 : '2px',
            marginRight: isRTL ? '2px' : 0,
            transform: open ? 'rotate(180deg)' : 'rotate(0)',
            transition: 'transform 0.2s',
            display: 'inline-block',
          }}
        >
          ▾
        </span>
      </button>

      {/* Dropdown */}
      {open && (
        <ul
          role="listbox"
          style={{
            position: 'absolute',
            top: 'calc(100% + 6px)',
            [isRTL ? 'left' : 'right']: 0,
            background: '#fff',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
            listStyle: 'none',
            margin: 0,
            padding: '4px 0',
            minWidth: '140px',
            zIndex: 9999,
          }}
        >
          {Object.entries(LANGUAGES).map(([code, { label, flag }]) => (
            <li
              key={code}
              role="option"
              aria-selected={lang === code}
              onClick={() => {
                switchLang(code);
                setOpen(false);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '9px 16px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: lang === code ? 600 : 400,
                color: lang === code ? '#6c63ff' : '#374151',
                background: lang === code ? '#f5f3ff' : 'transparent',
                transition: 'background 0.15s',
                direction: code === 'ar' ? 'rtl' : 'ltr',
              }}
              onMouseEnter={(e) => {
                if (lang !== code) e.currentTarget.style.background = '#f9fafb';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = lang === code ? '#f5f3ff' : 'transparent';
              }}
            >
              <span style={{ fontSize: '18px', lineHeight: 1 }}>{flag}</span>
              <span>{label}</span>
              {lang === code && (
                <span style={{ marginLeft: 'auto', marginRight: 0, color: '#6c63ff', fontSize: '12px' }}>✓</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}