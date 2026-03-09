import React, { useState } from 'react';
import { useRole } from '../../hooks/roleContext';
import { useI18n } from '../../hooks/i18nContext';

const FEATURE_IMAGES = {
  Creator: [
    'https://muhtawak.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FworkAnytime.8e5bc14e.jpg&w=640&q=75',
    'https://muhtawak.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FrealOpportunities.9483afd5.jpg&w=640&q=75',
    'https://muhtawak.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FearnPerContent.1a375893.jpg&w=640&q=75',
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
      id="about"
      className="relative pt-[100px] pb-[80px]"
      style={{
        backgroundImage: 'url(img/shape/header-sape2.png)',
        backgroundPosition: 'right top',
        backgroundSize: 'auto',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className=" mx-auto px-52">

        {/* ── Section Title ── */}
        <div className="flex justify-center">
          <div className="w-full lg:w-7/12 text-center px-10 mb-[45px]">
            <h2 className="text-[38px] font-semibold text-[#190a32] pb-[15px] mb-0 leading-tight">
              {t.heading}
            </h2>
            <p className="text-sm text-[#666666] leading-6 mb-0 mt-4">
              {t[role].subheading}
            </p>
          </div>
        </div>

        {/* ── Feature Cards ── */}
        <div className={`flex flex-wrap -mx-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
          {features.map((feature, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={`${role}-${index}`}
                className="w-full md:w-1/2 lg:w-1/3 px-4 mb-[30px]"
              >
                <div
                  onMouseMove={() => setActiveIndex(index)}
                  className={[
                    'text-center px-[30px] py-[50px] rounded-[10px] cursor-pointer',
                    'transition-all duration-300',
                    isActive
                      ? ' bg-white'
                      : ' bg-white hover:bg-white',
                  ].join(' ')}
                >
                  {/* Image */}
                  <div className="flex justify-center items-center mb-5">
                    <img
                      src={images[index]}
                      alt={feature.title}
                      className="w-[100px] h-[100px] object-cover rounded-[10%]"
                    />
                  </div>

                

                  {/* Title */}
                  <h5
                    className={[
                      'text-xl font-semibold mb-[10px] transition-colors duration-300',
                      isActive ? 'text-[#782551]' : 'text-[#190a32] hover:text-[#782551]',
                    ].join(' ')}
                  >
                    {feature.title}
                  </h5>

                  {/* Description */}
                  <p className="text-sm text-[#666666] leading-6 mb-0">
                    {feature.description}
                  </p>
                  {/* Icon badge — circle with number */}
                  <div className="flex justify-center mb-4 mt-9">
                    <span
                      className={[
                        'w-14 h-14 cursor-pointer rounded-full flex items-center justify-center text-lg font-semibold transition-all duration-300',
                          index === activeIndex?'text-white bg-[#782551] shadow-[3px_4px_25px_rgba(198,58,149,0.5)]'
                          :'text-[#782551] border-2 border-[#782551] bg-white',
                      ].join(' ')}
                    
                    >
                      {index + 1}
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