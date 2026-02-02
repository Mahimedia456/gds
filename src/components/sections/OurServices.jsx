const SERVICES = [
  { no: "01.", title: "Interior Design and Detailing", desc: "Our interior design solutions blend beauty and functionality", img: "/images/service-image-1.jpg" },
  { no: "02.", title: "Project Planning & Consultation", desc: "We provide comprehensive planning and advisory services", img: "/images/service-image-2.jpg" },
  { no: "03.", title: "Urban Development & Master Planning", desc: "We design large scale urban space with focus on sustainability", img: "/images/service-image-3.jpg" },
  { no: "04.", title: "Civil Infrastructure Development", desc: "Our team specializes in roads, bridges, and public infrastructures", img: "/images/service-image-4.jpg" },
];

export default function OurServices() {
  return (
    <div className="our-services" id="services">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            <div className="section-title section-title-center">
              <h3>Our Services</h3>
              <h2>Logistics services designed for global business success</h2>
            </div>
          </div>
        </div>

        <div className="row services-item-list">
          {SERVICES.map((s, idx) => (
            <div key={s.no} className="col-xl-3 col-md-6">
              <div className={`service-item ${idx === 0 ? "active" : ""}`}>
                <div className="service-item-header">
                  <div className="service-item-title">
                    <h2><a href="/services">{s.title}</a></h2>
                    <h3>{s.no}</h3>
                  </div>
                  <div className="service-item-content">
                    <p>{s.desc}</p>
                  </div>
                </div>

                <div className="service-image-box">
                  <div className="service-item-image">
                    <figure className="image-anime">
                      <img src={s.img} alt={s.title} />
                    </figure>
                  </div>
                  <div className="service-item-btn">
                    <a href="/services">
                      <img src="/images/arrow-primary.svg" alt="Arrow" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}

          <div className="col-lg-12">
            <div className="service-benefit-box">
              <div className="service-benefit-list">
                <ul>
                  <li>Bespoke Furniture</li>
                  <li>Artisan Craft</li>
                  <li>Shelving Solutions</li>
                  <li>Furniture Design</li>
                </ul>
              </div>

              <div className="section-footer-text">
                <p><span>Free</span>Let's make something great work together. <a href="/contact">Get Free Quote</a></p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
