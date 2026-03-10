import React from 'react'
import { useRole } from '../hooks/roleContext'
import { useI18n } from '../hooks/i18nContext'

export default function Footer() {
  const { content } = useRole()
  const { isRTL } = useI18n()
  const { about, companyNews, companyLinks, usefulLinks, usefulLinksList, contactUs, address, copyright } = content.footer

  return (
    <footer className="relative" style={{ fontFamily: "'Poppins', sans-serif" }} dir={isRTL ? 'rtl' : 'ltr'}>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap" rel="stylesheet" />

      {/* ── Curved wave top ── */}
      <div style={{ lineHeight: 0, background: '#fff' }}>
        <svg
          viewBox="0 0 1440 90"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: '90px' }}
        >
          <path
            d="M0,90 L0,50 Q360,0 720,45 Q1080,90 1440,30 L1440,90 Z"
            fill="url(#waveGrad)"
          />
          <defs>
            <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6b003e" />
              <stop offset="55%" stopColor="#6b003e" />
              <stop offset="100%" stopColor="#d06e4f" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ── Main body ── */}
      <div
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(105deg, #6b003e 0%, #6b003e 50%, #d06e4f 100%)' }}
      >
        {/* Decorative circles */}
        <span className="absolute rounded-full pointer-events-none" style={{ width: 340, height: 340, background: 'rgba(255,255,255,0.07)', top: -60, left: -100 }} />
        <span className="absolute rounded-full pointer-events-none" style={{ width: 200, height: 200, background: 'rgba(255,255,255,0.05)', top: 60, left: 60 }} />

        <div className="container mx-auto px-8 pt-14 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* ── Col 1: Logo & About ── */}
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <div className="mb-5">
                <span className="text-white font-extrabold text-4xl tracking-tight">
                  {isRTL ? 'محتواك' : 'MMuhtawak.'}
                </span>
              </div>
              <p className="text-white/75 text-sm leading-7 mb-6">{about}</p>
              <div className={`flex gap-3 ${isRTL ? 'justify-end flex-row-reverse' : 'justify-start'}`}>
                {[<SvgFacebook />, <SvgTwitter />, <SvgInstagram />, <SvgGoogle />].map((icon, i) => (
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
              <SectionHeading title={companyNews} isRTL={isRTL} />
              <ul className="space-y-3">
                {companyLinks.map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-white/80 text-sm hover:text-white transition-all duration-200 block">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Col 3: Useful Links ── */}
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <SectionHeading title={usefulLinks} isRTL={isRTL} />
              <ul className="space-y-3">
                {usefulLinksList.map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-white/80 text-sm hover:text-white transition-all duration-200 block">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Col 4: Contact Us ── */}
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <SectionHeading title={contactUs} isRTL={isRTL} />
              <ul className="space-y-4">
                <ContactItem icon={<SvgPhone />} isRTL={isRTL}>
                  1800-121-3637<br />+91 555 234-8765
                </ContactItem>
                <ContactItem icon={<SvgMail />} isRTL={isRTL}>
                  <a href="mailto:info@example.com" className="hover:text-white transition-colors">info@example.com</a><br />
                  <a href="mailto:sale@example.com" className="hover:text-white transition-colors">sale@example.com</a>
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
function SectionHeading({ title, isRTL }) {
  return (
    <div className="mb-6">
      <h5 className="text-white font-semibold text-base mb-3">{title}</h5>
      <div className={`flex items-center gap-1 ${isRTL ? 'justify-end' : 'justify-start'}`}>
        <span style={{ display: 'block', width: 30, height: 3, borderRadius: 99, background: 'rgba(255,255,255,0.9)' }} />
        <span style={{ display: 'block', width: 10, height: 3, borderRadius: 99, background: 'rgba(255,255,255,0.5)' }} />
        <span style={{ display: 'block', width: 10, height: 3, borderRadius: 99, background: 'rgba(255,255,255,0.5)' }} />
      </div>
    </div>
  )
}

/* ── Contact row ── */
function ContactItem({ icon, children, isRTL }) {
  return (
    <li className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
      <span
        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-white"
        style={{ background: 'rgba(255,255,255,0.15)', border: '1.5px solid rgba(255,255,255,0.3)' }}
      >
        {icon}
      </span>
      <span className={`text-white/80 text-sm leading-6 ${isRTL ? 'text-right' : 'text-left'}`}>
        {children}
      </span>
    </li>
  )
}

/* ── SVG Icons ── */
const SvgFacebook = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)
const SvgTwitter = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
  </svg>
)
const SvgInstagram = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)
const SvgGoogle = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83C10.47 5.69 8.89 5 7 5 3.65 5 1 7.65 1 11s2.65 6 6 6c3.46 0 5.76-2.43 5.76-5.86 0-.39-.04-.69-.09-.99H7z"/>
  </svg>
)
const SvgPhone = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3-8.59A2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 5.94 5.94l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)
const SvgMail = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)
const SvgPin = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)