import React from 'react'

export default function ContactSection() {
  return (
 <section id="contact" className="contact-area contact-bg  pt-50 pb-100 p-relative fix" style={{backgroundImage: 'url(img/shape/header-sape8.png)', backgroundPosition: 'right center', backgroundSize: 'auto', backgroundRepeat: 'no-repeat'}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="contact-img2">
            <img src="img/bg/illustration.png" alt="test" />
          </div>						
        </div>
        <div className="col-lg-6">
          <div className="section-title mb-40">                              
            <h2>Get In Tuch</h2>
            <p>Quisque posuere mollis ipsum et molestie. Fusce cursus, risus vel scelerisque porttitor, leo quam vulputate nibh, sit amet blandit erat magna.</p>
          </div>
          <form action="#" className="contact-form">
            <div className="row">
              <div className="col-lg-12">
                <div className="contact-field p-relative c-name mb-20">                                    
                  <input type="text" placeholder="Name" />
                </div>                               
              </div>
              <div className="col-lg-12">                    
                <div className="contact-field p-relative c-email mb-20">                                    
                  <input type="text" placeholder="Email" />
                </div>                                
              </div>
              <div className="col-lg-12">                      
                <div className="contact-field p-relative c-subject mb-20">                                   
                  <input type="text" placeholder="Phone" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="contact-field p-relative c-message mb-45">                                  
                  <textarea name="message" id="message" cols={10} rows={10} placeholder="Write comments" defaultValue={""} />
                </div>
                <button className="btn">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>  )
}
