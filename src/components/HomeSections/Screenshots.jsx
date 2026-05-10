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
  const [active, setActive] = useState(2);

  // Circular diff: wraps so slides on the "other side" appear as neighbors
  const circularDiff = (i, active, total) => {
    let diff = i - active;
    if (diff > total / 2)  diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  const getStyle = (diff) => {
    const absDiff = Math.abs(diff);
    if (absDiff === 0) return {
      transform: 'scale(1.15)',
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

  const renderCoverflow = ({ slideWidth, spacing, half, height, arrowSize, arrowOffset }) => (
    <div className="relative flex items-center justify-center" style={{ height }}>
      <div className={`flex items-center justify-center w-full ${isRTL ? 'flex-row-reverse' : ''}`}>
        {slides.map((src, i) => {
          const diff = circularDiff(i, active, slides.length);
          return (
            <div
              key={i}
              onClick={() => setActive(i)}
              className="absolute cursor-pointer transition-all duration-500 ease-in-out"
              style={{
                width: slideWidth,
                ...getStyle(diff),
                left: `calc(50% + ${diff * spacing}px - ${half}px)`,
              }}
            >
              <img
                src={src}
                alt={`screenshot ${i + 1}`}
                className="w-full h-auto rounded-2xl shadow-[3px_4px_25px_rgba(0,0,0,0.2)]"
              />
            </div>
          );
        })}
      </div>

      {/* <button
        onClick={isRTL ? next : prev}
        aria-label="Previous"
        className="absolute z-20 bg-white text-[#782551] rounded-full shadow-md flex items-center justify-center transition hover:bg-[#782551] hover:text-white"
        style={{ left: arrowOffset, width: arrowSize, height: arrowSize, fontSize: arrowSize * 0.55 }}
      >‹</button>
      <button
        onClick={isRTL ? prev : next}
        aria-label="Next"
        className="absolute z-20 bg-white text-[#782551] rounded-full shadow-md flex items-center justify-center transition hover:bg-[#782551] hover:text-white"
        style={{ right: arrowOffset, width: arrowSize, height: arrowSize, fontSize: arrowSize * 0.55 }}
      >›</button> */}
    </div>
  );

  return (
    <section
      id="screenshots"
      className="relative pt-14 sm:pt-16 md:pt-20 lg:pt-[100px] pb-10 sm:pb-12 md:pb-[70px] overflow-hidden"
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
          <div className="w-full lg:w-8/12 text-center px-4 sm:px-6 md:px-10 mb-8 sm:mb-10 md:mb-[50px]">
            {content?.screenshots?.label && (
              <span className="text-sm sm:text-base font-medium uppercase text-[#782551] tracking-[2px] block mb-3 sm:mb-5">
                {content.screenshots.label}
              </span>
            )}
            <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-semibold text-primary pb-3 md:pb-[15px] mb-0 leading-tight">
              {content?.screenshots?.heading
                ?? (locale.lang === 'ar' ? 'لقطات شاشة التطبيق' : 'Our App Screenshots')}
            </h2>
            <p className="text-lg text-[#666666] leading-6 mb-0 mt-3 sm:mt-4">
              {content?.screenshots?.subheading
                ?? (locale.lang === 'ar'
                  ? 'اكتشف واجهة التطبيق السهلة والجذابة من خلال لقطات الشاشة.'
                  : 'Quisque posuere mollis ipsum et molestie. Fusce cursus, risus vel scelerisque porttitor, leo quam vulputate nibh, sit amet blandit erat magna.')}
            </p>
          </div>
        </div>

        {/* ── Mobile: small coverflow, 3 slides visible ── */}
        <div className="block sm:hidden">
          {renderCoverflow({
            slideWidth: 95,
            spacing: 75,
            half: 47,
            height: 300,
            arrowSize: 32,
            arrowOffset: 4,
          })}
        </div>

        {/* ── Tablet ── */}
        <div className="hidden sm:block md:hidden">
          {renderCoverflow({
            slideWidth: 160,
            spacing: 140,
            half: 80,
            height: 440,
            arrowSize: 40,
            arrowOffset: 8,
          })}
        </div>

        {/* ── Desktop ── */}
        <div className="hidden md:block lg:hidden">
          {renderCoverflow({
            slideWidth: 200,
            spacing: 160,
            half: 100,
            height: 500,
            arrowSize: 44,
            arrowOffset: 24,
          })}
        </div>

        {/* ── Large desktop ── */}
        <div className="hidden lg:block">
          {renderCoverflow({
            slideWidth: 260,
            spacing: 200,
            half: 130,
            height: 600,
            arrowSize: 44,
            arrowOffset: 40,
          })}
        </div>

        {/* ── Pagination dots ── */}
        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
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