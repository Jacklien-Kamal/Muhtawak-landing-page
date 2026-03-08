import React from 'react'

export default function BlogsSection() {
  return (
  <section id="blog" className="blog-area p-relative pt-70" style={{backgroundImage: 'url(img/shape/header-sape8.png)', backgroundPosition: 'right center', backgroundSize: 'auto', backgroundRepeat: 'no-repeat'}}>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-7 col-lg-10">
          <div className="section-title text-center mb-50">                               
            <h2>Our Latest Blog &amp; News</h2>
            <p>Quisque posuere mollis ipsum et molestie. Fusce cursus, risus vel scelerisque porttitor, leo quam vulputate nibh, sit amet blandit erat magna.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-12">
          <div className="single-post mb-30">
            <div className="blog-thumb">
              <a href="blog-details.html"><img src="img/blog/inner_b1.jpg" alt="img" /></a>
            </div>
            <div className="blog-content">
              <div className="b-meta mb-40">
                <ul>                                           
                  <li><a href="#">20 jan 2019</a></li>                                            
                </ul>
              </div>
              <h4><a href="blog-details.html">Making Distribut Product Team
                  Work More With Monday</a></h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisi
                cing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div className="admin">
                <ul>
                  <li><img src="img/blog/admin-img.png" alt="test" /></li>
                  <li><h6>Jhon Abraham</h6> Author</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="single-post mb-30">
            <div className="blog-thumb">
              <a href="blog-details.html"><img src="img/blog/inner_b2.jpg" alt="img" /></a>
            </div>
            <div className="blog-content">
              <div className="b-meta mb-40">
                <ul>                                           
                  <li><a href="#">20 jan 2019</a></li>                                         
                </ul>
              </div>
              <h4><a href="blog-details.html">Monthly Web Development Upto Cost Of JavaScript Ethics</a></h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisi
                cing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div className="admin">
                <ul>
                  <li><img src="img/blog/admin-img.png" alt="test" /></li>
                  <li><h6>Jhon Abraham</h6> Author</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="single-post mb-30">
            <div className="blog-thumb">
              <a href="blog-details.html"><img src="img/blog/inner_b3.jpg" alt="img" /></a>
            </div>
            <div className="blog-content">
              <div className="b-meta mb-40">
                <ul>                                           
                  <li><a href="#">20 jan 2019</a></li>
                </ul>
              </div>
              <h4><a href="blog-details.html">User Experience Psychology And Performance Smashing</a></h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisi
                cing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div className="admin">
                <ul>
                  <li><img src="img/blog/admin-img.png" alt="test" /></li>
                  <li><h6>Jhon Abraham</h6> Author</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>  )
}
