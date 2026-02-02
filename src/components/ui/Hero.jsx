// src/components/ui/Hero.jsx
import VideoModal from "./VideoModal";

const HERO_BG =
  "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=2200&q=80";

const INFO_IMG_1 =
  "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1600&q=80";

const INFO_IMG_2 =
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80";

const INFO_IMG_3 =
  "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1800&q=80";

const AVATARS = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/65.jpg",
  "https://randomuser.me/api/portraits/women/19.jpg",
  "https://randomuser.me/api/portraits/men/12.jpg",
];

export default function Hero() {
  return (
    <>
      {/* ✅ HERO (template structure) */}
      <section
        id="home"
        className="hero dark-section parallaxie"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(9,20,32,.78) 0%, rgba(9,20,32,.55) 55%, rgba(9,20,32,.35) 100%), url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-8 col-md-10">
              <div className="hero-content">
                <div className="section-title">
                  <h3>WHERE CREATIVITY MEETS STRUCTURAL MASTERY</h3>
                  <h1>
                    Where innovative design meet precision construction to create spaces that inspire
                    and endure
                  </h1>
                  <p>
                    Our approach unites visionary architecture with flawless construction execution.
                    From concept to completion, we build environments that tell a story of innovation,
                    precision, and enduring quality.
                  </p>
                </div>

                <div className="hero-content-body">
                  <div className="hero-btn">
                    <a href="#contact" className="btn-default btn-highlighted">
                      Get Free Estimate
                    </a>
                  </div>

                  <div className="video-play-button">
                    <VideoModal
                      videoUrl="https://www.youtube.com/embed/Y-x0efG1seA"
                      trigger={
                        <button className="popup-video" type="button" aria-label="Play video">
                          <i className="fa-solid fa-play" />
                        </button>
                      }
                    />
                    <h3>Watch Our Video</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Right circle */}
            <div className="col-xl-4 col-md-2">
              <div className="year-experience-circle">
                {/* Online SVG-like circle (so missing asset problem nahi) */}
                <div
                  style={{
                    width: 260,
                    height: 260,
                    borderRadius: "50%",
                    border: "2px solid rgba(255,255,255,.35)",
                    display: "grid",
                    placeItems: "center",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      width: 90,
                      height: 90,
                      borderRadius: "50%",
                      background: "var(--brand)",
                      display: "grid",
                      placeItems: "center",
                      color: "#111",
                      fontWeight: 900,
                    }}
                  >
                    25+ yrs
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      inset: 16,
                      borderRadius: "50%",
                      border: "1px solid rgba(255,255,255,.18)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ HERO INFO BOX (3 cards EXACT layout) */}
      <div className="hero-info-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-info-list">
                {/* BOX 1 */}
                <div className="hero-info-item box-1">
                  <div className="hero-info-content-box">
                    <div className="hero-info-item-content">
                      <ul>
                        <li>DesignBuild</li>
                      </ul>
                      <h3>Shaping the future of design</h3>
                    </div>
                    <div className="hero-info-btn">
                      <a href="#about" className="readmore-btn">
                        Learn More
                      </a>
                    </div>
                  </div>

                  <div className="hero-info-image">
                    <figure className="image-anime reveal">
                      <img src={INFO_IMG_1} alt="DesignBuild" />
                    </figure>
                  </div>
                </div>

             {/* BOX 2 (image only) */}
<div className="hero-info-item box-2">
  <figure className="image-anime reveal">
    <img src={INFO_IMG_2} alt="Project preview" />
  </figure>
</div>

                {/* BOX 3 (black stats card) */}
                <div className="hero-info-item box-3">
                  <div className="hero-info-header">
                    <div className="icon-box">
                      <div
                        style={{
                          width: 56,
                          height: 56,
                          borderRadius: 14,
                          background: "var(--brand)",
                          display: "grid",
                          placeItems: "center",
                          color: "#111",
                          fontWeight: 900,
                        }}
                      >
                        ✦
                      </div>
                    </div>

                    <div className="satisfy-client-images">
                      {AVATARS.map((src) => (
                        <div className="satisfy-client-image" key={src}>
                          <figure className="image-anime">
                            <img src={src} alt="Client" />
                          </figure>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="hero-info-counter-box">
                    <h3>Happy Satisfied Customers</h3>
                    <h2>
                      <span className="counter">15</span>K+
                    </h2>
                  </div>

                  {/* background circles */}
                  <div className="hero-info-bg-icon">
                    <img src={INFO_IMG_3} alt="" style={{ opacity: 0 }} />
                  </div>
                </div>
              </div>

              {/* extra small fix: your screenshot wali ring bottom-right */}
              <style>{`
                .hero-info-item.box-3{
                  position:relative;
                  overflow:hidden;
                }
                .hero-info-item.box-3:after{
                  content:"";
                  position:absolute;
                  width:220px;height:220px;
                  border-radius:50%;
                  border: 1px solid rgba(255,255,255,.18);
                  right:-110px; bottom:-110px;
                }
                .hero-info-item.box-3:before{
                  content:"";
                  position:absolute;
                  width:120px;height:120px;
                  border-radius:50%;
                  border: 1px solid rgba(255,255,255,.12);
                  right:40px; bottom:30px;
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
