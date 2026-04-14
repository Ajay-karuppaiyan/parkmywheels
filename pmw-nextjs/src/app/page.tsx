import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  const services = [
    { title: "Private Parking", desc: "Enhance your parking experience with additional options.", icon: "icon-service-1.svg", delay: "0s" },
    { title: "InHouse Parking", desc: "Manage your private or residential parking effortlessly with our seamless in-app solutions.", icon: "icon-service-2.svg", delay: "0.25s" },
    { title: "Corporate Solutions", desc: "Simplify employee and visitor parking with our tailored corporate parking management services.", icon: "icon-service-3.svg", delay: "0.5s" },
    { title: "Commercial services", desc: "Optimize parking for malls, hotels, and public spaces with our efficient parking solutions.", icon: "icon-service-4.svg", delay: "0.75s" }
  ];

  const faqs = [
    { q: "Can I schedule a car parking?", a: "Yes! You can pre-book your parking spot in advance for a hassle-free experience." },
    { q: "Is there a cancel and reschedule option for scheduled booking?", a: "Yes, you can cancel or reschedule your booking through the app, subject to availability and cancellation policies." },
    { q: "Can i subscribe for monthly parking?", a: "Absolutely! We offer convenient monthly subscription plans for regular parking needs." },
    { q: "How do I make a parking reservation?", a: "Simply use our app to browse locations, select a spot, and confirm your booking in just a few taps." },
    { q: "Do I need to create an account to book a parking spot?", a: "Yes, creating an account allows you to manage bookings, track reservations, and access exclusive offers." },
    { q: "Is my parking spot guaranteed once I book?", a: "Yes! Once booked, your parking spot is reserved and ready for you upon arrival." },
    { q: "What payment methods are accepted?", a: "We accept various payment options, including credit/debit cards, UPI, and digital wallets for a seamless experience." },
    { q: "Can I extend my parking duration?", a: "Yes, you can extend your parking time through the app, subject to availability and additional charges." },
    { q: "Is there customer support if I face any issues?", a: "Absolutely! Our support team is available to assist you with any queries or concerns." },

  ];

   const rentalFaqs = [
    { id: 1, q: "Service Scope", a: "ParkMyWheels is a technology platform that facilitates parking space reservations by connecting users with parking providers. We do not own, operate, or manage any parking locations." },
    { id: 2, q: "Liability Disclaimer", points: [
      "The condition, safety, or security of the parking locations listed on our platform.",
      "Any damage, theft, loss, or personal injury occurring at the parking location.",
      "Any disputes or issues arising between users and parking space providers."
    ], a: "By using our platform, you acknowledge that ParkMyWheels is not responsible for:" },
    { id: 3, q: "Booking and Payments", points: [
      "All bookings must be made through the ParkMyWheels platform.",
      "Payments are processed securely through our app, and users are responsible for any applicable charges.",
      "Cancellations and refunds are subject to the specific policies of the parking provider."
    ] },
    { id: 4, q: "User Responsibilities", points: [
      "Users must adhere to the parking provider’s rules and regulations.",
      "Vehicles must be parked legally and within designated areas.",
      "ParkMyWheels is not liable for any fines, penalties, or towing charges incurred by the user."
    ] },
    { id: 5, q: "Changes and Cancellations", points: [
      "Users may modify or cancel bookings as per the provider’s cancellation policy.",
      "ParkMyWheels reserves the right to modify or cancel bookings in cases of technical issues or unforeseen circumstances."
    ] },
    { id: 6, q: "Platform Use", points: [
      "Users agree to use the platform responsibly and not engage in fraudulent activities.",
      "Misuse of the platform may result in account suspension or termination."
    ] },
    { id: 7, q: "Dispute Resolution", a: "Any disputes related to parking services must be resolved directly between the user and the parking provider. ParkMyWheels may assist in communication but is not responsible for resolutions." },
    { id: 8, q: "Policy Updates", a: "ParkMyWheels reserves the right to update these policies at any time. Continued use of the platform constitutes acceptance of any changes. By using ParkMyWheels, you agree to these terms and acknowledge that we are solely a facilitator, not the provider of parking services." }
  ];

  const testimonials = [
    { name: "Rahul Mehta,", role: "Software Engineer at TechNova Solutions", text: "“ParkMyWheels has made parking so easy! I no longer have to drive around searching for a spot. Just book, park, and go—super convenient!”", img: "author-1.jpg" },
    { name: "Priya Sharma,", role: "Marketing Manager at BrightEdge Marketing", text: "“I love how smooth the entire process is. Booking a spot in advance saves so much time, and the exit process is seamless. Highly recommended!”", img: "author-2.jpg" },
    { name: "Amit Khanna,", role: "Business Consultant at Crestline Advisors", text: "“I was initially skeptical, but ParkMyWheels has been a game changer. The locations are secure, and I never have to worry about finding parking again.”", img: "author-3.jpg" },
    { name: "Neha Reddy,", role: "HR Executive at Orion Tech Solutions", text: "“As someone who commutes daily, having a reserved spot is a lifesaver. The app is easy to use, and the service is top-notch.”", img: "author-4.jpg" },
    { name: "Sandeep Thakur,", role: "Admin Head at Visionary Enterprises", text: "“We implemented ParkMyWheels for our office parking, and it has solved so many issues. Employees can now book in advance, and it’s been a great experience!”", img: "author-4.jpg" }
  ];

  const clientLogos = ["client-logo-1.svg", "client-logo-2.svg", "client-logo-3.svg", "client-logo-4.svg", "client-logo-5.svg", "client-logo-6.svg"];

  return (
    <>
      <Header />
      
      {/* Hero Slider Section Start */}
      <div className="hero hero-slider">
        <div className="hero-section bg-section hero-slider-layout">
          <div className="swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="hero-slide">
                  <div className="hero-slider-image"><img src="/images/hero-bg.jpg" alt="" /></div>
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-lg-12">
                        <div className="hero-content">
                          <div className="section-title">
                            <h3 className="wow fadeInUp">welcome to ParkMyWheels</h3>
                            <h1 className="text-anime-style-3" data-cursor="-opaque">Need to park your vehicle safe and fast?</h1>
                            <p className="wow fadeInUp" data-wow-delay="0.25s">When you drive - you need parking, we offer a wide range of parking solutions to suit your needs.</p>
                          </div>
                          <div className="hero-content-body wow fadeInUp" data-wow-delay="0.5s">
                            <a href="#bookingform1" className="btn-default popup-with-form">Enquire Parking</a>
                            <a href="https://parkmywheels.com/app.html" className="btn-default btn-highlighted" target="_blank"><i className="fa fa-mobile-phone text-default"></i> Install App</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="hero-slide">
                  <div className="hero-slider-image"><img src="/images/hero-bg-2.jpg" alt="" /></div>
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-lg-12">
                        <div className="hero-content">
                          <div className="section-title">
                            <h3 className="wow fadeInUp">welcome to ParkMyWheels</h3>
                            <h1 className="text-anime-style-3" data-cursor="-opaque">Looking to save more time on vehicle parking?</h1>
                            <p className="wow fadeInUp" data-wow-delay="0.25s">When you drive - you need parking, we offers a wide range of parking solutions to suit your needs.</p>
                          </div>
                          <div className="hero-content-body wow fadeInUp" data-wow-delay="0.5s">
                            <a href="#bookingform1" className="btn-default popup-with-form">Enquire Parking</a>
                            <a href="https://parkmywheels.com/app.html" className="btn-default btn-highlighted" target="_blank"><i className="fa fa-mobile-phone text-default"></i> Install App</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="hero-slide">
                  <div className="hero-slider-image"><img src="/images/hero-bg-3.jpg" alt="" /></div>
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-lg-12">
                        <div className="hero-content">
                          <div className="section-title">
                            <h3 className="wow fadeInUp">welcome to ParkMyWheels</h3>
                            <h1 className="text-anime-style-3" data-cursor="-opaque">Looking to save more on your vehicle parking?</h1>
                            <p className="wow fadeInUp" data-wow-delay="0.25s">Whether you're planning a weekend getaway, a business trip, or just need a reliable ride for the day, we offers a wide range of vehicles to suit your needs.</p>
                          </div>
                          <div className="hero-content-body wow fadeInUp" data-wow-delay="0.5s">
                            <a href="#bookingform1" className="btn-default popup-with-form">Enquire Parking</a>
                            <a href="/services" className="btn-default btn-highlighted">learn more</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-pagination"></div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="about-us">
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

      {/* Our Services Section */}
      <div className="our-services bg-section shadow">
        <div className="container">
          <div className="row section-row text-center mb-5">
            <div className="col-lg-12">
              <div className="section-title">
                <h3 className="wow fadeInUp">our services</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">Explore our wide range of parking services</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {services.map((s, i) => (
              <div className="col-lg-3 col-md-6 mb-4" key={i}>
                <div className="service-item wow fadeInUp shadow h-100" data-wow-delay={s.delay}>
                  <div className="icon-box"><img src={`/images/${s.icon}`} alt="" /></div>
                  <div className="service-content"><h3>{s.title}</h3><p>{s.desc}</p></div>
                  <div className="service-footer"><a href="/services" className="section-icon-btn"><img src="/images/arrow-white.svg" alt="" /></a></div>
                </div>
              </div>
            ))}
            <div className="col-lg-12 text-center mt-4">
              <div className="services-box-footer wow fadeInUp" data-wow-delay="1s">
                <p>Discover our range of parking services designed to meet all your travel needs. From a diverse fleet of vehicles to flexible parking plans.</p>
                <a href="/services" className="btn-default">view all service</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="how-it-work py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="how-work-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">how it work</h3>
                  <h2 className="text-anime-style-3" data-cursor="-opaque">Streamlined processes for a hassle-free experience! <i>all in just seconds!</i></h2>
                  <p className="wow fadeInUp" data-wow-delay="0.25s">Our streamlined process ensures a seamless parking experience from start to finish. With easy online booking, flexible pick-up and drop-off options.</p>
                </div>
                <div className="how-work-accordion" id="workaccordion">
                   {[
                     { id: 1, title: "browse and select", text: "Find the perfect parking spot in advance by browsing available locations near you." },
                     { id: 2, title: "book and confirm", text: "Secure your parking spot instantly with a quick and easy booking process." },
                     { id: 3, title: "Park and exit", text: "Enjoy a stress-free parking experience - just park, finish your task, and exit smoothly." }
                   ].map((item, idx) => (
                    <div className="accordion-item wow fadeInUp" key={item.id}>
                      <div className="icon-box"><img src={`/images/icon-how-it-work-${item.id}.svg`} alt="" /></div>
                      <h2 className="accordion-header"><button className={`accordion-button ${idx===0?'':'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#workcollapse${item.id}`}>{item.title}</button></h2>
                      <div id={`workcollapse${item.id}`} className={`accordion-collapse collapse ${idx===0?'show':''}`} data-bs-parent="#workaccordion">
                        <div className="accordion-body"><p>{item.text}</p></div>
                      </div>
                    </div>
                   ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
               <div className="how-work-image">
                  <figure className="reveal mb-4"><img src="/images/about-img-1.jpg" alt="" className="img-fluid rounded shadow" /></figure>
                  <div className="trusted-client">
                      <div className="trusted-client-content">
                          <h3><span className="counter">5</span>m+ Trusted world wide global clients</h3>
                      </div>
                      <div className="trusted-client--image"><img src="/images/trusted-client-img.png" alt="" /></div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page Fleets Single Start */}
      <div className="page-fleets-single py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="fleets-single-sidebar shadow">
                 <div className="fleets-single-sidebar-box wow fadeInUp">
                    <div className="fleets-single-sidebar-pricing"><h2><span>Starts from</span> ₹20<span> per hour</span></h2></div>
                    <div className="fleets-single-sidebar-list">
                      <ul>
                        <li><img src="/images/icon-fleets-single-sidebar-list-1.svg" alt="" />Min Hours <span>2</span></li>
                        <li><img src="/images/icon-fleets-single-sidebar-list-3.svg" alt="" />Additional Hours<span>20 / hour</span></li>
                        <li><img src="/images/icon-fleets-single-sidebar-list-4.svg" alt="" />Full Day <span>199</span></li>
                        <li><i className="fa fa-calendar"></i> Monthly <span>1999</span></li>
                        <li><i className="fa fa-map-pin"></i> Location<span>J.P.Nagar</span></li>
                        <li><img src="/images/icon-fleets-single-sidebar-list-6.svg" alt="" />Running Since<span>2014</span></li>
                      </ul>
                    </div>
                    <div className="fleets-single-sidebar-btn mt-4">
                      <a href="#bookingform1" className="btn-default popup-with-form">Enquire Now</a>
                      <span className="mx-2">or</span>
                      <a href="https://wa.me/+919740089052" className="wp-btn text-success"><i className="fa-brands fa-whatsapp fa-2xl"></i></a>
                    </div>
                 </div>
              </div>
            </div>
            <div className="col-lg-8">
               <div className="fleets-single-content">
                  <div className="fleets-single-slider mb-5">
                     <div className="swiper">
                         <div className="swiper-wrapper">
                           {[1,1,1,1].map((_, i) => (
                            <div className="swiper-slide" key={i}>
                               <div className="fleets-slider-image"><figure className="image-anime rounded overflow-hidden shadow"><img src="/images/fleets-slider-img-1.jpg" alt="" className="img-fluid" /></figure></div>
                            </div>
                           ))}
                        </div>
                        <div className="swiper-pagination mt-3"></div>
                     </div>
                  </div>
                  <div className="fleets-benefits wow fadeInUp shadow p-4 rounded bg-white d-flex justify-content-around mb-5">
                     <div className="fleets-benefits-item d-flex align-items-center">
                        <div className="icon-box me-3"><img src="/images/android.svg" alt="" width="40" /></div>
                        <div className="fleets-benefits-content">
                           <h3 className="h6 mb-0"><a href="https://play.google.com/store/apps/details?id=com.park.mywheels" target="_blank">Download Android App</a></h3>
                           <p className="mb-0 small text-muted">Google Play Store</p>
                        </div>
                     </div>
                     <div className="fleets-benefits-item d-flex align-items-center">
                        <div className="icon-box me-3"><img src="/images/apple.svg" alt="" width="40" /></div>
                        <div className="fleets-benefits-content">
                           <h3 className="h6 mb-0"><a href="https://apps.apple.com/in/app/parkmywheels/id6745809692" target="_blank">Download IOS App</a></h3>
                           <p className="mb-0 small text-muted">Apple App Store</p>
                        </div>
                     </div>
                  </div>
                  <div className="fleets-information mt-5">
                     <div className="section-title">
                        <h3 className="wow fadeInUp">general information</h3>
                        <h2 className="text-anime-style-3">Know about our parking service</h2>
                        <p className="wow fadeInUp" data-wow-delay="0.25s">Learn how ParkMyWheels makes parking smarter, easier, and more efficient for everyone.</p>
                     </div>
                     <div className="fleets-information-list wow fadeInUp mt-3" data-wow-delay="0.5s">
                        <ul>
                           <li>24/7 Roadside Assistance</li>
                           <li>Free Cancellation & Return</li>
                           <li>Rent Now Pay When You Arrive</li>
                        </ul>
                     </div>
                  </div>
                  <div className="fleets-amenities mt-5">
                     <div className="section-title">
                        <h3 className="wow fadeInUp">additional Features</h3>
                        <h2 className="text-anime-style-3">Premium services and features</h2>
                     </div>
                     <div className="fleets-amenities-list wow fadeInUp" data-wow-delay="0.25s">
                        <ul>
                          {["CCTV surveillance system", "24/7 365 Days Security", "Self Service Car Wash", "Park in/out anytime", "Wide Space Parking", "Closed Covered Parking", "Dual Parking", "Annual Memberships", "Parking Assistance"].map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                     </div>
                  </div>
                  <div className="rental-conditions-faqs mt-5">
                     <div className="section-title"><h3 className="wow fadeInUp">General Parking Norms</h3><h2 className="text-anime-style-3">Policies and safety</h2></div>
                     <div className="rental-condition-accordion mt-4" id="rentalaccordion">
                        {rentalFaqs.map((f, i) => (
                           <div className="accordion-item wow fadeInUp" key={i}>
                              <h2 className="accordion-header"><button className={`accordion-button ${i===0?'':'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#rentalcollapse${f.id}`}>{f.q}</button></h2>
                              <div id={`rentalcollapse${f.id}`} className={`accordion-collapse collapse ${i===0?'show':''}`} data-bs-parent="#rentalaccordion">
                                <div className="accordion-body text-start">
                                  {f.a && <p>{f.a}</p>}
                                  {f.points && (
                                    <ul className="mb-0">
                                      {f.points.map((p, idx) => <li key={idx}>{p}</li>)}
                                    </ul>
                                  )}
                                </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intro Video Section Start */}
      <div className="intro-video bg-section parallaxie shadow py-5 text-center my-5">
        <div className="container py-5">
          <div className="section-title">
             <h3 className="wow fadeInUp text-green">watch full video</h3>
             <h2 className="text-anime-style-3 text-white mb-4">Discover the ease and convenience of Parking Smart with ParkMyWheels</h2>
          </div>
          <div className="intro-video-box position-relative">
             <div className="video-play-button mb-5">
                <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video btn-default" style={{ padding: '30px' }}><i className="fa-solid fa-play fa-2x"></i></a>
             </div>
             <div className="client-slider mt-5">
                <div className="swiper client_logo_slider">
                   <div className="swiper-wrapper">
                      {clientLogos.map((logo, i) => (
                       <div className="swiper-slide" key={i}><div className="company-logo"><img src={`/images/${logo}`} alt="" className="img-fluid" style={{ opacity: 0.8, filter: 'brightness(0) invert(1)' }} /></div></div>
                      ))}
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
               <div className="section-title">
                  <h3 className="wow fadeInUp">why choose us</h3>
<h2 className="text-anime-style-3 mx-auto max-w-2xl">
  Unmatched quality and service for your parking needs
</h2>               </div>
            </div>
          </div>
          <div className="row align-items-center">
             <div className="col-lg-4 col-md-6 order-lg-1 order-md-1 order-1 text-lg-end text-start">
                <div className="why-choose-item wow fadeInUp mb-5">
                  <div className="icon-box ms-lg-auto ms-0 mb-3"><img src="/images/icon-why-choose-1.svg" alt="" /></div>
                  <div className="why-choose-content"><h3>extensive parking options</h3><p>From private lots to commercial hubs, we offer a wide range of parking choices.</p></div>
                </div>
                <div className="why-choose-item wow fadeInUp" data-wow-delay="0.25s">
                  <div className="icon-box ms-lg-auto ms-0 mb-3"><img src="/images/icon-why-choose-2.svg" alt="" /></div>
                  <div className="why-choose-content"><h3>exceptional customer service</h3><p>Need help? Our friendly support team is always ready to assist you.</p></div>
                </div>
             </div>
             <div className="col-lg-4 col-md-12 text-center order-lg-2 order-md-3 order-2"><div className="why-choose-image mb-4 mb-lg-0"><figure className="reveal"><img src="/images/why-choose-img.jpg" alt="" className="img-fluid rounded shadow" /></figure></div></div>
             <div className="col-lg-4 col-md-6 order-lg-3 order-md-2 order-3 text-start">
                <div className="why-choose-item wow fadeInUp mb-5">
                  <div className="icon-box mb-3"><img src="/images/icon-why-choose-3.svg" alt="" /></div>
                  <div className="why-choose-content"><h3>convenient locations</h3><p>Find parking in prime locations, making your trips more efficient and stress-free.</p></div>
                </div>
                <div className="why-choose-item wow fadeInUp" data-wow-delay="0.25s">
                  <div className="icon-box mb-3"><img src="/images/icon-why-choose-4.svg" alt="" /></div>
                  <div className="why-choose-content"><h3>reliability and safety</h3><p>Park with confidence—our secure and well-maintained spots ensure peace of mind.</p></div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="our-faqs bg-section shadow py-5 my-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-1 order-md-2"><div className="our-faqs-image d-flex gap-3"><div className="faqs-img-1"><figure className="image-anime reveal"><img src="/images/our-faqs-img-1.jpg" alt="" className="rounded shadow" /></figure></div><div className="faqs-img-2 pt-5"><figure className="image-anime reveal"><img src="/images/our-faqs-img-2.jpg" alt="" className="rounded shadow" /></figure></div></div></div>
            <div className="col-lg-6 order-lg-2 order-md-1">
              <div className="our-faqs-content">
                <div className="section-title"><h3 className="wow fadeInUp">frequently asked questions</h3><h2 className="text-anime-style-3">Everything you need to know about our services</h2></div>
                <div className="our-faqs-accordion" id="faqsaccordion">
                   {faqs.map((f, i) => (
                    <div className="accordion-item wow fadeInUp" key={i}>
                      <h2 className="accordion-header"><button className={`accordion-button ${i===0?'':'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#faq${i}`}>{f.q}</button></h2>
                      <div id={`faq${i}`} className={`accordion-collapse collapse ${i===0?'show':''}`} data-bs-parent="#faqsaccordion"><div className="accordion-body"><p>{f.a}</p></div></div>
                    </div>
                   ))}
                </div>
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
                    <div className="testimonial-item p-4 shadow bg-white rounded text-start h-100">
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

      {/* CTA Box Section Start */}
      <div className="cta-box bg-section py-5 my-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-7">
              <div className="cta-box-content text-start">
                <div className="section-title">
                  <h2 className="text-anime-style-3 text-white">Ready to hit the road? Book your vehicle Parking today!</h2>
                  <p className="wow fadeInUp text-white-50">Our friendly customer service team is here to help. Contact us anytime for support and inquiries.</p>
                </div>
                <div className="cta-box-btn wow fadeInUp" data-wow-delay="0.5s">
                  <a href="/contact" className="btn-default">contact us</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-5">
              <div className="cat-box-image text-center mt-4 mt-md-0">
                <figure className="wow fadeInRight"><img src="/images/cta-car-img.png" alt="" className="img-fluid" /></figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CTA Box Section End */}

      {/* Latest Article Start */}
      <div className="latest-article py-5">
        <div className="container">
          <div className="row section-row text-center mb-5">
            <div className="col-lg-12">
              <div className="section-title">
                <h3 className="wow fadeInUp">latest articles</h3>
                <h2 className="text-anime-style-3">Stay informed and inspired for your next journey</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="highlighted-article-post wow fadeInUp position-relative overflow-hidden rounded shadow mb-4 mb-lg-0">
                <div className="highlighted-article-featured-img"><figure className="image-anime"><a href="#" className="image-anime"><img src="/images/post-1.jpg" alt="" className="img-fluid" /></a></figure></div>
                <div className="highlighted-article-body position-absolute bottom-0 start-0 w-100 p-4 bg-dark bg-opacity-75 text-white">
                  <div className="article-meta mb-2"><ul className="list-unstyled"><li><a href="#" className="text-white-50 small"><i className="fa-solid fa-calendar-days me-2"></i>sep 19, 2024</a></li></ul></div>
                  <div className="highlighted-article-content d-flex justify-content-between align-items-end">
                    <h3 className="h4 mb-0"><a href="#" className="text-white">Road Trip Essentials: What to Pack for a Smooth Journey</a></h3>
                    <a href="#" className="section-icon-btn btn btn-light rounded-circle shadow-sm" style={{ width:'40px', height:'40px', padding:'10px' }}><img src="/images/arrow-orange.svg" alt="" style={{ width:'100%' }} /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              {[
                { date: "sep 20, 2024", title: "Exploring the City: Best Urban Destinations for a Weekend Getaway", img: "post-2.jpg", delay: "0s" },
                { date: "sep 21, 2024", title: "Unlocking Adventure: The Best Off-Road Routes for Thrill-Seekers", img: "post-3.jpg", delay: "0.25s" },
                { date: "sep 22, 2024", title: "The Ultimate Guide to Car Rentals: Tips for Your Next Road Trip", img: "post-4.jpg", delay: "0.5s" }
              ].map((article, index) => (
                <div className="article-post wow fadeInUp d-flex gap-3 mb-4 last-child-mb-0" data-wow-delay={article.delay} key={index}>
                  <div className="article-featured-img" style={{ width:'120px', flexShrink:0 }}><figure className="image-anime rounded overflow-hidden"><a href="#"><img src={`/images/${article.img}`} alt="" className="img-fluid" /></a></figure></div>
                  <div className="article-post-body flex-grow-1">
                    <div className="article-meta mb-1"><ul className="list-unstyled"><li><a href="#" className="text-muted small"><i className="fa-solid fa-calendar-days me-2"></i>{article.date}</a></li></ul></div>
                    <div className="article-post-content">
                      <h3 className="h6"><a href="#" className="text-dark">{article.title}</a></h3>
                      <a href="#" className="read-story-btn text-success fw-bold small">Read story</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Latest Article End */}

      <Footer />
    </>
  );
}
