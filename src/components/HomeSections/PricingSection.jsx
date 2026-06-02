import React, { useState } from 'react';
import { useRole } from '../../hooks/roleContext';
import { useI18n } from '../../hooks/i18nContext';

const PLANS_FALLBACK = [
  {
    name: 'Beginner', monthly: 15, annual: 95,
    tagline: 'I have a dream', popular: false,
    features: ['1000+ projets', 'No transaction fees', 'Unlimited Storage', '5 Download'],
  },
  {
    name: 'Starter', monthly: 15, annual: 78,
    tagline: 'I have a dream', popular: true,
    features: ['1000+ projets', 'No transaction fees', 'Unlimited Storage', '5 Download'],
  },
];

export default function PricingSection() {
  const { content } = useRole();
  const { locale, isRTL } = useI18n();
  const [isAnnual, setIsAnnual] = useState(false);

  const plans      = content?.pricing?.plans      ?? PLANS_FALLBACK;
  const heading    = content?.pricing?.heading    ?? (locale.lang === 'ar' ? 'خطط الأسعار' : 'Our Pricing Plans');
  const subheading = content?.pricing?.subheading ?? (locale.lang === 'ar' ? 'اكتشف مجموعتنا المميزة من الباقات المصممة لتحقيق أهدافك.' : 'Discover our unique range of packages designed to achieve your goals.');
  const ctaLabel   = content?.pricing?.cta        ?? (locale.lang === 'ar' ? 'ابدأ الآن' : 'Start Now');

  const GRADIENT_BTN     = 'linear-gradient(225deg, #6b003e 33%, #6b003e 66%, #6b003e)';
  const GRADIENT_POPULAR = 'linear-gradient(45deg, #6b003e 33%, #980438 66%, #d27252)';
  const SHADOW_BTN       = '3px 4px 25px rgba(198,58,149,0.5)';

  return (
    <section
      id="pricing"
      className="relative py-6 md:py-8"
      dir={isRTL ? 'rtl' : 'ltr'}
      style={{
        backgroundImage: 'url(img/shape/header-sape7.png)',
        backgroundPosition: isRTL ? 'left center' : 'right center',
        backgroundSize: 'auto',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto px-4">

        {/* ── Section Title ── */}
        <div className="flex justify-center">
          <div className="w-full lg:w-8/12 xl:w-7/12 text-center mb-8 md:mb-[50px]">
            <h2 className="text-[22px] md:text-[38px] font-semibold text-primary py-2 md:pb-[15px] mb-0 leading-tight">
              {heading}
            </h2>
            <p className="text-[11px] md:text-[14px] text-[#666666] leading-5 md:leading-6 mt-2 md:mt-4 mb-0">
              {subheading}
            </p>
          </div>
        </div>

        {/* ── Pricing Cards ── */}
        <div className="flex flex-wrap justify-center md:-mx-4 items-stretch gap-y-10 md:gap-y-0">
          {plans.map((plan, i) => {
            const price  = isAnnual ? plan.annual : plan.monthly;
            const period = isAnnual
              ? (locale.lang === 'ar' ? '/ سنوي'  : '/ Annual')
              : (locale.lang === 'ar' ? '/ شهري'  : '/ Monthly');

            return (
              <div key={i} className="w-full sm:w-auto md:px-4 mb-[60px] flex justify-center">
                <div
                  className={[
                    'relative w-full sm:w-[280px] md:w-full bg-white rounded-[10px] text-center flex flex-col',
                    'shadow-[0px_5px_25px_rgba(0,0,0,0.2)]',
                    'hover:border-[3px] hover:border-[#6b003e4c]',
                    'border-[3px] border-white',
                  ].join(' ')}
                >

                  {/* Popular badge */}
                  {plan.popular && (
                    <div className="absolute w-full -top-[18px] md:-top-[20px] left-0 flex justify-center z-10">
                      <span
                        className="inline-block text-white font-medium text-[12px] md:text-[15px] px-5 md:px-[28px] py-[7px] md:py-[10px] rounded-full"
                        style={{ background: GRADIENT_POPULAR }}
                      >
                        {locale.lang === 'ar' ? 'الأكثر شيوعاً' : 'Popular'}
                      </span>
                    </div>
                  )}

                  {/* Card head */}
                  <div className="pt-6 md:pt-[30px] pb-0 w-full">

                    <h4 className="text-[22px] md:text-[30px] font-semibold text-[#d27252] mb-[6px] md:mb-[10px] px-4">
                      {plan.name}
                    </h4>

                    <div className="relative text-[#782551] w-full px-4 flex justify-center mt-4 md:mt-7">
                      <div className="relative inline-flex items-baseline gap-1">
                        <sup className="text-[16px] md:text-[25px] text-[#666666] font-medium self-start mt-1 leading-none">
                          {locale.lang === 'ar' ? 'ر.س' : 'SAR'}
                        </sup>
                        <span className="text-2xl md:text-3xl font-bold leading-none">
                          {plan.price}
                        </span>
                        <span className="text-sm md:text-xl font-normal text-[#666666] self-end mb-1 md:mb-2">
                          {period}
                        </span>
                      </div>
                    </div>

                    <h5 className="text-[#7D4196] text-[17px] md:text-[25px] font-medium pb-3 md:pb-4 px-4">
                      {plan.tagline}
                    </h5>
                  </div>

                  {/* Card body */}
                  <div className={`px-6 md:px-[40px] pb-6 md:pb-[35px] flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                    <ul className="m-0 p-0 list-none">
                      {plan.features.map((f, fi) => (
                        <li
                          key={fi}
                          className={`mt-[10px] md:mt-[15px] text-[12px] md:text-[14px] text-[#666] flex items-center gap-[8px] md:gap-[10px] ${isRTL ? 'flex-row' : ''}`}
                        >
                          <span className="text-[#782551] flex-shrink-0 text-[13px] md:text-[16px]">⊙</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA button */}
                  <div className="relative h-[40px] w-full mt-auto">
                    <div className="absolute -bottom-[20px] w-full left-0 flex justify-center">
                      <a
                        href="#"
                        className="inline-block text-white font-medium text-[13px] md:text-[16px] px-6 md:px-[35px] py-[11px] md:py-[15px] rounded-[50px] uppercase no-underline transition-all duration-300 hover:opacity-90 whitespace-nowrap"
                        style={{ background: GRADIENT_BTN, boxShadow: SHADOW_BTN }}
                      >
                        {ctaLabel}
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}