import React, { useEffect, useRef, useState, useCallback } from 'react'
import { ROLE_CONTENT } from '../../utils/dummy'
import { useRole } from '../../hooks/roleContext';

const avatars = [
  'img/testimonial/testi_avatar.png',
  'img/testimonial/testi_avatar2.png',
  'img/testimonial/testi_avatar3.png',
  'img/testimonial/testi_avatar.png',
  'img/testimonial/testi_avatar2.png',
  'img/testimonial/testi_avatar3.png',
]

export default function Reviews() {
  const { role } = useRole();
  const { tag, heading, testimonials } = ROLE_CONTENT[role].reviews

  const [currentPage, setCurrentPage] = useState(0)
  const [slidesPerPage, setSlidesPerPage] = useState(3)
  const [isAnimating, setIsAnimating] = useState(false)
  const autoplayRef = useRef(null)

  const totalPages = Math.ceil(testimonials.length / slidesPerPage)

  // Reset page when role changes
  useEffect(() => {
    setCurrentPage(0)
  }, [role])

  // Responsive slidesPerPage
  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 768) setSlidesPerPage(1)
      else if (window.innerWidth < 1024) setSlidesPerPage(2)
      else setSlidesPerPage(3)
    }
    updateSlides()
    window.addEventListener('resize', updateSlides)
    return () => window.removeEventListener('resize', updateSlides)
  }, [])

  const goToPage = useCallback((page) => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentPage(page)
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating])

  const nextPage = useCallback(() => {
    goToPage((currentPage + 1) % totalPages)
  }, [currentPage, totalPages, goToPage])

  const prevPage = useCallback(() => {
    goToPage((currentPage - 1 + totalPages) % totalPages)
  }, [currentPage, totalPages, goToPage])

  // Autoplay
  useEffect(() => {
    autoplayRef.current = setInterval(nextPage, 3000)
    return () => clearInterval(autoplayRef.current)
  }, [nextPage])

  const visibleTestimonials = testimonials.slice(
    currentPage * slidesPerPage,
    currentPage * slidesPerPage + slidesPerPage
  )

  return (
    <section
      id="testimonios"
      className="testimonial-area testimonial-p pt-100 pb-70"
      style={{
        backgroundImage: 'url(img/bg/client-bg.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right center',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title center-align">
              <span>{tag}</span>
              <h2>{heading}</h2>
            </div>
          </div>

          <div className="col-lg-12">
            {/* Slider wrapper */}
            <div style={{ position: 'relative' }}>

              {/* Prev arrow */}
              <button
                onClick={prevPage}
                style={{
                  position: 'absolute', left: '-20px', top: '50%',
                  transform: 'translateY(-50%)', zIndex: 10,
                  background: '#6b003e', border: 'none', borderRadius: '50%',
                  width: '40px', height: '40px', cursor: 'pointer',
                  color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                }}
              >
                <i className="fas fa-chevron-left"></i>
              </button>

              {/* Slides */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: `repeat(${slidesPerPage}, 1fr)`,
                  gap: '24px',
                  transition: 'opacity 0.4s ease',
                  opacity: isAnimating ? 0.4 : 1,
                  minHeight: '220px',
                }}
              >
                {visibleTestimonials.map((testimonial, index) => {
                  const globalIndex = currentPage * slidesPerPage + index
                  return (
                    <div key={`${role}-${currentPage}-${index}`}>
                      <div className="single-testimonial">
                        <div className="testi-author text-left">
                          <img src={avatars[globalIndex % avatars.length]} alt="img" />
                          <div className="ta-info">
                            <h6>{testimonial.name}</h6>
                            <span>{testimonial.role}</span>
                          </div>
                        </div>
                        <div className="qutation">
                          <i
                            className="fas fa-quote-right"
                            style={{ color: '#6b003e', fontSize: '32px' }}
                          ></i>
                        </div>
                        <p>{testimonial.text}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Next arrow */}
              <button
                onClick={nextPage}
                style={{
                  position: 'absolute', right: '-20px', top: '50%',
                  transform: 'translateY(-50%)', zIndex: 10,
                  background: '#6b003e', border: 'none', borderRadius: '50%',
                  width: '40px', height: '40px', cursor: 'pointer',
                  color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                }}
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>

            {/* Bottom dots */}
            <div style={{
              display: 'flex', justifyContent: 'center',
              alignItems: 'center', gap: '10px', marginTop: '32px'
            }}>
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToPage(i)}
                  style={{
                    width: i === currentPage ? '28px' : '10px',
                    height: '10px',
                    borderRadius: '5px',
                    background: i === currentPage ? '#6b003e' : '#ccc',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}