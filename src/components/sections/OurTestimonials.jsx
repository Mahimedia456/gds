import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const TESTIMONIALS = [
  { logo: "/images/company-logo-1.svg", text: "“The team turned our dream home into a reality...”", name: "Darlene Robertson", role: "Interior Designer" },
  { logo: "/images/company-logo-2.svg", text: "“Professional and precise from start to finish...”", name: "Savannah Nguyen", role: "Interior Designer" },
  { logo: "/images/company-logo-3.svg", text: "“Amazing experience, great workmanship...”", name: "Wade Warren", role: "Interior Designer" },
];

export default function OurTestimonials() {
  return (
    <div className="our-testimonials" id="testimonials">
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div className="our-testimonial-content">
              <div className="section-title">
                <h3>Our Testimonials</h3>
                <h2>Real feedback from those who built their dreams</h2>
                <p>Our commitment to excellence has earned us the trust of homeowners and businesses.</p>
              </div>

              <div className="testimonial-btn">
                <a href="/testimonials" className="btn-default">View all testimonials</a>
              </div>
            </div>
          </div>

          <div className="col-xl-7">
            <div className="testimonial-slider-box">
              <div className="testimonial-slider">
                <Swiper
                  modules={[Pagination]}
                  slidesPerView={1}
                  spaceBetween={20}
                  pagination={{ el: ".testimonial-pagination", clickable: true }}
                >
                  {TESTIMONIALS.map((t) => (
                    <SwiperSlide key={t.name}>
                      <div className="testimonial-item">
                        <div className="testimonial-company-logo">
                          <img src={t.logo} alt="" />
                        </div>

                        <div className="testimonial-item-body">
                          <div className="testimonial-item-content">
                            <p>{t.text}</p>
                          </div>

                          <div className="testimonial-author-content">
                            <h3>{t.name}</h3>
                            <p>{t.role}</p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className="testimonial-pagination" />
              </div>

              <div className="section-footer-text section-footer-contact">
                <p>
                  <span><img src="/images/icon-phone-primary.svg" alt="" /></span>
                  {" "}Build smarter, design better - <a href="/contact">start your project with us today</a>
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
