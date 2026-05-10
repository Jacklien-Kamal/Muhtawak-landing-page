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
  const heading    = content?.pricing?.heading    ?? (locale.lang === 'ar' ? 'خطط الأسعار'          : 'Our Pricing Plans');
  const subheading = content?.pricing?.subheading ?? (locale.lang === 'ar' ? 'اكتشف مجموعتنا المميزة من الباقات المصممة لتحقيق أهدافك.' : 'Discover our unique range of packages designed to achieve your goals.');
  const ctaLabel   = content?.pricing?.cta        ?? (locale.lang === 'ar' ? 'ابدأ الآن'            : 'Start Now');

  const GRADIENT_BTN     = 'linear-gradient(225deg, #6b003e 33%, #6b003e 66%, #6b003e)';
  const GRADIENT_POPULAR = 'linear-gradient(45deg, #6b003e 33%, #980438 66%, #d27252)';
  const SHADOW_BTN       = '3px 4px 25px rgba(198,58,149,0.5)';
  const GRADIENT_TOGGLE  = 'linear-gradient(90deg, #6b003e 33%, #6b003e 66%, #6b003e)';

  return (
    <section
      id="pricing"
      className="relative py-8"
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
          <div className="w-full lg:w-8/12 xl:w-7/12 text-center mb-[50px]">
            <h2 className="text-[38px] font-semibold text-[#190a32] pb-[15px] mb-0 leading-tight">
              {heading}
            </h2>
            <p className="text-[14px] text-[#666666] leading-6 mt-4 mb-0">
              {subheading}
            </p>
          </div>
        </div>

        {/* ── Toggle ── */}
        {/* <div className="flex items-center justify-center gap-[18px] mb-[60px]">
          <span
            onClick={() => setIsAnnual(false)}
            className={`text-sm font-medium cursor-pointer transition-colors ${!isAnnual ? 'text-[#782551]' : 'text-[#666]'}`}
          >
            {locale.lang === 'ar' ? 'شهري' : 'Monthly'}
          </span>

          <button
            onClick={() => setIsAnnual(v => !v)}
            aria-label="Toggle billing period"
            className="relative inline-block w-[60px] h-[30px] rounded-[50px] border-none cursor-pointer -translate-y-[3px] transition-all duration-300 flex-shrink-0"
            style={{ background: GRADIENT_TOGGLE }}
          >
            <span
              className="absolute top-[3px] w-[24px] h-[24px] bg-white rounded-full transition-all duration-300"
              style={{ left: isAnnual ? 'calc(100% - 29px)' : '5px' }}
            />
          </button>

          <span
            onClick={() => setIsAnnual(true)}
            className={`text-sm font-medium cursor-pointer transition-colors ${isAnnual ? 'text-[#782551]' : 'text-[#666]'}`}
          >
            {locale.lang === 'ar' ? 'سنوي' : 'Annual'}
          </span>
        </div> */}

        {/* ── Pricing Cards ── */}
        <div className="flex flex-wrap justify-center -mx-4 items-stretch">
          {plans.map((plan, i) => {
            const isActive = plan.popular || i > 0;
            const price    = isAnnual ? plan.annual : plan.monthly;
            const period   = isAnnual
              ? (locale.lang === 'ar' ? '/ سنوي'  : '/ Annual')
              : (locale.lang === 'ar' ? '/ شهري'  : '/ Monthly');

            return (
              <div key={i} className=" px-4 mb-[60px] flex">
                {/*
                  .pricing-box:
                    float:left; width:100%; position:relative;
                    border-radius:10px; box-shadow:0px 5px 25px rgba(0,0,0,.2);
                    border:3px solid #fff; background:#fff;
                  .pricing-box.active: border-color:#6b003e4c
                */}
                <div
                  className={[
                    'relative w-full bg-white rounded-[10px] text-center flex flex-col',
                    'shadow-[0px_5px_25px_rgba(0,0,0,0.2)]',
                 'hover:border-[3px] hover:border-[#6b003e4c]' , 'border-[3px] border-white',
                  ].join(' ')}
                >

                  {/* .poppuler badge */}
                  {plan.popular && (
                    <div className="absolute w-full -top-[20px] left-0 flex justify-center z-10">
                      <span
                        className="inline-block text-white font-medium text-[15px] px-[28px] py-[10px] rounded-full"
                        style={{ background: GRADIENT_POPULAR }}
                      >
                        {locale.lang === 'ar' ? 'الأكثر شيوعاً' : 'Popular'}
                      </span>
                    </div>
                  )}

                  {/* .pricing-head */}
                  <div className="pt-[30px] pb-0 w-full">

                    {/* h4 — font-size:30px, color:#7D4196, font-weight:600 */}
                    <h4 className="text-[30px] font-semibold text-[#d27252] mb-[10px] px-4">
                      {plan.name}
                    </h4>

                    {/*
                      .pricing-amount — position:relative, color:#782551 (PINK price)
                      $ is small absolute top-left, price is 60px bold, subscription is 16px gray
                    */}
                    <div className="relative text-[#782551] w-full px-4 flex justify-center mt-7">
                      <div className="relative inline-flex items-baseline gap-1">
                        {/* .currency — font-size:25px, absolute top:-16px left:-22px */}
                        <sup className="text-[25px] text-[#666666] font-medium self-start mt-1 leading-none">
                          {locale.lang === 'ar' ? 'ر.س' : 'SAR'}
                        </sup>
                        {/* .price — font-size:60px, font-weight:600 */}
                        <span className="text-3xl font-bold leading-none">
                          {plan.price}
                        </span>
                       
                        {/* .subscription — font-size:16px, color:#666 */}
                        <span className="text-xl font-normal text-[#666666] self-end mb-2">
                          {period}
                        </span>
                        
                      </div>
                    </div>
                   

                    {/* h5 — color:#7D4196, font-size:25px, font-weight:500, margin-top:15px */}
                    <h5 className="text-[#7D4196] text-[25px] font-medium  pb-4 px-4">
                      {plan.tagline}
                    </h5>
                  </div>

                  {/* .pricing-body — padding:0 40px 35px, text-left */}
                  <div className={`px-[40px] pb-[35px] flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                    <ul className="m-0 p-0 list-none">
                      {plan.features.map((f, fi) => (
                        /*
                          .pricing-body li — margin-top:15px
                          ::before — fa icon, color:#782551, margin-right:10px
                        */
                        <li
                          key={fi}
                          className={`mt-[15px] text-[14px] text-[#666] flex items-center gap-[10px] ${isRTL ? 'flex-row' : ''}`}
                        >
                          {/* Matches .pricing-body li::before — circle icon in pink */}
                          <span className="text-[#782551] flex-shrink-0 text-[16px]">⊙</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/*
                    .pricing-btn — position:absolute, bottom:-20px, width:100%, left:0
                    .pricing-btn .btn — gradient, text-transform:uppercase, box-shadow, padding:15px 35px, border-radius:50px
                  */}
                  <div className="relative h-[40px] w-full mt-auto">
                    <div className="absolute -bottom-[20px] w-full left-0 flex justify-center">
                      <a
                        href="#"
                        className="inline-block text-white font-medium text-[16px] px-[35px] py-[15px] rounded-[50px] uppercase no-underline transition-all duration-300 hover:opacity-90 whitespace-nowrap"
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