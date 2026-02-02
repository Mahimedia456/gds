export default function OurFeatures() {
  return (
    <div className="our-features">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            <div className="section-title section-title-center">
              <h3 className="wow fadeInUp">Our Features</h3>
              <h2 className="text-effect" data-cursor="-opaque">
                Driven by quality and innovation — we build systems that reflect{" "}
                strength, sustainability, and lasting value
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-4 col-md-6 order-1">
            <div className="feature-item box-1 wow fadeInUp">
              <div className="feature-item-shape-image">
                <figure>
                  <img
                    src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=70"
                    alt=""
                  />
                </figure>
              </div>
              <div className="feature-item-content-box">
                <div className="feature-item-content">
                  <h3>Reliable Execution</h3>
                  <p>Clean workmanship, clear communication, and strong results.</p>
                </div>
                <div className="feature-item-list">
                  <ul>
                    <li>Safety-first installs</li>
                    <li>Quality-controlled delivery</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 order-xl-2 order-md-3 order-2">
            <div className="feature-item box-2 wow fadeInUp" data-wow-delay="0.2s">
              <div className="feature-item-info">
                <div className="feature-item-info-content">
                  <p>Your Vision, Our Expertise</p>
                  <h3>Request a free estimate today</h3>
                </div>
                <div className="feature-item-btn">
                  <a href="#contact" className="readmore-btn">
                    Get Free Estimate
                  </a>
                </div>
              </div>
              <div className="feature-item-image">
                <figure>
                  <img
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=70"
                    alt=""
                  />
                </figure>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-md-6 order-xl-3 order-md-2 order-3">
            <div className="feature-item box-3 wow fadeInUp" data-wow-delay="0.4s">
              <div className="feature-item-content-box">
                <div className="feature-item-content">
                  <h2>250+</h2>
                  <h3>Completed Jobs</h3>
                </div>
                <div className="feature-item-counter-info">
                  <p>Trusted by teams that need clean installs and dependable results.</p>
                </div>
              </div>
              <div className="feature-item-tag-list">
                <ul>
                  <li>Performance</li>
                  <li>Compliance</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-12 order-5">
            <div className="section-footer-text section-satisfy-img wow fadeInUp" data-wow-delay="0.6s">
              <div className="satisfy-client-images">
                <div className="satisfy-client-image">
                  <figure className="image-anime">
                    <img src="https://i.pravatar.cc/60?img=11" alt="" />
                  </figure>
                </div>
                <div className="satisfy-client-image add-more">
                  <i className="fa-solid fa-phone"></i>
                </div>
              </div>
              <p>
                From planning to install — <a href="#contact">start your project today.</a>
              </p>
              <ul>
                <li>4.9/5</li>
                <li>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>4200 Reviews</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
