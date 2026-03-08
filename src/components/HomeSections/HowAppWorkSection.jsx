import React from 'react'

export default function HowAppWorkSection() {
  return (
      <section id="features" className="app-work pt-70 pb-100 p-relative" style={{backgroundImage: 'url(img/shape/header-sape4.png)', backgroundPosition: 'right center', backgroundSize: 'auto', backgroundRepeat: 'no-repeat'}}>            
    <div className="container">
      <div className="row align-items-center ">
        <div className="col-xl-6">
          <div className="choose-wrap">
            <div className="section-title w-title left-align mb-15">
              <h2>How does This App Work?</h2>
            </div>
            <div className="app-work-content mt-20">
              <ul>
                <li>
                  <div className="icon"><img src="img/icon/apw-Icon1.png" /></div> 
                  <div className="text">
                    <h4>Make A Profile</h4>
                    <p>Aliquam varius ligula nec leo tempus porta. Vestibulum suscipit leo at nunc imperdiet, quis lacinia nisi euismod.</p>
                  </div>
                </li>
                <li>
                  <div className="icon"><img src="img/icon/apw-Icon2.png" /></div> 
                  <div className="text">
                    <h4>Download It For Free</h4>
                    <p>Aliquam varius ligula nec leo tempus porta. Vestibulum suscipit leo at nunc imperdiet, quis lacinia nisi euismod.</p>
                  </div>
                </li>
                <li>
                  <div className="icon"><img src="img/icon/apw-Icon3.png" /></div> 
                  <div className="text">
                    <h4>Enjoy This App</h4>
                    <p>Aliquam varius ligula nec leo tempus porta. Vestibulum suscipit leo at nunc imperdiet, quis lacinia nisi euismod.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <img src="img/bg/app-work-img.png" alt="app-work-img" className="img" />
        </div>
      </div>
    </div>
  </section>
  )
}
