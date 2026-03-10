import React, { useState, useEffect } from 'react';
import { useRole } from '../../hooks/roleContext';
import { useI18n } from '../../hooks/i18nContext';

export default function VideoSection() {
  const { content } = useRole();
  const { heading, description, points } = content.video;
  const { isRTL } = useI18n();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Close modal on Escape key
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
      <section className="relative overflow-hidden py-2 pt-20" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className='bg-blue-50 px-52'>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-0 pointer-events-none">
            <img src="img/shape/header-sape5.png" alt="" />
          </div>

          <div className="mx-auto px-6 mt-12">
            <div className="flex flex-col lg:flex-row items-center gap-10 py-24">

              {/* ── Left: image with play button ── */}
              <div className="lg:w-6/12 w-full mt-64 lg:mt-0">
                <div className={`absolute ${isRTL ? "-right-10" : "-left-10"} bottom-1/4 z-100 inline-block w-full max-w-3xl`}>
                  <img
                    src="https://htmldemo.zcubethemes.com/bingle/img/bg/video-img.png"
                    alt="video"
                    className="w-full block rounded-md z-10"
                  />

                  {/* Outer soft glow ring */}
                  <span
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full block z-20"
                    style={{
                      background: 'rgba(214, 52, 132, 0.15)',
                      animation: 'pulse-ring 1.8s ease-out infinite',
                    }}
                  />

                  {/* Play button — now opens modal */}
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className={`popup-video absolute top-1/2 ${isRTL ? "right-[90%]" : "left-full"} -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full flex items-center justify-center z-30 border-0 cursor-pointer`}
                    style={{
                      background: 'linear-gradient(135deg, #d20b52, #d27252)',
                      boxShadow: '0 0 0 14px rgba(214, 52, 132, 0.2)',
                    }}
                    aria-label="Play video"
                  >
                    <span
                      className="inline-block ml-1"
                      style={{
                        width: 0,
                        height: 0,
                        borderTop: '11px solid transparent',
                        borderBottom: '11px solid transparent',
                        borderLeft: '20px solid #fff',
                      }}
                    />
                  </button>

                  <style>{`
                    @keyframes pulse-ring {
                      0% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
                      100% { transform: translate(-50%, -50%) scale(1.6); opacity: 0; }
                    }
                  `}</style>
                </div>
              </div>

              {/* ── Right: text content ── */}
              <div className="lg:w-7/12 w-full">
                <div className={`${isRTL ? 'pr-0 lg:pr-12 text-right' : 'pl-0 lg:pl-12'}`}>
                  <h2 className="text-4xl w-[50%] font-bold text-[#190a32] leading-tight mb-5">
                    {heading}
                  </h2>
                  <p className="text-gray-500 text-sm leading-7 mb-6">
                    {description}
                  </p>
                  <ul className="list-none m-0 p-0 space-y-3">
                    {points.map((point, i) => (
                      <li key={i} className={`flex items-start text-sm text-gray-600 ${isRTL ? 'flex-row' : ''}`}>
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
      </section>

      {/* ── YouTube Modal ── */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ background: 'rgba(0, 0, 0, 0.85)' }}
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl mx-4"
            style={{ aspectRatio: '16/9' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-10 right-0 text-white text-3xl leading-none cursor-pointer bg-transparent border-0 hover:opacity-70 transition-opacity"
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