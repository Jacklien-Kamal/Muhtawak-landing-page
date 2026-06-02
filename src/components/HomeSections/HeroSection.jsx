import React from 'react';
import { useRole } from '../../hooks/roleContext';
import { useI18n } from '../../hooks/i18nContext';

export default function HeroSection() {
  const { role, setRole, content } = useRole();
  const { locale, isRTL } = useI18n();
  const { hero } = content;

  const roleLabels = {
    Creator: locale.lang === 'ar' ? 'صانع محتوى' : 'Creator',
    Agency:  locale.lang === 'ar' ? 'شركة'       : 'Agency',
  };

  return (
    <section
      id="parallax"
      className="relative flex overflow-hidden min-h-[900px] -mt-[118px] z-[1] bg-center bg-cover px-3 md:px-32"
      style={{
        backgroundImage: locale.lang === 'ar'?'url(img/bg/flip-pink-header-bg.png)':'url(img/bg/pink-header-bg.png)',
        backgroundPosition:locale.lang === 'ar'? 'left 0':'right 0',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '65%',
      }}
    >
   
      <div className="absolute z-[9]" style={{ top: '70px', left: '48%' }} />

      <div className="container mx-auto px-4">
        <div className="flex md:flex-wrap items-center">

          {/* ── Left Column ── */}
          <div className="w-full lg:w-1/2">
            <div className={`relative z-[999] pt-[285px] pb-[5px] ${isRTL ? 'text-right' : 'text-left'}`}>

              {/* Role Switcher */}
              <div className="mb-[30px]">
                <div
                  className="w-80 inline-flex rounded-full p-[5px] gap-1"
                  style={{ background: '#f0ebf8' }}
                >
                  {['Creator', 'Agency'].map((r) => (
                    <button
                      key={r}
                      onClick={() => setRole(r)}
                      className={[
                        'px-10 py-2 rounded-full border-none font-semibold text-sm cursor-pointer transition-all duration-300',
                        role === r
                          ? 'text-white shadow-[3px_4px_15px_rgba(198,58,149,0.35)]'
                          : 'bg-transparent text-xl text-[#782551]',
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
                className="text-3xl md:text-5xl font-semibold text-[#190a32] mb-5 leading-tight"
                data-animation="fadeInUp"
                data-delay=".4s"
              >
                {hero.heading}{' '}<br></br>
                <span className="text-[#782551]">{hero.highlight}</span>
              </h2>

              {/* Description */}
              <p
                className="text-gray-600 md:text-2xl leading-relaxed mb-0"
                data-animation="fadeInUp"
                data-delay=".6s"
                style={{ whiteSpace: "pre-line" }}
              >
                {hero.description}
              </p>
              <br></br>
              <p

                className="text-[#676f67] text-base leading-relaxed mb-0"
                data-animation="fadeInUp"
                data-delay=".6s"
                style={{ whiteSpace: "pre-line" }}
              >
                {hero.subDes}
              </p>

              {/* CTA */}
              <div className="mt-[30px] mb-[30px]" data-animation="fadeInUp" data-delay=".8s">
                <a
                  href="#downloadApp"
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
          <div className={`w-[60%] lg:w-[43%] `}>
            <img
              src={isRTL?"img/bg/phone-arr.png":"img/bg/phone-en.png"}
              alt="app preview"
              className={` md:ml-24 mt-60 md:mt-80  max-w-full`}
            />
          </div>

        </div>
      </div>
    </section>
  );
}