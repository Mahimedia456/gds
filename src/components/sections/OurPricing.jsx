const PLANS = [
  {
    name: "Basic Plan",
    price: "$1999.00",
    icon: "fa-solid fa-bolt",
    items: ["Initial consultation", "Site assessment", "Basic estimation"],
    featured: false,
  },
  {
    name: "Premium Plan",
    price: "$2999.00",
    icon: "fa-solid fa-star",
    items: ["Consultation + planning", "System design guidance", "Detailed estimation"],
    featured: true,
  },
  {
    name: "Standard Plan",
    price: "$4999.00",
    icon: "fa-solid fa-gem",
    items: ["Full planning support", "Install coordination", "Priority scheduling"],
    featured: false,
  },
];

export default function OurPricing() {
  return (
    <div
      className="our-pricing dark-section parallaxie"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=2200&q=70)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            <div className="section-title section-title-center">
              <h3 className="wow fadeInUp">Our Pricing Plans</h3>
              <h2 className="text-anime-style-3" data-cursor="-opaque">
                Tailored solutions for every budget
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          {PLANS.map((p, idx) => (
            <div className="col-xl-4 col-md-6" key={p.name}>
              <div
                className={`pricing-item wow fadeInUp ${p.featured ? "highlighted-box" : ""}`}
                data-wow-delay={`${idx * 0.2}s`}
              >
                <div className="pricing-item-header">
                  <div className="icon-box">
                    <i className={p.icon}></i>
                  </div>
                  <div className="pricing-item-content">
                    <p>{p.name}</p>
                    <h2>
                      {p.price}
                      <sub>/Project</sub>
                    </h2>
                  </div>
                </div>

                <div className="pricing-item-body">
                  <div className="pricing-item-list">
                    <h3>What's Included:</h3>
                    <ul>
                      {p.items.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="pricing-item-btn">
                    <a href="#contact" className="btn-default btn-highlighted">
                      Get Started With Plan
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="col-lg-12">
            <div className="pricing-benefit-list wow fadeInUp" data-wow-delay="0.4s">
              <ul>
                <li><i className="fa-solid fa-check"></i> Transparent pricing</li>
                <li><i className="fa-solid fa-check"></i> No hidden fees</li>
                <li><i className="fa-solid fa-check"></i> Cancel anytime</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
