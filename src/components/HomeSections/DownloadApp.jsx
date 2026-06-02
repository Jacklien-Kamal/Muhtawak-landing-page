import React from 'react';
import { useRole } from '../../hooks/roleContext';
import { useI18n } from '../../hooks/i18nContext';
import { FaGooglePlay, FaCheckCircle } from 'react-icons/fa';

export default function DownloadApp() {
  const { content } = useRole();
  const { locale, isRTL } = useI18n();
  const { heading, description, points, subDes } = content.download;

  return (
    <section
      id='downloadApp'
      className="relative pt-8 sm:pt-20 md:pt-24 lg:pt-[100px] pb-8 sm:pb-12 md:pb-24 overflow-hidden px-4 sm:px-8 md:px-16 lg:px-28 xl:px-32"
      style={{
        backgroundImage: 'url(img/shape/header-sape3.png)',
        backgroundPosition: 'right center',
        backgroundSize: 'auto',
        backgroundRepeat: 'contain',
      }}
    >
      {/* ── Phone background image (hidden on small screens) ── */}
      <div
        className="hidden lg:block absolute top-[5%] -left-50 w-72 lg:w-[500px] xl:w-[1038px] h-[400px] lg:h-[500px] bg-no-repeat bg-center"
        style={{
          backgroundImage: 'url(img/bg/easy-m-bg.png)',
          backgroundPosition: 'left center',
          backGroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}
      />

      <div className="mx-auto px-0 sm:px-4">
        <div className={`flex flex-wrap ${isRTL ? 'flex-row-reverse' : ''}`}>

          {/* ── Left spacer ── */}
          <div className="hidden xl:block xl:w-5/12" />

          {/* ── Content column ── */}
          <div className="w-full xl:w-7/12">
            <div className={`${isRTL ? 'pr-0 pl-0 sm:pl-4 lg:pl-6' : 'pl-0 pr-0 sm:pr-4 lg:pr-6'}`}>

              {/* Heading */}
              <div className="mb-3 sm:mb-5 md:mb-[25px]">
                <h2 className="text-xl sm:text-3xl md:text-[34px] lg:text-[38px] font-semibold text-primary leading-tight">
                  {heading}
                </h2>
              </div>

              {/* Description */}
              <p
                style={{ whiteSpace: "pre-line" }}
                className={`text-xs sm:text-md text-[#666666] leading-5 sm:leading-6 mb-2 sm:mb-4 md:mb-[15px] ${isRTL ? 'pl-0 sm:pl-[30px] md:pl-[50px]' : 'pr-0 sm:pr-[30px] md:pr-[50px]'}`}
              >
                {description}
              </p>

              <p
                style={{ whiteSpace: "pre-line" }}
                className={`text-sm sm:text-lg text-primary font-semibold leading-5 sm:leading-6 mb-2 sm:mb-4 md:mb-[15px] ${isRTL ? 'pl-0 sm:pl-[30px] md:pl-[50px]' : 'pr-0 sm:pr-[30px] md:pr-[50px]'}`}
              >
                {subDes}
              </p>

              {/* Bullet points */}
              <ul className="mb-4 sm:mb-7 md:mb-[30px] space-y-2 sm:space-y-4 md:space-y-[20px]">
                {points.map((point, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-2 text-[11px] sm:text-sm text-[#666666] ${isRTL ? 'flex-row text-right' : ''}`}
                  >
                    <FaCheckCircle className="text-[#782551] mt-[2px] flex-shrink-0 text-xs sm:text-sm" />
                    <span className="leading-[1.5]">{point}</span>
                  </li>
                ))}
              </ul>

              {/* ── Store Buttons ── */}
              <div className={`flex flex-row gap-2 sm:gap-5 md:gap-6 ${isRTL ? 'items-start' : ''}`}>

                {/* App Store */}
                <a
                  href="https://apps.apple.com/sa/app/muhtawak-%D9%85%D8%AD%D8%AA%D9%88%D8%A7%D9%83/id6739213042"
                  target='_blank'
                  className="flex items-center gap-2 sm:gap-4 px-3 sm:px-6 md:px-[30px] py-[8px] sm:py-[10px] rounded-[8px] sm:rounded-[10px] text-white no-underline flex-1 md:flex-none md:w-[50%] sm:min-w-[200px] md:min-w-[241px] relative transition-all duration-300 hover:opacity-90"
                  style={{
                    background: 'linear-gradient(90deg, #6b003e 33%, #6b003e 66%, #6b003e)',
                    boxShadow: '3px 4px 25px rgba(198,58,149,0.5)',
                  }}
                >
                  <span className="z-10 flex-shrink-0">
                    <img src="img/icon/apple-icon.png" alt="App Store" className="w-5 h-5 sm:w-7 sm:h-7 object-contain" />
                  </span>
                  <span className="z-10 text-[10px] sm:text-[13px] leading-tight">
                    {locale.lang === 'ar' ? 'متوفر على' : 'Available on'}
                    <strong className="block text-[11px] sm:text-[15px] font-medium">
                      {locale.lang === 'ar' ? 'آب ستور' : 'APP STORE'}
                    </strong>
                  </span>
                </a>

                {/* Google Play — outlined style */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.unicode.muhtawakApp&pli=1"
                  target='_blank'
                  className="flex items-center gap-2 sm:gap-4 no-underline flex-1 md:flex-none md:w-[50%] sm:min-w-[220px] md:min-w-[262px] relative transition-all duration-300 hover:opacity-90 rounded-[8px] sm:rounded-[10px]"
                  style={{
                    background: 'linear-gradient(90deg, #6b003e 33%, #6b003e 66%, #6b003e)',
                    padding: '1px',
                  }}
                >
                  <span className="flex items-center gap-2 sm:gap-4 w-full h-full bg-white rounded-[7px] sm:rounded-[9px] px-3 sm:px-6 md:px-[29px] py-[7px] sm:py-[9px]">
                    <span className="z-10 flex-shrink-0">
                      <FaGooglePlay className="text-[18px] sm:text-[26px] text-[#782551]" />
                    </span>
                    <span className="z-10 text-[10px] sm:text-[13px] text-[#7D4196] leading-tight">
                      {locale.lang === 'ar' ? 'متوفر على' : 'Available on'}
                      <strong className="block text-[11px] sm:text-[15px] font-medium text-[#782551]">
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