import React from 'react';
import { useRole } from '../../hooks/roleContext';
import { useI18n } from '../../hooks/i18nContext';
import VideoSection from './VideoSection';

export default function AgencyHowAppWorkSection() {
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
      className="relative pt-10 sm:pt-12 md:pt-16 lg:pt-[70px] pb-12 sm:pb-16 md:pb-20 lg:pb-[100px] px-6 sm:px-8 md:px-16 lg:px-28 xl:px-32"
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
          <div className="w-full  mb-10 xl:mb-0">
            <div className={isRTL ? 'text-right' : ''}>

              {/* Section tag */}
              {tag && (
                <span className="text-[14px] sm:text-xl font-bold uppercase text-[#782551] tracking-[2px] block mb-4 sm:mb-5">
                  {tag}
                </span>
              )}

              {/* Heading */}
              <h2 className="text-xl sm:text-3xl md:text-[34px] lg:text-3xl font-semibold  leading-tight mb-0">
                {heading}
              </h2>
<div className='flex  gap-24'>

              {/* Steps list */}
              <ul
                className="hidden md:block mt-4 gap-x-20 gap-y-5 sm:mt-5 md:mt-[20px] p-0 m-0 list-none"
                style={{
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: isRTL ? 'right 45px center' : '45px center',
                }}
              >
                {steps.slice(0,4).map((step, i) => (
                  <li
                    key={i}
                    className={`flex items-start mb-7 sm:mb-8 md:mb-[40px] last:mb-0 ${isRTL ? 'flex-row' : ''}`}
                  >
                    {/* Icon */}
                    <div className="relative flex-shrink-0">
                      <img
                        src={icons[i % icons.length]}
                        alt={step.title}
                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-auto md:h-auto"
                      />
                        {step.num && (
                          <span
                            className="absolute top-[23%] right-[20%] md:top-[30%] md:right-[30%]  inline-flex items-center justify-center text-[12px] sm:text-lg font-bold rounded-full w-6 h-6 sm:w-[28px] sm:h-[28px] text-white flex-shrink-0"
                          >
                            {step.num}
                          </span>
                        )}
                    </div>

                    {/* Text */}
                    <div className={`pt-1 sm:pt-2 md:pt-[10px] ${isRTL ? 'pr-4 sm:pr-6 md:pr-[30px] pl-0' : 'pl-4 sm:pl-6 md:pl-[30px] pr-0'}`}>
                      <h4 className="text-base sm:text-lg md:text-[20px] font-semibold text-gray-700 mb-2 md:mb-[10px] flex items-center gap-2 flex-wrap">
                        {step.title}
                      </h4>
                      <p style={{whiteSpace:"pre-line"}} className="text-[13px] sm:text-[14px] text-[#666666] leading-6 mb-0">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <ul
                className="hidden md:block mt-4 gap-x-20 gap-y-5 sm:mt-5 md:mt-[20px] p-0 m-0 list-none"
                style={{
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: isRTL ? 'right 45px center' : '45px center',
                }}
              >
                {steps.slice(4,7).map((step, i) => (
                  <li
                    key={i}
                    className={`flex items-start mb-7 sm:mb-8 md:mb-[40px] last:mb-0 ${isRTL ? 'flex-row' : ''}`}
                  >
                    {/* Icon */}
                    <div className="relative flex-shrink-0">
                      <img
                        src={icons[i % icons.length]}
                        alt={step.title}
                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-auto md:h-auto"
                      />
                        {step.num && (
                          <span
                            className="absolute top-[23%] right-[20%] md:top-[30%] md:right-[30%]  inline-flex items-center justify-center text-[12px] sm:text-lg font-bold rounded-full w-6 h-6 sm:w-[28px] sm:h-[28px] text-white flex-shrink-0"
                          >
                            {step.num}
                          </span>
                        )}
                    </div>

                    {/* Text */}
                    <div className={`pt-1 sm:pt-2 md:pt-[10px] ${isRTL ? 'pr-4 sm:pr-6 md:pr-[30px] pl-0' : 'pl-4 sm:pl-6 md:pl-[30px] pr-0'}`}>
                      <h4 className="text-base sm:text-lg md:text-[20px] font-semibold text-gray-700 mb-2 md:mb-[10px] flex items-center gap-2 flex-wrap">
                        {step.title}
                      </h4>
                      <p style={{whiteSpace:"pre-line"}} className="text-[13px] sm:text-[14px] text-[#666666] leading-6 mb-0">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <ul
                className=" md:hidden mt-4 gap-x-20 gap-y-5 sm:mt-5 md:mt-[20px] p-0 m-0 list-none"
                style={{
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
                    <div className="relative flex-shrink-0">
                      <img
                        src={icons[i % icons.length]}
                        alt={step.title}
                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-auto md:h-auto"
                      />
                        {step.num && (
                          <span
                            className="absolute top-[23%] right-[20%] md:top-[30%] md:right-[30%]  inline-flex items-center justify-center text-[12px] sm:text-lg font-bold rounded-full w-6 h-6 sm:w-[28px] sm:h-[28px] text-white flex-shrink-0"
                          >
                            {step.num}
                          </span>
                        )}
                    </div>

                    {/* Text */}
                    <div className={`pt-1 sm:pt-2 md:pt-[10px] ${isRTL ? 'pr-4 sm:pr-6 md:pr-[30px] pl-0' : 'pl-4 sm:pl-6 md:pl-[30px] pr-0'}`}>
                      <h4 className="text-base sm:text-lg md:text-[20px] font-semibold text-gray-700 mb-2 md:mb-[10px] flex items-center gap-2 flex-wrap">
                        {step.title}
                      </h4>
                      <p style={{whiteSpace:"pre-line"}} className="text-[13px] sm:text-[14px] text-[#666666] leading-6 mb-0">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
         
</div>

            </div>
          </div>

         

        </div>
      </div>
    </section>
  );
}