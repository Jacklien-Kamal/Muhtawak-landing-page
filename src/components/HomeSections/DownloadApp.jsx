import React from 'react';
import { useRole } from '../../hooks/roleContext';
import { useI18n } from '../../hooks/i18nContext';
import { FaGooglePlay, FaCheckCircle } from 'react-icons/fa';

export default function DownloadApp() {
  const { content } = useRole();
  const { locale, isRTL } = useI18n();
  const { heading, description, points } = content.download;

  return (
    <section
      className="relative pt-16 sm:pt-20 md:pt-24 lg:pt-[100px] pb-10 sm:pb-12 md:pb-[60px] overflow-hidden px-4 sm:px-8 md:px-16 lg:px-28 xl:px-52"
      style={{
        backgroundImage: 'url(img/shape/header-sape3.png)',
        backgroundPosition: 'right center',
        backgroundSize: 'auto',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* ── Phone background image (hidden on small screens) ── */}
      <div
        className="hidden lg:block absolute top-[9%] left-0 w-72 lg:w-[500px] xl:w-[738px] h-[400px] lg:h-[569px] bg-no-repeat bg-center"
        style={{
          backgroundImage: 'url(img/bg/easy-m-bg.png)',
          backgroundSize: '100%',
        }}
      />

      {/* ── Phone mockup image (hidden on small screens) ── */}
      <div className={`hidden lg:block absolute top-[3%] ${isRTL ? 'left-[8%] xl:left-[12.5%]' : 'left-[6%] xl:left-[10.5%]'}`}>
        <img src="img/bg/mobile2.png" alt="mobile" className="w-3/5 xl:w-4/5" />
      </div>

      <div className="mx-auto px-0 sm:px-4">
        <div className={`flex flex-wrap ${isRTL ? 'flex-row-reverse' : ''}`}>

          {/* ── Left spacer (phone lives here absolutely, only on xl) ── */}
          <div className="hidden xl:block xl:w-5/12" />

          {/* ── Content column ── */}
          <div className="w-full xl:w-7/12">
            <div className={`${isRTL ? 'pr-0 pl-0 sm:pl-4 lg:pl-6' : 'pl-0 pr-0 sm:pr-4 lg:pr-6'}`}>

              {/* Heading */}
              <div className="mb-4 sm:mb-5 md:mb-[25px]">
                <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-semibold text-[#190a32] leading-tight">
                  {heading}
                </h2>
              </div>

              {/* Description */}
              <p
                className={`text-sm text-[#666666] leading-6 mb-3 sm:mb-4 md:mb-[15px] ${
                  isRTL ? 'pl-0 sm:pl-[30px] md:pl-[50px]' : 'pr-0 sm:pr-[30px] md:pr-[50px]'
                }`}
              >
                {description}
              </p>

              {/* Bullet points */}
              <ul className="mb-6 sm:mb-7 md:mb-[30px] space-y-3 sm:space-y-4 md:space-y-[20px]">
                {points.map((point, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-2 text-sm text-[#666666] ${isRTL ? 'flex-row text-right' : ''}`}
                  >
                    <FaCheckCircle className="text-[#782551] mt-[2px] flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* ── Store Buttons ── */}
              <div className={`flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 md:gap-6 ${isRTL ? 'items-start sm:flex-row' : ''}`}>

                {/* App Store */}
                <a
                  href="#"
                  className="flex items-center gap-3 sm:gap-4 px-5 sm:px-6 md:px-[30px] py-[10px] rounded-[10px] text-white no-underline w-[50%] sm:w-auto sm:min-w-[200px] md:min-w-[241px] relative transition-all duration-300 hover:opacity-90"
                  style={{
                    background: 'linear-gradient(90deg, #6b003e 33%, #6b003e 66%, #6b003e)',
                    boxShadow: '3px 4px 25px rgba(198,58,149,0.5)',
                  }}
                >
                  <span className="leading-[50px] z-10">
                    <img src="img/icon/apple-icon.png" alt="App Store" className="w-7 h-7 object-contain" />
                  </span>
                  <span className="z-10 text-[13px]">
                    {locale.lang === 'ar' ? 'متوفر على' : 'Available on'}
                    <strong className="block text-[15px] font-medium">
                      {locale.lang === 'ar' ? 'آب ستور' : 'APP STORE'}
                    </strong>
                  </span>
                </a>

                {/* Google Play — outlined style */}
                <a
                  href="#"
                  className="flex items-center gap-3 sm:gap-4 no-underline w-[50%] sm:w-auto sm:min-w-[220px] md:min-w-[262px] relative transition-all duration-300 hover:opacity-90 rounded-[10px]"
                  style={{
                    background: 'linear-gradient(90deg, #6b003e 33%, #6b003e 66%, #6b003e)',
                    padding: '1px',
                  }}
                >
                  {/* inner white fill */}
                  <span className="flex items-center gap-3 sm:gap-4 w-full h-full bg-white rounded-[9px] px-5 sm:px-6 md:px-[29px] py-[9px]">
                    <span className="leading-[50px] z-10">
                      <FaGooglePlay className="text-[26px] text-[#782551]" />
                    </span>
                    <span className="z-10 text-[13px] text-[#7D4196]">
                      {locale.lang === 'ar' ? 'متوفر على' : 'Available on'}
                      <strong className="block text-[15px] font-medium text-[#782551]">
                        {locale.lang === 'ar' ? 'جوجل بلاي' : 'GOOGLE PLAY'}
                      </strong>
                    </span>
                  </span>
                </a>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}