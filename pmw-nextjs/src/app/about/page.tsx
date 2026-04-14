import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  const visionMissionData = [
    {
      id: "vision",
      title: "our vision",
      heading: "Pioneering excellence in vehicle parking services",
      text: "We aim to continually innovate and integrate the latest technology into our services. From easy online bookings to advanced parking management systems, our goal is to make the vehicle parking process seamless and efficient for our customers. Quality is at the heart of everything we do.",
      list: ["Our customers are our top priority", "Quality is at the heart of everything we do", "every vehicle leaves care looking its absolute best"],
      img: "our-vision-img.jpg"
    },
    {
      id: "mission",
      title: "our mission",
      heading: "Pioneering excellence in vehicle parking services",
      text: "We aim to continually innovate and integrate the latest technology into our services. From easy online bookings to advanced parking management solutions, our goal is to make the vehicle parking process seamless and efficient for our customers.",
      list: ["Our customers are our top priority", "Quality is at the heart of everything we do", "every vehicle leaves care looking its absolute best"],
      img: "our-mission-img.jpg"
    },
    {
      id: "approach",
      title: "our approach",
      heading: "Pioneering excellence in vehicle parking services",
      text: "We aim to continually innovate and integrate the latest technology into our services. From easy online bookings to advanced vehicle tracking systems, our goal is to make the vehicle parking process seamless and efficient for our customers.",
      list: ["Our customers are our top priority", "Quality is at the heart of everything we do", "every vehicle leaves care looking its absolute best"],
      img: "our-approach-img.jpg"
    }
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
                <h1 className="text-anime-style-3" data-cursor="-opaque">About Us</h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page">about us</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page About Us Section */}
      <div className="about-us page-about-us py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-image">
                <div className="about-img-1"><figure className="reveal"><img src="/images/about-img-1.jpg" alt="" /></figure></div>
                <div className="about-img-2"><figure className="reveal"><img src="/images/about-img-2.jpg" alt="" /></figure></div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title">
                  <img src="/images/logo.svg" alt="" /><br /><br />
                  <h2 className="text-anime-style-3" data-cursor="-opaque">Your trusted partner in reliable Parking Solutions</h2>
                  <h3 className="wow fadeInUp">about us</h3>
                  <p className="wow fadeInUp" data-wow-delay="0.25s">ParkMyWheels revolutionizes the way you park by offering a seamless pre-booking system. Avoid parking hassles, fines, and wasted time by reserving your spot in advance.</p>
                </div>
                <div className="about-content-body">
                  <div className="about-trusted-booking wow fadeInUp" data-wow-delay="0.5s">
                    <div className="icon-box"><img src="/images/icon-about-trusted-1.svg" alt="" /></div>
                    <div className="trusted-booking-content"><h3>easy booking process</h3><p>We Have Optimized The Booking Process So That Our Clients Can Experience The Easiest And The Safest Service</p></div>
                  </div>
                  <div className="about-trusted-booking wow fadeInUp" data-wow-delay="0.75s">
                    <div className="icon-box"><img src="/images/icon-about-trusted-2.svg" alt="" /></div>
                    <div className="trusted-booking-content"><h3>convenient parking entry & exit process</h3><p>Skip the hassle—our smart system ensures smooth entry and exit with minimal wait time.</p></div>
                  </div>
                </div>
                <div className="about-content-footer wow fadeInUp mt-4"><a href="/contact" className="btn-default">contact us</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Mission Section */}
      <div className="vision-mission py-5 bg-light">
        <div className="container">
          <div className="row section-row text-center mb-5">
            <div className="col-lg-12">
              <div className="section-title">
                <h3 className="wow fadeInUp">vision mission</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">Driving excellence and innovation</h2>
              </div>
            </div>
          </div>
          <div className="our-projects-nav mb-4">
             <ul className="nav nav-tabs justify-content-center" role="tablist">
                <li className="nav-item"><button className="nav-link active" data-bs-toggle="tab" data-bs-target="#vision">our vision</button></li>
                <li className="nav-item"><button className="nav-link" data-bs-toggle="tab" data-bs-target="#mission">our mission</button></li>
                <li className="nav-item"><button className="nav-link" data-bs-toggle="tab" data-bs-target="#approach">our approach</button></li>
             </ul>
          </div>
          <div className="vision-mission-box tab-content">
             {visionMissionData.map((item, idx) => (
               <div className={`tab-pane fade ${idx===0?'show active':''}`} id={item.id} key={idx} role="tabpanel">
                 <div className="row align-items-center">
                   <div className="col-lg-6">
                     <div className="section-title">
                        <h3 className="wow fadeInUp">{item.title}</h3>
                        <h2 className="text-anime-style-3">{item.heading}</h2>
                        <p>{item.text}</p>
                        <div className="vision-mission-list mt-3"><ul>{item.list.map((li, lidx) => <li key={lidx}>{li}</li>)}</ul></div>
                     </div>
                   </div>
                   <div className="col-lg-6"><figure className="image-anime reveal rounded shadow"><img src={`/images/${item.img}`} alt="" className="img-fluid" /></figure></div>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </div>

      {/* Our Video Section */}
      <div className="our-video bg-section py-5 my-5 shadow">
        <div className="container">
          <div className="row section-row text-center mb-5">
            <div className="col-lg-12">
              <div className="section-title">
                <h3 className="wow fadeInUp">watch our video</h3>
                <h2 className="text-anime-style-3">What sets us apart</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
             <div className="col-lg-4 col-md-5">
                <div className="customer-counter-item p-4 text-center bg-white shadow rounded mb-4 mb-lg-0">
                   <div className="customer-counter-image mb-3"><img src="/images/video-counter-img-1.jpg" alt="" className="rounded img-fluid" /></div>
                   <div className="satisfied-customer-counter"><h3><span className="counter">3100</span>+</h3><p>satisfied customer</p></div>
                   <div className="satisfied-customer-image mt-3"><img src="/images/satisfied-customer-img.png" alt="" className="img-fluid" /></div>
                </div>
             </div>
             <div className="col-lg-8 col-md-7">
                <div className="video-image-box position-relative">
                   <figure className="image-anime reveal"><img src="/images/video-counter-img-2.jpg" alt="" className="img-fluid rounded shadow" /></figure>
                   <div className="video-image-play-button position-absolute top-50 start-50 translate-middle">
                      <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video btn-default" style={{ padding: '25px' }}><i className="fa-solid fa-play fa-xl"></i></a>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="why-choose-us py-5">
        <div className="container">
          <div className="row section-row text-center mb-5">
            <div className="col-lg-12">
              <div className="section-title"><h3 className="wow fadeInUp">why choose us</h3><h2 className="text-anime-style-3">Unmatched quality and service</h2></div>
            </div>
          </div>
          <div className="row align-items-center">
             <div className="col-lg-4 col-md-6 order-lg-1 order-md-1 order-1 text-lg-end text-start">
                <div className="why-choose-item wow fadeInUp mb-4">
                  <div className="icon-box ms-lg-auto ms-0 mb-3"><img src="/images/icon-why-choose-1.svg" alt="" /></div>
                  <div className="why-choose-content"><h3>extensive parking options</h3><p>From private lots to commercial hubs, we offer a wide range of choices.</p></div>
                </div>
                <div className="why-choose-item wow fadeInUp" data-wow-delay="0.25s">
                  <div className="icon-box ms-lg-auto ms-0 mb-3"><img src="/images/icon-why-choose-2.svg" alt="" /></div>
                  <div className="why-choose-content"><h3>exceptional customer service</h3><p>Friendly support team always ready to assist you.</p></div>
                </div>
             </div>
             <div className="col-lg-4 col-md-12 text-center order-lg-2 order-md-3 order-2"><div className="why-choose-image mb-4 mb-lg-0"><figure className="reveal"><img src="/images/why-choose-img.jpg" alt="" className="img-fluid rounded shadow" /></figure></div></div>
             <div className="col-lg-4 col-md-6 order-lg-3 order-md-2 order-3 text-start">
                <div className="why-choose-item wow fadeInUp">
                  <div className="icon-box mb-3"><img src="/images/icon-why-choose-3.svg" alt="" /></div>
                  <div className="why-choose-content"><h3>convenient locations</h3><p>Find parking in prime locations, making your trips more efficient.</p></div>
                </div>
                <div className="why-choose-item wow fadeInUp mt-4" data-wow-delay="0.25s">
                  <div className="icon-box mb-3"><img src="/images/icon-why-choose-4.svg" alt="" /></div>
                  <div className="why-choose-content"><h3>reliability and safety</h3><p>Secure and well-maintained spots ensure peace of mind.</p></div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="our-testimonial py-5">
        <div className="container">
          <div className="row section-row text-center mb-5"><div className="col-lg-12"><div className="section-title"><h3 className="wow fadeInUp">testimonials</h3><h2 className="text-anime-style-3">What our customers are saying about us</h2></div></div></div>
          <div className="testimonial-slider">
            <div className="swiper">
              <div className="swiper-wrapper">
                {testimonials.map((t, i) => (
                  <div className="swiper-slide" key={i}>
                    <div className="testimonial-item p-4 shadow bg-white rounded text-start h-100 d-flex flex-column">
                       <div className="testimonial-header mb-4">
                          <div className="testimonial-rating text-warning mb-2"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
                          <div className="testimonial-content"><p>{t.text}</p></div>
                       </div>
                       <div className="testimonial-body d-flex align-items-center mt-auto">
                          <div className="author-image me-3"><figure className="image-anime rounded-circle overflow-hidden shadow-sm" style={{ width:'60px', height:'60px' }}><img src={`/images/${t.img}`} alt="" className="img-fluid" /></figure></div>
                          <div className="author-content"><h3>{t.name}</h3><p className="mb-0 text-muted small">{t.role}</p></div>
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
