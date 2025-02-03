(function ($) {
	"use strict";
	var nav = $('nav');
	var navHeight = nav.outerHeight();

	$('.navbar-toggler').on('click', function() {
	if( ! $('#mainNav').hasClass('navbar-reduce')) {
	$('#mainNav').addClass('navbar-reduce');
	}
  })

	// Preloader
	document.addEventListener("DOMContentLoaded", function () {
	const preloader = document.getElementById("preloader");
  
	// Simulate loading (fade out after 5 seconds)
	setTimeout(() => {
	  preloader.style.opacity = "0"; // Fade out
	  preloader.style.visibility = "hidden"; // Hide preloader
	}, 1000); // Adjust this time if needed
 	 });

	/*--/ Star ScrollTop /--*/
	$('.scrolltop-mf').on("click", function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

	/*--/ Star Counter /--*/
	$('.counter').counterUp({
		delay: 15,
		time: 2000
	});

	/*--/ Star Scrolling nav /--*/
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 5)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});
	/*--/ End Scrolling nav /--*/

	/*--/ Navbar Menu Reduce /--*/
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50; 
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-reduce');
			$('.navbar-expand-md').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-md').addClass('navbar-trans');
			$('.navbar-expand-md').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});

	/*--/ Star Typed /--*/
	if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
		var typed = new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 80,
			loop: true,
			backDelay: 1100,
			backSpeed: 30
		});
	}

})(jQuery);

//typiny jo kar raha hai developer wagera
$(document).ready(function () {
	$('.counter').counterUp({
	time: 1000, 
	delay: 20  
	});
});

/////fade in a animation
$(document).on("scroll", function () {
    var pageTop = $(document).scrollTop()
    var pageBottom = pageTop + $(window).height()
    var tags = $(".fadein")

    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i]

      if ($(tag).offset().top < pageBottom) {
        $(tag).addClass("visible")
      } else {
        $(tag).removeClass("visible")
      }
    }
  })

  // Back to Top Button


  const button = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) { // Show the button
        button.style.display = "block";
    } else { // Hide the button
        button.style.display = "none";
    }
});

button.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scrolling
    });
});

function togglePricing(type) {
    var paygCards = document.querySelectorAll('div[id^="payg"]');  
    var annualCards = document.querySelectorAll('div[id^="annual"]');  
    var toggleButtons = document.querySelectorAll('.toggle-button');
    
    // Add flipping animation
    let allCards = [...paygCards, ...annualCards];
    allCards.forEach(function(card) {
        card.style.transition = 'transform 0.6s, opacity 0.6s';
        card.style.transform = 'rotateY(90deg)';
        card.style.opacity = '0';
    });
    
    setTimeout(() => {
        // Hide all cards
        paygCards.forEach(function(card) {
            card.style.display = 'none';
        });
        annualCards.forEach(function(card) {
            card.style.display = 'none';
        });
        
        // Show selected cards
        let selectedCards = type === 'payg' ? paygCards : annualCards;
        selectedCards.forEach(function(card) {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.transform = 'rotateY(0deg)';
                card.style.opacity = '1';
            }, 50); // Small delay to allow display change to take effect
        });
        
        // Update button states
        toggleButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelector(`.toggle-button[data-type="${type}"]`).classList.add('active');
    }, 300); // Delay to match the flip animation
} 

// Initialize with Pay As You Go cards visible
togglePricing('payg');



