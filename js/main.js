 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();



   // Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			event.preventDefault();

			if ( $('#ftco-nav').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');	
			}

			
			
		});

	};
	burgerMenu();


	var onePageClick = function() {
		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
			var href = $.attr(this, 'href');
			var $target = $(href);

			if (!$target.length) {
				return;
			}

			event.preventDefault();

			$('.navbar-collapse').collapse('hide');
			$('.js-fh5co-nav-toggle').removeClass('active');

			window.scrollTo({
				top: Math.max($target.offset().top - 86, 0),
				behavior: 'smooth'
			});

			if (history.pushState) {
				history.pushState(null, null, href);
			} else {
				window.location.hash = href;
			}
		});
	};

	onePageClick();
	

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:false,
	    autoplay: false,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });





})(jQuery);

(function() {
  "use strict";

  var typingAnimationElement = document.getElementById("typing-animation");
  var typingTexts = ["DATA ANALYST", "AI ENGINEER"];

  if (typingAnimationElement) {
    var typingTextIndex = 0;
    var typingCharIndex = 0;
    var isDeleting = false;

    var runTypingAnimation = function() {
      var currentText = typingTexts[typingTextIndex];

      typingAnimationElement.textContent = isDeleting
        ? currentText.substring(0, typingCharIndex - 1)
        : currentText.substring(0, typingCharIndex + 1);

      typingCharIndex = isDeleting ? typingCharIndex - 1 : typingCharIndex + 1;

      if (!isDeleting && typingCharIndex === currentText.length) {
        isDeleting = true;
        window.setTimeout(runTypingAnimation, 1100);
        return;
      }

      if (isDeleting && typingCharIndex === 0) {
        isDeleting = false;
        typingTextIndex = (typingTextIndex + 1) % typingTexts.length;
      }

      window.setTimeout(runTypingAnimation, isDeleting ? 55 : 115);
    };

    runTypingAnimation();
  }

  var resumeDownloadLinks = document.querySelectorAll(".js-resume-download");

  var downloadResume = function(pdfUrl, resumeFileName) {
    var fileName = resumeFileName || decodeURIComponent(pdfUrl.split("/").pop().split("?")[0].split("#")[0]) || "Bharath-Resume.pdf";
    var temporaryLink = document.createElement("a");
    temporaryLink.href = pdfUrl;
    temporaryLink.download = fileName;
    document.body.appendChild(temporaryLink);
    temporaryLink.click();
    temporaryLink.remove();
  };

  resumeDownloadLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault();

      if (!window.PORTFOLIO_RESUME_PDF || !window.PORTFOLIO_RESUME_PDF.href) {
        window.alert("Resume PDF is not configured. Keep exactly one PDF file inside the resume folder, then restart npm run dev.");
        return;
      }

      downloadResume(window.PORTFOLIO_RESUME_PDF.href, window.PORTFOLIO_RESUME_PDF.fileName);
    });
  });

  var revealTargets = document.querySelectorAll(
    ".resume-wrap, .blog-entry, .contact-section .box, .block-18, .experience-card, .skill-suite-card, .skills-core, .hero-proof-grid div"
  );

  if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16 });

    revealTargets.forEach(function(target) {
      target.classList.add("portfolio-reveal");
      revealObserver.observe(target);
    });
  } else {
    revealTargets.forEach(function(target) {
      target.classList.add("is-visible");
    });
  }

  var experienceCard = document.querySelector(".experience-card");
  if (experienceCard && window.matchMedia("(pointer: fine)").matches) {
    experienceCard.addEventListener("mousemove", function(event) {
      var rect = experienceCard.getBoundingClientRect();
      var x = event.clientX - rect.left;
      var y = event.clientY - rect.top;
      var rotateY = ((x / rect.width) - 0.5) * 5;
      var rotateX = ((y / rect.height) - 0.5) * -5;
      experienceCard.style.transform = "perspective(1100px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) translateY(-4px)";
    });

    experienceCard.addEventListener("mouseleave", function() {
      experienceCard.style.transform = "";
    });
  }
})();

