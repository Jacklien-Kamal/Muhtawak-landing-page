import React from 'react'

export default function Screenshots() {
  return (
  <section id="screen" className="screen-area services-bg services-two pt-100 pb-70" style={{backgroundImage: 'url(img/shape/header-sape4.png)', backgroundPosition: 'right center', backgroundSize: 'auto', backgroundRepeat: 'no-repeat'}}>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-8 col-lg-10">
          <div className="section-title text-center pl-40 pr-40 mb-50">                               
            <h2>Our App ScreenShots</h2>
            <p>Quisque posuere mollis ipsum et molestie. Fusce cursus, risus vel scelerisque porttitor, leo quam vulputate nibh, sit amet blandit erat magna.</p>
          </div>
        </div>
      </div>
      <div className="row">
        {/* Swiper */}
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide"><img src="../img/gallery/screen-img01.png" alt="slide 1" /></div>
            <div className="swiper-slide"><img src="../img/gallery/screen-img02.png" alt="slide 1" /></div>
            <div className="swiper-slide"><img src="./img/gallery/screen-img03.png" alt="slide 1" /></div>
            <div className="swiper-slide"><img src="../img/gallery/screen-img04.png" alt="slide 1" /></div>
            <div className="swiper-slide"><img src="../img/gallery/screen-img05.png" alt="slide 1" /></div>
          </div>
          {/* Add Pagination */}
          <div className="swiper-pagination" ></div>
        </div>
      </div>
    </div>
  </section>  )
}
