import React from 'react'

export default function NewsSection() {
  return (
  <section className="newslater-area pt-90 pb-100" style={{backgroundImage: 'url(img/bg/subscribe-bg.png)', backgroundSize: 'cover'}}>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-8 col-lg-10">
          <div className="section-title text-center pl-40 pr-40 mb-50">
            <h2>Subscreibe For New Features</h2>
            <p>Quisque posuere mollis ipsum et molestie. Fusce cursus, risus vel scelerisque porttitor, leo quam vulputate nibh, sit amet blandit erat magna.</p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">          
        <div className="col-xl-6 col-lg-10">
          <form name="ajax-form" id="contact-form4" action="#" method="post" className="contact-form newslater">
            <div className="form-group">
              <input className="form-control" id="email2" name="email" type="email" placeholder="Email Address..." defaultValue required /> 
              <button type="submit" className="btn btn-custom" id="send2">Subscribe Now</button>
            </div>
            {/* /Form-email */}	
          </form>
        </div>
      </div>
    </div>
  </section>  )
}
