import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useRole } from '../../hooks/roleContext';
import { useI18n } from '../../hooks/i18nContext';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { BiUser, BiUserCircle } from 'react-icons/bi';

/* ── Initials Avatar ── */
const AVATAR_COLORS = [
  { bg: '#6b003e', text: '#fff' },
  { bg: '#980438', text: '#fff' },
  { bg: '#d27252', text: '#fff' },
  { bg: '#7a1248', text: '#fff' },
  { bg: '#b5084a', text: '#fff' },
  { bg: '#e08060', text: '#fff' },
];

function getInitials(name = '') {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
}

function UserAvatar({ name, index }) {
  const color = AVATAR_COLORS[index % AVATAR_COLORS.length];
  return (
    <div
      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-sm sm:text-base select-none shadow-md flex-shrink-0"
      style={{ background: color.bg, color: color.text }}
    >
      <BiUser className='text-2xl'/>
    </div>
  );
}

/* ── Reviews Section ── */
export default function Reviews() {
  const { role, content } = useRole();
  const { isRTL } = useI18n();

  const { tag, testimonials } = content.reviews;

  const [currentPage, setCurrentPage]     = useState(0);
  const [slidesPerPage, setSlidesPerPage] = useState(3);
  const [isAnimating, setIsAnimating]     = useState(false);
  const autoplayRef = useRef(null);

  const totalPages = Math.ceil(testimonials.length / slidesPerPage);

  useEffect(() => { setCurrentPage(0); }, [role]);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640)       setSlidesPerPage(1);
      else if (window.innerWidth < 1024) setSlidesPerPage(2);
      else                               setSlidesPerPage(3);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const goToPage = useCallback((page) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentPage(page);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const nextPage = useCallback(() => goToPage((currentPage + 1) % totalPages), [currentPage, totalPages, goToPage]);
  const prevPage = useCallback(() => goToPage((currentPage - 1 + totalPages) % totalPages), [currentPage, totalPages, goToPage]);

  useEffect(() => {
    autoplayRef.current = setInterval(nextPage, 3000);
    return () => clearInterval(autoplayRef.current);
  }, [nextPage]);

  const visibleTestimonials = testimonials.slice(
    currentPage * slidesPerPage,
    currentPage * slidesPerPage + slidesPerPage,
  );

  const gridCols =
    slidesPerPage === 1 ? 'grid-cols-1' :
    slidesPerPage === 2 ? 'grid-cols-2' :
                          'grid-cols-3';

  return (
    <section
      id="reviews"
      className="relative pt-14 sm:pt-16 md:pt-20 lg:pt-[100px] pb-10 sm:pb-12 md:pb-[70px] px-4 sm:px-8 md:px-16 lg:px-28 xl:px-52"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div
        className="hidden lg:block absolute top-[5%] w-72 lg:w-[500px] xl:w-[1038px] h-[400px] lg:h-[500px]"
        style={{
          [isRTL ? 'left' : 'right']: '-200px',
          backgroundImage: isRTL ? 'url(img/bg/easy-m-bg.png)' : 'url(img/bg/client-bg.png)',
          backgroundPosition: isRTL ? 'left center' : 'right center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}
      />

      <div className="container mx-auto px-0 sm:px-4">
        <div className="flex flex-wrap">

          {/* ── Section Title ── */}
          <div className="w-full lg:w-1/2 mb-6 sm:mb-8 md:mb-10">
            <div className={isRTL ? 'text-right' : ''}>
              <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-semibold text-primary pb-3 md:pb-[15px] mb-0 leading-tight">
                {tag}
              </h2>
            </div>
          </div>

          {/* ── Slider ── */}
          <div className="w-full">
            <div className="relative px-6 sm:px-8">

              {/* Prev button */}
              <button
                onClick={isRTL ? nextPage : prevPage}
                className="absolute -left-1 sm:-left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-[40px] sm:h-[40px] rounded-full border-none cursor-pointer text-white flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-opacity duration-200 hover:opacity-80"
                style={{ background: '#6b003e' }}
              >
                <IoIosArrowBack />
              </button>

              {/* Cards grid */}
              <div
                className={`grid ${gridCols} gap-3 sm:gap-4 md:gap-6 transition-opacity duration-[400ms]`}
                style={{ opacity: isAnimating ? 0.4 : 1 }}
              >
                {visibleTestimonials.map((testimonial, index) => {
                  const globalIndex = currentPage * slidesPerPage + index;

                  return (
                    <div key={`${role}-${currentPage}-${index}`}>
                      <div className="relative bg-white rounded-[10px] shadow-[3px_4px_15px_rgba(0,0,0,0.1)] mx-1 sm:mx-[10px] p-4 sm:p-5 mt-4 sm:mt-6 md:mt-[30px] mb-4 sm:mb-6 md:mb-[30px]">

                        {/* Quote icon */}
                        <div className={`absolute top-3 ${isRTL ? 'left-4' : 'right-4'}`}>
                          {isRTL
                            ? <FaQuoteLeft  className="text-2xl sm:text-3xl text-[#6b003e] opacity-70" />
                            : <FaQuoteRight className="text-2xl sm:text-3xl text-[#6b003e] opacity-70" />
                          }
                        </div>

                        {/* ── Author row: avatar + name side by side ── */}
                        <div className={`flex items-center gap-3 mb-3 ${isRTL ? ' ' : ''}`}>
                          <UserAvatar name={testimonial.name} index={globalIndex} />
                          <h6 className="text-base sm:text-lg font-semibold text-[#190a32] mb-0">
                            {testimonial.name}
                          </h6>
                        </div>

                        {/* Review text */}
                        <p className={`text-[13px] sm:text-[14px] text-[#666666] leading-6 mb-0 h-20 ${isRTL ? 'text-right' : 'text-left'}`}>
                          {testimonial.text}
                        </p>

                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Next button */}
              <button
                onClick={isRTL ? prevPage : nextPage}
                className="absolute -right-1 sm:-right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-[40px] sm:h-[40px] rounded-full border-none cursor-pointer text-white flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-opacity duration-200 hover:opacity-80"
                style={{ background: '#6b003e' }}
              >
                <IoIosArrowForward />
              </button>
            </div>

            {/* ── Pagination dots ── */}
            <div className="flex justify-center items-center gap-[10px] mt-6 sm:mt-8">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToPage(i)}
                  className="h-[8px] sm:h-[10px] rounded-[5px] border-none cursor-pointer p-0 transition-all duration-300"
                  style={{
                    width: i === currentPage ? '28px' : '8px',
                    background: i === currentPage ? '#6b003e' : '#ccc',
                  }}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}