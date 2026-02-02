const ITEMS = [
  {
    title: "Engineering Excellence",
    desc: "Our engineering approach focus on precision, safety, and sustainability.",
    bullet: "Our technical expertise ensures durability.",
    icon: "/images/icon-what-we-do-item-1.svg",
  },
  {
    title: "Innovative Architectural",
    desc: "We push the boundaries of design to create architectural concept that inspire.",
    bullet: "Our innovative approach blends creativity.",
    icon: "/images/icon-what-we-do-item-2.svg",
  },
];

export default function WhatWeDo() {
  return (
    <div className="what-we-do" id="what-we-do">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xl-7">
            <div className="what-we-do-content">
              <div className="section-title">
                <h3>what we do</h3>
                <h2>Blending architecture engineering and artistry to create timeless spaces</h2>
                <p>
                  Our multidisciplinary team specializes in architecture, interior design, and structural development.
                </p>
              </div>

              <div className="what-we-do-item-list">
                {ITEMS.map((it) => (
                  <div key={it.title} className="what-we-do-item">
                    <div className="icon-box">
                      <img src={it.icon} alt="" />
                    </div>
                    <div className="what-we-do-item-body">
                      <h3>{it.title}</h3>
                      <p>{it.desc}</p>
                      <ul>
                        <li>{it.bullet}</li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="what-we-do-btn">
                <a href="/contact" className="btn-default">Contact Us Today</a>
              </div>
            </div>
          </div>

          <div className="col-xl-5">
            <div className="what-we-do-image">
              <figure>
                <img src="/images/what-we-do-image.png" alt="What we do" />
              </figure>
            </div>
          </div>
        </div>

        <div className="col-lg-12">
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
          </div>
        </div>

      </div>
    </div>
  );
}
