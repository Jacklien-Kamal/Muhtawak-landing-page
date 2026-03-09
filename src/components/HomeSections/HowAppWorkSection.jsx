import React from 'react';
import { useRole } from '../../hooks/roleContext';
import { useI18n } from '../../hooks/i18nContext';

export default function HowAppWorkSection() {
  const { content } = useRole();
  const { isRTL, locale } = useI18n();

  const { tag, heading, steps } = content.howItWorks;

  const icons = [
    'img/icon/apw-Icon1.png',
    'img/icon/apw-Icon2.png',
    'img/icon/apw-Icon3.png',
  ];

  return (
    <section
      id="features"
      className="relative pt-[70px] pb-[100px] px-56"
      dir={isRTL ? 'rtl' : 'ltr'}
      style={{
        backgroundImage: 'url(img/shape/header-sape4.png)',
        backgroundPosition: isRTL ? 'left center' : 'right center',
        backgroundSize: 'auto',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className=" mx-auto px-4">
        <div className="flex flex-wrap items-center">

          {/* ── Left: text content ── */}
          <div className="w-full xl:w-1/2 mb-10 xl:mb-0">
            <div className={isRTL ? 'text-right' : ''}>

              {/* Section tag */}
              {tag && (
                <span className="text-[16px] font-medium uppercase text-[#782551] tracking-[2px] block mb-5">
                  {tag}
                </span>
              )}

              {/* .section-title h2 — font-size:38px, color:#190a32, font-weight:600 */}
              <h2 className="text-[38px] font-semibold text-[#190a32] leading-tight mb-0">
                {heading}
              </h2>

              {/* .app-work-content ul — mt-20, background-position:45px center */}
              <ul
                className="mt-[20px] p-0 m-0 list-none"
                style={{
                  backgroundImage: 'url(img/bg/how-line.png)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: isRTL ? 'right 45px center' : '45px center',
                }}
              >
                {steps.map((step, i) => (
                  /*
                    .app-work-content li:
                      display:flex; margin-bottom:40px
                    first/last: padding-left:0
                  */
                  <li
                    key={i}
                    className={`flex items-start mb-[40px] last:mb-0 ${isRTL ? 'flex-row' : ''}`}
                  >
                    {/* .icon */}
                    <div className="flex-shrink-0">
                      <img src={icons[i % icons.length]} alt={step.title} />
                    </div>

                    {/* .text — padding:10px 30px 0 */}
                    <div className={`pt-[10px] ${isRTL ? 'pr-[30px] pl-0' : 'pl-[30px] pr-0'}`}>
                      {/* h4 — font-size:20px, font-weight:600, color:#190a32 */}
                      <h4 className="text-[20px] font-semibold text-[#190a32] mb-[10px]">
                        {step.num && (
                          <span
                            className="inline-block text-[14px] font-bold rounded-full w-[28px] h-[28px] text-center leading-[28px] text-white me-2 flex-shrink-0"
                            style={{ background: 'linear-gradient(135deg,#6b003e,#782551)' }}
                          >
                            {step.num}
                          </span>
                        )}
                        {step.title}
                      </h4>
                      {/* p — font-size:14px, color:#666, margin-bottom:0 */}
                      <p className="text-[14px] text-[#666666] leading-6 mb-0">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Right: illustration ── */}
          <div className={`w-full xl:w-1/2 flex ${isRTL ? 'justify-start' : 'justify-end'}`}>
            <img
              src={isRTL?"img/bg/flip-app-work-img.png":"img/bg/app-work-img.png"}
              alt="app-work-img"
              className="max-w-full h-auto"
            />
          </div>

        </div>
      </div>
    </section>
  );
}