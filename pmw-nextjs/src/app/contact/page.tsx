import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <>
      <Header />
      <div className="page-header bg-section parallaxie">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-3" data-cursor="-opaque">Contact Us</h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page">contact us</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="page-contact-us">
        <div className="contact-info-form">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-information">
                  <div className="section-title">
                    <h2 className="text-anime-style-3" data-cursor="-opaque">Contact information</h2>
                    <p>How Can we assist you today!</p>
                  </div>
                  <div className="contact-info-list">
                    <div className="contact-info-item wow fadeInUp">
                      <div className="icon-box"><img src="/images/icon-phone.svg" alt="" /></div>
                      <div className="contact-info-content"><p>(+91) 97400 89052</p></div>
                    </div>
                    <div className="contact-info-item wow fadeInUp" data-wow-delay="0.25s">
                      <div className="icon-box"><img src="/images/icon-mail.svg" alt="" /></div>
                      <div className="contact-info-content"><p>parkmywheels3@gmail.com</p></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="contact-us-form">
                  <form id="contactForm" action="/api/booking" method="POST" className="wow fadeInUp">
                    <h1>Check Parking Availability</h1><hr />
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
                      <div className="col-md-12 booking-form-group">
                        <button type="submit" className="btn-default">Submit Details</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
