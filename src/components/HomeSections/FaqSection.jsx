import React from 'react'

export default function FaqSection() {
  return (
  <section className="faq-area pb-100" style={{backgroundImage: 'url(img/shape/header-sape6.png)', backgroundPosition: 'right center', backgroundSize: 'auto', backgroundRepeat: 'no-repeat'}}>
    <div className="container">
      <div className="row align-items-end">                        
        <div className="col-lg-6">
          <div className="faq-img text-right">
            <img src="img/icon/logos-icons.png" alt="img" className="img" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="section-title left-align mb-50">                               
            <h2>Designed &amp; Worked By The Latest Partners</h2>
            <p>Duis non aliquet tellus, in mollis leo. Phasellus quis posuere dui. Nulla mauris purus, mattis eget sagittis at, accumsan sed leo.</p>
          </div>
          <div className="faq-wrap">
            <div className="accordion" id="accordionExample">
              <div className="card">
                <div className="card-header" id="headingThree">
                  <h2 className="mb-0">
                    <button className="faq-btn" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                      Aliquam varius ligula nec leo tempus porta.
                    </button>
                  </h2>
                </div>
                <div id="collapseThree" className="collapse show" aria-labelledby="headingThree" data-parent="#accordionExample">
                  <div className="card-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h2 className="mb-0">
                    <button className="faq-btn collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                      Suspendisse vitae varius diam, a vulputate urna.
                    </button>
                  </h2>
                </div>
                <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                  <div className="card-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwo">
                  <h2 className="mb-0">
                    <button className="faq-btn collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Aliquam aliquet purus eget lacus pretium.
                    </button>
                  </h2>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                  <div className="card-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>  )
}
