import Link from 'next/link';

export default function Header() {
  return (
    <header className="main-header">
      <div className="header-sticky">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            {/* Logo Start */}
            <Link className="navbar-brand" href="/">
              <img src="/images/logo.svg" alt="Logo" style={{ width: '50%' }} />
            </Link>
            {/* Logo End */}

            {/* Main Menu Start */}
            <div className="collapse navbar-collapse main-menu">
              <div className="nav-menu-wrapper">
                <ul className="navbar-nav mr-auto" id="menu">
                  <li className="nav-item">
                    <Link className="nav-link" href="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/about">About Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/services">Services</Link>
                  </li>
                  <li className="nav-item submenu">
                    <Link className="nav-link" href="#">Contact Us</Link>
                    <ul>
                      <li className="nav-item">
                        <Link className="nav-link" href="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/* Enquire Now Button */}
              <div className="header-btn d-inline-flex">
                <a href="#bookingform1" className="btn-default popup-with-form">Enquire Now</a>
              </div>
            </div>
            {/* Main Menu End */}
            <div className="navbar-toggle"></div>
          </div>
        </nav>
        <div className="responsive-menu"></div>
      </div>
    </header>
  );
}
