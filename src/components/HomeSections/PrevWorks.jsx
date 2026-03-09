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

export default function CreatorShowcase() {
  const { locale, isRTL } = useI18n();
  const [active, setActive] = useState(null);

  const t = CONTENT[locale.lang] ?? CONTENT.en;

  const positions = [
    { top: '8%',  left: '2%',  rotate: '-4deg' },
    { top: '5%',  left: '27%', rotate: '2deg'  },
    { top: '8%',  left: '52%', rotate: '-2deg' },
    { top: '6%',  left: '77%', rotate: '3deg'  },
  ];

  return (
    <section
      className="relative overflow-hidden py-[80px] pb-[90px] min-h-[620px]"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* ── Heading ── */}
      <div className="text-center relative z-[5] mb-[50px]">
        <p
          className="text-[11px] tracking-[4px] uppercase font-bold mb-3"
          style={{ fontFamily: "'Courier New', monospace", color: '#6b003e' }}
        >
          {t.tag}
        </p>
        <h2
          className="text-[clamp(28px,4vw,46px)] font-normal m-0 leading-[1.2] tracking-[-0.5px]"
          style={{ fontFamily: "'Georgia', serif", color: '#6b003e' }}
        >
          {t.heading}
        </h2>
      </div>

      {/* ── Phone cards ── */}
      <div className="relative h-[420px] max-w-[1100px] mx-auto px-5">
        {VIDEOS.map((src, i) => {
          const pos      = positions[i];
          const isActive = active === i;
          return (
            <div
              key={i}
              onClick={() => setActive(i)}
              className="absolute w-[200px] cursor-pointer rounded-[24px] overflow-hidden"
              style={{
                top: pos.top,
                left: pos.left,
                transform: `rotate(${isActive ? '0deg' : pos.rotate}) scale(${isActive ? 1.12 : 0.97})`,
                transition: 'transform 0.45s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease',
                zIndex: isActive ? 10 : 2,
                boxShadow: isActive
                  ? '0 32px 80px rgba(107,0,62,0.6), 0 0 0 2px rgba(192,0,90,0.5)'
                  : '0 12px 40px rgba(0,0,0,0.5)',
              }}
            >
              {/* Phone top bar */}
              <div className="bg-[#111] h-[28px] flex items-center justify-center border-b border-[#222]">
                <div className="w-[50px] h-[6px] rounded-[3px] bg-[#2a2a2a]" />
              </div>

              {/* Video */}
              <div className="relative bg-black">
                <HlsVideo
                  src={src}
                  style={{ width: '100%', height: '340px', objectFit: 'cover', display: 'block' }}
                  videoProps={{ autoPlay: true, muted: true, loop: true, playsInline: true }}
                />
              </div>

              {/* Phone bottom bar */}
              <div className="bg-[#111] h-[28px] flex items-center justify-center border-t border-[#222]">
                <div className="w-[32px] h-[32px] rounded-full border-[1.5px] border-[#2a2a2a]" />
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Dot indicators ── */}
      <div className="flex justify-center gap-[10px] mt-9 relative z-[5]">
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