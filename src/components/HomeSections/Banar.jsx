import React from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../../hooks/i18nContext";

export default function Banar() {
  const { locale, isRTL } = useI18n();

  return (
    <Link to="/ProvidersDetails" className="block group">
      <div dir={isRTL ? "rtl" : "ltr"} className="relative overflow-hidden  cursor-pointer">

        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#5c1a3e] via-[#782551] to-[#a8316b]" />

        {/* Decorative circles */}
        <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-white opacity-5 group-hover:opacity-10 transition-opacity duration-500" />
        <div className="absolute -bottom-16 -left-10 w-72 h-72 rounded-full bg-[#c44d8a] opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
        <div className="absolute top-1/2 right-1/4 w-28 h-28 rounded-full bg-white opacity-5" />

        {/* Shimmer effect on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background:
              "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.07) 50%, transparent 60%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 px-10 py-10 md:py-12">

          {/* Icon + text */}
          <div className="flex items-center gap-6">
            {/* Icon badge */}
            <div className="shrink-0 w-18 h-18 rounded-xl bg-white bg-opacity-10 border border-white border-opacity-20 flex items-center justify-center shadow-inner p-4">
              <svg
                className="w-9 h-9 text-primary"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6 5.87v-2a4 4 0 00-2-3.46M15 7a4 4 0 11-8 0 4 4 0 018 0zm6 4a3 3 0 11-6 0 3 3 0 016 0zM3 11a3 3 0 116 0 3 3 0 01-6 0z"
                />
              </svg>
            </div>

            {/* Text — text-start respects RTL/LTR automatically */}
            <div className="text-white text-start">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-semibold uppercase tracking-widest text-pink-200 opacity-80">
                  {locale.banners.recommendedProviders.Featured}
                </span>
                <span className="w-2 h-2 rounded-full bg-pink-300 animate-pulse" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                {locale.banners.recommendedProviders.title}
              </h2>
              <p className="text-base mt-1.5 text-pink-100 opacity-80">
                {locale.banners.recommendedProviders.p}
              </p>
            </div>
          </div>

          {/* CTA button */}
          <div className="shrink-0">
            <span className="inline-flex items-center gap-2 bg-white text-[#782551] font-semibold text-base px-7 py-3.5 rounded-full shadow-lg group-hover:shadow-white/20 group-hover:scale-105 transition-all duration-300">
              {locale.banners.recommendedProviders.button}
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${
                  isRTL
                    ? "rotate-180 group-hover:-translate-x-1"
                    : "group-hover:translate-x-1"
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}