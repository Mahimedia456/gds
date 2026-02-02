export default function Header() {
  return (
    <header className="main-header" id="top">
      <div className="header-sticky">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="#home">
              {/* Put your logo in public/images/logo.svg later. For now use a temp */}
              <img
                src="https://dummyimage.com/160x42/000/fff&text=GDS+MECH"
                alt="Logo"
                style={{ height: 36 }}
              />
            </a>

            <div className="collapse navbar-collapse main-menu">
              <div className="nav-menu-wrapper">
                <ul className="navbar-nav mr-auto" id="menu">
                  <li className="nav-item">
                    <a className="nav-link" href="#home">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#services">Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#projects">Projects</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#faqs">FAQs</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                  </li>
                </ul>
              </div>

              <div className="header-btn">
                <a href="#contact" className="btn-default btn-highlighted">
                  Contact Us
                </a>
              </div>
            </div>

            <div className="navbar-toggle"></div>
          </div>
        </nav>

        <div className="responsive-menu"></div>
      </div>
    </header>
  );
}
