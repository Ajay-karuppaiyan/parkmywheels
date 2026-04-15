import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NRIParking() {
  return (
    <>
      <Header />
      <div className="page-header bg-section parallaxie">
        <div className="container">
          <div className="row"><div className="col-lg-12"><div className="page-header-box"><h1 className="text-anime-style-3">NRI Parking Solutions</h1></div></div></div>
        </div>
      </div>
      
      <div className="py-5 my-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section-title">
                <h3 className="wow fadeInUp">Secure Vehicle Storage</h3>
                <h2 className="text-anime-style-3">Peace of Mind While You're Away</h2>
                <p className="wow fadeInUp">Leave your vehicle in safe hands while you're abroad. Our NRI Parking solutions provide long-term, secure, and maintained parking spaces for your cars and bikes, ensuring they are ready for you when you return.</p>
                <ul className="list-unstyled mt-4">
                  <li className="mb-3"><i className="fa-solid fa-check text-green me-2"></i> Dedicated 24/7 security and CCTV surveillance</li>
                  <li className="mb-3"><i className="fa-solid fa-check text-green me-2"></i> Regular battery charging and tire pressure checks</li>
                  <li className="mb-3"><i className="fa-solid fa-check text-green me-2"></i> Periodic vehicle cleaning and detailing</li>
                  <li className="mb-3"><i className="fa-solid fa-check text-green me-2"></i> Indoor and covered parking options</li>
                </ul>
                <div className="mt-4"><a href="/contact" className="btn-default">Inquire Long-term Parking</a></div>
              </div>
            </div>
            <div className="col-lg-6">
              <img src="/images/service-gallery-4.jpg" alt="NRI Parking" className="img-fluid rounded shadow" />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}
