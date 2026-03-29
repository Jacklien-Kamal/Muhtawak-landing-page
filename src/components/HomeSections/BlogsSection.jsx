import React, { useRef, useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useRole } from '../../hooks/roleContext'
import { useI18n } from '../../hooks/i18nContext'

export default function BlogsSection() {
  const { content } = useRole()
  const { isRTL } = useI18n()

  const { heading, description, posts } = content.blogs

  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const touchStartX = useRef(null)
  const autoRef = useRef(null)

  const total = posts.length

  const goTo = useCallback((idx) => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrent((idx + total) % total)
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating, total])

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  const startAuto = useCallback(() => {
    clearInterval(autoRef.current)
    autoRef.current = setInterval(next, 3000)
  }, [next])

  useEffect(() => {
    startAuto()
    return () => clearInterval(autoRef.current)
  }, [startAuto])

  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX }
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) {
      const direction = isRTL ? -1 : 1
      goTo(current + (diff > 0 ? direction : -direction))
      startAuto()
    }
    touchStartX.current = null
  }

  return (
    <section
      id="blog"
      className="relative pt-[70px] pb-[70px] md:px-52"
      dir={isRTL ? 'rtl' : 'ltr'}
      style={{
        backgroundImage: 'url(img/shape/header-sape8.png)',
        backgroundSize: 'auto',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="mx-auto px-4">

        {/* Section Header */}
        <div className="flex justify-center items-center">
          <div className="w-full">
            <div className="text-center mb-[50px]">
              <h2 className="text-[38px] font-semibold text-[#190a32] pb-[15px] mb-0 leading-snug text-center">
                {heading}
              </h2>
              <p className="text-sm text-[#666] leading-6">{description}</p>
            </div>
          </div>
        </div>

        {/* ── Desktop: 3-column grid ── */}
        <div className="hidden md:flex flex-wrap -mx-4">
          {posts.map((post, i) => (
            <BlogCard key={i} post={post} index={i} isRTL={isRTL} />
          ))}
        </div>

        {/* ── Mobile: carousel ── */}
        <div
          className="md:hidden relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(${isRTL ? '' : '-'}${current * 100}%)`,
              opacity: isAnimating ? 0.6 : 1,
              transition: 'transform 500ms ease-in-out, opacity 400ms',
            }}
          >
            {posts.map((post, i) => (
              <div key={i} className="w-full flex-shrink-0 px-2">
                <BlogCard post={post} index={i} isRTL={isRTL} mobile />
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center items-center gap-[10px] mt-5 mb-2">
            {posts.map((_, i) => (
              <button
                key={i}
                onClick={() => { goTo(i); startAuto() }}
                className="h-[5px] rounded-full border-none cursor-pointer p-0 transition-all duration-300"
                style={{
                  width: i === current ? '50px' : '20px',
                  background: i === current ? '#782551' : 'rgba(120,37,81,0.3)',
                }}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

function BlogCard({ post, index, isRTL, mobile }) {
  return (
    <div className={`${mobile ? 'w-full' : 'lg:w-1/3 w-full px-4'}`}>
      <div className="mb-[30px] bg-white overflow-hidden rounded-[10px] shadow-[3px_4px_25px_rgba(0,0,0,0.1)] transition-shadow duration-300 hover:shadow-[0px_10px_80px_rgba(193,193,193,0.41)]">

        {/* Thumbnail */}
        <div className="overflow-hidden">
          <Link to={`/blog/${index}`}>
            <img src={post.img} alt="img" className="w-full transition-all duration-300" />
          </Link>
        </div>

        {/* Content */}
        <div className={`bg-white px-[30px] pt-[40px] pb-[30px] relative z-10 ${isRTL ? 'text-right' : ''}`}>

          {/* Meta */}
          <div className="mb-[40px]">
            <ul className={`flex gap-2 ${isRTL ? 'justify-end' : ''}`}>
              <li>
                <span
                  className="text-xs text-white uppercase shadow-[3px_4px_15px_rgba(210,45,74,0.3)] rounded-[13px] px-5 py-[5px]"
                  style={{ background: 'linear-gradient(90deg,#6b003e,#6b003e)' }}
                >
                  {post.date}
                </span>
              </li>
            </ul>
          </div>

          {/* Title */}
          <h4 className="text-[18px] font-semibold text-[#190a32] mb-5 h-12 leading-[1.3]">
            <Link to={`/blog/${index}`} className="hover:text-[#782551] transition-colors duration-300">
              {post.title}
            </Link>
          </h4>

          {/* Excerpt */}
          <p className="text-sm text-[#666] leading-6 h-20 mb-[35px]">{post.excerpt}</p>

          {/* Author */}
          <div className="border-t border-[#d7d7d7] pt-[30px]">
            <ul className={`flex items-center gap-3 ${isRTL ? 'flex-row' : ''}`}>
              <li>
                <img
                  src={post.authorImg || 'img/blog/admin-img.png'}
                  alt="author"
                  className="rounded-full border-2 border-white shadow-[3px_4px_12px_rgba(0,0,0,0.15)] bg-[#D7D7D7] -mt-[14px]"
                />
              </li>
              <li className="text-sm text-[#666]">
                <h6 className="text-[#190a32] font-semibold text-base">{post.author}</h6>
                {post.authorRole}
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}