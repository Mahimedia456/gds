const FAQS = [
  {
    q: "Do you provide both HVAC and construction services?",
    a: "Yes — we support commercial HVAC work, upgrades, and related construction/renovation needs.",
  },
  {
    q: "Can you work with my architect or GC?",
    a: "Absolutely. We coordinate scope, schedules, and site requirements with your team.",
  },
  {
    q: "How do you estimate project cost?",
    a: "We review site conditions, equipment needs, labor complexity, and timeline to give a clear estimate.",
  },
  {
    q: "Do you handle renovation/remodeling projects?",
    a: "Yes — we do retrofits, upgrades, replacements, and efficiency improvements.",
  },
];

export default function OurFaqs() {
  return (
    <div className="our-faqs" id="faqs">
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div className="our-faqs-content">
              <div className="faqs-title-box">
                <div className="section-title">
                  <h3 className="wow fadeInUp">Frequently Asked Questions</h3>
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    We’re here to provide clear answers
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    Learn about our process, pricing, and how we keep quality and timelines on track.
                  </p>
                </div>

                <div className="our-faqs-btn wow fadeInUp" data-wow-delay="0.4s">
                  <a href="#contact" className="btn-default">
                    Ask a Question
                  </a>
                </div>
              </div>

              <div className="faq-contact-box wow fadeInUp" data-wow-delay="0.6s">
                <div className="icon-box">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="faq-contact-box-content">
                  <h3>Call Us For Any Query</h3>
                  <p><a href="tel:+19735551234">+1 (973) 555-1234</a></p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-7">
            <div className="faq-accordion" id="accordion">
              {FAQS.map((f, i) => (
                <details className="accordion-item wow fadeInUp" key={f.q} open={i === 0}>
                  <summary className="accordion-header">
                    <span className="accordion-button">{`Q${i + 1}. ${f.q}`}</span>
                  </summary>
                  <div className="accordion-body">
                    <p>{f.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
