import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Vendor() {
  const features = [
    { title: "Manage Listings", desc: "Easily update availability and pricing for your spots.", icon: "icon-service-4.svg" },
    { title: "Real-time Tracking", desc: "Monitor bookings and occupancy in real-time.", icon: "icon-service-5.svg" },
    { title: "Smart Payments", desc: "Receive automated and transparent payouts weekly.", icon: "icon-service-6.svg" }
  ];

  return (
    <>
      <Header />
      <div className="page-header bg-section parallaxie">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-3" data-cursor="-opaque">For Vendors</h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page">vendor</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="vendor-intro py-5 mt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="section-title">
                <h3 className="wow fadeInUp">Join as a Vendor</h3>
                <h2 className="text-anime-style-3">Monetize your empty parking spaces</h2>
                <p className="wow fadeInUp" data-wow-delay="0.25s">Turn your residential or commercial parking garage into a revenue-generating asset with ParkMyWheels. We provide the tools you need to manage parkers effortlessly.</p>
                <div className="vendor-benefits mt-4">
                  <div className="d-flex mb-3 wow fadeInUp" data-wow-delay="0.4s">
                    <div className="icon-box me-3"><i className="fa-solid fa-chart-line fa-2x text-primary"></i></div>
                    <div><h4>Maximize Revenue</h4><p>Optimization tools to help you set the best prices.</p></div>
                  </div>
                  <div className="d-flex mb-3 wow fadeInUp" data-wow-delay="0.6s">
                    <div className="icon-box me-3"><i className="fa-solid fa-shield-halved fa-2x text-primary"></i></div>
                    <div><h4>Secure Management</h4><p>Verified parkers and secure access controls.</p></div>
                  </div>
                </div>
                <div className="mt-4 wow fadeInUp" data-wow-delay="0.8s">
                  <a href="/contact" className="btn-default">Register as Vendor</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1 mt-4 mt-lg-0">
               <figure className="image-anime reveal rounded shadow"><img src="/images/about-img-2.jpg" alt="" className="img-fluid" /></figure>
            </div>
          </div>
        </div>
      </div>

      <div className="vendor-features py-5">
        <div className="container py-5">
          <div className="row section-row text-center mb-5">
            <div className="col-lg-12">
              <div className="section-title">
                <h3 className="wow fadeInUp">Vendor Tools</h3>
                <h2 className="text-anime-style-3">Everything you need to succeed</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {features.map((feature, idx) => (
              <div className="col-lg-4 mb-4" key={idx}>
                <div className="service-item p-4 shadow rounded text-center h-100">
                  <div className="icon-box mb-3"><img src={`/images/${feature.icon}`} alt="" width="60" /></div>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}
