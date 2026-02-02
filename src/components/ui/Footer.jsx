export default function Footer() {
  return (
    <footer className="main-footer dark-section" id="contact">
      {/* ticker */}
      <div className="footer-scrolling-ticker">
        <div className="scrolling-ticker-box">
          <div className="scrolling-content">
            <span><i className="fa-solid fa-asterisk"></i> HVAC Installation</span>
            <span><i className="fa-solid fa-asterisk"></i> Commercial Projects</span>
            <span><i className="fa-solid fa-asterisk"></i> Preventive Maintenance</span>
            <span><i className="fa-solid fa-asterisk"></i> Public Sector Work</span>
            <span><i className="fa-solid fa-asterisk"></i> Renovation & Remodeling</span>
          </div>
          <div className="scrolling-content">
            <span><i className="fa-solid fa-asterisk"></i> HVAC Installation</span>
            <span><i className="fa-solid fa-asterisk"></i> Commercial Projects</span>
            <span><i className="fa-solid fa-asterisk"></i> Preventive Maintenance</span>
            <span><i className="fa-solid fa-asterisk"></i> Public Sector Work</span>
            <span><i className="fa-solid fa-asterisk"></i> Renovation & Remodeling</span>
          </div>
        </div>
      </div>

      <div className="footer-box">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="about-footer">
                <div className="footer-logo">
                  <img
                    src="https://dummyimage.com/170x44/ffd400/000&text=GDS+MECH"
                    alt="GDS Mechanical"
                  />
                </div>

                <div className="footer-working-hours">
                  <h3>Working Hours:</h3>
                  <ul>
                    <li>Monday - Friday: 09:00 AM - 06:00 PM</li>
                    <li>Saturday - Sunday: Closed</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-xl-8">
              <div className="footer-links-box">
                <div className="footer-links footer-location-info">
                  <h3>Service Area</h3>
                  <p>Morris Plains, NJ & surrounding areas</p>
                </div>

                <div className="footer-links footer-contact-links">
                  <h3>Get in Touch</h3>
                  <ul>
                    <li>
                      <i className="fa-solid fa-phone"></i> Phone:{" "}
                      <a href="tel:+19735551234">+1 (973) 555-1234</a>
                    </li>
                    <li>
                      <i className="fa-solid fa-envelope"></i> Email:{" "}
                      <a href="mailto:info@gdsmechanical.com">info@gdsmechanical.com</a>
                    </li>
                  </ul>
                </div>

                <div className="footer-links footer-newsletter-form">
                  <h3>Quick Quote</h3>
                  <p>Enter email — we reply fast.</p>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Email Address*"
                        required
                      />
                      <button type="submit" className="newsletter-btn" aria-label="Send">
                        <i className="fa-regular fa-paper-plane"></i>
                      </button>
                    </div>
                  </form>
                </div>

                <div className="footer-links footer-social-links">
                  <h3>Follow On Socials:</h3>
                  <ul>
                    <li><a href="#"><i className="fa-brands fa-facebook-f"></i> Facebook</a></li>
                    <li><a href="#"><i className="fa-brands fa-linkedin-in"></i> LinkedIn</a></li>
                    <li><a href="#"><i className="fa-brands fa-instagram"></i> Instagram</a></li>
                    <li><a href="#"><i className="fa-brands fa-youtube"></i> YouTube</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="footer-copyright">
                <div className="footer-menu">
                  <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#faqs">FAQs</a></li>
                  </ul>
                </div>
                <div className="footer-copyright-text">
                  <p>© {new Date().getFullYear()} GDS Mechanical. All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Proof block: image + video show */}
          <div className="mt-4">
            <div className="row g-4">
              <div className="col-md-6">
                <div style={{ borderRadius: 18, overflow: "hidden" }}>
                  <img
                    src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1600&q=70"
                    alt="Unsplash"
                    style={{ width: "100%", height: 260, objectFit: "cover", display: "block" }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div style={{ borderRadius: 18, overflow: "hidden" }}>
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
                    style={{ width: "100%", height: 260, objectFit: "cover", display: "block" }}
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
