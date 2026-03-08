import React from 'react'

export default function OurFeatures() {
  return (
      <section id="about" className="services-area services-bg pt-25 pb-20" style={{backgroundImage: 'url(img/shape/header-sape2.png)', backgroundPosition: 'right top', backgroundSize: 'auto', backgroundRepeat: 'no-repeat'}}>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-7 col-lg-10">
          <div className="section-title text-center pl-40 pr-40 mb-45">
            <h2>Our Features</h2>
            <p>Quisque posuere mollis ipsum et molestie. Fusce cursus, risus vel scelerisque porttitor, leo quam vulputate nibh, sit amet blandit erat magna.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-12 mb-30">
          <div className="s-single-services active text-center">
            <div className="services-icon">
              <img src="img/icon/f-icon1.png" />
            </div>
            <div className="second-services-content">
              <h5>Perfect UI Design</h5>
              <p>Praesent ac vehicula sapien. Sed sollicitudin molestie consequat. Ut vitae ante ut mi vehicula vulputate.</p>
              <a href="#"><span>1</span></a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 mb-30">
          <div className="s-single-services text-center">
            <div className="services-icon">
              <img src="img/icon/f-icon3.png" />
            </div>
            <div className="second-services-content">
              <h5>Great CSS Animation</h5>
              <p>Praesent ac vehicula sapien. Sed sollicitudin molestie consequat. Ut vitae ante ut mi vehicula vulputate.</p>
              <a href="#"><span>2</span></a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 mb-30">
          <div className="s-single-services text-center">
            <div className="services-icon">
              <img src="img/icon/f-icon2.png" />
            </div>
            <div className="second-services-content">
              <h5>Fully Secured</h5>
              <p>Praesent ac vehicula sapien. Sed sollicitudin molestie consequat. Ut vitae ante ut mi vehicula vulputate.</p>
              <a href="#"><span>3</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
