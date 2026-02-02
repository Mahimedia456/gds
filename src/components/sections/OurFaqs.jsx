import { useState } from "react";

const FAQS = [
  { q: "Q1. Do you provide both design and construction services?", a: "Yes, we offer end-to-end design and build solutions..." },
  { q: "Q2. Can you work with my existing architect or designer?", a: "Yes, we can collaborate with your existing team..." },
  { q: "Q3. How do you estimate the total project cost?", a: "We assess scope, materials, site conditions, and timeline..." },
  { q: "Q4. What materials do you typically use for construction?", a: "We choose materials based on project needs and durability..." },
  { q: "Q5. Can you handle renovation or remodeling projects?", a: "Yes, we handle renovations, remodeling, and upgrades..." },
];

export default function OurFaqs() {
  const [open, setOpen] = useState(0);

  return (
    <div className="our-faqs" id="faqs">
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div className="our-faqs-content">
              <div className="faqs-title-box">
                <div className="section-title">
                  <h3>Frequently Asked Questions</h3>
                  <h2>We're here to provide clear and helpful answers</h2>
                  <p>Explore our FAQs to learn more about our process, pricing, and quality.</p>
                </div>

                <div className="our-faqs-btn">
                  <a href="/faqs" className="btn-default">View all FAQs</a>
                </div>
              </div>

              <div className="faq-contact-box">
                <div className="icon-box">
                  <img src="/images/icon-phone-primary.svg" alt="" />
                </div>
                <div className="faq-contact-box-content">
                  <h3>Call Us For Any Query</h3>
                  <p><a href="tel:+123456789">+(123) 456-789</a></p>
                </div>
              </div>

            </div>
          </div>

          <div className="col-xl-7">
            <div className="faq-accordion" id="accordion">
              {FAQS.map((f, i) => {
                const expanded = open === i;
                return (
                  <div className="accordion-item" key={f.q}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${expanded ? "" : "collapsed"}`}
                        type="button"
                        aria-expanded={expanded}
                        onClick={() => setOpen(expanded ? -1 : i)}
                      >
                        {f.q}
                      </button>
                    </h2>

                    <div className={`accordion-collapse collapse ${expanded ? "show" : ""}`}>
                      <div className="accordion-body">
                        <p>{f.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
