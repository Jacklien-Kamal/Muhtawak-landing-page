import React from 'react';
import { useRole } from '../../hooks/roleContext';
import { FaGooglePlay } from 'react-icons/fa'

export default function DownloadApp() {
  const { content } = useRole();
  const { heading, description, points } = content.download;

  return (
    <section
      className="choose-area pt-100 pb-60 p-relative"
      style={{
        backgroundImage: 'url(img/shape/header-sape3.png)',
        backgroundPosition: 'right center',
        backgroundSize: 'auto',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="chosse-img" style={{ backgroundImage: 'url(img/bg/easy-m-bg.png)' }} />
      <div className="chosse-img2">
        <img src="img/bg/mobile2.png" alt="mobile" />
      </div>

      <div className="container ">
        <div className="row ">
          <div className="col-xl-5" />

          <div className="col-xl-7 p">
            <div className="choose-wrap   ">

              {/* ── Dynamic heading ── */}
              <div className="section-title w-title left-align mb-25">
                <h2>{heading}</h2>
              </div>

              <div className="choose-content">

                {/* ── Dynamic description ── */}
                <p>{description}</p>

                {/* ── Dynamic bullet points ── */}
                <div className="choose-list mb-30">
                  <ul>
                    {points.map((point, i) => (
                      <li key={i}>
                        <i className="fas fa-check-circle" /> {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ── Store buttons (static — same for both roles) ── */}
                <div className="choose-btn ">
                  <a href="#">
                    <span className="icon">
                      <img src="img/icon/apple-icon.png" alt="App Store" />
                    </span>
                    <span className="text" style={{ fontSize: '13px' }}>
                      Available on <strong style={{ fontSize: '15px' }}>APP STORE</strong>
                    </span>
                  </a>
                                <a href="#" className="g-btn" >
  <span className="icon">
    <FaGooglePlay style={{ fontSize: '26px', color: '#782551' }} />
  </span>
  <span className="text" style={{ fontSize: '13px' }}>
    Available on <strong style={{ fontSize: '15px' }}>GOOGLE PLAY</strong>
  </span>
</a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}