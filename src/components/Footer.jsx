import React from 'react'

export default function Footer() {
  return (
<footer className="footer-bg footer-p pt-60" style={{backgroundImage: 'url(img/bg/f-bg.png)', backgroundPosition: 'center top', backgroundSize: 'auto', backgroundRepeat: 'no-repeat'}}>            
  <div className="footer-top">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-xl-3 col-lg-3 col-sm-6">
          <div className="footer-widget mb-30">
            <div className="logo mt-15 mb-15">
              <a href="#"><img src="img/logo/w_logo.png" alt="logo" /></a>
            </div>
            <div className="footer-text mb-20">
              <p>Sed ut perspiciatis unde om is nerror sit voluptatem accustium dolorem tium totam rem aperam quae.</p>
            </div>
            <div className="footer-social">
              <a href="#"><i className="fab fa-facebook-f" /></a>
              <a href="#"><i className="fab fa-twitter" /></a>
              <a href="#"><i className="fab fa-instagram" /></a>
              <a href="#"><i className="fab fa-google-plus-g" /></a>
            </div>
          </div>
        </div>
        <div className="col-xl-2 col-lg-3 col-sm-6">
          <div className="footer-widget mb-30">
            <div className="f-widget-title">
              <h5>Company News</h5>
            </div>
            <div className="footer-link">
              <ul>                                        
                <li><a href="#">Partners</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Career</a></li>
                <li><a href="#">Reviews</a></li>
                <li><a href="#">Terms &amp; Conditions</a></li>                                      
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-2 col-lg-3 col-sm-6">
          <div className="footer-widget mb-30">
            <div className="f-widget-title">
              <h5>Useful Links</h5>
            </div>
            <div className="footer-link">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Project</a></li>
                <li><a href="#">Our Team</a></li>                                       
              </ul>
            </div>
          </div>
        </div>                        
        <div className="col-xl-3 col-lg-3 col-sm-6">
          <div className="footer-widget mb-30">
            <div className="f-widget-title">
              <h5>Contact Us</h5>
            </div>
            <div className="footer-link">
              <div className="f-contact">
                <ul>
                  <li>
                    <i className="icon dripicons-phone" />
                    <span>1800-121-3637<br />+91 555 234-8765</span>
                  </li>
                  <li>
                    <i className="icon dripicons-mail" />
                    <span><a href="mailto:info@example.com">info@example.com</a><br /><a href="mailto:sale@example.com">sale@example.com</a></span>
                  </li>
                  <li>
                    <i className="fal fa-map-marker-alt" />
                    <span>380 St Kilda Road, Melbourne<br />VIC 3004, Australia</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="copyright-wrap text-center">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="copyright-text">
            <p>© 2020 @ Bengle  All design Zcube.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

          )
}
