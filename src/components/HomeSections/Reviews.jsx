import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useRole } from '../../hooks/roleContext';
import { useI18n } from '../../hooks/i18nContext';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const avatars = [
  'img/testimonial/testi_avatar.png',
  'img/testimonial/testi_avatar2.png',
  'img/testimonial/testi_avatar3.png',
  'img/testimonial/testi_avatar.png',
  'img/testimonial/testi_avatar2.png',
  'img/testimonial/testi_avatar3.png',
];

export default function Reviews() {
  const { role, content } = useRole();
  const { isRTL } = useI18n();

  const { tag, heading, testimonials } = content.reviews;

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
      id="testimonios"
      className="relative pt-14 sm:pt-16 md:pt-20 lg:pt-[100px] pb-10 sm:pb-12 md:pb-[70px] px-4 sm:px-8 md:px-16 lg:px-28 xl:px-52"
      dir={isRTL ? 'rtl' : 'ltr'}
      style={{
        backgroundImage: isRTL ? 'url(img/bg/easy-m-bg.png)' : 'url(img/bg/client-bg.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: isRTL ? 'left center' : 'right center',
      }}
    >
      <div className="container mx-auto px-0 sm:px-4">
        <div className="flex flex-wrap">

          {/* ── Section Title ── */}
          <div className="w-full lg:w-1/2 mb-6 sm:mb-8 md:mb-10">
            <div className={isRTL ? 'text-right' : ''}>
              {tag && (
                <span className="text-[14px] sm:text-[16px] font-medium uppercase text-[#782551] tracking-[2px] block mb-3 sm:mb-5">
                  {tag}
                </span>
              )}
              <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-semibold text-[#190a32] pb-3 md:pb-[15px] mb-0 leading-tight">
                {heading}
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
                style={{ background: 'linear-gradient(90deg,#6b003e,#6b003e)' }}
              >
                <IoIosArrowBack />
              </button>

              {/* Cards grid */}
              <div
                className={`grid ${gridCols} gap-3 sm:gap-4 md:gap-6 min-h-[200px] sm:min-h-[220px] transition-opacity duration-[400ms]`}
                style={{ opacity: isAnimating ? 0.4 : 1 }}
              >
                {visibleTestimonials.map((testimonial, index) => {
                  const globalIndex = currentPage * slidesPerPage + index;
                  return (
                    <div key={`${role}-${currentPage}-${index}`}>
                      <div className="relative bg-white rounded-[10px] shadow-[3px_4px_15px_rgba(0,0,0,0.1)] mx-1 sm:mx-[10px] md:mx-[15px] p-3 sm:p-4 md:p-5 mt-4 sm:mt-6 md:mt-[30px] mb-4 sm:mb-6 md:mb-[30px]">

                        {/* Quote icon */}
                        <div className={`absolute top-[8%] ${isRTL ? 'left-[8%]' : 'right-[8%]'}`}>
                          <span className="block leading-none select-none">
                            {isRTL
                              ? <FaQuoteLeft className='text-2xl sm:text-3xl md:text-4xl mt-3 text-[#6b003e]' />
                              : <FaQuoteRight className='text-3xl sm:text-4xl md:text-5xl mt-3 text-[#6b003e]' />
                            }
                          </span>
                        </div>

                        {/* Author row */}
                        <div className={`flex overflow-hidden -ml-[12px] sm:-ml-[16px] md:-ml-[20px] ${isRTL ? 'flex-row -mr-[12px] sm:-mr-[16px] md:-mr-[20px] -ml-0' : ''}`}>
                          <img
                            src={avatars[globalIndex % avatars.length]}
                            alt="avatar"
                            className="-mt-[10px] sm:-mt-[12px] md:-mt-[14px] flex-shrink-0 w-14 h-14 sm:h-auto mt-1 sm:w-auto"
                          />
                          <div className={`overflow-hidden block pt-3 sm:pt-4 md:pt-5 ${isRTL ? 'pr-2 sm:pr-3' : 'pl-0'}`}>
                            <h6 className="text-base sm:text-lg md:text-[20px] font-semibold text-[#190a32] mb-[4px] md:mb-[5px]">
                              {testimonial.name}
                            </h6>
                            {/* <span className="text-[12px] sm:text-[13px] md:text-[14px] text-[#7D4196]">
                              {testimonial.role}
                            </span> */}
                          </div>
                        </div>

                        {/* Review text */}
                        <p className={`text-[13px] sm:text-[14px] text-[#666666] leading-6 mb-0 -mt-[14px] sm:-mt-[18px] md:-mt-[20px] ${isRTL ? 'pr-[30px] sm:pr-[38px] md:pr-[42px] text-right' : 'pl-[30px] sm:pl-[38px] md:pl-[42px]'}`}>
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
                style={{ background: 'linear-gradient(90deg,#6b003e,#6b003e)' }}
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