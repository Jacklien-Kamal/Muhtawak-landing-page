import React from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../../hooks/i18nContext";

export default function Banar() {

      const { locale, isRTL } = useI18n()
      const t=locale.banners

  return (
    <Link to="/ProvidersDetails" className="block group">
      <div  dir={isRTL ? 'rtl' : 'ltr'}   className="relative overflow-hidden rounded-2xl cursor-pointer">
        
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#5c1a3e] via-[#782551] to-[#a8316b]" />
        
        {/* Decorative circles */}
        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white opacity-5 group-hover:opacity-10 transition-opacity duration-500" />
        <div className="absolute -bottom-14 -left-8 w-56 h-56 rounded-full bg-[#c44d8a] opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
        <div className="absolute top-1/2 right-1/4 w-20 h-20 rounded-full bg-white opacity-5" />

        {/* Shimmer effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.07) 50%, transparent 60%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 px-8 py-7 md:py-8">
          
          {/* Left: icon + text */}
          <div className="flex items-center gap-5">
            {/* Icon badge */}
            <div className="shrink-0 w-14 h-14 rounded-xl bg-white bg-opacity-10 border border-white border-opacity-20 flex items-center justify-center shadow-inner">
              <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6 5.87v-2a4 4 0 00-2-3.46M15 7a4 4 0 11-8 0 4 4 0 018 0zm6 4a3 3 0 11-6 0 3 3 0 016 0zM3 11a3 3 0 116 0 3 3 0 01-6 0z"
                />
              </svg>
            </div>

            {/* Text */}
            <div className="text-white text-left">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-semibold uppercase tracking-widest text-pink-200 opacity-80">
                 {locale.banners.recommendedProviders.Featured}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-pink-300 animate-pulse" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold leading-tight">
                
                {locale.banners.recommendedProviders.title}
              </h2>
              <p className="text-sm mt-1 text-pink-100 opacity-80">
               
                {locale.banners.recommendedProviders.p}
              </p>
            </div>
          </div>

          {/* Right: CTA button */}
          <div className="shrink-0">
            <span className="inline-flex items-center gap-2 bg-white text-[#782551] font-semibold text-sm px-5 py-2.5 rounded-full shadow-lg group-hover:shadow-white/20 group-hover:scale-105 transition-all duration-300">
              
              {locale.banners.recommendedProviders.button}
              {/* {locale.banners.recommendedProviders.span} */}
              <svg className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </div>
        </div>

      </div>
    </Link>
  );
}