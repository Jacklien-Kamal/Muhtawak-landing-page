import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useRole } from '../../hooks/roleContext';
import { useI18n } from '../../hooks/i18nContext';
import { FaArrowLeft, FaArrowRight, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
  import { IoIosArrowForward ,IoIosArrowBack} from "react-icons/io";

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
  const { isRTL, locale } = useI18n();

  const { tag, heading, testimonials } = content.reviews;

  const [currentPage, setCurrentPage]   = useState(0);
  const [slidesPerPage, setSlidesPerPage] = useState(3);
  const [isAnimating, setIsAnimating]   = useState(false);
  const autoplayRef = useRef(null);

  const totalPages = Math.ceil(testimonials.length / slidesPerPage);

  useEffect(() => { setCurrentPage(0); }, [role]);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768)       setSlidesPerPage(1);
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
      className="relative pt-[100px] pb-[70px] px-52"
      dir={isRTL ? 'rtl' : 'ltr'}
      style={{
        backgroundImage: isRTL?'url(img/bg/easy-m-bg.png)':'url(img/bg/client-bg.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: isRTL ? 'left center' : 'right center',

      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">

          {/* ── Section Title ── */}
          <div className="w-full lg:w-1/2 mb-10">
            <div className={`section-title ${isRTL ? 'text-right' : ''}`}>
              {tag && (
                <span className="text-[16px] font-medium uppercase text-[#782551] tracking-[2px] block mb-5">
                  {tag}
                </span>
              )}
              <h2 className="text-[38px] font-semibold text-[#190a32] pb-[15px] mb-0 leading-tight">
                {heading}
              </h2>
            </div>
          </div>

          {/* ── Slider ── */}
          <div className="w-full">
            <div className="relative px-6">

              {/* Prev button */}
              <button
                onClick={isRTL ? nextPage : prevPage}
                className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 w-[40px] h-[40px] rounded-full border-none cursor-pointer text-white flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-opacity duration-200 hover:opacity-80"
                style={{ background: 'linear-gradient(90deg,#6b003e,#6b003e)' }}
              >
                {isRTL?<IoIosArrowBack/>:<IoIosArrowBack/>}
              </button>

              {/* Cards grid */}
              <div
                className={`grid ${gridCols} gap-6 min-h-[220px] transition-opacity duration-[400ms]`}
                style={{ opacity: isAnimating ? 0.4 : 1 }}
              >
                {visibleTestimonials.map((testimonial, index) => {
                  const globalIndex = currentPage * slidesPerPage + index;
                  return (
                    <div key={`${role}-${currentPage}-${index}`} className=''>
                      {/*
                        .single-testimonial:
                          bg-white, box-shadow:3px 4px 15px rgba(0,0,0,0.1),
                          border-radius:10px, margin-left:30px,
                          padding:20px, margin-top:30px, margin-bottom:30px, position:relative
                      */}
                      <div className="relative bg-white h-56 rounded-[10px] shadow-[3px_4px_15px_rgba(0,0,0,0.1)] mx-[15px] p-5 mt-[30px] mb-[30px]">

                        {/* .qutation — absolute right:8% top:8% — large typographic " in soft pink */}
                        <div className={`absolute top-[8%] ${isRTL ? 'left-[8%]' : 'right-[8%]'}`}>
                          <span
                            className="block leading-none select-none"
                            style={{
                              fontSize: '80px',
                              color: '#6b003e',
                              fontFamily: 'Georgia, serif',
                              lineHeight: 0.8,
                            }}
                          >
{isRTL?<FaQuoteLeft className='text-4xl mt-3 ' />:<FaQuoteRight className='text-5xl mt-3 ' />}
                          </span>
                        </div>

                        {/* .testi-author — overflow:hidden, display:flex, margin-left:-78px */}
                        <div className={`flex overflow-hidden -ml-[20px] ${isRTL ? 'flex-row -mr-[20px] -ml-0' : ''}`}>
                          {/* avatar — margin-top:-14px */}
                          <img
                            src={avatars[globalIndex % avatars.length]}
                            alt="avatar"
                            className="-mt-[14px] flex-shrink-0"
                          />
                          {/* .ta-info — overflow:hidden, display:block, padding-top:20px */}
                          <div className={`overflow-hidden block pt-5 ${isRTL ? 'pr-3' : 'pl-0'}`}>
                            {/* h6 — font-size:20px, margin-bottom:5px */}
                            <h6 className="text-[20px] font-semibold text-[#190a32] mb-[5px]">
                              {testimonial.name}
                            </h6>
                            {/* span — font-size:14px, color:#7D4196 */}
                            <span className="text-[14px] text-[#7D4196]">
                              {testimonial.role}
                            </span>
                          </div>
                        </div>

                        {/*
                          p — padding-left:42px, margin-bottom:0, margin-top:-20px
                          font-size:14px, color:#666
                        */}
                        <p className={`text-[14px] text-[#666666] leading-6 mb-0 -mt-[20px] ${isRTL ? 'pr-[42px] text-right' : 'pl-[42px]'}`}>
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
                className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-[40px] h-[40px] rounded-full border-none cursor-pointer text-white flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-opacity duration-200 hover:opacity-80"
                style={{ background: 'linear-gradient(90deg,#6b003e,#6b003e)' }}
              >
                {!isRTL?<IoIosArrowForward/>:<IoIosArrowForward/>}
            </button>
            </div>

            {/* ── Pagination dots ── */}
            <div className="flex justify-center items-center gap-[10px] mt-8">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToPage(i)}
                  className="h-[10px] rounded-[5px] border-none cursor-pointer p-0 transition-all duration-300"
                  style={{
                    width: i === currentPage ? '28px' : '10px',
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