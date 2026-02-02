const TESTIMONIALS = [
  {
    name: "Darlene Robertson",
    role: "Facility Manager",
    quote:
      "Clean install, clear communication, and the team finished on schedule. Great experience.",
  },
  {
    name: "Savannah Nguyen",
    role: "Operations Lead",
    quote:
      "Professional crew. Great planning and a smooth handover with everything documented.",
  },
  {
    name: "Wade Warren",
    role: "Project Manager",
    quote:
      "Reliable quality. They kept the site tidy and hit our deadlines.",
  },
];

export default function OurTestimonials() {
  return (
    <div className="our-testimonials">
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div className="our-testimonial-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">Our Testimonials</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Real feedback from teams we helped
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  Our work is built on trust — clean execution and dependable results.
                </p>
              </div>

              <div className="testimonial-btn wow fadeInUp" data-wow-delay="0.4s">
                <a href="#contact" className="btn-default">
                  Get a Quote
                </a>
              </div>
            </div>
          </div>

          <div className="col-xl-7">
            <div className="testimonial-slider-box">
              <div className="testimonial-slider">
                <div className="swiper">
                  <div className="swiper-wrapper">
                    {TESTIMONIALS.map((t) => (
                      <div className="swiper-slide" key={t.name}>
                        <div className="testimonial-item">
                          <div className="testimonial-company-logo">
                            <img
                              src="https://dummyimage.com/120x36/fff/000&text=GDS"
                              alt=""
                            />
                          </div>

                          <div className="testimonial-item-body">
                            <div className="testimonial-item-content">
                              <p>“{t.quote}”</p>
                            </div>
                            <div className="testimonial-author-content">
                              <h3>{t.name}</h3>
                              <p>{t.role}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="testimonial-pagination"></div>
                </div>
              </div>

              <div className="section-footer-text section-footer-contact wow fadeInUp" data-wow-delay="0.2s">
                <p>
                  <span><i className="fa-solid fa-phone"></i></span>{" "}
                  Build smarter — <a href="#contact">start your project today</a>
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
