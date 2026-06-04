import React, { useEffect } from 'react'
// import { ExternalLinkIcon } from 'lucide-react'
import { useI18n } from '../hooks/i18nContext'

const providers = [
  {
    id: 1,
    initials: 'خد',
    name: 'خدمات التقنية',
    category: 'حلول برمجية',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut labore.',
    status: 'متاح',
    link: 'https://example.com',
  },
  
  {
    id: 2,
    initials: 'مز',
    name: 'مزود الاستشارات',
    category: 'استشارات أعمال',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut labore.',
    status: 'متاح',
    link: 'https://example.com',
    featured: true,
  },
  {
    id: 3,
    initials: 'شر',
    name: 'شركة التسويق',
    category: 'تسويق رقمي',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut labore.',
    status: 'مشغول',
    link: 'https://example.com',
  },
]

export default function ProvidersDetails() {
  const { locale, isRTL } = useI18n()
useEffect(()=>{
  window.scrollTo(0,0)
},[])
  return (
    <div
      dir={isRTL ? 'rtl' : 'ltr'}
      className="flex flex-col items-center px-6 md:px-12 pb-20 pt-44 bg-primary mb-20"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          {locale.bannersDetails.recommendedProviders.title}
        </h1>
      </div>

      <p className="text-gray-200 text-base max-w-xl text-center leading-relaxed mb-10">
        {locale.bannersDetails.recommendedProviders.des}
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-5xl">
        {providers.map((p) => (
          <div
            key={p.id}
            className={`flex flex-col gap-3 p-5 rounded-xl border bg-white transition-colors hover:border-[#78255155]
              ${p.featured ? 'border-[#782551]/30 border-2' : 'border-gray-200'}`}
          >
            {/* Avatar + Name */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#FBEAF0] text-[#72243E] flex items-center justify-center font-semibold text-sm flex-shrink-0">
                {p.initials}
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm">{p.name}</p>
                <p className="text-xs text-gray-400">{p.category}</p>
              </div>
            </div>

            {/* Badges */}
            <div className="flex gap-2 flex-wrap">
              {p.featured && (
                <span className="text-xs px-2.5 py-0.5 rounded-md bg-[#FBEAF0] text-[#72243E]">
                  ★ الأفضل
                </span>
              )}
              <span
                className={`text-xs px-2.5 py-0.5 rounded-md ${
                  p.status === 'متاح'
                    ? 'bg-emerald-50 text-emerald-800'
                    : 'bg-amber-50 text-amber-800'
                }`}
              >
                {p.status}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-500 leading-relaxed">
              {p.description}
            </p>

            {/* Link */}
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-1.5 text-sm text-[#782551] border border-[#782551] rounded-lg px-4 py-1.5 w-fit hover:bg-[#7825510d] transition-colors"
            >
              {/* <ExternalLinkIcon className="w-4 h-4" /> */}
              زيارة الموقع
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}