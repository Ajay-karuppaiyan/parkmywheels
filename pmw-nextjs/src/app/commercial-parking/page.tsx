import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CommercialParking() {
  return (
    <>
      <Header />
      <div className="page-header bg-section parallaxie">
        <div className="container">
          <div className="row"><div className="col-lg-12"><div className="page-header-box"><h1 className="text-anime-style-3">Commercial Parking</h1></div></div></div>
        </div>
      </div>
      
      <div className="py-5 my-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section-title">
                <h3 className="wow fadeInUp">For Business Owners</h3>
                <h2 className="text-anime-style-3">Maximize Your Commercial Space</h2>
                <p className="wow fadeInUp">Optimize parking for malls, hotels, hospitals, and public spaces with our efficient parking management solutions. Increase revenue and improve customer satisfaction with seamless entry/exit and digital payments.</p>
                <ul className="list-unstyled mt-4">
                  <li className="mb-3"><i className="fa-solid fa-check text-green me-2"></i> Real-time analytics and reporting</li>
                  <li className="mb-3"><i className="fa-solid fa-check text-green me-2"></i> Automated billing and digital payments</li>
                  <li className="mb-3"><i className="fa-solid fa-check text-green me-2"></i> Enhanced security with vehicle tracking</li>
                  <li className="mb-3"><i className="fa-solid fa-check text-green me-2"></i> Custom branding and loyalty programs</li>
                </ul>
                <div className="mt-4"><a href="/contact" className="btn-default">Get a Proposal</a></div>
              </div>
            </div>
            <div className="col-lg-6">
              <img src="/images/service-gallery-2.jpg" alt="Commercial Parking" className="img-fluid rounded shadow" />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}
