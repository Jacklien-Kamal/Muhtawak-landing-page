import React, { useState, useEffect } from 'react';
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher';
import { useI18n } from '../hooks/i18nContext';

const Header = () => {
  const { locale, isRTL } = useI18n();
  const [sticky, setSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [otherOpen, setOtherOpen] = useState(false);

  const t = locale.nav;

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: t.home,       href: '#parallax'    },
    { label: t.features,   href: '#features'    },
    { label: t.howItWorks, href: '#how-it-works' },
    { label: t.pricing,    href: '#pricing'     },
    { label: t.faq,        href: '#faq'         },
    { label: t.contact,    href: '#contact'     },
  ];

  const otherLinks = [
    { label: t.pricing,      href: '#pricing'          },
    { label: 'Blog',         href: 'blog.html'         },
    { label: 'Blog Details', href: 'blog-details.html' },
  ];

  // Icon color should always contrast against the current header bg
  const iconColor = sticky ? '#ffffff' : '#190a32';

  return (
    <header className="relative z-[999]">
      <div
        className={[
          'w-full md:px-52 fixed top-0 left-0 z-[9999] transition-all duration-500',
          sticky
            ? 'bg-[#782551] text-white shadow-[0_10px_15px_rgba(25,25,25,0.1)]'
            : 'bg-transparent text-[#190a32]',
        ].join(' ')}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4 lg:py-0">

            {/* ── Logo ── */}
            <a href="index.html" className="flex-shrink-0">
              <img src="img/logo/logo.webp" alt="logo" className="h-10 w-auto" />
            </a>

            {/* ── Desktop Nav ── */}
            <nav className={`hidden lg:flex items-center gap-0 ${isRTL ? 'flex-row' : ''}`}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative block font-medium text-sm transition-colors duration-300 px-5 py-[34px] hover:text-[#f4a0cc]"
                >
                  {link.label}
                </a>
              ))}

              {/* Other dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setOtherOpen(true)}
                onMouseLeave={() => setOtherOpen(false)}
              >
                <button
                  className="flex items-center gap-1 font-medium text-sm transition-colors duration-300 px-5 py-[34px] bg-transparent border-none cursor-pointer hover:text-[#f4a0cc] inherit"
                  style={{ color: 'inherit' }}
                >
                  {isRTL ? 'أخرى' : 'Other'}
                  <span className="text-[10px]">▾</span>
                </button>

                {otherOpen && (
                  <ul
                    className={[
                      'absolute top-full bg-white min-w-[220px] z-[9999]',
                      'border-t-4 border-[#782551] shadow-[0_10px_15px_rgba(25,25,25,0.1)]',
                      'mt-0 py-0',
                      isRTL ? 'right-0' : 'left-0',
                    ].join(' ')}
                  >
                    {otherLinks.map((item) => (
                      <li key={item.href} className="border-b border-gray-100 last:border-0 w-full">
                        <a
                          href={item.href}
                          className="block px-4 py-[15px] text-sm text-[#190a32] font-medium hover:text-[#782551] transition-colors duration-200"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </nav>

            {/* ── Right: Language Switcher (desktop) ── */}
            <div className="hidden xl:flex items-center">
              <LanguageSwitcher />
            </div>

            {/* ── Mobile Hamburger ── */}
            <button
              className="lg:hidden cursor-pointer bg-transparent border-none p-2 rounded-md transition-colors duration-200"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
              style={{ color: iconColor }}
            >
              {mobileOpen ? (
                /* ✕ close icon */
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                /* ☰ hamburger icon — short middle line */
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 12h10" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 18h16" />
                </svg>
              )}
            </button>

          </div>

          {/* ── Mobile Menu ── */}
          {mobileOpen && (
            <nav className={`lg:hidden bg-white px-4 pb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
              <ul>
                {navLinks.map((link) => (
                  <li key={link.href} className="border-b border-gray-100">
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 px-4 text-sm font-medium text-[#707692] hover:text-[#782551] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}

                {/* Mobile Other submenu */}
                <li className="border-b border-gray-100">
                  <button
                    className={`w-full py-3 px-4 text-sm font-medium text-[#707692] hover:text-[#782551] bg-transparent border-none cursor-pointer transition-colors duration-200 flex items-center gap-1 ${isRTL ? 'flex-row-reverse justify-end' : 'justify-start'}`}
                    onClick={() => setOtherOpen((o) => !o)}
                  >
                    {isRTL ? 'أخرى' : 'Other'}
                    <span className="text-xs">{otherOpen ? '▴' : '▾'}</span>
                  </button>
                  {otherOpen && (
                    <ul className="bg-gray-50 border-t border-gray-100">
                      {otherLinks.map((item) => (
                        <li key={item.href} className="border-b border-gray-100 last:border-0">
                          <a
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-3 px-8 text-sm text-[#190a32] hover:text-[#782551] transition-colors duration-200"
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                {/* Language switcher in mobile */}
                <li className="pt-3 px-4">
                  <LanguageSwitcher />
                </li>
              </ul>
            </nav>
          )}

        </div>
      </div>
    </header>
  );
};

export default Header;