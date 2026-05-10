import React, { useEffect, useRef, useState } from 'react';
import { useI18n } from '../../hooks/i18nContext';
import { fetchCreatorsWithWorks } from '../../services/creatorService';

/* ── HLS Video ── */
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
    };
    load();
    return () => hls?.destroy();
  }, [src]);
  return <video ref={videoRef} style={style} {...videoProps} />;
}

const CONTENT = {
  en: { tag: '✦ Real Content. Real Creators.', heading: 'See What Our Creators Deliver' },
  ar: { tag: '✦ أعمال صناع المحتوى .', heading: 'شوف كيف ممكن يكون محتواك' },
};

const FALLBACK_IMG = 'https://placehold.co/200x340/111/333?text=•';
const isVideoUrl = (url) => url?.includes('.m3u8') || url?.includes('.mp4');

/* ── Single Card ── */
function WorkCard({ work, creator }) {
  const url = work?.url ?? '';
  const preview = work?.previewImageUrl;
  const creatorImg = creator?.image || FALLBACK_IMG;
  const creatorName = creator?.fullName ?? '';
  const locationText = creator?.region?.ar ?? creator?.region?.en ?? creator?.state?.ar ?? '';

  return (
    <div
      className="flex-shrink-0 rounded-[16px] overflow-hidden relative"
      style={{ width: '160px', height: '260px', background: '#111' }}
    >
      {/* Media */}
      {isVideoUrl(url) ? (
        <>
          {preview && (
            <img src={preview} className="absolute inset-0 w-full h-full object-cover" alt="" />
          )}
          <HlsVideo
            src={url}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            videoProps={{ autoPlay: true, muted: true, loop: true, playsInline: true }}
          />
        </>
      ) : (
        <img
          src={url || FALLBACK_IMG}
          className="w-full h-full object-cover"
          alt=""
          onError={(e) => { e.target.src = FALLBACK_IMG; }}
        />
      )}

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 50%)' }}
      />

      {/* Creator info */}
      <div className="absolute bottom-0 left-0 right-0 px-2 py-2 flex items-center gap-2">
        <img
          src={creatorImg}
          className="w-7 h-7 rounded-full object-cover flex-shrink-0 border border-white/20"
          alt={creatorName}
          onError={(e) => { e.target.src = FALLBACK_IMG; }}
        />
        <div className="overflow-hidden">
          <p className="text-white text-[11px] font-semibold truncate m-0 leading-tight">{creatorName}</p>
          {locationText && (
            <p className="text-white/60 text-[9px] truncate m-0">{locationText}</p>
          )}
        </div>
      </div>
    </div>
  );
}

function InfiniteSlider({ items, speed = 40 ,isRTL}) {
  const trackRef = useRef(null);
  const xRef = useRef(0);
  const animRef = useRef(null);

  const cardWidth = 160 + 12;
  const totalWidth = items.length * cardWidth;
useEffect(() => {
  const animate = () => {
    // Reverse direction for RTL
    xRef.current += isRTL ? speed / 60 : -(speed / 60);

    // Reset bounds for both directions
    if (xRef.current <= -totalWidth) xRef.current = 0;
    if (xRef.current >= totalWidth) xRef.current = 0;

    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${xRef.current}px)`;
    }
    animRef.current = requestAnimationFrame(animate);
  };

  animRef.current = requestAnimationFrame(animate);
  return () => cancelAnimationFrame(animRef.current);
}, [totalWidth, speed, isRTL]); // ← add isRTL to deps
  const doubled = [...items, ...items];

  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <div
        ref={trackRef}
        style={{ display: 'flex', gap: '12px', width: 'max-content', willChange: 'transform' }}
      >
        {doubled.map((item, i) => (
          <WorkCard key={i} work={item.work} creator={item.creator} />
        ))}
      </div>
    </div>
  );
}
/* ── Main Section ── */
export default function CreatorShowcase() {
  const { locale, isRTL } = useI18n();
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);

  const t = CONTENT[locale.lang] ?? CONTENT.en;

  useEffect(() => {
    fetchCreatorsWithWorks()
      .then((creators) => {
        const items = creators
          .map((c) => ({ work: c.previousWork[0], creator: c }))
          .slice(0, 20);
        setWorks(items);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section id="creatorsWork" className="py-20 flex justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-[#6b003e] border-t-transparent animate-spin" />
      </section>
    );
  }

  if (!works.length) return null;

  // لو عندنا كتير نعمل صفين بسرعات مختلفة
  const row1 = works.slice(0, Math.ceil(works.length ));

  return (
    <section
      id="creatorsWork"
      className="relative overflow-hidden py-12 sm:py-16 md:py-[80px] pb-14 sm:pb-16 md:pb-[90px]"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Heading */}
      <div className="text-center relative z-[5] mb-8 sm:mb-10 md:mb-[50px] px-4">
        <p
          className="text-[clamp(22px,5vw,46px)] font-normal m-0 leading-[1.2] tracking-[-0.5px]"
          style={{ color: '#6b003e' }}
        >
          {t.tag}
        </p>
        <h2 className="text-[10px] text-gray-600 sm:text-xl tracking-[3px] sm:tracking-[4px] uppercase font-semibold mt-3">
          {t.heading}
        </h2>
      </div>

      {/* Sliders */}
      <div className="flex flex-col gap-3">
        {/* Row 1 — يمين لشمال */}
  <InfiniteSlider isRTL={isRTL} items={works} speed={35} />

       
      </div>

      {/* Fade edges */}
      <div
        className="absolute top-0 left-0 h-full w-16 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to right, white, transparent)' }}
      />
      <div
        className="absolute top-0 right-0 h-full w-16 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to left, white, transparent)' }}
      />
    </section>
  );
}