// src/components/ui/Hero.jsx
import VideoModal from "./VideoModal";

/** HERO bg (architecture like template) */
const HERO_BG =
  "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=2200&q=80";

/** 3 cards images (URL for now) */
const INFO_IMG_1 =
  "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1600&q=80";

const INFO_IMG_2 =
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80";

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
      {/* HERO */}
      <div
        className="hero dark-section parallaxie"
        id="home"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(9,20,32,.72) 0%, rgba(9,20,32,.45) 55%, rgba(9,20,32,.25) 100%), url(${HERO_BG})`,
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
                    Where innovative design meet precision construction to create spaces that inspire and endure
                  </h1>
                  <p>
                    Our approach unites visionary architecture with flawless construction execution. From concept to
                    completion, we build environments that tell a story of innovation, precision, and enduring quality.
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

            {/* Right circle (simple – no missing asset) */}
            <div className="col-xl-4 col-md-2">
              <div className="year-experience-circle">
                <div className="hero-circle">
                  <div className="hero-circle-inner">25+ yrs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HERO INFO BOX (✅ 3 cards MUST show) */}
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
                      <img src={INFO_IMG_1} alt="DesignBuild" loading="eager" />
                    </figure>
                  </div>
                </div>

                {/* BOX 2 (✅ CENTER IMAGE CARD) */}
                <div className="hero-info-item box-2">
                  <figure className="image-anime reveal">
                    <img src={INFO_IMG_2} alt="Project preview" loading="eager" />
                  </figure>
                </div>

                {/* BOX 3 */}
                <div className="hero-info-item box-3">
                  <div className="hero-info-header">
                    <div className="icon-box">
                      <div className="hero-mini-icon">✦</div>
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
                </div>
              </div>

              {/* ✅ IMPORTANT FIXES so 3 cards + images never disappear */}
              <style>{`
                /* circle */
                .hero-circle{
                  width: 260px; height: 260px;
                  border-radius: 50%;
                  border: 2px solid rgba(255,255,255,.35);
                  display:grid; place-items:center;
                  position: relative;
                }
                .hero-circle:before{
                  content:"";
                  position:absolute;
                  inset:16px;
                  border-radius:50%;
                  border:1px solid rgba(255,255,255,.18);
                }
                .hero-circle-inner{
                  width: 92px; height: 92px;
                  border-radius:50%;
                  background: var(--brand);
                  display:grid; place-items:center;
                  color:#111;
                  font-weight: 900;
                }

                /* make images ALWAYS have height + visible */
                .hero-info-item.box-1 .hero-info-image,
                .hero-info-item.box-2 figure{
                  height: 100%;
                }
                .hero-info-item.box-1 .hero-info-image{
                  min-height: 220px;
                }
                .hero-info-item.box-2{
                  min-height: 320px; /* ✅ this was missing -> center card collapsed */
                  overflow:hidden;
                  border-radius: 30px;
                }
                .hero-info-item.box-1 img,
                .hero-info-item.box-2 img{
                  width:100%;
                  height:100%;
                  object-fit:cover;
                  opacity: 1 !important;
                  transform:none !important;
                  display:block;
                }

                /* icon in black card */
                .hero-mini-icon{
                  width:56px;height:56px;
                  border-radius:14px;
                  background: var(--brand);
                  display:grid;place-items:center;
                  color:#111;
                  font-weight:900;
                }

                /* ring decoration bottom-right like template */
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
