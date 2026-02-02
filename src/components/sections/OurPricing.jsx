const PLANS = [
  { name: "Basic Plan", price: "$1999.00", icon: "/images/icon-pricing-1.svg" },
  { name: "Premium Plan", price: "$2999.00", icon: "/images/icon-pricing-2.svg", highlight: true },
  { name: "Standard Plan", price: "$4999.00", icon: "/images/icon-pricing-3.svg" },
];

export default function OurPricing() {
  return (
    <div className="our-pricing dark-section parallaxie" id="pricing">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            <div className="section-title section-title-center">
              <h3>Our Pricing Plans</h3>
              <h2>Tailored architectural and construction solutions for every budget</h2>
            </div>
          </div>
        </div>

        <div className="row">
          {PLANS.map((p) => (
            <div key={p.name} className="col-xl-4 col-md-6">
              <div className={`pricing-item ${p.highlight ? "highlighted-box" : ""}`}>
                <div className="pricing-item-header">
                  <div className="icon-box">
                    <img src={p.icon} alt="" />
                  </div>
                  <div className="pricing-item-content">
                    <p>{p.name}</p>
                    <h2>{p.price}<sub>/Project</sub></h2>
                  </div>
                </div>

                <div className="pricing-item-body">
                  <div className="pricing-item-list">
                    <h3>What's Included:</h3>
                    <ul>
                      <li>Basic 2D Floor Plan & Layout Design</li>
                      <li>Initial Consultation & Site Assessment</li>
                      <li>Material Guidance & Cost Estimation</li>
                    </ul>
                  </div>
                  <div className="pricing-item-btn">
                    <a href="/contact" className="btn-default btn-highlighted">Get Started With Plan</a>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="col-lg-12">
            <div className="pricing-benefit-list">
              <ul>
                <li><img src="/images/icon-pricing-benefit-1.svg" alt="" />Get 30 day free trial</li>
                <li><img src="/images/icon-pricing-benefit-2.svg" alt="" />No any hidden fees pay</li>
                <li><img src="/images/icon-pricing-benefit-3.svg" alt="" />You can cancel anytime</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
