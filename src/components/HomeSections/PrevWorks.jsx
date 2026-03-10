import React, { useEffect, useRef, useState } from 'react';
import { useI18n } from '../../hooks/i18nContext';

const VIDEOS = [
  'https://muhtawak-app-space.sgp1.digitaloceanspaces.com/videos/1755652162478/playlist.m3u8',
  'https://muhtawak-app-space.sgp1.digitaloceanspaces.com/videos/1759474253124/playlist.m3u8https://muhtawak-app-space.sgp1.digitaloceanspaces.com/videos/1758829503811/playlist.m3u8',
  'https://muhtawak-app-space.sgp1.digitaloceanspaces.com/videos/1751471713313/playlist.m3u8',
  'https://muhtawak-app-space.sgp1.digitaloceanspaces.com/videos/1759474253124/playlist.m3u8',
];

function HlsVideo({ src, style, videoProps }) {
  const videoRef = useRef(null);

  useEffect(() => {
    let hls;
    const video = videoRef.current;
    if (!video) return;

    const load = async () => {
      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = src;
      } else {
        const Hls = (await import('hls.js')).default;
        if (Hls.isSupported()) {
          hls = new Hls({ autoStartLoad: true });
          hls.loadSource(src);
          hls.attachMedia(video);
        }
      }
      video.addEventListener('canplay', () => { video.playbackRate = 0.5; }, { once: true });
    };

    load();
    return () => hls?.destroy();
  }, [src]);

  return <video ref={videoRef} style={style} {...videoProps} />;
}

const CONTENT = {
  en: {
    tag: '✦ Real Content. Real Creators.',
    heading: 'See What Our Creators Deliver',
  },
  ar: {
    tag: '✦ محتوى حقيقي. صُنّاع حقيقيون.',
    heading: 'شاهد ما يقدمه صُنّاع المحتوى لدينا',
  },
};

// Phone card component shared across layouts
function PhoneCard({ src, isActive, rotate, onClick, cardWidth = 200, videoHeight = 340 }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded-[24px] overflow-hidden flex-shrink-0"
      style={{
        width: `${cardWidth}px`,
        transform: `rotate(${isActive ? '0deg' : rotate}) scale(${isActive ? 1.08 : 0.97})`,
        transition: 'transform 0.45s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease',
        zIndex: isActive ? 10 : 2,
        boxShadow: isActive
          ? '0 32px 80px rgba(107,0,62,0.6), 0 0 0 2px rgba(192,0,90,0.5)'
          : '0 12px 40px rgba(0,0,0,0.5)',
      }}
    >
      <div className="bg-[#111] h-[28px] flex items-center justify-center border-b border-[#222]">
        <div className="w-[50px] h-[6px] rounded-[3px] bg-[#2a2a2a]" />
      </div>
      <div className="relative bg-black">
        <HlsVideo
          src={src}
          style={{ width: '100%', height: `${videoHeight}px`, objectFit: 'cover', display: 'block' }}
          videoProps={{ autoPlay: true, muted: true, loop: true, playsInline: true }}
        />
      </div>
      <div className="bg-[#111] h-[28px] flex items-center justify-center border-t border-[#222]">
        <div className="w-[32px] h-[32px] rounded-full border-[1.5px] border-[#2a2a2a]" />
      </div>
    </div>
  );
}

const ROTATIONS = ['-4deg', '2deg', '-2deg', '3deg'];

