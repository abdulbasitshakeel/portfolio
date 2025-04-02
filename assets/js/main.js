(function ($) {
    "use strict";
    var nav = $('nav');
    var navHeight = nav.outerHeight();

    $('.navbar-toggler').on('click', function() {
        if( ! $('#mainNav').hasClass('navbar-reduce')) {
            $('#mainNav').addClass('navbar-reduce');
        }
    });

    document.addEventListener("DOMContentLoaded", function () {
        const preloader = document.getElementById("preloader");
        setTimeout(() => {
            preloader.style.opacity = "0";
            preloader.style.visibility = "hidden";
        }, 1000);
    });

    $('.scrolltop-mf').on("click", function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    $('.counter').counterUp({
        delay: 15,
        time: 2000
    });

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

    $('.js-scroll').on("click", function () {
        $('.navbar-collapse').collapse('hide');
    });

    $('body').scrollspy({
        target: '#mainNav',
        offset: navHeight
    });

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

$(document).ready(function () {
    $('.counter').counterUp({
        time: 1000, 
        delay: 20  
    });
});

$(document).on("scroll", function () {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".fadein");

    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];
        if ($(tag).offset().top < pageBottom) {
            $(tag).addClass("visible");
        } else {
            $(tag).removeClass("visible");
        }
    }
});

const button = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
});

button.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

function togglePricing(type) {
    var paygCards = document.querySelectorAll('div[id="payg-free"]');  
    var annualCards = document.querySelectorAll('div[id="annual-free"]'); 
    var certCards = document.querySelectorAll('div[id="cert-free"]');  
    var buttons = document.querySelectorAll('.split-button');
    
    let allCards = [...paygCards, ...annualCards, ...certCards];
    allCards.forEach(function(card) {
        card.style.transition = 'transform 0.6s, opacity 0.6s';
        card.style.transform = 'rotateY(90deg)';
        card.style.opacity = '0';
    });
    
    buttons.forEach(btn => btn.classList.remove('activee'));
    document.querySelector(`.split-button[onclick="togglePricing('${type}')"]`).classList.add('activee');
    
    setTimeout(() => {
        allCards.forEach(function(card) {
            card.style.display = 'none';
        });
        
        let selectedCards = [];
        if (type === 'payg') selectedCards = paygCards;
        else if (type === 'annual') selectedCards = annualCards;
        else if (type === 'cert') selectedCards = certCards;
        
        selectedCards.forEach(function(card) {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.transform = 'rotateY(0deg)';
                card.style.opacity = '1';
            }, 50);
        });
    }, 300);
}

togglePricing('payg');

