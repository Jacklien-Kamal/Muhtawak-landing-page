// Header.jsx
import React, { useState, useEffect } from 'react';
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher';
import { useI18n } from '../hooks/i18nContext';
import { useRole } from '../hooks/roleContext';

const Header = () => {
  const { locale, isRTL } = useI18n();
  const [sticky, setSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [otherOpen, setOtherOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { role } = useRole();

  const t = locale.nav;

  const navLinks = [
    { label: t.home, href: 'parallax' },
    ...(role === "Agency"
      ? [{ label: t.creatorsWork, href: 'creatorsWork' }]
      : []),
    { label: t.howItWorks, href: 'how-it-works' },
    { label: t.features, href: 'features' },
    ...(role === "Agency"
      ? [{ label: t.pricing, href: 'pricing' }]
      : []),
    { label: t.screenshots, href: 'screenshots' },
 ...(role === "Creator"
      ? [{ label: t.reviews, href: 'pricing' }]
      : []),
   





  ];

  const otherLinks = [
          { label: isRTL ? 'المدونة' : 'Blog', href: 'blog' },

    { label: t.downloadApp, href: 'downloadApp' },

    ...(role === "Agency"
      ? [{ label: t.contact, href: 'contact' }]
      : []),
  ];

  // ── Sticky on scroll ──
  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── Active section via IntersectionObserver ──
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href);

    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
      );
      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((obs) => obs?.disconnect());
  }, [navLinks]);

  // ── Smooth scroll handler ──
  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 80; // header height
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
    setMobileOpen(false);
    setActiveSection(id);
  };

  const isActive = (href) => activeSection === href;

  return (
    <header className="relative z-[999]">
      <div
        className={[
          'w-full px-3 md:px-32 fixed top-0 left-0 z-[9999] transition-all duration-500',
          sticky
            ? 'bg-[#782551] text-white shadow-[0_10px_15px_rgba(25,25,25,0.1)]'
            : 'bg-[#782551] lg:bg-transparent text-[#190a32]',
        ].join(' ')}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4 lg:py-0">

            {/* ── Logo ── */}
            <a href="/" className="flex-shrink-0">
              {!sticky ? <span> <img src="/img/logo/logo-name-white.png" alt="logo" className="h-8 w-auto md:hidden" /> <img src="/img/logo/logo.webp" alt="logo" className="hidden md:block h-10 w-auto" /> </span> : <img src="/img/logo/logo-name-white.png" alt="logo" className="h-8 md:h-10 w-auto" />}
            </a>

            {/* ── Desktop Nav ── */}
            <nav className={`hidden ps-26 lg:flex items-center gap-0 ${isRTL ? 'flex-row' : ''}`}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={`#${link.href}`}
                  onClick={(e) => scrollTo(e, link.href)}
                  className={[
                    'relative block  font-medium text-sm transition-colors duration-300 px-5 py-[34px]',
                    isActive(link.href)
                      ? 'text-[#f88765]'
                      : 'text-[#f8d0e5] hover:text-[#f4a0cc]',
                  ].join(' ')}
                >
                  {link.label}
                  {/* active underline indicator */}
                  {isActive(link.href) && (
                    <span className="absolute bottom-[20px] left-1/2 -translate-x-1/2 h-[3px] w-6 rounded-full bg-[#d06e4f]" />
                  )}
                </a>
              ))}

              {/* Other dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setOtherOpen(true)}
                onMouseLeave={() => setOtherOpen(false)}
              >
                <button
                  className="flex items-center gap-1 font-medium text-sm transition-colors duration-300 px-5 py-[34px] bg-transparent border-none cursor-pointer hover:text-[#f4a0cc]"
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
                          href={`#${item.href}`}
                          onClick={(e) => scrollTo(e, item.href)}
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
              <LanguageSwitcher sticky={sticky} />
            </div>

            {/* ── Mobile Hamburger ── */}
            <button
              className="lg:hidden cursor-pointer bg-transparent border-none p-2 rounded-md"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 5h16" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 10h10" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 15h14" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 20h18" />
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
                      href={`#${link.href}`}
                      onClick={(e) => scrollTo(e, link.href)}
                      className={[
                        'block py-3 px-4 text-sm font-medium transition-colors duration-200',
                        isActive(link.href)
                          ? 'text-[#782551] font-semibold'
                          : 'text-[#707692] hover:text-[#782551]',
                      ].join(' ')}
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
                            href={`#${item.href}`}
                            onClick={(e) => scrollTo(e, item.href)}
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