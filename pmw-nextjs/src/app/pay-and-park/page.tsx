import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PayAndPark() {
  return (
    <>
      <Header />
      <div className="page-header bg-section parallaxie">
        <div className="container">
          <div className="row"><div className="col-lg-12"><div className="page-header-box"><h1 className="text-anime-style-3">Pay & Park</h1></div></div></div>
        </div>
      </div>
      <div className="py-5 my-5"><div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="section-title">
              <h3 className="wow fadeInUp">Easy Parking</h3>
              <h2 className="text-anime-style-3">Quick, Secure, and Hassle-free</h2>
              <p className="wow fadeInUp">Locate any available spot in our partner network and pay instantly via the app. No more digging for change or waiting at kiosks.</p>
              <ul className="list-unstyled mt-3">
                <li><i className="fa-solid fa-check text-green me-2"></i> Real-time occupancy tracking</li>
                <li><i className="fa-solid fa-check text-green me-2"></i> Secure digital payments</li>
                <li><i className="fa-solid fa-check text-green me-2"></i> Instant receipt generation</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6"><img src="/images/service-gallery-1.jpg" alt="" className="img-fluid rounded shadow" /></div>
        </div>
      </div></div>
      <Footer />
    </>
  );
}
