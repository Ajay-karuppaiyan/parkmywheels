
    <!-- Footer Start -->
    <footer class="main-footer bg-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <!-- About Footer Start -->
                     <div class="about-footer">
                        <!-- Footer Logo Start -->
                        <div class="footer-logo">
                            <img src="images/logo.svg" alt="">
                        </div>
                        <!-- Footer Logo End -->

                        <!-- About Footer Content Start -->
                         <div class="about-footer-content">
                            <p>Experience the convenience and ease of parking a vehicle with ParkMyWheels. </p>
                         </div>
                        <!-- About Footer Content End -->
                     </div>
                    <!-- About Footer End -->
                </div>

                <div class="col-lg-3 col-md-4">
                    <!-- Footer Quick Links Start -->
                    <div class="footer-links footer-quick-links">
                        <h3>legal policy</h3>
                        <ul>                            
                            <li><a href="#bookingform1">Enquire Now</a></li>
                            <li><a href="terms-and-conditions.php">term & condition</a></li>
                            <li><a href="privacy-policy.php">privacy policy</a></li>
                            <li><a href="contact-us.php">Enquire Now</a></li>
                        </ul>
                    </div>
                    <!-- Footer Quick Links End -->
                </div>

                <div class="col-lg-3 col-md-4">
                    <!-- Footer Menu Start -->
                    <div class="footer-links footer-menu">
                        <h3>quick links</h3>
                        <ul>                            
                            <li><a href="index.php">home</a></li>
                            <li><a href="about ParkMyWheels.php">about us</a></li>
                            <li><a href="services.php">services</a></li>
							<li><a href="contact-us.php">Contact Us</a></li>
                        </ul>
                    </div>
                    <!-- Footer Menu End -->
                </div>

                <div class="col-lg-3 col-md-4 footer-copyright">
                    <!-- Footer Newsletter Start -->
                    <div class="footer-newsletter">
                        <h3>Subscribe to the Newsleeters</h3>
                        <!-- Footer Newsletter Form Start -->
                        <div class="footer-newsletter-form">
                            <form id="newslettersForm" action="#" method="POST">
                                <div class="form-group">
                                    <input type="email" name="email" class="form-control"  id="mail" placeholder="Email ..." required>
                                    <button type="submit" class="section-icon-btn"><img src="images/arrow-white.svg" alt=""></button>
                                </div>
                            </form>
                        </div>
                        <!-- Footer Newsletter Form End -->
                    </div><br>
                    <!-- Footer Newsletter End ->
					<div class="footer-social-links">
                            <ul>
                                <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-x-twitter"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                            </ul>
                        </div -->
                </div>
            </div>

            <!-- Footer Copyright Section Start -->
            <div class="footer-copyright">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-7">
                        <!-- Footer Copyright Start -->
                        <div class="footer-copyright-text">
                            <p>Copyright © 2024 ParkMyWheels. All rights reserved.</p>
                        </div>
                        <!-- Footer Copyright End -->
                    </div>

                    <div class="col-lg-6 col-md-5">
                        <!-- Footer Social Link Start -->
                       <div class="footer-copyright-text">
                            <p align="right">Designed and Developed by <a style="color:#fff" href="https://sensitive.co.in">Sensitive Technologies</a>.</p>
                        </div>
                        <!-- Footer Social Link End -->
                    </div>
                </div>
            </div>
            <!-- Footer Copyright Section End -->
        </div>
    </footer>

    <!-- Footer End -->
