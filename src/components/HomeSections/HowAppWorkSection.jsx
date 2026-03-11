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
id="how-it-works"
      className="relative pt-10 sm:pt-12 md:pt-16 lg:pt-[70px] pb-12 sm:pb-16 md:pb-20 lg:pb-[100px] px-6 sm:px-8 md:px-16 lg:px-28 xl:px-56"
      dir={isRTL ? 'rtl' : 'ltr'}
      style={{
        backgroundImage: 'url(img/shape/header-sape4.png)',
        backgroundPosition: isRTL ? 'left center' : 'right center',
        backgroundSize: 'auto',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="mx-auto px-0 sm:px-4">
        <div className="flex flex-wrap items-center">

          {/* ── Left: text content ── */}
          <div className="w-full xl:w-1/2 mb-10 xl:mb-0">
            <div className={isRTL ? 'text-right' : ''}>

              {/* Section tag */}
              {tag && (
                <span className="text-[14px] sm:text-[16px] font-medium uppercase text-[#782551] tracking-[2px] block mb-4 sm:mb-5">
                  {tag}
                </span>
              )}

              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-semibold text-[#190a32] leading-tight mb-0">
                {heading}
              </h2>

              {/* Steps list */}
              <ul
                className="mt-4 sm:mt-5 md:mt-[20px] p-0 m-0 list-none"
                style={{
                  backgroundImage: 'url(img/bg/how-line.png)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: isRTL ? 'right 45px center' : '45px center',
                }}
              >
                {steps.map((step, i) => (
                  <li
                    key={i}
                    className={`flex items-start mb-7 sm:mb-8 md:mb-[40px] last:mb-0 ${isRTL ? 'flex-row' : ''}`}
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <img
                        src={icons[i % icons.length]}
                        alt={step.title}
                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-auto md:h-auto"
                      />
                    </div>

                    {/* Text */}
                    <div className={`pt-1 sm:pt-2 md:pt-[10px] ${isRTL ? 'pr-4 sm:pr-6 md:pr-[30px] pl-0' : 'pl-4 sm:pl-6 md:pl-[30px] pr-0'}`}>
                      <h4 className="text-base sm:text-lg md:text-[20px] font-semibold text-[#190a32] mb-2 md:mb-[10px] flex items-center gap-2 flex-wrap">
                        {step.num && (
                          <span
                            className="inline-flex items-center justify-center text-[12px] sm:text-[14px] font-bold rounded-full w-6 h-6 sm:w-[28px] sm:h-[28px] text-white flex-shrink-0"
                            style={{ background: 'linear-gradient(135deg,#6b003e,#782551)' }}
                          >
                            {step.num}
                          </span>
                        )}
                        {step.title}
                      </h4>
                      <p className="text-[13px] sm:text-[14px] text-[#666666] leading-6 mb-0">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Right: illustration ── */}
          <div className={`w-full xl:w-1/2 flex mt-8 xl:mt-0 ${isRTL ? 'justify-center xl:justify-start' : 'justify-center xl:justify-end'}`}>
            <img
              src={isRTL ? 'img/bg/flip-app-work-img.png' : 'img/bg/app-work-img.png'}
              alt="app-work-img"
              className="max-w-[80%] sm:max-w-[60%] md:max-w-[70%] xl:max-w-full h-auto"
            />
          </div>

        </div>
      </div>
    </section>
  );
}