export default function AboutUs() {
  return (
    <div className="about-us" id="about">
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div className="about-us-image-box">
              <div className="about-us-image-box-1">
                <div className="about-us-image">
                  <figure className="image-anime">
                    <img src="/images/about-us-image-1.jpg" alt="About 1" />
                  </figure>
                </div>
              </div>

              <div className="about-us-image-box-2">
                <div className="about-us-image">
                  <figure className="image-anime">
                    <img src="/images/about-us-image-2.jpg" alt="About 2" />
                  </figure>
                </div>

                <div className="year-experience-circle">
                  <img src="/images/year-experience-circle-accent.svg" alt="Experience" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-7">
            <div className="about-us-content">
              <div className="section-title">
                <h3>About Us</h3>
                <h2>Redefining the future of construction through design excellence</h2>
                <p>
                  We combine visionary design, advanced engineering, and superior craftsmanship to
                  redefine what's possible in modern construction.
                </p>
              </div>

              <div className="about-us-body">
                <div className="about-body-item">
                  <div className="icon-box">
                    <img src="/images/icon-about-item-1.svg" alt="" />
                  </div>
                  <div className="about-body-item-content">
                    <h3>Commitment to Quality</h3>
                    <p>Every project we undertake reflect a unwavering dedication.</p>
                  </div>
                </div>

                <div className="about-body-item">
                  <div className="icon-box">
                    <img src="/images/icon-about-item-2.svg" alt="" />
                  </div>
                  <div className="about-body-item-content">
                    <h3>Innovation at Every Step</h3>
                    <p>From concept to completion we use cutting-edge technology.</p>
                  </div>
                </div>
              </div>

              <div className="about-us-footer">
                <div className="about-us-footer-content">
                  <div className="about-footer-content-list">
                    <ul>
                      <li>We respect deadlines and ensure every project.</li>
                      <li>We craft innovative designs that balance creativity.</li>
                      <li>Every structure we build reflects with commitment.</li>
                    </ul>
                  </div>

                  <div className="about-us-btn">
                    <a href="/about" className="btn-default">More About Us</a>
                  </div>
                </div>

                <div className="about-us-video-box">
                  <div className="about-video-image">
                    <figure className="image-anime">
                      <img src="/images/about-intro-video-image.jpg" alt="" />
                    </figure>
                  </div>

                  <div className="video-play-button">
                    <a
                      href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                      className="popup-video"
                      aria-label="Play video"
                    >
                      <i className="fa-solid fa-play" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
