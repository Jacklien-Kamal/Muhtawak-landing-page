import React from 'react'

export default function PricingSection() {
  return (
 <section id="pricing" className="pricing-area pt-100 pb-50" style={{backgroundImage: 'url(img/shape/header-sape7.png)', backgroundPosition: 'right center', backgroundSize: 'auto', backgroundRepeat: 'no-repeat'}}>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-7 col-lg-8">
          <div className="section-title text-center mb-50">     
            <h2>Our Pricing Plans</h2>
            <p>Quisque posuere mollis ipsum et molestie. Fusce cursus, risus vel scelerisque porttitor, leo quam vulputate nibh, sit amet blandit erat magna.</p>
          </div>
          <nav className="pricing-tab mb-60">
            <span className="monthly_tab_title">
              Monthly               </span>
            <span className="pricing-tab-switcher" />
            <span className="annual_tab_title">
              Annual                </span>
          </nav>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="pricing-box text-center mb-60">
            <div className="pricing-head">                                  
              <h4>Beginner</h4>
              <div className="pricing-amount">
                <div className="annual_price">
                  <sup><span className="currency">$</span></sup>
                  <span className="price"> 95 </span>
                  <span className="subscription"> / Annual </span>
                </div>
                <div className="monthly_price">
                  <sup><span className="currency">$</span></sup>
                  <span className="price"> 15 </span>
                  <span className="subscription"> / Monthly </span>
                </div>
              </div>
              <h5>I have a dream</h5>
            </div>
            <div className="pricing-body mb-40 text-left">
              <ul>
                <li>1000+ projets</li>
                <li>No transaction fees</li>
                <li>Unlimited Storage</li>
                <li>5 Download</li>
              </ul>
            </div>
            <div className="pricing-btn">
              <a href="#" className="btn">Start Now</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="pricing-box active text-center mb-60">
            <div className="poppuler">
              <span className="btn">Poppuler</span>
            </div>
            <div className="pricing-head">                                  
              <h4>Starter</h4>
              <div className="pricing-amount">
                <div className="annual_price">
                  <sup><span className="currency">$</span></sup>
                  <span className="price">  78 </span>
                  <span className="subscription"> /Annual </span>
                </div>
                <div className="monthly_price">
                  <sup><span className="currency">$</span></sup>
                  <span className="price"> 15 </span>
                  <span className="subscription"> /Monthly </span>
                </div>
              </div>
              <h5>I have a dream</h5>
            </div>
            <div className="pricing-body mb-40 text-left">
              <ul>
                <li>1000+ projets</li>
                <li>No transaction fees</li>
                <li>Unlimited Storage</li>
                <li>5 Download</li>
              </ul>
            </div>
            <div className="pricing-btn">
              <a href="#" className="btn">Start Now</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="pricing-box active text-center mb-60">                 
            <div className="pricing-head">                                  
              <h4>Professionl</h4>
              <div className="pricing-amount">
                <div className="annual_price">
                  <sup><span className="currency">$</span></sup>
                  <span className="price">  90 </span>
                  <span className="subscription"> / Annual </span>
                </div>
                <div className="monthly_price">
                  <sup><span className="currency">$</span></sup>
                  <span className="price"> 18 </span>
                  <span className="subscription"> / Monthly </span>
                </div>
              </div>
              <h5>I have a dream</h5>
            </div>
            <div className="pricing-body mb-40 text-left">
              <ul>
                <li>1000+ projets</li>
                <li>No transaction fees</li>
                <li>Unlimited Storage</li>
                <li>5 Download</li>
              </ul>
            </div>
            <div className="pricing-btn">
              <a href="#" className="btn">Start Now</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="pricing-box active text-center mb-60">
            <div className="pricing-head">                                   
              <h4>Power Plan</h4>
              <div className="pricing-amount">
                <div className="annual_price">
                  <sup><span className="currency">$</span></sup>
                  <span className="price"> 120 </span>
                  <span className="subscription"> / Annual </span>
                </div>
                <div className="monthly_price">
                  <sup><span className="currency">$</span></sup>
                  <span className="price"> 25 </span>
                  <span className="subscription"> / Monthly </span>
                </div>
              </div>
              <h5>I have a dream</h5>
            </div>
            <div className="pricing-body mb-40 text-left">
              <ul>
                <li>1000+ projets</li>
                <li>No transaction fees</li>
                <li>Unlimited Storage</li>
                <li>5 Download</li>
              </ul>
            </div>
            <div className="pricing-btn">
              <a href="#" className="btn">Start Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>  )
}
