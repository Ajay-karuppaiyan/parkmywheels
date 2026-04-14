import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Services() {
  const allServices = [
    { title: "Private Parking", desc: "Enhance your parking experience with additional options.", icon: "icon-service-5.svg" },
    { title: "InHouse Parking", desc: "Manage your private or residential parking effortlessly with our seamless in-app solutions.", icon: "icon-service-2.svg" },
    { title: "Corporate Solutions", desc: "Simplify employee and visitor parking with our tailored corporate parking management services.", icon: "icon-service-3.svg" },
    { title: "Commercial services", desc: "Optimize parking for malls, hotels, and public spaces with our efficient parking solutions.", icon: "icon-service-4.svg" },
    { title: "Premium Parking", desc: "Enhance your parking experience with premium features like wider space, fully covered parking, CCTV surveillance, etc.", icon: "icon-service-1.svg" },
    { title: "NRI Parking", desc: "Park your vehicle safe when you travel abroad for months with fully covered parking at a minimal parking fee.", icon: "icon-service-7.svg" },
    { title: "Blockspot Parking", desc: "block for a spot for more days on a monthly subscription and save more on parking charges.", icon: "icon-service-6.svg" },
    { title: "Advertise with Us", desc: "Enhance your brand with parkmywheels advertisement options.", icon: "icon-service-8.svg" }
  ];

  const testimonials = [
    { name: "Rahul Mehta,", role: "Software Engineer at TechNova Solutions", text: "“ParkMyWheels has made parking so easy! I no longer have to drive around searching for a spot. Just book, park, and go—super convenient!”", img: "author-1.jpg" },
    { name: "Priya Sharma,", role: "Marketing Manager at BrightEdge Marketing", text: "“I love how smooth the entire process is. Booking a spot in advance saves so much time, and the exit process is seamless. Highly recommended!”", img: "author-2.jpg" },
    { name: "Amit Khanna,", role: "Business Consultant at Crestline Advisors", text: "“I was initially skeptical, but ParkMyWheels has been a game changer. The locations are secure, and I never have to worry about finding parking again.”", img: "author-3.jpg" },
    { name: "Neha Reddy,", role: "HR Executive at Orion Tech Solutions", text: "“As someone who commutes daily, having a reserved spot is a lifesaver. The app is easy to use, and the service is top-notch.”", img: "author-4.jpg" },
    { name: "Sandeep Thakur,", role: "Admin Head at Visionary Enterprises", text: "“We implemented ParkMyWheels for our office parking, and it has solved so many issues. Employees can now book in advance, and it’s been a great experience!”", img: "author-4.jpg" }
  ];

  return (
    <>
      <Header />
      <div className="page-header bg-section parallaxie">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-3" data-cursor="-opaque">Our Services</h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page">services</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page Services Section */}
      <div className="page-services py-5">
        <div className="container">
          <div className="row">
            {allServices.map((service, idx) => (
              <div className="col-lg-3 col-md-6 mb-4" key={idx}>
                <div className="service-item wow fadeInUp shadow h-100" data-wow-delay={`${idx % 4 * 0.25}s`}>
                  <div className="icon-box"><img src={`/images/${service.icon}`} alt="" /></div>
                  <div className="service-content"><h3>{service.title}</h3><p>{service.desc}</p></div>
                  <div className="service-footer"><a href="/contact" className="section-icon-btn"><img src="/images/arrow-white.svg" alt="" /></a></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="our-testimonial py-5 bg-light">
        <div className="container text-center">
          <h3 className="wow fadeInUp">testimonials</h3>
          <h2 className="text-anime-style-3" data-cursor="-opaque">What our customers are saying about us</h2>
          <div className="testimonial-slider mt-5">
            <div className="swiper">
              <div className="swiper-wrapper">
                {testimonials.map((t, i) => (
                  <div className="swiper-slide" key={i}>
                    <div className="testimonial-item p-4 shadow bg-white rounded text-start">
                       <div className="testimonial-header mb-3">
                          <div className="testimonial-rating text-warning mb-2"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
                          <div className="testimonial-content"><p>{t.text}</p></div>
                       </div>
                       <div className="testimonial-body d-flex align-items-center">
                          <div className="author-image me-3"><figure className="image-anime"><img src={`/images/${t.img}`} alt="" className="rounded-circle" width="60" /></figure></div>
                          <div className="author-content"><h3>{t.name}</h3><p className="mb-0 text-muted">{t.role}</p></div>
                       </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="testimonial-btn mt-4"><div className="testimonial-button-prev"></div><div className="testimonial-button-next"></div></div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