export default function CreatorShowcase() {
  const { locale, isRTL } = useI18n();
  const [active, setActive] = useState(null);

  const t = CONTENT[locale.lang] ?? CONTENT.en;

  // Absolute positions for desktop layout
  const positions = [
    { top: '8%',  left: '2%'  },
    { top: '5%',  left: '27%' },
    { top: '8%',  left: '52%' },
    { top: '6%',  left: '77%' },
  ];

  return (
    <section
      className="relative overflow-hidden py-12 sm:py-16 md:py-[80px] pb-14 sm:pb-16 md:pb-[90px]"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* ── Heading ── */}
      <div className="text-center relative z-[5] mb-8 sm:mb-10 md:mb-[50px] px-4">
        <p
          className="text-[10px] sm:text-[11px] tracking-[3px] sm:tracking-[4px] uppercase font-bold mb-3"
          style={{ fontFamily: "'Courier New', monospace", color: '#6b003e' }}
        >
          {t.tag}
        </p>
        <h2
          className="text-[clamp(22px,5vw,46px)] font-normal m-0 leading-[1.2] tracking-[-0.5px]"
          style={{ fontFamily: "'Georgia', serif", color: '#6b003e' }}
        >
          {t.heading}
        </h2>
      </div>

      {/* ── Mobile: single card, swipe with arrows ── */}
      <div className="flex sm:hidden flex-col items-center gap-6 px-4">
        <div className="flex items-center gap-4">
          {/* Prev */}
          <button
            onClick={() => setActive(a => ((a ?? 0) - 1 + VIDEOS.length) % VIDEOS.length)}
            className="bg-white text-[#6b003e] w-10 h-10 rounded-full shadow-md flex items-center justify-center text-xl flex-shrink-0 transition hover:bg-[#6b003e] hover:text-white"
            aria-label="Previous"
          >‹</button>

          <PhoneCard
            src={VIDEOS[active ?? 0]}
            isActive={true}
            rotate="0deg"
            onClick={() => {}}
            cardWidth={170}
            videoHeight={300}
          />

          {/* Next */}
          <button
            onClick={() => setActive(a => ((a ?? 0) + 1) % VIDEOS.length)}
            className="bg-white text-[#6b003e] w-10 h-10 rounded-full shadow-md flex items-center justify-center text-xl flex-shrink-0 transition hover:bg-[#6b003e] hover:text-white"
            aria-label="Next"
          >›</button>
        </div>
      </div>

      {/* ── Tablet: 2-up grid ── */}
      <div className="hidden sm:flex md:hidden justify-center gap-6 px-6 flex-wrap">
        {VIDEOS.map((src, i) => (
          <PhoneCard
            key={i}
            src={src}
            isActive={active === i}
            rotate={ROTATIONS[i]}
            onClick={() => setActive(i)}
            cardWidth={160}
            videoHeight={280}
          />
        ))}
      </div>

      {/* ── Desktop: absolute positioned coverflow ── */}
      <div className="hidden md:block relative h-[420px] lg:h-[460px] max-w-[1100px] mx-auto px-5">
        {VIDEOS.map((src, i) => {
          const pos = positions[i];
          const isAct = active === i;
          return (
            <div
              key={i}
              onClick={() => setActive(i)}
              className="absolute w-[180px] lg:w-[200px] cursor-pointer rounded-[24px] overflow-hidden"
              style={{
                top: pos.top,
                left: pos.left,
                transform: `rotate(${isAct ? '0deg' : ROTATIONS[i]}) scale(${isAct ? 1.12 : 0.97})`,
                transition: 'transform 0.45s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease',
                zIndex: isAct ? 10 : 2,
                boxShadow: isAct
                  ? '0 32px 80px rgba(107,0,62,0.6), 0 0 0 2px rgba(192,0,90,0.5)'
                  : '0 12px 40px rgba(0,0,0,0.5)',
              }}
            >
              <div className="bg-[#111] h-[28px] flex items-center justify-center border-b border-[#222]">
                <div className="w-[50px] h-[6px] rounded-[3px] bg-[#2a2a2a]" />
              </div>
              <div className="relative bg-black">
                <HlsVideo
                  src={src}
                  style={{ width: '100%', height: '340px', objectFit: 'cover', display: 'block' }}
                  videoProps={{ autoPlay: true, muted: true, loop: true, playsInline: true }}
                />
              </div>
              <div className="bg-[#111] h-[28px] flex items-center justify-center border-t border-[#222]">
                <div className="w-[32px] h-[32px] rounded-full border-[1.5px] border-[#2a2a2a]" />
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Dot indicators ── */}
      <div className="flex justify-center gap-[10px] mt-8 sm:mt-9 relative z-[5]">
        {VIDEOS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="h-[8px] rounded-[4px] border-none cursor-pointer p-0 transition-all duration-[350ms]"
            style={{
              width: active === i ? '24px' : '8px',
              background: active === i ? '#6b003e' : 'rgba(107,0,62,0.25)',
            }}
          />
        ))}
      </div>
    </section>
  );
}