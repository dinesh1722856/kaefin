$( function() {

    var wind = $(window);

    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 200,
        mobile: false,
        live: false
    });
    wow.init();

    // ---------- background change -----------
    var pageSection = $(".bg-img");
    pageSection.each(function (indx) {

        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });


    // ----------- side menu -----------
    $(".side_menu_btn").on("click", function () {
        $(".fixed-menu").addClass("show");
    });

    $(".fixed-menu .clss").on("click", function () {
        $(".fixed-menu").removeClass("show");
    });


    // ---------- to top -----------

    wind.on("scroll", function() {

        var bodyScroll = wind.scrollTop(),
            toTop = $("#to_top")

        if (bodyScroll > 700) {

            toTop.addClass("show");

        } else {

            toTop.removeClass("show");
        }
    });

    $('#to_top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 0);
        return false;
    });


    // -------- counter --------
    $('.counter').countUp({
        delay: 10,
        time: 2000
    });

    // -------- fav-btn --------
    $(".fav-btn").on("click", function(){
        $(this).toggleClass("active");
    })

    // -------- cls --------
    $(".cls").on("click", function(){
        $(this).parent().fadeOut();
    })

    // ------------ working in desktop -----------
    if ($(window).width() > 991) {
        $('.parallaxie').parallaxie({
        });
    }

    // ---------- tooltip -----------
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
    })
        
});


// ------------ Preloader -----------



$(window).on("load", function () {

    // ------------ Preloader -----------
    var body = $('body');
    body.addClass('loaded');
    setTimeout(function () {
        body.removeClass('loaded');
    }, 1500);

});


// ------------ swiper sliders -----------
$(document).ready(function () {

    // ------------ tc-header-slider1 -----------
    var imgSwiper = new Swiper('.fixed-menu .food-slider', {
        slidesPerView: "auto",
        spaceBetween: 50,
        centeredSlides: true,
        speed: 1500,
        pagination: {
            el: '.fixed-menu .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.fixed-menu .swiper-button-next',
            prevEl: '.fixed-menu .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
        },
        loop: false,
        allowTouchMove: false,
        grabCursor: false,
    });

    // ------------ tc-header-slider1 -----------
    var textSwiper = new Swiper('.fixed-menu .food-text-slider', {
        slidesPerView: 1,
        direction: 'vertical',
        spaceBetween: 50,
        centeredSlides: true,
        speed: 1500,
        pagination: false,
        navigation: {
            nextEl: '.fixed-menu .swiper-button-next',
            prevEl: '.fixed-menu .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
        },
        loop: false,
        allowTouchMove: false,
        grabCursor: false,
    });

    imgSwiper.controller.control = this.textSwiper;

});


$(function () {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // create the smooth scroller FIRST!
    const smoother = ScrollSmoother.create({
        content: "#scrollsmoother-container",
        smooth: 1.5,
        normalizeScroll: true,
        ignoreMobileResize: true,
        effects: true,
        //preventDefault: true,
        //ease: 'power4.out',
        //smoothTouch: 0.1, 
    });

});
  

$(function () {

    // ------------ team images width same height -----------
    // var images = $(".tc-team-style1 .team-card .img, .img_sm_h");
    // images.each(function () {
    //   var width = $(this).width();
    //   $(this).height(width);
    // });


});


// ------------ swiper sliders -----------
$(document).ready(function () {


    // ------------ tc-header-slider1 -----------
   var swiper = new Swiper('.tc-header-st2 .header-slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "fade", // Fade effect enable
    fadeEffect: {
        crossFade: true, // Smooth crossfade
    },
    centeredSlides: true,
    parallax: true, // rakh sakte ho ya hata sakte ho design ke hisab se
    speed: 1500,
    pagination: {
        el: '.tc-header-st2 .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.tc-header-st2 .swiper-button-next',
        prevEl: '.tc-header-st2 .swiper-button-prev',
    },
    mousewheel: false,
    keyboard: true,
    autoplay: {
        delay: 3000, // 👈 3 sec me auto slide change
        disableOnInteraction: false, // user click kare to bhi auto slide chalta rahe
    },
    loop: true, // 👈 Auto play infinite loop me chalega
    on: {
        init: function () {
            var swiper = this;
            for (var i = 0; i < swiper.slides.length; i++) {
                $(swiper.slides[i]).attr({
                    "data-swiper-parallax": 0.75 * swiper.width,
                });
            }
        },
        resize: function () {
            this.update();
        },
    },
});


    

    // ------------ services slider -----------
 var swiper = new Swiper('.tc-services-st2 .services-slider', {
         effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      coverflowEffect: {
        rotate: 40,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: false,
      },
      navigation: {
        nextEl: '.customSwiper .swiper-button-next',
        prevEl: '.customSwiper .swiper-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        }
      }
    });



////////  Photography Category start ////////
  const customSwiper = new Swiper('.customSwiper', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      coverflowEffect: {
        rotate: 40,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: false,
      },
      navigation: {
        nextEl: '.customSwiper .swiper-button-next',
        prevEl: '.customSwiper .swiper-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        }
      }
    });


    // ------------ tc-header-slider1 -----------
    var swiper = new Swiper('.tc-testimonials-st2 .testimonials-slider', {
        slidesPerView: 1,
        spaceBetween: 24,
        // centeredSlides: true,
        speed: 1000,
        pagination: {
            el: '.tc-testimonials-st2 .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.tc-testimonials-st2 .swiper-button-next',
            prevEl: '.tc-testimonials-st2 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
    });


    // ------------ blog slider -----------
    var swiper = new Swiper('.tc-blog-st2 .posts-slider', {
        slidesPerView: 5,
        spaceBetween: 24,
        // centeredSlides: true,
        speed: 1000,
        pagination: {
            el: '.tc-blog-st2 .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.tc-blog-st2 .swiper-next',
            prevEl: '.tc-blog-st2 .swiper-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });

});


// ============ Start services ===============//

const swiper = new Swiper('.services-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
    },
  });

  // ============ End services ===============//

  


  // why-choose-us.js

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".service-card");
  const images = document.querySelectorAll(".glry-img .tab-img");

  cards.forEach(card => {
    card.addEventListener("mouseenter", function () {
      const tabId = this.getAttribute("data-tab");

      // sabhi images ko hide karo
      images.forEach(img => img.classList.remove("current"));

      // sirf hovered card ka bg show karo
      const activeImg = document.getElementById(tabId);
      if (activeImg) activeImg.classList.add("current");
    });
  });
});


//================= Custom Accordion JavaScript=============

        document.addEventListener('DOMContentLoaded', function () {
            // Accordion functionality
            const accordionHeaders = document.querySelectorAll('.menu-accordion-header');

            accordionHeaders.forEach(header => {
                header.addEventListener('click', function () {
                    const targetId = this.getAttribute('data-target');
                    const targetBody = document.getElementById(targetId);
                    const isActive = this.classList.contains('active');

                    // Close all accordions
                    accordionHeaders.forEach(h => {
                        h.classList.remove('active');
                        const bodyId = h.getAttribute('data-target');
                        const body = document.getElementById(bodyId);
                        if (body) {
                            body.classList.remove('show');
                        }
                    });

                    // If not already active, open this one
                    if (!isActive) {
                        this.classList.add('active');
                        targetBody.classList.add('show');
                    }
                });
            });

            // Auto-open first accordion on page load
            if (accordionHeaders.length > 0) {
                accordionHeaders[0].click();
            }

            // Smooth scroll for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        });
    