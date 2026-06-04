import React from 'react'
import { useRole } from '../hooks/roleContext'
import { useI18n } from '../hooks/i18nContext'
import { BsGoogle, BsGooglePlay, BsInstagram, BsLinkedin, BsTiktok, BsWhatsapp } from 'react-icons/bs'
import { GrAppleAppStore } from 'react-icons/gr'
import { LiaLinkedin } from 'react-icons/lia'

export default function Footer() {
  const { content, role } = useRole()
  const { isRTL, locale } = useI18n()
  const { about, companyNews, companyLinks, contactUs, address, copyright } = content.footer
  const t = locale.nav;

  const navLinks = [
    { label: t.home, href: 'parallax' },
    { label: t.howItWorks, href: 'how-it-works' },
    { label: t.features, href: 'features' },
    { label: t.screenshots, href: 'screenshots' },
    { label: t.reviews, href: 'reviews' },
    { label: isRTL ? 'المدونة' : 'Blog', href: 'blog' },
    ...(role === "Agency" ? [{ label: t.creatorsWork, href: 'creatorsWork' }] : []),
    ...(role === "Agency" ? [{ label: t.pricing, href: 'pricing' }] : []),
  ];

  return (
    <footer className="relative w-full" dir={isRTL ? 'rtl' : 'ltr'}>

      {/* Background */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(/img/bg/f-bg.png)',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          transform: isRTL ? 'none' : 'scaleX(-1)',
        }}
      />

      <div className="relative pt-5 overflow-hidden w-full">
        {/* Decorative circles */}
        <span className="absolute rounded-full pointer-events-none" style={{ width: 340, height: 340, background: 'rgba(255,255,255,0.07)', top: -60, left: -100 }} />
        <span className="absolute rounded-full pointer-events-none" style={{ width: 200, height: 200, background: 'rgba(255,255,255,0.05)', top: 60, left: 60 }} />

        <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 pt-10 sm:pt-14 pb-10 sm:pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-10">

            {/* ── Col 1: Logo & About ── */}
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <div className="mb-4 sm:mb-5">
                <img src='/img/logo/logo-name-white.png' className='w-28 sm:w-32' alt="logo" />
              </div>

              <p className="text-white text-sm leading-7 w-full sm:w-[80%] mb-5 sm:mb-6">
                {about} 
              </p>

              {/* Store Buttons */}
              <div className={`my-5 sm:my-6 flex flex-wrap gap-3`}>
                <a
                  href="https://play.google.com/store/apps/details?id=com.unicode.muhtawakApp&pli=1"
                  target='_blank'
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-300 hover:scale-105 flex-1 min-w-[140px] max-w-[180px]"
                  style={{ background: 'rgba(255,255,255,0.12)', border: '1.5px solid rgba(255,255,255,0.3)' }}
                >
                  <BsGooglePlay className="text-white text-lg shrink-0" />
                  <div className={isRTL ? 'text-right' : 'text-left'}>
                    <p className="text-white/60 text-[9px] leading-tight">{isRTL ? 'احصل عليه من' : 'GET IT ON'}</p>
                    <p className="text-white font-semibold text-sm leading-tight">{isRTL ? 'جوجل بلاي' : 'Google Play'}</p>
                  </div>
                </a>
                <a
                  href="https://apps.apple.com/sa/app/muhtawak-%D9%85%D8%AD%D8%AA%D9%88%D8%A7%D9%83/id6739213042"
                  target='_blank'
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-300 hover:scale-105 flex-1 min-w-[140px] max-w-[180px]"
                  style={{ background: 'rgba(255,255,255,0.12)', border: '1.5px solid rgba(255,255,255,0.3)' }}
                >
                  <GrAppleAppStore className="text-white text-lg shrink-0" />
                  <div className={isRTL ? 'text-right' : 'text-left'}>
                    <p className="text-white/60 text-[9px] leading-tight">{isRTL ? 'حمّل من' : 'Download on the'}</p>
                    <p className="text-white font-semibold text-sm leading-tight">{isRTL ? 'اب ستور' : 'App Store'}</p>
                  </div>
                </a>
              </div>

              {/* Payment logos */}
              <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                <img className="w-14 sm:w-16 h-7 sm:h-8 object-cover rounded" src='/img/logo/visa-logo-.jpg' alt="visa" />
                <img className="w-14 sm:w-16 h-7 sm:h-8 object-cover rounded" src='/img/logo/stBank.webp' alt="stBank" />
                <img className="w-14 sm:w-16 h-7 sm:h-8 object-cover rounded" src='/img/logo/mada.jpg' alt="mada" />
                <img className="w-14 sm:w-16 h-7 sm:h-8 object-cover rounded" src='/img/logo/applePay.jpg' alt="applePay" />
              </div>

              {/* Commercial Registration */}
              <div className="mt-5 sm:mt-6 flex items-center gap-3">
                <img src="/img/logo/sglTogary.png" alt="Commercial Reg" className="h-10 sm:h-12 inline-block cursor-pointer shrink-0" />
                <span className={`text-white/80 text-sm leading-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <p>{isRTL ? 'السجل التجاري' : 'Commercial Registration'}</p>
                  <p>1010981765</p>
                </span>
              </div>
            </div>

            {/* ── Col 2: Quick Links ── */}
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <SectionHeading title={isRTL ? "روابط سريعة" : "Quick Actions"} />
              <ul className="grid grid-cols-2 sm:grid-cols-1 gap-y-3 gap-x-4">
                {navLinks.map((item, i) => (
                  <li key={i}>
                   <a 
                      href={"#" + item.href}
                      className="text-white/80 hover:underline underline-offset-4 text-sm hover:text-white transition-all duration-200 block py-0.5"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Col 3: Contact ── */}
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <SectionHeading title={contactUs} />
              <ul className="space-y-4">
                <ContactItem href="https://wa.me/966551123179" icon={<BsWhatsapp />} isRTL={isRTL}>
                  <span dir="ltr">(+966) 55 112 3179</span>
                </ContactItem>
                <ContactItem href="mailto:info@muhtawak.app" icon={<SvgMail />} isRTL={isRTL}>
                  info@muhtawak.app
                </ContactItem>
                <ContactItem icon={<SvgPin />} isRTL={isRTL}>
                  {address}
                </ContactItem>
              </ul>

              {/* Social icons */}
              <div className={`mt-6 flex gap-3 sm:gap-4 flex-wrap ${isRTL ? 'justify-end flex-row-reverse' : 'justify-start'}`}>
                {[
                  { href: "mailto:info@muhtawak.app", icon: <BsGoogle /> },
                  { href: "https://www.linkedin.com/company/muhtawak-app/?viewAsMember=true", icon: <BsLinkedin /> },
                  { href: "https://www.instagram.com/muhtawak_app?igsh=MXJmdjR2Mmh0aHN1MA==", icon: <BsInstagram /> },
                  { href: "https://www.tiktok.com/@muhtawak_app?_r=1&_t=ZS-96H1svXnW4q", icon: <BsTiktok /> },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 hover:scale-110 text-base"
                    style={{ background: 'rgba(255,255,255,0.15)', border: '1.5px solid rgba(255,255,255,0.35)', color: '#fff' }}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Copyright */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)' }} className="py-4 px-5 flex w-full items-center">
          <p className="text-center text-white/60 text-xs sm:text-sm flex-1">{copyright}</p>
        </div>
      </div>
    </footer>
  )
}

/* ── Section heading ── */
function SectionHeading({ title }) {
  return (
    <div className="mb-5 sm:mb-6">
      <h5 className="text-white font-semibold text-base mb-3">{title}</h5>
    </div>
  )
}

/* ── Contact row ── */
function ContactItem({ href = null, icon, children, isRTL }) {
  const Tag = href ? 'a' : 'div'
  return (
    <li>
      <Tag
        href={href}
        target={href ? '_blank' : undefined}
        rel={href ? 'noopener noreferrer' : undefined}
        className="flex items-center gap-3 hover:opacity-80 transition-opacity"
      >
        <span
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 text-white text-sm"
          style={{ background: 'rgba(255,255,255,0.15)', border: '1.5px solid rgba(255,255,255,0.3)' }}
        >
          {icon}
        </span>
        <span className={`text-white/80 text-sm leading-6 ${isRTL ? 'text-right' : 'text-left'}`}>
          {children}
        </span>
      </Tag>
    </li>
  )
}

/* ── SVG Icons ── */
const SvgMail = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)
const SvgPin = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)