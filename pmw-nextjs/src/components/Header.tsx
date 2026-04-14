import Link from 'next/link';

export default function Header() {
  return (
    <header className="main-header">
      <div className="header-sticky">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            {/* Logo Start */}
            <Link className="navbar-brand" href="/">
              <img src="/images/parkmywheels%20-%20TM%20logo.png" alt="Logo" style={{ maxWidth: '120px' }} />
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
                  <li className="nav-item submenu">
                    <Link className="nav-link" href="#">Parking Services</Link>
                    <ul>
                      <li className="nav-item"><Link className="nav-link" href="/pay-and-park">Pay & Park</Link></li>
                      <li className="nav-item"><Link className="nav-link" href="/subscription">Monthly Subscription</Link></li>
                      <li className="nav-item"><Link className="nav-link" href="/valet-parking">Valet Parking</Link></li>
                      <li className="nav-item"><Link className="nav-link" href="/services">All Services</Link></li>
                    </ul> 
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/rent-park-and-earn">Rent Park & Earn</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/parking-business">Parking Business</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/blogs">Posts & Blogs</Link>
                  </li>
                </ul>
              </div>
              {/* Explore App Button */}
              <div className="header-btn d-inline-flex">
                <a href="#bookingform1" className="btn-default popup-with-form">Explore App</a>
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
