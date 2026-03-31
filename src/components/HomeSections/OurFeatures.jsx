import React, { useState } from 'react';
import { useRole } from '../../hooks/roleContext';
import { useI18n } from '../../hooks/i18nContext';

const FEATURE_IMAGES = {
  Creator: [
    'img/bg/f1.png',
    'img/bg/f3.png',
    'img/bg/f2.png',
  ],
  Agency: [
    'https://muhtawak.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FfastDelivery.80cef0ae.jpg&w=640&q=75',
    'https://muhtawak.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2ForiginalContent.94656b25.jpg&w=640&q=75',
    'https://muhtawak.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FcompetitiveCosts.386e62d1.jpg&w=640&q=75',
  ],
};

export default function OurFeatures() {
  const { role } = useRole();
  const { locale, isRTL } = useI18n();
  const [activeIndex, setActiveIndex] = useState(0);

  const t = locale.ourFeatures;
  const features = t[role].items;
  const images = FEATURE_IMAGES[role];

  return (
    <section
      id="features"
      className="relative pt-14 sm:pt-16 md:pt-20 lg:pt-[100px] pb-10 sm:pb-14 md:pb-[80px]"
      style={{
        backgroundImage: 'url(img/shape/header-sape2.png)',
        backgroundPosition: 'right top',
        backgroundSize: 'auto',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="mx-auto px-4 sm:px-8 md:px-16 lg:px-28 xl:px-52">

        {/* ── Section Title ── */}
        <div className="flex justify-center">
          <div className="w-full lg:w-7/12 text-center px-4 sm:px-6 md:px-10 mb-8 sm:mb-10 md:mb-[45px]">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-semibold text-[#190a32] pb-3 md:pb-[15px] mb-0 leading-tight">
              {t.heading}
            </h2>
            <p className="text-sm text-[#666666] leading-6 mb-0 mt-3 sm:mt-4">
              {t[role].subheading}
            </p>
          </div>
        </div>

        {/* ── Feature Cards ── */}
        <div className={`flex flex-wrap -mx-2 sm:-mx-3 md:-mx-4 ${isRTL ? 'flex-row' : ''}`}>
          {features.map((feature, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={`${role}-${index}`}
                className="w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-3 md:px-4 mb-4 sm:mb-5 md:mb-[30px]"
              >
                <div
                  onMouseMove={() => setActiveIndex(index)}
                  onTouchStart={() => setActiveIndex(index)}
                  className="text-center px-4 sm:px-6 md:px-[30px] py-8 sm:py-10 md:py-[50px] rounded-[10px] cursor-pointer transition-all duration-300 bg-white h-full"
                >
                  {/* Image */}
                  <div className="flex justify-center items-center mb-4 sm:mb-5">
                    <img
                      src={images[index]}
                      alt={feature.title}
                      className="w-20 h-20 sm:w-24 sm:h-24 md:w-[100px] md:h-[100px] object-cover rounded-[10%]"
                    />
                  </div>

                  {/* Title */}
                  <h5
                    className={[
                      'text-lg sm:text-xl font-semibold mb-2 md:mb-[10px] transition-colors duration-300',
                      isActive ? 'text-[#782551]' : 'text-[#190a32] hover:text-[#782551]',
                    ].join(' ')}
                  >
                    {feature.title}
                  </h5>

                  {/* Description */}
                  <p className="text-sm text-[#666666] leading-6 mb-0 h-16">
                    {feature.description}
                  </p>

                  {/* Icon badge */}
                  <div className={` flex  justify-center mb-0 mt-6 sm:mt-8 md:mt-9`}>
                    <span
                      className={[
                        'w-12 h-12 sm:w-14 sm:h-14 cursor-pointer rounded-full flex items-center justify-center text-base sm:text-lg font-semibold transition-all duration-300',
                        isActive
                          ? 'text-white bg-[#782551] shadow-[3px_4px_25px_rgba(198,58,149,0.5)]'
                          : 'text-[#782551] border-2 border-[#782551] bg-white',
                      ].join(' ')}
                    >
                    {isRTL?(index + 1).toLocaleString('ar-EG'):index + 1}  
                    </span>
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