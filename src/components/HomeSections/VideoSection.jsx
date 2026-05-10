import React, { useState, useEffect } from 'react';
import { useRole } from '../../hooks/roleContext';
import { useI18n } from '../../hooks/i18nContext';

export default function VideoSection() {
  const { content } = useRole();
  const { heading, description, points } = content.video;
  const { isRTL } = useI18n();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  return (
    <>
      <section id="how-it-works" className="relative overflow-hidden py-2 pt-20" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className='bg-red-50 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-52'>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-0 pointer-events-none">
            <img src="img/shape/header-sape5.png" alt="" />
          </div>

          <div className="mx-auto px-6 mt-12">
            <div className="flex flex-col lg:flex-row items-center gap-10 py-24">

              {/* ── Left: image with play button ── */}

              {/* DESKTOP (lg+): exact original layout */}
              <div className="hidden lg:block lg:w-6/12 w-full mt-64 lg:mt-0">
                <div className={`absolute ${isRTL ? "-right-10" : "-left-10"} bottom-1/6 z-100 inline-block w-full max-w-3xl`}>
                  <img
                    src="https://htmldemo.zcubethemes.com/bingle/img/bg/video-img.png"
                    alt="video"
                    className="w-[90%] block rounded-md z-10"
                  />
                  <span
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full block z-20"
                    style={{
                      background: 'rgba(214, 52, 132, 0.15)',
                      animation: 'pulse-ring 1.8s ease-out infinite',
                    }}
                  />
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className={`popup-video absolute top-1/2 ${isRTL ? "right-[80%]" : "left-[90%]"} -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center z-30 border-0 cursor-pointer`}
                    style={{
                      background: 'linear-gradient(135deg, #d20b52, #d27252)',
                      boxShadow: '0 0 0 14px rgba(214, 52, 132, 0.2)',
                    }}
                    aria-label="Play video"
                  >
                    <span
                      className="inline-block ml-1"
                      style={{
                        width: 0, height: 0,
                        borderTop: '11px solid transparent',
                        borderBottom: '11px solid transparent',
                        borderLeft: '20px solid #fff',
                      }}
                    />
                  </button>
                </div>
              </div>

              {/* MOBILE (< lg): clean centered layout */}
              <div className="lg:hidden w-full">
                <div className="relative w-full max-w-sm mx-auto">
                  <img
                    src="https://htmldemo.zcubethemes.com/bingle/img/bg/video-img.png"
                    alt="video"
                    className="w-full block rounded-xl shadow-lg"
                  />
                  {/* Pulse ring */}
                  <span
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full block z-20 pointer-events-none"
                    style={{
                      background: 'rgba(214, 52, 132, 0.15)',
                      animation: 'pulse-ring 1.8s ease-out infinite',
                    }}
                  />
                  {/* Play button — centered on image */}
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center z-30 border-0 cursor-pointer transition-transform duration-200 hover:scale-110"
                    style={{
                      background: 'linear-gradient(135deg, #d20b52, #d27252)',
                      boxShadow: '0 0 0 10px rgba(214, 52, 132, 0.2)',
                    }}
                    aria-label="Play video"
                  >
                    <span
                      className="inline-block ml-1"
                      style={{
                        width: 0, height: 0,
                        borderTop: '9px solid transparent',
                        borderBottom: '9px solid transparent',
                        borderLeft: '16px solid #fff',
                      }}
                    />
                  </button>
                </div>
              </div>

              {/* ── Right: text content (shared, responsive tweaks only) ── */}
              <div className="lg:w-[70%] w-full">
                <div className={`${isRTL ? 'pr-0 lg:pr-12 text-right' : 'pl-0 lg:pl-12'}`}>
                  <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-primary leading-tight mb-5 lg:w-[80%]">
                    {heading}
                  </h2>
                  <p className="text-lg leading-7 mb-6">
                    {description}
                  </p>
                  <ul className="list-none m-0 p-0 space-y-3">
                    {points.map((point, i) => (
                      <li key={i} className={`flex items-start text-md text-gray-600 ${isRTL ? 'flex-row' : ''}`}>
                        <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full border-2 border-[#d20b52] text-[#d20b52] text-xs shrink-0 mt-0.5 ${isRTL ? 'ml-3' : 'mr-3'}`}>
                          ✓
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>

        <style>{`
          @keyframes pulse-ring {
            0%   { transform: translate(-50%, -50%) scale(1);   opacity: 0.6; }
            100% { transform: translate(-50%, -50%) scale(1.6); opacity: 0;   }
          }
        `}</style>
      </section>

      {/* ── YouTube Modal ── */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
          style={{ background: 'rgba(0,0,0,0.85)' }}
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl"
            style={{ aspectRatio: '16/9' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-9 right-0 text-white text-2xl sm:text-3xl leading-none cursor-pointer bg-transparent border-0 hover:opacity-70 transition-opacity"
              aria-label="Close video"
            >
              ✕
            </button>
            <iframe
              className="w-full h-full rounded-lg shadow-2xl"
              src="https://www.youtube.com/embed/7e90gBu4pas?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}