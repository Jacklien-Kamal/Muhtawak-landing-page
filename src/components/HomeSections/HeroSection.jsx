import React from 'react';
import { useRole } from '../../hooks/roleContext';

export default function HeroSection() {
  const { role, setRole, content } = useRole();
  const { hero } = content;

  return (
    <section
      id="parallax"
      className="slider-area slider-bg2 second-slider-bg d-flex fix"
      style={{
        backgroundImage: 'url(img/bg/pink-header-bg.png)',
        backgroundPosition: 'right 0',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '65%',
      }}
    >
      <div className="slider-shape ss-one layer" data-depth="0.10">
        <img src="img/shape/header-sape.png" alt="shape" />
      </div>
      <div className="slider-shape ss-eight layer" data-depth="0.50" />

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="slider-content second-slider-content left-center">

              {/* ── Role Switcher ── */}
<div className="mb-30">
  <div
    style={{
      display: 'inline-flex',
      background: '#f0ebf8',
      borderRadius: '50px',
      padding: '5px',
      gap: '4px',
    }}
  >
    {['Creator', 'Agency'].map((r) => (
      <button
        key={r}
        onClick={() => setRole(r)}
        style={{
          padding: '8px 28px',
          borderRadius: '50px',
          border: 'none',
          fontWeight: '600',
          fontSize: '14px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          background: role === r
            ? 'linear-gradient(90deg, #7D4196 0%, #FF3494 100%)'
            : 'transparent',
          color: role === r ? '#fff' : '#7D4196',
          boxShadow: role === r ? '3px 4px 15px rgba(198, 58, 149, 0.35)' : 'none',
        }}
      >
        {r}
      </button>
    ))}
  </div>
</div>

              {/* ── Dynamic Headline ── */}
              <h2 data-animation="fadeInUp" data-delay=".4s">
                {hero.heading} <span>{hero.highlight}</span>
              </h2>

              {/* ── Dynamic Description ── */}
              <p data-animation="fadeInUp" data-delay=".6s">
                {hero.description}
              </p>

              {/* ── Dynamic CTA ── */}
              <div className="slider-btn mt-30 mb-30">
                <a
                  href="#"
                  className="btn ss-btn"
                  data-animation="fadeInUp"
                  data-delay=".8s"
                >
                  {hero.cta}
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <img src="img/bg/mobile.png" alt="shape" className="s-img" />
          </div>
        </div>
      </div>
    </section>
  );
}