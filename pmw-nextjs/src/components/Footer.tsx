import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className="main-footer bg-section py-5">
        <div className="container">
          <div className="row">
            {/* 1st Section: Logo & Info */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="footer-logo mb-3">
                <img src="/images/parkmywheels%20-%20TM%20logo%20-%20light.png" alt="Logo" style={{ maxWidth: '160px' }} />
              </div>
              <p className="small text-white">Experience the convenience and ease of parking a vehicle with ParkMyWheels.</p>
              <div className="contact-details small mt-3">
                <p className="mb-1 text-white"><strong>Write us:</strong> <br /> parkmywheels3@gmail.com</p>
                <p className="mb-1 text-white"><strong>Call / WhatsApp:</strong> <br /> (+91) 97400 89052</p>
              </div>
              <ul className="footer-social-links mt-3 list-unstyled d-flex">
                <li className="me-3"><a href="#" className="text-white"><i className="fa-brands fa-facebook-f"></i></a></li>
                <li className="me-3"><a href="#" className="text-white"><i className="fa-brands fa-twitter"></i></a></li>
                <li className="me-3"><a href="#" className="text-white"><i className="fa-brands fa-instagram"></i></a></li>
                <li className="me-3"><a href="#" className="text-white"><i className="fa-brands fa-linkedin-in"></i></a></li>
              </ul>
            </div>

            {/* 2nd Section: Quick Links */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h3 className="h5 mb-4 text-white">Quick Links</h3>
              <ul className="list-unstyled small footer-links-list">
                <li className="mb-2"><Link href="/" className="text-white text-decoration-none">Home</Link></li>
                <li className="mb-2"><Link href="/about" className="text-white text-decoration-none">About Us</Link></li>
                <li className="mb-2"><Link href="/services" className="text-white text-decoration-none">Services</Link></li>
                <li className="mb-2"><Link href="/services" className="text-white text-decoration-none">Explore Parking</Link></li>
                <li className="mb-2"><Link href="#" className="text-white text-decoration-none">Login / Register</Link></li>
                <li className="mb-2"><Link href="/contact" className="text-white text-decoration-none">Contact Us</Link></li>
                <li className="mb-2"><Link href="/blogs" className="text-white text-decoration-none">Blogs & Posts</Link></li>
                <li className="mb-2"><Link href="/terms-and-conditions" className="text-white text-decoration-none">Terms & Conditions</Link></li>
                <li className="mb-2"><Link href="/privacy-policy" className="text-white text-decoration-none">Privacy Policy</Link></li>
              </ul>
              <div className="mt-3">
                <a href="#bookingform1" className="btn-default btn-no-arrow popup-with-form py-2 px-3 small">Book a Demo</a>
              </div>
            </div>

            {/* 3rd Section: Parking Solutions */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h3 className="h5 mb-4 text-white">Parking Solutions</h3>
              <ul className="list-unstyled small footer-links-list">
                <li className="mb-2"><Link href="/pay-and-park" className="text-white text-decoration-none">Pay & Park</Link></li>
                <li className="mb-2"><Link href="/subscription" className="text-white text-decoration-none">Parking Monthly Subscription</Link></li>
                <li className="mb-2"><Link href="/valet-parking" className="text-white text-decoration-none">Valet Parking</Link></li>
                <li className="mb-2"><Link href="/rent-park-and-earn" className="text-white text-decoration-none">Rent & Earn Home Parking</Link></li>
                <li className="mb-2"><Link href="/parking-business" className="text-white text-decoration-none">Parking Business</Link></li>
                <li className="mb-2"><Link href="/services" className="text-white text-decoration-none">Commercial Parking</Link></li>
                <li className="mb-2"><Link href="/services" className="text-white text-decoration-none">Corporate Parking</Link></li>
                <li className="mb-2"><Link href="/services" className="text-white text-decoration-none">NRI Parking</Link></li>
                <li className="mb-2"><Link href="/services" className="text-white text-decoration-none">VIP / Premium Parking</Link></li>
                <li className="mb-2"><Link href="/services" className="text-white text-decoration-none">Parking Management Resources</Link></li>
              </ul>
            </div>

            {/* 4th Section: Apps & Enquiry */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h3 className="h5 mb-4 text-white">Smart Apps for Smart Parking</h3>
              <div className="app-download-btns mb-4">
                <a href="#" className="btn-default btn-no-arrow d-flex align-items-center mb-2 py-2 px-3 small" style={{ background: '#000' }}>
                  <i className="fa-brands fa-google-play me-2"></i> Play Store
                </a>
                <a href="https://apps.apple.com/in/app/parkmywheels/id6745809692" target="_blank" className="btn-default btn-no-arrow d-flex align-items-center py-2 px-3 small" style={{ background: '#000' }}>
                  <img src="/images/apple.svg" alt="" width="20" className="me-2" style={{ filter: 'invert(1)' }} /> App Store
                </a>
              </div>

              <div className="footer-enquiry-form bg-dark p-3 rounded">
                <h4 className="h6 text-white mb-3 text-uppercase">Enquiry Form</h4>
                <form action="/api/booking" method="POST">
                  <input type="text" name="name" className="form-control form-control-sm mb-2" placeholder="Name" required />
                  <input type="text" name="phone" className="form-control form-control-sm mb-2" placeholder="Phone Number" required />
                  <textarea name="comments" className="form-control form-control-sm mb-2" placeholder="Comments" rows={2}></textarea>
                  <button type="submit" className="btn-default btn-no-arrow btn-sm w-100 py-2">Submit</button>
                </form>
              </div>
            </div>
          </div>

          <div className="footer-copyright mt-5 pt-3 border-top border-secondary">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-7">
                <div className="footer-copyright-text">
                  <p className="small mb-0">Copyright © 2024 ParkMyWheels. All rights reserved.</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-5">
                <div className="footer-copyright-text text-end">
                  <p className="small mb-0">Designed and Developed by <a style={{ color: '#fff' }} href="https://sensitive.co.in" target="_blank">Sensitive Technologies</a>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Booking Form Popup (Remains for 'Explore App' button) */}
      <div className="booking-form-box">
        <form id="bookingform1" method="post" action="/api/booking" className="white-popup-block mfp-hide booking-form">
          <div className="section-title text-center">
            <h2>Book your vehicle parking now!</h2>
            <b className="text-dark">Book Now, Pay Later @ Parking</b><hr />
            <p className="small">Fill out the form below to reserve your vehicle parking spot. Complete the necessary details to ensure a smooth parking experience.</p>
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
              <button type="submit" className="btn-default w-100">Confirm Booking</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
