import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function VIPParking() {
  return (
    <>
      <Header />
      <div className="page-header bg-section parallaxie">
        <div className="container">
          <div className="row"><div className="col-lg-12"><div className="page-header-box"><h1 className="text-anime-style-3">VIP & Premium Parking</h1></div></div></div>
        </div>
      </div>
      
      <div className="py-5 my-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="section-title">
                <h3 className="wow fadeInUp">Exclusive Experience</h3>
                <h2 className="text-anime-style-3">The Gold Standard of Parking</h2>
                <p className="wow fadeInUp">Experience priority parking at its best. Our VIP and Premium parking spots are located in prime locations with extra-wide spaces, dedicated attendants, and top-tier security for luxury vehicles.</p>
                <ul className="list-unstyled mt-4">
                  <li className="mb-3"><i className="fa-solid fa-check text-green me-2"></i> Prime locations near main entrances</li>
                  <li className="mb-3"><i className="fa-solid fa-check text-green me-2"></i> Extra-wide bays for luxury and sports cars</li>
                  <li className="mb-3"><i className="fa-solid fa-check text-green me-2"></i> Valet-assisted parking and car wash services</li>
                  <li className="mb-3"><i className="fa-solid fa-check text-green me-2"></i> Exclusive access to premium amenities</li>
                </ul>
                <div className="mt-4"><a href="/contact" className="btn-default">Reserve Premium Spot</a></div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <img src="/images/luxury-collection-img-1.jpg" alt="VIP Parking" className="img-fluid rounded shadow" />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}
