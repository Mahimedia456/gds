// src/components/ui/Header.jsx
import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on anchor click
  const onNavClick = () => setOpen(false);

  return (
    <header className={`main-header ${scrolled ? "is-sticky" : ""}`} id="top">
      <div className={`header-sticky ${scrolled ? "active" : ""}`}>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            {/* ✅ ONLY ONE LOGO */}
            <a className="navbar-brand" href="#top" aria-label="GDS Mechanical">
              <img src={logo} alt="GDS Mechanical" style={{ height: 34, width: "auto" }} />
            </a>

            {/* ✅ Mobile toggle (no bootstrap js) */}
            <button
              className={`navbar-toggler ${open ? "active" : ""}`}
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              style={{
                border: "0",
                background: "transparent",
                padding: 0,
              }}
            >
              <span className="navbar-toggler-icon" />
            </button>

            {/* ✅ Works with bootstrap css: add "show" */}
            <div className={`collapse navbar-collapse main-menu ${open ? "show" : ""}`}>
              <div className="nav-menu-wrapper">
                <ul className="navbar-nav mr-auto" id="menu">
                  <li className="nav-item">
                    <a className="nav-link" href="#home" onClick={onNavClick}>
                      Home
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="#about" onClick={onNavClick}>
                      About Us
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="#services" onClick={onNavClick}>
                      Services
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="#blog" onClick={onNavClick}>
                      Blog
                    </a>
                  </li>

                  {/* Pages dropdown (basic) */}
                  <li className="nav-item submenu">
                    <a className="nav-link" href="#pages" onClick={(e) => e.preventDefault()}>
                      Pages
                    </a>
                    <ul>
                      <li className="nav-item">
                        <a className="nav-link" href="#projects" onClick={onNavClick}>
                          Projects
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#pricing" onClick={onNavClick}>
                          Pricing
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#faqs" onClick={onNavClick}>
                          FAQs
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="#contact" onClick={onNavClick}>
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              {/* ✅ Contact button visible (force colors) */}
              <div className="header-btn">
                <a
                  href="#contact"
                  className="btn-default btn-highlighted"
                  onClick={onNavClick}
                  style={{
                    background: "var(--brand)",
                    color: "#111",
                    border: "2px solid var(--brand)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  Contact Us <span style={{ display: "inline-grid", placeItems: "center" }}>→</span>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* ✅ small css fix for toggler icon (if bootstrap icon not showing) */}
      <style>{`
        .navbar-toggler-icon{
          width:44px;height:44px;border-radius:12px;
          background: rgba(255,255,255,.08);
          border: 1px solid rgba(255,255,255,.15);
          position: relative;
        }
        .navbar-toggler-icon:before,
        .navbar-toggler-icon:after{
          content:"";
          position:absolute;left:12px;right:12px;height:2px;
          background:#fff;border-radius:2px;
        }
        .navbar-toggler-icon:before{ top:16px; box-shadow: 0 8px 0 #fff; }
        .navbar-toggler-icon:after{ display:none; }
      `}</style>
    </header>
  );
}
