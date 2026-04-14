import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ValetParking() {
  return (
    <>
      <Header />
      <div className="page-header bg-section parallaxie">
        <div className="container">
          <div className="row"><div className="col-lg-12"><div className="page-header-box"><h1 className="text-anime-style-3">Valet Parking</h1></div></div></div>
        </div>
      </div>
      <div className="py-5 my-5"><div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="section-title">
              <h3 className="wow fadeInUp">Luxury Experience</h3>
              <h2 className="text-anime-style-3">We'll Park it for You</h2>
              <p className="wow fadeInUp">Arrive at your destination and leave the rest to our professional valet team. Safe, efficient, and classy.</p>
              <ul className="list-unstyled mt-3">
                <li><i className="fa-solid fa-check text-green me-2"></i> Uniformed professional drivers</li>
                <li><i className="fa-solid fa-check text-green me-2"></i> Licensed and insured service</li>
                <li><i className="fa-solid fa-check text-green me-2"></i> On-demand vehicle retrieval</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6"><img src="/images/service-gallery-3.jpg" alt="" className="img-fluid rounded shadow" /></div>
        </div>
      </div></div>
      <Footer />
    </>
  );
}
