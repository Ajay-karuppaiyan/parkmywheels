import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Parker() {
  const steps = [
    { title: "Search", desc: "Browse through hundreds of prime parking spots in your city.", icon: "icon-service-1.svg" },
    { title: "Book", desc: "Select your preferred date and time and book your spot instantly.", icon: "icon-service-2.svg" },
    { title: "Park", desc: "Follow the navigation to your reserved spot and park with ease.", icon: "icon-service-3.svg" }
  ];

  const benefits = [
    "Reserved spots, no more circling the block",
    "Secure and monitored parking locations",
    "Transparent pricing with no hidden fees",
    "24/7 customer support for all your needs"
  ];

  return (
    <>
      <Header />
      <div className="page-header bg-section parallaxie">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-3" data-cursor="-opaque">For Parkers</h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page">parker</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="parker-intro py-5 mt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section-title">
                <h3 className="wow fadeInUp">Join as a Parker</h3>
                <h2 className="text-anime-style-3">Experience the ultimate parking convenience</h2>
                <p className="wow fadeInUp" data-wow-delay="0.25s">ParkMyWheels offers a seamless way to find and reserve parking spots before you even hit the road. Whether it's for daily commute or a special event, we've got you covered.</p>
                <ul className="list-unstyled mt-4">
                  {benefits.map((b, i) => (
                    <li key={i} className="mb-2"><i className="fa-solid fa-circle-check text-success me-2"></i>{b}</li>
                  ))}
                </ul>
                <div className="mt-4 wow fadeInUp" data-wow-delay="0.5s">
                  <a href="/contact" className="btn-default">Get Started Now</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <figure className="image-anime reveal rounded shadow"><img src="/images/fleets-slider-img-1.jpg" alt="" className="img-fluid" /></figure>
            </div>
          </div>
        </div>
      </div>

      <div className="how-it-works bg-light py-5">
        <div className="container py-5">
          <div className="row section-row text-center mb-5">
            <div className="col-lg-12">
              <div className="section-title">
                <h3 className="wow fadeInUp">Simple Process</h3>
                <h2 className="text-anime-style-3">How it works for Parkers</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {steps.map((step, idx) => (
              <div className="col-lg-4 mb-4" key={idx}>
                <div className="service-item p-4 bg-white shadow rounded text-center h-100">
                  <div className="icon-box mb-3"><img src={`/images/${step.icon}`} alt="" width="60" /></div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
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
