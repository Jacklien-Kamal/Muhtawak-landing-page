import React from 'react'
import { useRole } from '../hooks/roleContext'
import { useI18n } from '../hooks/i18nContext'
import { BsWhatsapp } from 'react-icons/bs'

export default function Footer() {
  const { content,role } = useRole()
  const { isRTL ,locale} = useI18n()
  const { about, companyNews, companyLinks, contactUs, address, copyright } = content.footer
    const t = locale.nav;

  const navLinks = [
    { label: t.home, href: 'parallax' },
        { label: t.howItWorks, href: 'how-it-works' },
            { label: t.features, href: 'features' },
            { label: t.screenshots, href: 'screenshots' },

    { label: t.reviews, href: 'reviews' },
    { label: isRTL ? 'المدونة' : 'Blog', href: 'blog' },

    ...(role === "Agency"
      ? [{ label: t.creatorsWork, href: 'creatorsWork' }]
      : []),
    ...(role === "Agency"
      ? [{ label: t.pricing, href: 'pricing' }]
      : []),


  ];
  return (
    <footer
      className="relative w-full"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* ── Background image — flipped horizontally in LTR ── */}
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

      {/* ── Main body ── */}
      <div className="relative pt-5 overflow-hidden w-full">
        {/* Decorative circles */}
        <span className="absolute rounded-full pointer-events-none" style={{ width: 340, height: 340, background: 'rgba(255,255,255,0.07)', top: -60, left: -100 }} />
        <span className="absolute rounded-full pointer-events-none" style={{ width: 200, height: 200, background: 'rgba(255,255,255,0.05)', top: 60, left: 60 }} />

        <div className="w-full max-w-7xl mx-auto px-8 pt-14 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {/* ── Col 1: Logo & About ── */}
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <div className="mb-5">
                <img src='/img/logo/logo-name-white.png' className='w-32' />
              </div>
              <p className="text-white text-sm leading-7 w-[80%] mb-6">{about}</p>
              <div className={`flex gap-3 ${isRTL ? 'justify-end flex-row-reverse' : 'justify-start'}`}>
                {[<SvgFacebook />, <SvgTwitter />, <SvgInstagram />].map((icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 hover:scale-110"
                    style={{ background: 'rgba(255,255,255,0.15)', border: '1.5px solid rgba(255,255,255,0.35)', color: '#fff' }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* ── Col 2: Company News ── */}
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <SectionHeading title={isRTL?"روابط سريعة":"Quick Actions"} />
              <ul className="space-y-3">
                {navLinks.map((item, i) => (
                  <li key={i}>
                    <a href={"#"+item.href} className="text-white/80 underline underline-offset-5 text-sm hover:text-white transition-all duration-200 block">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Col 3: Contact Us ── */}
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <SectionHeading title={contactUs} />
              <ul className="space-y-4">
                <ContactItem
                  href="https://wa.me/966551123179"
                  icon={<BsWhatsapp />}
                  isRTL={isRTL}
                >
  <span dir="ltr">(+966) 55 112 3179</span>
                </ContactItem>
                <ContactItem
                  href="mailto:info@muhtawak.app"
                  icon={<SvgMail />}
                  isRTL={isRTL}
                >
                  info@muhtawak.app
                </ContactItem>
                <ContactItem icon={<SvgPin />} isRTL={isRTL}>
                  {address}
                </ContactItem>
              </ul>
            </div>

          </div>
        </div>

        {/* ── Copyright ── */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)' }} className="py-4">
          <p className="text-center text-white/60 text-sm">{copyright}</p>
        </div>
      </div>
    </footer>
  )
}

/* ── Section heading ── */
function SectionHeading({ title }) {
  return (
    <div className="mb-6">
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
        className={`flex items-center gap-3 hover:opacity-80 transition-opacity ${isRTL ? '' : ''}`}
      >
        <span
          className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-white"
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
const SvgFacebook = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)
const SvgTwitter = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
)
const SvgInstagram = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)
const SvgGoogle = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83C10.47 5.69 8.89 5 7 5 3.65 5 1 7.65 1 11s2.65 6 6 6c3.46 0 5.76-2.43 5.76-5.86 0-.39-.04-.69-.09-.99H7z" />
  </svg>
)
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