<?php include("header.php"); ?>
  <!-- Page Header Start -->
	<div class="page-header bg-section parallaxie">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<!-- Page Header Box Start -->
					<div class="page-header-box">
						<h1 class="text-anime-style-3" data-cursor="-opaque">Contact Us</h1>
						<nav class="wow fadeInUp">
							<ol class="breadcrumb">
								<li class="breadcrumb-item active" aria-current="page">contact us</li>
							</ol>
						</nav>
					</div>
					<!-- Page Header Box End -->
				</div>
			</div>
		</div>
	</div>
	<!-- Page Header End -->
	<!-- Page Contact Us Start -->
    <div class="page-contact-us">
        <div class="contact-info-form">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <!-- Contact Information Start -->
                        <div class="contact-information">
                            <!-- Contact Information Title Start -->
                            <div class="section-title">
                                <h2 class="text-anime-style-3" data-cursor="-opaque">Contact information</h2>
                                <p>How Can we assist you today!</p>
                            </div>
                            <!-- Contact Information Title End -->
    
                            <!-- Contact Information List Start -->
                            <div class="contact-info-list">
                                <!-- Contact Info Item Start -->
                                <div class="contact-info-item wow fadeInUp" data-wow-delay="0.25s">
                                    <!-- Icon Box Start -->
                                    <div class="icon-box">
                                        <img src="images/icon-phone.svg" alt="">
                                    </div>
                                    <!-- Icon Box End -->
    
                                    <!-- Contact Info Content Start -->
                                    <div class="contact-info-content">
                                        <p>(+91) 97400 89052</p>
                                    </div>
                                    <!-- Contact Info Content End -->
                                </div>
                                <!-- Contact Info Item End -->
    
                                <!-- Contact Info Item Start -->
                                <div class="contact-info-item wow fadeInUp" data-wow-delay="0.5s">
                                    <!-- Icon Box Start -->
                                    <div class="icon-box">
                                        <img src="images/icon-mail.svg" alt="">
                                    </div>
                                    <!-- Icon Box End -->
    
                                    <!-- Contact Info Content Start -->
                                    <div class="contact-info-content">
                                        <p>parkmywheels3@gmail.com</p>
                                    </div>
                                    <!-- Contact Info Content End -->
                                </div>
                                <!-- Contact Info Item End -->
    
                                <!-- Contact Info Item Start -->
                                <div class="contact-info-item wow fadeInUp" data-wow-delay="0.75s">
                                    <!-- Icon Box Start -->
                                    <div class="icon-box">
                                        <img src="images/icon-location.svg" alt="">
                                    </div>
                                    <!-- Icon Box End -->
    
                                    <!-- Contact Info Content Start -->
                                    <div class="contact-info-content">
                                        <p><b>Serving Locations:</b> Bengaluru, Karnataka, India</p>
                                    </div>
                                    <!-- Contact Info Content End -->
                                </div>
                                <!-- Contact Info Item End -->
                            </div>
                            <!-- Contact Information List End -->
    
                            <!-- Contact Information Social Start ->
                            <div class="contact-info-social wow fadeInUp" data-wow-delay="0.5s">
                                <ul>
                                    <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                                    <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>                                                                
                                </ul>
                            </div>
                            <!-- Contact Information Social End -->
                        </div>
                        <!-- Contact Information End -->
                    </div>
    
                    <div class="col-lg-6">
                        <!-- Contact Form Start -->
                        <div class="contact-us-form">
                            <form id="contactForm1" action="server.php" method="POST" data-toggle="validator" class="wow fadeInUp" data-wow-delay="0.5s">
                                <h1>Check Parking Availability</h1><hr>
                                <div class="row">
										<div class="booking-form-group col-md-6 mb-4">
                                             <input type="text" name="location" placeholder="Parking location" class="booking-form-control" required>
                                            <div class="help-block with-errors"></div>
                                        </div>

                                        <div class="booking-form-group col-md-6 mb-4">
                                            <input type="text" name="fromdate" placeholder="Parking Date" class="booking-form-control datepicker" id="fromdate" required>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                        <div class="booking-form-group col-md-6 mb-4">
                                            <input type="text" name="name" class="booking-form-control" id="name" placeholder="Full Name" required>
                                            <div class="help-block with-errors"></div>
                                        </div>

                                        <div class="booking-form-group col-md-6 mb-4">
                                            <input type="email" name ="email" class="booking-form-control" id="email" placeholder="Enter Your Email" required>
                                            <div class="help-block with-errors"></div>
                                        </div>

                                        <div class="booking-form-group col-md-6 mb-4">
                                            <input type="text" name="phone" class="booking-form-control" id="phone" placeholder="Enter Your Number" required>
                                            <div class="help-block with-errors"></div>
                                        </div>                                        

                                        <div class="booking-form-group col-md-6 mb-4">
                                            <select name="vehicletype" class="booking-form-control form-select" id="vehicletype" required>
                                                <option value="" disabled selected>Choose Vehicle Type</option>
                                                <option value="sport_car">Car</option>
                                                <option value="convertible_car">Bike</option>
                                                <option value="coupe_car">Others</option>
                                            </select>
                                            <div class="help-block with-errors"></div>
                                        </div>

                                        <div class="col-md-12 booking-form-group">
                                            <button type="submit" class="btn-default">Submit Details</button>
                                            <div id="msgSubmit" class="h3 hidden"></div>
                                        </div>
                                    </div>
                            </form>
                        </div>
                        <!-- Contact Form End -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Page Contact Us End -->

<?php include("footer.php"); ?>