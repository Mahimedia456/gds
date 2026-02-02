export default function OurFeatures() {
  return (
    <div className="our-features" id="features">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            <div className="section-title section-title-center">
              <h3>Our Features</h3>
              <h2 className="text-effect">
                Driven by passion for quality
                <span className="feature-title-img-1"><img src="/images/icon-feature-title-1.svg" alt="" /></span>
                and innovation, we build
                <span className="feature-title-img-2"><img src="/images/icon-feature-title-2.svg" alt="" /></span>
                spaces that reflect strength, sustainability,
                <span className="feature-title-img-3">
                  <img src="/images/author-1.jpg" alt="" />
                  <img src="/images/author-2.jpg" alt="" />
                  <img src="/images/author-3.jpg" alt="" />
                </span>
                and lasting value
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-4 col-md-6 order-1">
            <div className="feature-item box-1">
              <div className="feature-item-shape-image">
                <figure><img src="/images/feature-item-image-1.jpg" alt="" /></figure>
              </div>
              <div className="feature-item-content-box">
                <div className="feature-item-content">
                  <h3>Innovative Design Approach</h3>
                  <p>We combine creativity with functionality to deliver designs that are both visually striking.</p>
                </div>
                <div className="feature-item-list">
                  <ul>
                    <li>Our architects embrace modern trends.</li>
                    <li>We merge creativity and practicality to design.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 order-xl-2 order-md-3 order-2">
            <div className="feature-item box-2">
              <div className="feature-item-info">
                <div className="feature-item-info-content">
                  <p>Your Vision, Our Expertise</p>
                  <h3>Request To Get Free Projects Estimate Today</h3>
                </div>
                <div className="feature-item-btn">
                  <a href="/contact" className="readmore-btn">Get Free Estimate</a>
                </div>
              </div>
              <div className="feature-item-image">
                <figure><img src="/images/feature-item-image-2.png" alt="" /></figure>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-md-6 order-xl-3 order-md-2 order-3">
            <div className="feature-item box-3">
              <div className="feature-item-content-box">
                <div className="feature-item-content">
                  <h2><span className="counter">250</span>+</h2>
                  <h3>Dedicated Professionals</h3>
                </div>
                <div className="feature-item-counter-info">
                  <p>A skilled team of architects, engineers, and experts working with passion.</p>
                </div>
              </div>
              <div className="feature-item-tag-list">
                <ul>
                  <li>Visualization</li>
                  <li>Custom Design</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-12 order-5">
            <div className="section-footer-text section-satisfy-img">
              <div className="satisfy-client-images">
                <div className="satisfy-client-image">
                  <figure className="image-anime">
                    <img src="/images/author-1.jpg" alt="" />
                  </figure>
                </div>
                <div className="satisfy-client-image add-more">
                  <img src="/images/icon-phone-primary.svg" alt="" />
                </div>
              </div>

              <p>From vision to structure - <a href="/contact">where creativity meets construction excellence.</a></p>
              <ul>
                <li><span className="counter">4.9</span>/5</li>
                <li>
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                </li>
                <li>Our 4200 Review</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
