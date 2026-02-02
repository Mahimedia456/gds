export default function AboutUs() {
  return (
    <div className="about-us" id="about">
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div className="about-us-image-box wow fadeInUp">
              <div className="about-us-image-box-1">
                <div className="about-us-image">
                  <figure className="image-anime">
                    <img
                      src="https://images.unsplash.com/photo-1581093806997-124204d9fa9d?auto=format&fit=crop&w=1200&q=70"
                      alt=""
                    />
                  </figure>
                </div>
              </div>

              <div className="about-us-image-box-2">
                <div className="about-us-image">
                  <figure className="image-anime">
                    <img
                      src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=70"
                      alt=""
                    />
                  </figure>
                </div>

                <div className="year-experience-circle">
                  <img
                    src="https://dummyimage.com/180x180/ffd400/000&text=Trusted"
                    alt=""
                    style={{ borderRadius: "50%" }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-7">
            <div className="about-us-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">About Us</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Redefining the future of construction through engineering excellence
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  We combine craftsmanship, safety, and modern methods to deliver strong, efficient installs and builds.
                </p>
              </div>

              <div className="about-us-body wow fadeInUp" data-wow-delay="0.4s">
                <div className="about-body-item">
                  <div className="icon-box">
                    <i className="fa-solid fa-award"></i>
                  </div>
                  <div className="about-body-item-content">
                    <h3>Commitment to Quality</h3>
                    <p>Every project reflects our dedication to clean, reliable, code-compliant work.</p>
                  </div>
                </div>

                <div className="about-body-item">
                  <div className="icon-box">
                    <i className="fa-solid fa-lightbulb"></i>
                  </div>
                  <div className="about-body-item-content">
                    <h3>Innovation at Every Step</h3>
                    <p>We use modern planning and field execution to keep timelines tight and results perfect.</p>
                  </div>
                </div>
              </div>

              <div className="about-us-footer wow fadeInUp" data-wow-delay="0.6s">
                <div className="about-us-footer-content">
                  <div className="about-footer-content-list">
                    <ul>
                      <li>We respect deadlines and communicate clearly.</li>
                      <li>We build systems that last and perform.</li>
                      <li>We keep safety and quality at the center.</li>
                    </ul>
                  </div>

                  <div className="about-us-btn">
                    <a href="#services" className="btn-default">
                      More About Us
                    </a>
                  </div>
                </div>

                <div className="about-us-video-box">
                  <div className="about-video-image">
                    <figure className="image-anime">
                      <img
                        src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=70"
                        alt=""
                      />
                    </figure>
                  </div>
                  <div className="video-play-button">
                    <a href="#contact" data-cursor-text="Play">
                      <i className="fa-solid fa-play"></i>
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
