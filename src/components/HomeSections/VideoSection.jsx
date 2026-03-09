import React from 'react';
import { useRole } from '../../hooks/roleContext';

export default function VideoSection() {
  const { content } = useRole();
  const { heading, description, points } = content.video;

  return (
    <section
      className="video-area p-relative"
      style={{ padding: '10px 0', background: '#fff', overflow: 'hidden' }}
    >
      {/* Right-side decorative shape (faint pink arrow/triangle) */}
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <img src="img/shape/header-sape5.png" alt="" />
      </div>

      <div className="container" style={{ position: 'relative',}}>
        <div  style={{marginTop:60,padding:'100px 0'}} className="row align-items-center">

          {/* ── Left: image with centered play button ── */}
          <div style={{marginTop:260}} className=" col-lg-5 col-md-12 ">
            <div style={{ position: 'absolute',right:"2%" , bottom:1, zIndex: 5 , display: 'inline-block', width: '800px' }}>
              <img
                src="https://htmldemo.zcubethemes.com/bingle/img/bg/video-img.png"
                alt="video"
                style={{
                  width: '100%',
                  display: 'block',
                  borderRadius: '12px',
                   zIndex: 1 
                }}
              />

              {/* Outer soft glow ring */}
              <span
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '110px',
                  height: '110px',
                  borderRadius: '50%',
                  background: 'rgba(214, 52, 132, 0.15)',
                  display: 'block',
                  animation: 'pulse-ring 1.8s ease-out infinite',
                  zIndex: 8,
                }}
              />

              {/* Play button */}
              <a
                href="https://www.youtube.com/watch?v=7e90gBu4pas"
                className="popup-video"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '100%',
                  transform: 'translate(-50%, -50%)',
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #d20b52, #d27252)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 0 14px rgba(214, 52, 132, 0.2)',
                  zIndex: 9,
                  textDecoration: 'none',
                }}
              >
                {/* Triangle play icon */}
                <span
                  style={{
                    display: 'inline-block',
                    width: 0,
                    height: 0,
                    borderTop: '11px solid transparent',
                    borderBottom: '11px solid transparent',
                    borderLeft: '20px solid #fff',
                    marginLeft: '5px',
                  }}
                />
              </a>

              <style>{`
                @keyframes pulse-ring {
                  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
                  100% { transform: translate(-50%, -50%) scale(1.6); opacity: 0; }
                }
              `}</style>
            </div>
          </div>

          {/* ── Right: text content ── */}
          <div className="col-lg-7 col-md-12">
            <div className="video-wrap" style={{ paddingLeft: '50px' }}>
              {/* Heading */}
              <h2
                style={{
                  fontSize: '38px',
                  fontWeight: '700',
                  color: '#190a32',
                  lineHeight: '1.2',
                  marginBottom: '20px',
                }}
              >
                {heading}
              </h2>

              {/* Description */}
              <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.8', marginBottom: '25px' }}>
                {description}
              </p>

              {/* Checkmark bullet points */}
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {points.map((point, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      marginBottom: '14px',
                      fontSize: '15px',
                      color: '#444',
                    }}
                  >
                    {/* Circle-check icon */}
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '22px',
                        height: '22px',
                        borderRadius: '50%',
                        border: '2px solid #d20b52',
                        color: '#d20b52',
                        fontSize: '13px',
                        marginRight: '12px',
                        flexShrink: 0,
                        marginTop: '1px',
                      }}
                    >
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
    </section>
  );
}