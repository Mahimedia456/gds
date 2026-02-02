import { useState } from "react";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="hero dark-section parallaxie"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=2200&q=70)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-8 col-md-10">
              <div className="hero-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">Where Precision Meets Performance</h3>
                  <h1 className="text-anime-style-3" data-cursor="-opaque">
                    HVAC & construction solutions that inspire and endure
                  </h1>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    We deliver commercial HVAC, industrial systems, and public sector work with high standards,
                    clean workmanship, and on-time execution.
                  </p>
                </div>

                <div className="hero-content-body wow fadeInUp" data-wow-delay="0.4s">
                  <div className="hero-btn">
                    <a href="#contact" className="btn-default btn-highlighted">
                      Get Free Estimate
                    </a>
                  </div>

                  <div className="video-play-button" style={{ cursor: "pointer" }} onClick={() => setOpen(true)}>
                    <a href="#video" onClick={(e) => e.preventDefault()} data-cursor-text="Play">
                      <i className="fa-solid fa-play"></i>
                    </a>
                    <h3>Watch Our Video</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-2">
              <div className="year-experience-circle">
                {/* temp circle */}
                <img
                  src="https://dummyimage.com/220x220/ffd400/000&text=25%2B+Years"
                  alt=""
                  style={{ borderRadius: "50%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Info Boxes */}
      <div className="hero-info-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-info-list">
                <div className="hero-info-item box-1">
                  <div className="hero-info-content-box">
                    <div className="hero-info-item-content">
                      <ul>
                        <li>DesignBuild</li>
                      </ul>
                      <h3>Shaping the future of performance</h3>
                    </div>
                    <div className="hero-info-btn">
                      <a href="#services" className="readmore-btn">
                        Learn More
                      </a>
                    </div>
                  </div>

                  <div className="hero-info-image">
                    <figure className="image-anime reveal">
                      <img
                        src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=70"
                        alt=""
                      />
                    </figure>
                  </div>
                </div>

                <div className="hero-info-item box-2">
                  <figure className="image-anime reveal">
                    <img
                      src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=70"
                      alt=""
                    />
                  </figure>
                </div>

                <div className="hero-info-item box-3">
                  <div className="hero-info-header">
                    <div className="icon-box">
                      <div
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: 12,
                          background: "rgba(255,255,255,0.1)",
                          display: "grid",
                          placeItems: "center",
                        }}
                      >
                        <i className="fa-solid fa-helmet-safety"></i>
                      </div>
                    </div>

                    <div className="satisfy-client-images">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div className="satisfy-client-image" key={i}>
                          <figure className="image-anime">
                            <img
                              src={`https://i.pravatar.cc/60?img=${10 + i}`}
                              alt=""
                            />
                          </figure>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="hero-info-counter-box">
                    <h3>Happy Satisfied Customers</h3>
                    <h2>15K+</h2>
                  </div>

                  <div className="hero-info-bg-icon">
                    <div
                      style={{
                        width: 140,
                        height: 140,
                        borderRadius: 999,
                        background: "rgba(255,255,255,0.06)",
                        position: "absolute",
                        right: -10,
                        bottom: -10,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Local modal trigger for hero (optional) */}
      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.75)",
            zIndex: 9999,
            display: "grid",
            placeItems: "center",
            padding: 16,
          }}
          onClick={() => setOpen(false)}
        >
          <div
            style={{ width: "min(980px, 100%)", background: "#000", borderRadius: 18, overflow: "hidden" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", justifyContent: "flex-end", padding: 10 }}>
              <button
                className="btn-default"
                style={{ padding: "8px 12px" }}
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </div>
            <video
              src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
              controls
              autoPlay
              style={{ width: "100%", height: 520, objectFit: "cover", display: "block" }}
            />
          </div>
        </div>
      )}
    </>
  );
}
