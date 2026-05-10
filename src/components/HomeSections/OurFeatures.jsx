import React, { useState, useRef, useEffect } from 'react';
import { useRole } from '../../hooks/roleContext';
import { useI18n } from '../../hooks/i18nContext';

const FEATURE_IMAGES = {
  Creator: [
    'img/bg/f1.png',
    'img/bg/f3.png',
    'img/bg/f2.png',
    'img/bg/f1.png',
    'img/bg/f3.png',
    'img/bg/f2.png',
    'img/bg/f2.png',
  ],
  Agency: [
    'https://muhtawak.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FfastDelivery.80cef0ae.jpg&w=640&q=75',
    'https://muhtawak.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2ForiginalContent.94656b25.jpg&w=640&q=75',
    'https://muhtawak.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FcompetitiveCosts.386e62d1.jpg&w=640&q=75',
    'https://muhtawak.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FfastDelivery.80cef0ae.jpg&w=640&q=75',
    'https://muhtawak.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2ForiginalContent.94656b25.jpg&w=640&q=75',
    'https://muhtawak.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FcompetitiveCosts.386e62d1.jpg&w=640&q=75',
    'https://muhtawak.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FcompetitiveCosts.386e62d1.jpg&w=640&q=75',
  ],
};

const CARDS_PER_VIEW = { sm: 1, md: 2, lg: 3 };

export default function OurFeatures() {
  const { role } = useRole();
  const { locale, isRTL } = useI18n();
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsVisible, setCardsVisible] = useState(3);
  const trackRef = useRef(null);
  const touchStartX = useRef(null);

  const t = locale.ourFeatures;
  const features = t[role].items;
  const images = FEATURE_IMAGES[role];
  const totalSlides = Math.ceil(features.length / cardsVisible);

  // Responsive cards-per-view
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setCardsVisible(w < 640 ? 1 : w < 1024 ? 2 : 3);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // Reset slide when role or cardsVisible changes
  useEffect(() => {
    setCurrentSlide(0);
    setActiveIndex(0);
  }, [role, cardsVisible]);

  const maxSlide = Math.max(0, features.length - cardsVisible);

  const goTo = (idx) => {
    const clamped = Math.max(0, Math.min(idx, maxSlide));
    setCurrentSlide(clamped);
  };

  const prev = () => goTo(currentSlide - 1);
  const next = () => goTo(currentSlide + 1);

  // Touch / drag support
  const onTouchStart = (e) => {
    touchStartX.current = e.touches?.[0]?.clientX ?? e.clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const endX = e.changedTouches?.[0]?.clientX ?? e.clientX;
    const diff = touchStartX.current - endX;
    if (Math.abs(diff) > 40) isRTL ? (diff > 0 ? prev() : next()) : (diff > 0 ? next() : prev());
    touchStartX.current = null;
  };

  const translateX = isRTL
    ? `${(currentSlide / cardsVisible) * 100}%`
    : `-${(currentSlide / cardsVisible) * 100}%`;

  const dotCount = maxSlide + 1;

  return (
    <section
      id="features"
      className="relative pt-14 sm:pt-16 md:pt-20 lg:pt-[100px] pb-10 sm:pb-14 md:pb-[80px] overflow-hidden"
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
            <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-semibold text-primary pb-1 mb-0 leading-tight">
              {t.heading}
            </h2>
            <p className="text-lg text-gray-700 leading-6 mb-0 mt-1 ">
              {t[role].subheading}
            </p>
            <p className="text-md text-[#666666] leading-6 mb-0 mt-3 sm:mt-4">
              {t[role].description}
            </p>
          </div>
        </div>

        {/* ── Carousel Wrapper ── */}
        <div className="relative">

          {/* Prev Button */}
          <button
            onClick={isRTL ? next : prev}
            disabled={isRTL ? currentSlide >= maxSlide : currentSlide === 0}
            aria-label="Previous"
            className="absolute top-1/2 -translate-y-1/2 z-10 -left-4 sm:-left-6 md:-left-8
              w-10 h-10 rounded-full bg-white shadow-md border border-gray-100
              flex items-center justify-center text-[#782551]
              hover:bg-[#782551] hover:text-white transition-all duration-300
              disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#782551]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Track */}
          <div
            className="overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            onMouseDown={onTouchStart}
            onMouseUp={onTouchEnd}
          >
            <div
              ref={trackRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(${translateX})`,
                direction: isRTL ? 'rtl' : 'ltr',
              }}
            >
              {features.map((feature, index) => {
                const isActive = index === activeIndex;
                return (
                  <div
                    key={`${role}-${index}`}
                    className="flex-shrink-0 px-2 sm:px-3 md:px-4"
                    style={{ width: `${100 / cardsVisible}%` }}
                  >
                    <div
                      onMouseEnter={() => setActiveIndex(index)}
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
                      <div className="flex justify-center mb-0 mt-6 sm:mt-8 md:mt-9">
                        <span
                          className={[
                            'w-12 h-12 sm:w-14 sm:h-14 cursor-pointer rounded-full flex items-center justify-center text-base sm:text-lg font-semibold transition-all duration-300',
                            isActive
                              ? 'text-white bg-[#782551] shadow-[3px_4px_25px_rgba(198,58,149,0.5)]'
                              : 'text-[#782551] border-2 border-[#782551] bg-white',
                          ].join(' ')}
                        >
                          {isRTL ? (index + 1).toLocaleString('ar-EG') : index + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={isRTL ? prev : next}
            disabled={isRTL ? currentSlide === 0 : currentSlide >= maxSlide}
            aria-label="Next"
            className="absolute top-1/2 -translate-y-1/2 z-10 -right-4 sm:-right-6 md:-right-8
              w-10 h-10 rounded-full bg-white shadow-md border border-gray-100
              flex items-center justify-center text-[#782551]
              hover:bg-[#782551] hover:text-white transition-all duration-300
              disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#782551]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* ── Dot Indicators ── */}
        {dotCount > 1 && (
          <div className="flex justify-center items-center gap-2 mt-6 sm:mt-8">
            {Array.from({ length: dotCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={[
                  'rounded-full transition-all duration-300',
                  currentSlide === i
                    ? 'w-6 h-2.5 bg-[#782551]'
                    : 'w-2.5 h-2.5 bg-[#782551]/30 hover:bg-[#782551]/60',
                ].join(' ')}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}