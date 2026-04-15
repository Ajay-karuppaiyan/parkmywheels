import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CorporateParking() {
  return (
    <>
      <Header />
      <div className="page-header bg-section parallaxie">
        <div className="container">
          <div className="row"><div className="col-lg-12"><div className="page-header-box"><h1 className="text-anime-style-3">Corporate Parking</h1></div></div></div>
        </div>
      </div>
      
      <div className="py-5 my-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="section-title">
                <h3 className="wow fadeInUp">For Enterprises</h3>
                <h2 className="text-anime-style-3">Tailored Solutions for Your Workplace</h2>
                <p className="wow fadeInUp">Simplify employee and visitor parking with our tailored corporate parking management services. Our platform helps manage parking allocations, VIP spots, and guest handling effortlessly.</p>
                <ul className="list-unstyled mt-4">
                  <li className="mb-3"><i className="fa-solid fa-check text-green me-2"></i> Employee parking subscription management</li>
                  <li className="mb-3"><i className="fa-solid fa-check text-green me-2"></i> Visitor invitation and pre-booking</li>
                  <li className="mb-3"><i className="fa-solid fa-check text-green me-2"></i> Space optimization for hybrid work models</li>
                  <li className="mb-3"><i className="fa-solid fa-check text-green me-2"></i> Integration with office access systems</li>
                </ul>
                <div className="mt-4"><a href="/contact" className="btn-default">Solutions for Business</a></div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <img src="/images/service-gallery-3.jpg" alt="Corporate Parking" className="img-fluid rounded shadow" />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}
