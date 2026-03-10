import React from 'react';
import { useRole } from '../../hooks/roleContext';
import { useI18n } from '../../hooks/i18nContext';

export default function HeroSection() {
  const { role, setRole, content } = useRole();
  const { locale, isRTL } = useI18n();
  const { hero } = content;

  const roleLabels = {
    Creator: locale.lang === 'ar' ? 'صانع محتوى' : 'Creator',
    Agency:  locale.lang === 'ar' ? 'وكالة'       : 'Agency',
  };

  return (
    <section
      id="parallax"
      className="relative flex overflow-hidden min-h-[900px] -mt-[118px] z-[1] bg-center bg-cover md:px-52"
      style={{
        backgroundImage: locale.lang === 'ar'?'url(img/bg/flip-pink-header-bg.png)':'url(img/bg/pink-header-bg.png)',
        backgroundPosition:locale.lang === 'ar'? 'left 0':'right 0',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '65%',
      }}
    >
      {/* Shape decorations */}
      <div className="absolute z-[9] top-0 -left-[115px]">
        <img src="img/shape/header-sape.png" alt="shape" />
      </div>
      <div className="absolute z-[9]" style={{ top: '70px', left: '48%' }} />

      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">

          {/* ── Left Column ── */}
          <div className="w-full lg:w-1/2">
            <div className={`relative z-[999] pt-[285px] pb-[5px] ${isRTL ? 'text-right' : 'text-left'}`}>

              {/* Role Switcher */}
              <div className="mb-[30px]">
                <div
                  className="inline-flex rounded-full p-[5px] gap-1"
                  style={{ background: '#f0ebf8' }}
                >
                  {['Creator', 'Agency'].map((r) => (
                    <button
                      key={r}
                      onClick={() => setRole(r)}
                      className={[
                        'px-7 py-2 rounded-full border-none font-semibold text-sm cursor-pointer transition-all duration-300',
                        role === r
                          ? 'text-white shadow-[3px_4px_15px_rgba(198,58,149,0.35)]'
                          : 'bg-transparent text-[#782551]',
                      ].join(' ')}
                      style={
                        role === r
                          ? { background: 'linear-gradient(to right, #6b003e 33%, #d20b52 66%, #d27252 100%)' }
                          : {}
                      }
                    >
                      {roleLabels[r]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Headline */}
              <h2
                className="text-[70px] font-semibold text-[#190a32] mb-5 leading-tight"
                data-animation="fadeInUp"
                data-delay=".4s"
              >
                {hero.heading}{' '}
                <span className="text-[#782551]">{hero.highlight}</span>
              </h2>

              {/* Description */}
              <p
                className="text-[#676f67] text-base leading-relaxed mb-0"
                data-animation="fadeInUp"
                data-delay=".6s"
              >
                {hero.description}
              </p>

              {/* CTA */}
              <div className="mt-[30px] mb-[30px]" data-animation="fadeInUp" data-delay=".8s">
                <a
                  href="#"
                  className="
                    inline-block rounded-full px-[35px] py-[15px] no-underline
                    text-white font-medium text-base leading-none
                    transition-all duration-300
                    shadow-[3px_4px_25px_rgba(198,58,149,0.5)]
                  "
                  style={{ background: 'linear-gradient(90deg, #6b003e 33%, #6b003e 66%, #6b003e)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(90deg, #782551 0%, #7D4196 100%)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(90deg, #6b003e 33%, #6b003e 66%, #6b003e)';
                  }}
                >
                  {hero.cta}
                </a>
              </div>

            </div>
          </div>

          {/* ── Right Column ── */}
          <div className={`w-full lg:w-1/2 ${isRTL&&"-rotate-55 "}`}>
            <img
              src="img/bg/mobile.png"
              alt="app preview"
              className={`nd:-ml-[120px] md:${isRTL&&" mr-28"} md:mt-[200px] max-w-full`}
            />
          </div>

        </div>
      </div>
    </section>
  );
}