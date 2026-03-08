import React from 'react'

export default function VideoSection() {
  return (
     <section className="video-area pt-100 pb-100 p-relative">                
    <div className="video-img2">
      <img src="img/bg/video-img.png" alt="mobile" />
      <a href="https://www.youtube.com/watch?v=7e90gBu4pas" className="popup-video"><img src="img/bg/play-btn.png" alt="play-btn.png" /></a>
    </div>
    <div className="video-img3">
      <img src="img/shape/header-sape5.png" alt="header-sape4" />
    </div>
    <div className="container">
      <div className="row">
        <div className="col-xl-6">
        </div>
        <div className="col-xl-6">
          <div className="video-wrap">
            <div className="section-title w-title left-align mb-25">
              <h2>Build The App That Everyonee Love</h2>
            </div>
            <div className="video-content">
              <p>Praesent fermentum nisl at ipsum facilisis viverra. Ut elementum accumsan finibus. Cras placerat lacinia mi, ac dictum ante. Donec libero enim, tincidunt sit amet venenatis id, maximus eu quam. </p>
              <ul>
                <li>
                  <div className="icon"><img src="img/icon/vs-icon.png" /></div> 
                  <div className="text">Pellentesque placerat, nisi congue vehicula efficitur.
                  </div>
                </li>
                <li>
                  <div className="icon"><img src="img/icon/vs-icon.png" /></div> 
                  <div className="text">Pellentesque placerat, nisi congue vehicula efficitur.
                  </div>
                </li>
                <li>
                  <div className="icon"><img src="img/icon/vs-icon.png" /></div> 
                  <div className="text">Suspendisse vitae varius diam, a vulputate urna.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
