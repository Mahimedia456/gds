export default function WhatWeDo() {
  return (
    <div className="what-we-do">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xl-7">
            <div className="what-we-do-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">what we do</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Blending engineering and field expertise to deliver timeless results
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  We bring planning, quality control, and skilled execution together—so every job performs and lasts.
                </p>
              </div>

              <div className="what-we-do-item-list wow fadeInUp" data-wow-delay="0.4s">
                <div className="what-we-do-item">
                  <div className="icon-box">
                    <i className="fa-solid fa-gears"></i>
                  </div>
                  <div className="what-we-do-item-body">
                    <h3>Engineering Excellence</h3>
                    <p>Precision, safety, compliance, and long-term performance.</p>
                    <ul>
                      <li>Durability-first systems</li>
                    </ul>
                  </div>
                </div>

                <div className="what-we-do-item">
                  <div className="icon-box">
                    <i className="fa-solid fa-compass-drafting"></i>
                  </div>
                  <div className="what-we-do-item-body">
                    <h3>Smart Planning</h3>
                    <p>Clean layouts, efficient routing, and predictable timelines.</p>
                    <ul>
                      <li>Less downtime, more output</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="what-we-do-btn wow fadeInUp" data-wow-delay="0.6s">
                <a href="#contact" className="btn-default">
                  Contact Us Today
                </a>
              </div>
            </div>
          </div>

          <div className="col-xl-5">
            <div className="what-we-do-image wow fadeInUp" data-wow-delay="0.2s">
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1581093806997-124204d9fa9d?auto=format&fit=crop&w=1200&q=70"
                  alt=""
                />
              </figure>
            </div>
          </div>
        </div>

        <div className="col-lg-12">
          <div className="section-footer-text section-satisfy-img wow fadeInUp" data-wow-delay="0.4s">
            <div className="satisfy-client-images">
              <div className="satisfy-client-image">
                <figure className="image-anime">
                  <img src="https://i.pravatar.cc/60?img=25" alt="" />
                </figure>
              </div>
              <div className="satisfy-client-image add-more">
                <i className="fa-solid fa-phone"></i>
              </div>
            </div>
            <p>
              From vision to structure — <a href="#contact">where planning meets execution.</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