<!-- Booking Form Box Start -->
                        <div class="booking-form-box">
                            <!-- Booking PopUp Form Start -->
                            <form id="bookingform1" method="post" action="server.php" class="white-popup-block mfp-hide booking-form">
                                <div class="section-title">
                                    <h2>Book your vehicle parking now!</h2>
									<b class="text-dark">Book Now, Pay Later @ Parking</b><hr>
                                    <p>Fill out the form below to reserve your vehicle parking spot. Complete the necessary details to ensure a smooth parking experience.</p>
                                </div>
                                <fieldset>
                                    <div class="row">
										<div class="booking-form-group col-md-6 mb-4">
                                             <input type="text" name="location" id="location" placeholder="Parking location" class="booking-form-control" required>
                                            <div class="help-block with-errors"></div>
                                        </div>

                                        <div class="booking-form-group col-md-6 mb-4">
                                            <input type="text" name="fromdate" id="fromdate" placeholder="Parking Date" class="booking-form-control datepicker" required>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                        <div class="booking-form-group col-md-6 mb-4">
                                            <input type="text" name="name" id="name" class="booking-form-control" placeholder="Full Name" required>
                                            <div class="help-block with-errors"></div>
                                        </div>

                                        <div class="booking-form-group col-md-6 mb-4">
                                            <input type="email" name="email" id="email" class="booking-form-control" placeholder="Enter Your Email" required>
                                            <div class="help-block with-errors"></div>
                                        </div>

                                        <div class="booking-form-group col-md-6 mb-4">
                                            <input type="text" name="phone" id="phone" class="booking-form-control" placeholder="Enter Your Number" required>
                                            <div class="help-block with-errors"></div>
                                        </div>                                        

                                        <div class="booking-form-group col-md-6 mb-4">
                                            <select name="vehicletype" id="vehicletype" class="booking-form-control form-select" required>
                                                <option value="" disabled selected>Choose Vehicle Type</option>
                                                <option value="car">Car</option>
                                                <option value="bike">Bike</option>
                                                <option value="others">Others</option>
                                            </select>
                                            <div class="help-block with-errors"></div>
                                        </div>

                                        <div class="col-md-12 booking-form-group">
                                            <button type="submit" class="btn-default">Confirm</button>
                                        </div>
                                    </div>                                    
                                </fieldset>
                            </form>
                            <!-- Booking PopUp Form End -->
                        </div>
                        <!-- Booking Form Box End -->
    <!-- Jquery Library File -->
    <script src="js/jquery-3.7.1.min.js"></script>
    <!-- Jquery Ui Js File -->
    <script src="js/jquery-ui.js"></script>
    <!-- Bootstrap js file -->
    <script src="js/bootstrap.min.js"></script>
    <!-- Validator js file -->


		<script src="https://smarthr.dreamstechnologies.com/html/template/assets/plugins/flatpickr/flatpickr.js" type="b1b5ad8f1d61a9faa9a6808d-text/javascript"></script>

<script src="https://smarthr.dreamstechnologies.com/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js" data-cf-settings="b1b5ad8f1d61a9faa9a6808d-|49" defer></script>
	
		<!-- Page JS -->
		<script src="https://smarthr.dreamstechnologies.com/html/template/assets/js/forms-pickers.js" type="b1b5ad8f1d61a9faa9a6808d-text/javascript"></script>
    <script src="js/validator.min.js"></script>
    <!-- SlickNav js file -->
    <script src="js/jquery.slicknav.js"></script>
    <!-- Swiper js file -->
    <script src="js/swiper-bundle.min.js"></script>
    <!-- Counter js file -->
    <script src="js/jquery.waypoints.min.js"></script>
    <script src="js/jquery.counterup.min.js"></script>
    <!-- Magnific js file -->
    <script src="js/jquery.magnific-popup.min.js"></script>
    <!-- SmoothScroll -->
    <script src="js/SmoothScroll.js"></script>
    <!-- Parallax js -->
    <script src="js/parallaxie.js"></script>
    <!-- MagicCursor js file -->
    <script src="js/gsap.min.js"></script>
    <script src="js/magiccursor.js"></script>
    <!-- Text Effect js file -->
    <script src="js/SplitText.js"></script>
    <script src="js/ScrollTrigger.min.js"></script>
    <!-- YTPlayer js File -->
    <script src="js/jquery.mb.YTPlayer.min.js"></script>
    <!-- Wow js file -->
    <script src="js/wow.js"></script>
    <!-- Main Custom js file -->
    <script src="js/function.js"></script>
</body>
</html>