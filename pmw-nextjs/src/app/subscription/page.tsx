import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Subscription() {
  return (
    <>
      <Header />
      <div className="page-header bg-section parallaxie">
        <div className="container">
          <div className="row"><div className="col-lg-12"><div className="page-header-box"><h1 className="text-anime-style-3">Monthly Subscription</h1></div></div></div>
        </div>
      </div>
      <div className="py-5 my-5"><div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-2">
            <div className="section-title">
              <h3 className="wow fadeInUp">Save More</h3>
              <h2 className="text-anime-style-3">Unlock Premium Benefits</h2>
              <p className="wow fadeInUp">Ideal for commuters and regular travelers. Get a guaranteed parking spot every day at a fraction of the cost.</p>
              <ul className="list-unstyled mt-3">
                <li><i className="fa-solid fa-check text-green me-2"></i> Fixed monthly rates</li>
                <li><i className="fa-solid fa-check text-green me-2"></i> Priority support</li>
                <li><i className="fa-solid fa-check text-green me-2"></i> Multi-location access</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 order-lg-1"><img src="/images/service-gallery-2.jpg" alt="" className="img-fluid rounded shadow" /></div>
        </div>
      </div></div>
      <Footer />
    </>
  );
}
