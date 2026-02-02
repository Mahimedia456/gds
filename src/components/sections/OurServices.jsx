const SERVICES = [
  {
    n: "01.",
    title: "Commercial HVAC Installation",
    desc: "High-performance installs for offices, retail, and facilities.",
    img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1400&q=70",
  },
  {
    n: "02.",
    title: "Preventive Maintenance",
    desc: "Reduce downtime with scheduled inspection & service.",
    img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=70",
  },
  {
    n: "03.",
    title: "Renovation & Remodeling",
    desc: "Upgrades for efficiency, comfort and modern compliance.",
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=70",
  },
  {
    n: "04.",
    title: "Public Sector Projects",
    desc: "Reliable work for municipalities and public buildings.",
    img: "https://images.unsplash.com/photo-1581093806997-124204d9fa9d?auto=format&fit=crop&w=1400&q=70",
  },
];

export default function OurServices() {
  return (
    <div className="our-services" id="services">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            <div className="section-title section-title-center">
              <h3 className="wow fadeInUp">Our Services</h3>
              <h2 className="text-anime-style-3" data-cursor="-opaque">
                Services designed for business success
              </h2>
            </div>
          </div>
        </div>

        <div className="row services-item-list">
          {SERVICES.map((s, idx) => (
            <div className="col-xl-3 col-md-6" key={s.n}>
              <div className={`service-item wow fadeInUp ${idx === 0 ? "active" : ""}`} data-wow-delay={`${idx * 0.2}s`}>
                <div className="service-item-header">
                  <div className="service-item-title">
                    <h2>
                      <a href="#contact">{s.title}</a>
                    </h2>
                    <h3>{s.n}</h3>
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
                    <a href="#contact" aria-label="Go">
                      <span style={{ fontSize: 22 }}>→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="col-lg-12">
            <div className="service-benefit-box wow fadeInUp" data-wow-delay="0.4s">
              <div className="service-benefit-list">
                <ul>
                  <li>Quality Install</li>
                  <li>Safety First</li>
                  <li>Fast Turnaround</li>
                  <li>Clean Finish</li>
                </ul>
              </div>

              <div className="section-footer-text">
                <p>
                  <span>Free</span> Let’s make something great —{" "}
                  <a href="#contact">Get Free Quote</a>
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
