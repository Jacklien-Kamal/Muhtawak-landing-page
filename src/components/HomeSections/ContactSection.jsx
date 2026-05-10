import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useI18n } from '../../hooks/i18nContext'
import { useRole } from '../../hooks/roleContext'

const EMAILJS_SERVICE_ID  = 'service_kw29b9p'
const EMAILJS_TEMPLATE_ID = 'template_g8bjdzi'
const EMAILJS_PUBLIC_KEY  = 'AY-8ASlNYYAD5o14g'

export default function ContactSection() {
  const { isRTL } = useI18n()
  const { content } = useRole()
  const { heading, fields, button } = content.contact

  const [form, setForm] = useState({
    name: '', activity: '', goal: '', platform: '', phone: '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name:     form.name,
          activity: form.activity,
          goal:     form.goal,
          platform: form.platform,
          phone:    form.phone,
          to_email: 'info@muhtawak.app',   // يوصل على الإيميل ده
        },
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm({ name: '', activity: '', goal: '', platform: '', phone: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  const inputClass =
    'w-full h-[80px] px-[40px] bg-[#f4f4fe] border-0 text-[15px] text-black rounded-[10px] shadow-[3px_4px_15px_rgba(0,0,0,0.1)] placeholder-[#8990b0] focus:outline-none focus:ring-2 focus:ring-[#782551] transition-all duration-300'

  return (
    <section
      id="contact"
      className="relative pt-[50px] pb-[100px] overflow-hidden md:px-52"
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

          {/* Illustration */}
          <div className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0">
            <div className={`${isRTL ? 'mr-0 ml-[-160px]' : 'ml-[-160px] mr-0'} max-lg:ml-0 max-lg:mr-0`}>
              <img
                src={isRTL ? 'img/bg/image2.png' : 'img/bg/image.webp'}
                alt="contact illustration"
                className="w-full max-w-[400px] mx-auto lg:mx-0"
              />
            </div>
          </div>

          {/* Form */}
          <div className="w-full lg:w-1/2 px-4">
            <div className={`mb-[40px] ${isRTL ? 'text-right' : ''}`}>
              <h2 className="text-[38px] font-semibold text-[#190a32] leading-snug mb-3">
                {heading}
              </h2>
            </div>

            <form className="w-full" onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-3">

                {[
                  { name: 'name',     placeholder: fields.name,     type: 'text'   },
                  { name: 'activity', placeholder: fields.activity, type: 'text'   },
                  { name: 'goal',     placeholder: fields.goal,     type: 'text'   },
                  { name: 'platform', placeholder: fields.platform, type: 'text'   },
                  { name: 'phone',    placeholder: fields.phone,    type: 'number' },
                ].map(({ name, placeholder, type }) => (
                  <div key={name} className="w-full px-3 mb-5">
                    <input
                      type={type}
                      name={name}
                      value={form[name]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      required
                      className={inputClass}
                    />
                  </div>
                ))}

                {/* Feedback messages */}
                {status === 'success' && (
                  <div className="w-full px-3 mb-4">
                    <p className="text-green-600 font-medium">
                      {isRTL ? '✅ تم الإرسال بنجاح!' : '✅ Sent successfully!'}
                    </p>
                  </div>
                )}
                {status === 'error' && (
                  <div className="w-full px-3 mb-4">
                    <p className="text-red-500 font-medium">
                      {isRTL ? '❌ حدث خطأ، حاول مرة أخرى.' : '❌ Something went wrong, try again.'}
                    </p>
                  </div>
                )}

                {/* Submit */}
                <div className={`w-full px-3 ${isRTL ? 'text-right' : ''}`}>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="inline-block px-[35px] py-[15px] rounded-[50px] text-white text-[16px] font-medium leading-none border-none cursor-pointer transition-all duration-300 hover:opacity-90 shadow-[3px_4px_25px_rgba(198,58,149,0.5)] disabled:opacity-60"
                    style={{ background: 'linear-gradient(90deg, #6b003e, #6b003e)' }}
                  >
                    {status === 'sending'
                      ? (isRTL ? 'جارٍ الإرسال...' : 'Sending...')
                      : button}
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