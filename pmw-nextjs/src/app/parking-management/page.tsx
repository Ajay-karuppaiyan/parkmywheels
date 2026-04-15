import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ParkingManagement() {
  return (
    <>
      <Header />
      <div className="page-header bg-section parallaxie">
        <div className="container">
          <div className="row"><div className="col-lg-12"><div className="page-header-box"><h1 className="text-anime-style-3">Parking Management Resources</h1></div></div></div>
        </div>
      </div>
      
      <div className="py-5 my-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section-title">
                <h3 className="wow fadeInUp">Smart Infrastructure</h3>
                <h2 className="text-anime-style-3">Tools for Modern Parking Management</h2>
                <p className="wow fadeInUp">Access professional resources and tech tools to transform your parking facility. We provide hardware, software, and consultancy services to automate and optimize any parking space.</p>
                <ul className="list-unstyled mt-4">
                  <li className="mb-3"><i className="fa-solid fa-check text-green me-2"></i> ANPR and smart barrier systems</li>
                  <li className="mb-3"><i className="fa-solid fa-check text-green me-2"></i> IoT-based occupancy sensors</li>
                  <li className="mb-3"><i className="fa-solid fa-check text-green me-2"></i> Cloud-based management dashboard</li>
                  <li className="mb-3"><i className="fa-solid fa-check text-green me-2"></i> Workforce training and operational support</li>
                </ul>
                <div className="mt-4"><a href="/contact" className="btn-default">Expert Consultation</a></div>
              </div>
            </div>
            <div className="col-lg-6">
              <img src="/images/video-counter-img-2.jpg" alt="Parking Management" className="img-fluid rounded shadow" />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}
