import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className="main-footer bg-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="about-footer">
                <div className="footer-logo"><img src="/images/parkmywheels%20-%20TM%20logo%20-%20light.png" alt="" style={{ maxWidth: '160px' }} /></div>
                <div className="about-footer-content">
                  <p>Experience the convenience and ease of parking a vehicle with ParkMyWheels.</p>
                  <ul className="footer-social-links mt-3 list-unstyled d-flex">
                    <li className="me-3"><a href="#" className="text-white"><i className="fa-brands fa-facebook-f"></i></a></li>
                    <li className="me-3"><a href="#" className="text-white"><i className="fa-brands fa-twitter"></i></a></li>
                    <li className="me-3"><a href="#" className="text-white"><i className="fa-brands fa-instagram"></i></a></li>
                    <li className="me-3"><a href="#" className="text-white"><i className="fa-brands fa-linkedin-in"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="footer-links footer-quick-links">
                <h3>legal policy</h3>
                <ul>
                  <li><a href="#bookingform1" className="popup-with-form">Enquire Now</a></li>
                  <li><Link href="/terms-and-conditions">term & condition</Link></li>
                  <li><Link href="/privacy-policy">privacy policy</Link></li>
                  <li><Link href="/contact">Enquire Now</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="footer-links footer-menu">
                <h3>quick links</h3>
                <ul>
                  <li><Link href="/">home</Link></li>
                  <li><Link href="/about">about us</Link></li>
                  <li><Link href="/services">services</Link></li>
                  <li><Link href="/rent-park-and-earn">rent park & earn</Link></li>
                  <li><Link href="/parking-business">parking business</Link></li>
                  <li><Link href="/blogs">posts & blogs</Link></li>
                  <li><Link href="/contact">contact us</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 footer-copyright">
              <div className="footer-newsletter">
                <h3>Subscribe to the Newsletters</h3>
                <div className="footer-newsletter-form">
                  <form id="newslettersForm" action="#" method="POST">
                    <div className="form-group">
                      <input type="email" name="email" className="form-control" placeholder="Email ..." required />
                      <button type="submit" className="section-icon-btn"><img src="/images/arrow-white.svg" alt="" /></button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-copyright">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-7">
                <div className="footer-copyright-text">
                  <p>Copyright © 2024 ParkMyWheels. All rights reserved.</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-5">
                <div className="footer-copyright-text">
                  <p style={{ textAlign: 'right' }}>Designed and Developed by <a style={{ color: '#fff' }} href="https://sensitive.co.in" target="_blank">Sensitive Technologies</a>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Booking Form Popup */}
      <div className="booking-form-box">
        <form id="bookingform1" method="post" action="/api/booking" className="white-popup-block mfp-hide booking-form">
          <div className="section-title">
            <h2>Book your vehicle parking now!</h2>
            <b className="text-dark">Book Now, Pay Later @ Parking</b><hr />
            <p>Fill out the form below to reserve your vehicle parking spot. Complete the necessary details to ensure a smooth parking experience.</p>
          </div>
          <div className="row">
            <div className="booking-form-group col-md-6 mb-4">
              <input type="text" name="location" placeholder="Parking location" className="booking-form-control" required />
            </div>
            <div className="booking-form-group col-md-6 mb-4">
              <input type="text" name="fromdate" placeholder="Parking Date" className="booking-form-control datepicker" required />
            </div>
            <div className="booking-form-group col-md-6 mb-4">
              <input type="text" name="name" className="booking-form-control" placeholder="Full Name" required />
            </div>
            <div className="booking-form-group col-md-6 mb-4">
              <input type="email" name="email" className="booking-form-control" placeholder="Enter Your Email" required />
            </div>
            <div className="booking-form-group col-md-6 mb-4">
              <input type="text" name="phone" className="booking-form-control" placeholder="Enter Your Number" required />
            </div>
            <div className="booking-form-group col-md-6 mb-4">
              <select name="vehicletype" className="booking-form-control form-select" required defaultValue="">
                <option value="" disabled>Choose Vehicle Type</option>
                <option value="car">Car</option>
                <option value="bike">Bike</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div className="col-md-12">
              <button type="submit" className="btn-default">Confirm</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
