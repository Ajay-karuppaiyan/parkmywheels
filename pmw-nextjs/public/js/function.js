(function ($) {
    "use strict";
	
	var $window = $(window); 
	var $body = $('body'); 

    window.initApp = function() {
        /* Preloader Effect */
        $(".preloader").fadeOut(600);

        if($('.datepicker').length){
            $( ".datepicker" ).datepicker();
        }
        
        /* Slick Menu JS */
        $('.responsive-menu').empty();
        $('#menu').slicknav({
            label : '',
            prependTo : '.responsive-menu'
        });

        /* Hero Slider Layout JS */
        if ($('.hero-slider-layout .swiper').length) {
            new Swiper('.hero-slider-layout .swiper', {
                slidesPerView : 1,
                speed: 1000,
                spaceBetween: 0,
                loop: true,
                autoplay: { delay: 4000 },
                pagination: { el: '.hero-pagination', clickable: true },
            });
        }

        /* client logo slider JS */
        $('.client_logo_slider').each(function() {
            if (this.swiper) this.swiper.destroy();
            new Swiper(this, {
                slidesPerView: 2,
                spaceBetween: 30,
                loop: true,
                speed: 3000,
                autoplay: {
                    delay: 0,
                    disableOnInteraction: false,
                },
                freeMode: true,
                breakpoints: { 768: { slidesPerView: 4 }, 991: { slidesPerView: 6 } }
            });
        });

        /* testimonial Slider JS */
        if ($('.testimonial-slider').length) {
            new Swiper('.testimonial-slider .swiper', {
                slidesPerView : 1,
                speed: 1000,
                spaceBetween: 30,
                loop: true,
                autoplay: { delay: 3000 },
                pagination: { el: '.swiper-pagination', clickable: true },
                navigation: { nextEl: '.testimonial-button-next', prevEl: '.testimonial-button-prev' },
                breakpoints: { 768: { slidesPerView: 2 }, 991: { slidesPerView: 3 } }
            });
        }

        /* Fleets Single Image Carousel JS */
        if ($('.fleets-single-slider').length) {
            new Swiper('.fleets-single-slider .swiper', {
                slidesPerView : 1,
                speed: 1000,
                spaceBetween: 10,
                loop: true,
                centeredSlides: true,
                autoplay: { delay: 5000 },
                pagination: { el: '.swiper-pagination', clickable: true },
            });
        }

        /* Counter */
        if ($('.counter').length) {
            $('.counter').counterUp({ delay: 6, time: 3000 });
        }

        /* Image Reveal Animation */
        if ($('.reveal').length) {
            gsap.registerPlugin(ScrollTrigger);
            let revealContainers = document.querySelectorAll(".reveal");
            revealContainers.forEach((container) => {
                let image = container.querySelector("img");
                let tl = gsap.timeline({
                    scrollTrigger: { trigger: container, toggleActions: "play none none none" }
                });
                tl.set(container, { autoAlpha: 1 });
                tl.from(container, 1, { xPercent: -100, ease: Power2.out });
                tl.from(image, 1, { xPercent: 100, scale: 1, delay: -1, ease: Power2.out });
            });
        }

        /* Text Effect Animation */
        if ($('.text-anime-style-3').length) {		
            let animatedTextElements = document.querySelectorAll('.text-anime-style-3');
            animatedTextElements.forEach((element) => {
                if (element.animation) {
                    element.animation.progress(1).kill();
                    if (element.split) element.split.revert();
                }
                element.split = new SplitText(element, { type: "lines,words,chars", linesClass: "split-line" });
                gsap.set(element, { perspective: 400 });
                gsap.set(element.split.chars, { opacity: 0, x: "50" });
                element.animation = gsap.to(element.split.chars, {
                    scrollTrigger: { trigger: element, start: "top 90%" },
                    x: "0", y: "0", rotateX: "0", opacity: 1, duration: 1, ease: Back.easeOut, stagger: 0.02,
                });
            });		
        }

        /* Magnific Popup */
        $('.gallery-items').magnificPopup({
            delegate: 'a', type: 'image', gallery: { enabled: true }
        });

        if ($('.popup-with-form').length) {
            $('.popup-with-form').magnificPopup({ type: 'inline', closeOnBgClick: false, preloader: false, midClick: true });
        }

        if ($('.popup-video').length) {
            $('.popup-video').magnificPopup({ type: 'iframe', mainClass: 'mfp-fade', removalDelay: 160, preloader: false, fixedContentPos: true });
        }

        /* WOW JS */
        if (typeof WOW !== 'undefined') {
            new WOW().init();
        }

        /* Scroll Trigger Refresh */
        if (typeof ScrollTrigger !== 'undefined') {
            ScrollTrigger.refresh();
        }
    };

    /* Initial Call */
    $(window).on('load', function() {
        window.initApp();
    });

    /* Sticky Header Logic */
    if($('.active-sticky-header').length){
        $(window).on("scroll", function() {
            var fromTop = $(window).scrollTop();
            var headerHeight = $('header .header-sticky').outerHeight();
            $("header .header-sticky").toggleClass("hide", (fromTop > headerHeight + 100));
            $("header .header-sticky").toggleClass("active", (fromTop > 600));
        });
    }

})(jQuery);
