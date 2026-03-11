import React from 'react'
import { useI18n } from '../../hooks/i18nContext'
import { useRole } from '../../hooks/roleContext'

export default function ContactSection() {
  const { isRTL } = useI18n()
  const { content } = useRole()

  const { heading, description, fields, button } = content.contact

  return (
    <section
      id="contact"
      className="relative pt-[50px] pb-[100px] overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
      style={{
        backgroundImage: 'url(img/shape/header-sape8.png)',
        backgroundPosition: isRTL ? 'left center' : 'right center',
        backgroundSize: 'auto',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center -mx-4">

          {/* ── Illustration ── */}
          <div className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0">
            <div className={`${isRTL ? 'mr-0 ml-[-160px]' : 'ml-[-160px] mr-0'} max-lg:ml-0 max-lg:mr-0`}>
              <img
                src="img/bg/illustration.png"
                alt="contact illustration"
                className="w-full max-w-[500px] mx-auto lg:mx-0"
              />
            </div>
          </div>

          {/* ── Form ── */}
          <div className="w-full lg:w-1/2 px-4">

            {/* Section title */}
            <div className={`mb-[40px] ${isRTL ? 'text-right' : ''}`}>
              <h2 className="text-[38px] font-semibold text-[#190a32] leading-snug mb-3">
                {heading}
              </h2>
              <p className="text-sm text-[#666] leading-6">{description}</p>
            </div>

            {/* Form */}
            <form className="w-full">
              <div className="flex flex-wrap -mx-3">

                {/* Name */}
                <div className="w-full px-3 mb-5">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder={fields.name}
                      className="w-full h-[80px] px-[40px] bg-[#f4f4fe] border-0 text-[15px] text-black rounded-[10px] shadow-[3px_4px_15px_rgba(0,0,0,0.1)] placeholder-[#8990b0] focus:outline-none focus:ring-2 focus:ring-[#782551] transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="w-full px-3 mb-5">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder={fields.email}
                      className="w-full h-[80px] px-[40px] bg-[#f4f4fe] border-0 text-[15px] text-black rounded-[10px] shadow-[3px_4px_15px_rgba(0,0,0,0.1)] placeholder-[#8990b0] focus:outline-none focus:ring-2 focus:ring-[#782551] transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="w-full px-3 mb-5">
                  <div className="relative">
                    <input
                      type="tel"
                      placeholder={fields.phone}
                      className="w-full h-[80px] px-[40px] bg-[#f4f4fe] border-0 text-[15px] text-black rounded-[10px] shadow-[3px_4px_15px_rgba(0,0,0,0.1)] placeholder-[#8990b0] focus:outline-none focus:ring-2 focus:ring-[#782551] transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="w-full px-3 mb-[45px]">
                  <textarea
                    placeholder={fields.message}
                    rows={5}
                    className="w-full px-[40px] py-[30px] bg-[#f4f4fe] border-0 text-[15px] text-black rounded-[10px] shadow-[3px_4px_15px_rgba(0,0,0,0.1)] placeholder-[#8990b0] focus:outline-none focus:ring-2 focus:ring-[#782551] transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit */}
                <div className={`w-full px-3 ${isRTL ? 'text-right' : ''}`}>
                  <button
                    type="submit"
                    className="inline-block px-[35px] py-[15px] rounded-[50px] text-white text-[16px] font-medium leading-none border-none cursor-pointer transition-all duration-300 hover:opacity-90 shadow-[3px_4px_25px_rgba(198,58,149,0.5)]"
                    style={{
                      background: 'linear-gradient(90deg, #6b003e 33%, #6b003e 66%, #6b003e)',
                    }}
                  >
                    {button}
                  </button>
                </div>

              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}