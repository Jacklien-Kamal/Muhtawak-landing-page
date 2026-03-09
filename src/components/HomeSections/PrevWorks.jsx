import React, { useEffect, useRef, useState } from 'react'

const VIDEOS = [
    'https://muhtawak-app-space.sgp1.digitaloceanspaces.com/videos/1755652162478/playlist.m3u8',
  'https://muhtawak-app-space.sgp1.digitaloceanspaces.com/videos/1759474253124/playlist.m3u8https://muhtawak-app-space.sgp1.digitaloceanspaces.com/videos/1758829503811/playlist.m3u8',
  'https://muhtawak-app-space.sgp1.digitaloceanspaces.com/videos/1751471713313/playlist.m3u8',
  'https://muhtawak-app-space.sgp1.digitaloceanspaces.com/videos/1759474253124/playlist.m3u8',
]

function HlsVideo({ src, style, videoProps }) {
  const videoRef = useRef(null)

  useEffect(() => {
    let hls
    const video = videoRef.current
    if (!video) return

    const load = async () => {
      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = src
      } else {
        const Hls = (await import('hls.js')).default
        if (Hls.isSupported()) {
          hls = new Hls({ autoStartLoad: true })
          hls.loadSource(src)
          hls.attachMedia(video)
        }
      }

      // ← Set playback speed here (0.5 = half speed, 0.75 = 75%)
      video.addEventListener('canplay', () => {
        video.playbackRate = 0.5
      }, { once: true })
    }

    load()
    return () => hls?.destroy()
  }, [src])

  return <video ref={videoRef} style={style} {...videoProps} />
}

export default function CreatorShowcase() {
  const [active, setActive] = useState(null)

  const positions = [
    { top: '8%',  left: '2%',  rotate: '-4deg', scale: 1,    zIndex: active === 0 ? 10 : 2 },
    { top: '5%',  left: '27%', rotate: '2deg',  scale: 1,    zIndex: active === 1 ? 10 : 2 },
    { top: '8%',  left: '52%', rotate: '-2deg', scale: 1,    zIndex: active === 2 ? 10 : 2 },
    { top: '6%',  left: '77%', rotate: '3deg',  scale: 1,    zIndex: active === 3 ? 10 : 2 },
  ]

  return (
    <section style={{
      position: 'relative',
      overflow: 'hidden',
      padding: '80px 0 90px',
      minHeight: '620px',
    }}>
      {/* Ambient blobs */}
      

      {/* Heading */}
      <div style={{ textAlign: 'center', position: 'relative', zIndex: 5, marginBottom: '50px' }}>
        <p style={{
          fontFamily: "'Courier New', monospace",
          fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase',
          color: '#6b003e', marginBottom: '12px', fontWeight: 700,
        }}>
          ✦ Real Content. Real Creators.
        </p>
        <h2 style={{
          fontFamily: "'Georgia', serif",
          fontSize: 'clamp(28px, 4vw, 46px)',
          fontWeight: 400,
          color: '#6b003e',
          margin: 0,
          letterSpacing: '-0.5px',
          lineHeight: 1.2,
        }}>
          See What Our Creators Deliver
        </h2>
        {/* <div style={{
          width: '48px', height: '2px',
          background: 'linear-gradient(90deg, #6b003e, #c0005a)',
          margin: '20px auto 0',
          borderRadius: '2px',
        }} /> */}
      </div>

      {/* Phone cards strip */}
      <div style={{
        position: 'relative',
        height: '420px',
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '0 20px',
      }}>
        {VIDEOS.map((src, i) => {
          const pos = positions[i]
          const isActive = active === i
          return (
            <div
              key={i}
              onClick={() => setActive(i)}
              style={{
                position: 'absolute',
                top: pos.top,
                left: pos.left,
                width: '200px',
                transform: `rotate(${isActive ? '0deg' : pos.rotate}) scale(${isActive ? 1.12 : 0.97})`,
                transition: 'transform 0.45s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease, z-index 0s',
                zIndex: pos.zIndex,
                cursor: 'pointer',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: isActive
                  ? '0 32px 80px rgba(107,0,62,0.6), 0 0 0 2px rgba(192,0,90,0.5)'
                  : '0 12px 40px rgba(0,0,0,0.5)',
              }}
            >
              {/* Phone chrome top bar */}
              <div style={{
                background: '#111',
                height: '28px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderBottom: '1px solid #222',
              }}>
                <div style={{
                  width: '50px', height: '6px', borderRadius: '3px',
                  background: '#2a2a2a',
                }} />
              </div>

              {/* Video */}
              <div style={{ position: 'relative', background: '#000' }}>
                <HlsVideo
                  src={src}
                  style={{ width: '100%', height: '340px', objectFit: 'cover', display: 'block' }}
                  videoProps={{
                    autoPlay: true,
                    muted: true,
                    loop: true,
                    playsInline: true,
                  }}
                />
                {/* Gradient overlay */}
                {/* <div style={{
                  position: 'absolute', inset: 0,
                  background: isActive
                    ? 'linear-gradient(to top, rgba(107,0,62,0.15) 0%, transparent 60%)'
                    : 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)',
                  transition: 'background 0.35s ease',
                  pointerEvents: 'none',
                }} /> */}

                {/* Active badge */}
                {/* {isActive && (
                  <div style={{
                    position: 'absolute', top: '10px', right: '10px',
                    background: '#6b003e', borderRadius: '20px',
                    padding: '3px 10px',
                    fontSize: '9px', fontFamily: "'Courier New', monospace",
                    letterSpacing: '2px', color: '#fff', textTransform: 'uppercase',
                    fontWeight: 700,
                  }}>
                    ● Live
                  </div>
                )} */}
              </div>

              {/* Phone chrome bottom bar */}
              <div style={{
                background: '#111',
                height: '28px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderTop: '1px solid #222',
              }}>
                <div style={{
                  width: '32px', height: '32px', borderRadius: '50%',
                  border: '1.5px solid #2a2a2a',
                }} />
              </div>
            </div>
          )
        })}
      </div>

      {/* Dot indicators */}
      <div style={{
        display: 'flex', justifyContent: 'center', gap: '10px',
        marginTop: '36px', position: 'relative', zIndex: 5,
      }}>
        {VIDEOS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              width:'8px',
              height: '8px',
              borderRadius: '4px',
              background: active === i ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.2)',
              border: 'none', cursor: 'pointer', padding: 0,
              transition: 'all 0.35s ease',
            }}
          />
        ))}
      </div>
    </section>
  )
}