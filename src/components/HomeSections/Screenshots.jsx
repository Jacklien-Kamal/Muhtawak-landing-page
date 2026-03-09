import React, { useState } from 'react';
import { useI18n } from '../../hooks/i18nContext';
import { useRole } from '../../hooks/roleContext';

const slides = [
  'img/gallery/screen-img01.png',
  'img/gallery/screen-img02.png',
  'img/gallery/screen-img03.png',
  'img/gallery/screen-img04.png',
  'img/gallery/screen-img05.png',
];

export default function Screenshots() {
  const { locale, isRTL } = useI18n();
  const { content } = useRole();
  const [active, setActive] = useState(2); // center slide

  const getStyle = (i) => {
    const diff = i - active;
    const absDiff = Math.abs(diff);

    if (absDiff === 0) return {
      transform: 'scale(1.15) translateY(0px)',
      zIndex: 10,
      opacity: 1,
      filter: 'none',
    };
    if (absDiff === 1) return {
      transform: `scale(0.88) translateX(${diff > 0 ? '30px' : '-30px'})`,
      zIndex: 5,
      opacity: 0.7,
      filter: 'brightness(0.85)',
    };
    return {
      transform: `scale(0.75) translateX(${diff > 0 ? '60px' : '-60px'})`,
      zIndex: 1,
      opacity: 0.4,
      filter: 'brightness(0.7)',
    };
  };

  const prev = () => setActive((a) => (a - 1 + slides.length) % slides.length);
  const next = () => setActive((a) => (a + 1) % slides.length);

  return (
    <section
      id="screen"
      className="relative pt-[100px] pb-[70px] overflow-hidden"
      style={{
        backgroundImage: 'url(img/shape/header-sape4.png)',
        backgroundPosition: 'right center',
        backgroundSize: 'auto',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto px-4">

        {/* ── Section Title ── */}
        <div className="flex justify-center">
          <div className="w-full lg:w-8/12 text-center px-10 mb-[50px]">
            {content?.screenshots?.label && (
              <span className="text-base font-medium uppercase text-[#782551] tracking-[2px] block mb-5">
                {content.screenshots.label}
              </span>
            )}
            <h2 className="text-[38px] font-semibold text-[#190a32] pb-[15px] mb-0 leading-tight">
              {content?.screenshots?.heading
                ?? (locale.lang === 'ar' ? 'لقطات شاشة التطبيق' : 'Our App Screenshots')}
            </h2>
            <p className="text-sm text-[#666666] leading-6 mb-0 mt-4">
              {content?.screenshots?.subheading
                ?? (locale.lang === 'ar'
                  ? 'اكتشف واجهة التطبيق السهلة والجذابة من خلال لقطات الشاشة.'
                  : 'Quisque posuere mollis ipsum et molestie. Fusce cursus, risus vel scelerisque porttitor, leo quam vulputate nibh, sit amet blandit erat magna.')}
            </p>
          </div>
        </div>

        {/* ── Coverflow Carousel ── */}
        <div className="relative flex items-center justify-center h-[500px] md:h-[600px]">

          {/* Slides */}
          <div className={`flex items-center justify-center gap-4 w-full ${isRTL ? 'flex-row-reverse' : ''}`}>
            {slides.map((src, i) => (
              <div
                key={i}
                onClick={() => setActive(i)}
                className="absolute cursor-pointer transition-all duration-500 ease-in-out w-[220px] md:w-[260px]"
                style={{
                  ...getStyle(i),
                  left: `calc(50% + ${(i - active) * 180}px - 110px)`,
                }}
              >
                <img
                  src={src}
                  alt={`screenshot ${i + 1}`}
                  className="w-full h-auto rounded-2xl shadow-[3px_4px_25px_rgba(0,0,0,0.2)]"
                />
              </div>
            ))}
          </div>

          {/* Prev / Next arrows */}
          <button
            onClick={isRTL ? next : prev}
            className="absolute left-4 md:left-10 z-20 bg-white text-[#782551] w-11 h-11 rounded-full shadow-md flex items-center justify-center text-lg transition hover:bg-[#782551] hover:text-white"
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            onClick={isRTL ? prev : next}
            className="absolute right-4 md:right-10 z-20 bg-white text-[#782551] w-11 h-11 rounded-full shadow-md flex items-center justify-center text-lg transition hover:bg-[#782551] hover:text-white"
            aria-label="Next"
          >
            ›
          </button>
        </div>

        {/* ── Pagination dots ── */}
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="h-[5px] rounded-[3px] transition-all duration-300 border-none cursor-pointer"
              style={{
                width: i === active ? '36px' : '20px',
                background: i === active ? '#782551' : '#d1d5db',
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}