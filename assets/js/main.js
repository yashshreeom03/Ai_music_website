/*----------------------------------------------------------------------
Template #
Author: #
Description: #
Author URI: #
Version: 1.0 
----------------------------------------------------------------------*/

/*----------------------------------------------------------------------
    Js Index Here	
    ===================
	## Main Menu
	## Back to Top
	## Testimonials Slider
	## WOW
	## Preloader
	## Window Scroll
	## Cursor
	
----------------------------------------------------------------------*/

(function ($) {
  "use strict";

  $(document).ready(function () {
      /******************* ## Main Menu ******************/
      if ($(".menu-toggle").length) {
        const navMenu = $(".ll-nav-menu");
        const overlay = $(".offcanvas-overlay");
        const body = $("body");
      
        function handleNavMenu() {
          const isMobile = $(window).width() <= 992;
      
          if (!isMobile) {
            // Reset everything on desktop
            navMenu.removeClass("open closing");
            overlay.removeClass("visible");
            body.removeClass("no-scroll");
          }
        }
      
        // Open menu
        $(".menu-toggle").on("click", function () {
          navMenu.removeClass("closing").addClass("open");
          overlay.addClass("visible");
          body.addClass("no-scroll");
        });
      
        // Close menu
        function closeMenu() {
          if (navMenu.hasClass("open")) {
            navMenu.addClass("closing");
      
            // Delay to match CSS animation
            setTimeout(() => {
              navMenu.removeClass("open closing");
              overlay.removeClass("visible");
              body.removeClass("no-scroll");
            }, 300); // Match with CSS transition time
          }
        }
      
        // Close triggers
        $(".menu-toggle-close, .offcanvas-overlay").on("click", closeMenu);
      
        $(".main-menu a").on("click", function () {
          if ($(window).width() <= 991 && navMenu.hasClass("open")) {
            closeMenu();
          }
        });
      
        // Handle resize (optional)
        $(window).on("resize", handleNavMenu).trigger("resize");
        handleNavMenu();
      }
      
  
      /******************* ## Back to Top ******************/
      if ($(".back-to-top").length) {
          $(".back-to-top").click(function () {
              $("html, body").animate({ scrollTop: 0 }, 700);
              return false;
          });
      }


      /******************* ## Testimonials Slider ******************/
      if ($(".slider-for").length > 0) {
          $(".slider-for").slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              fade: true,
              asNavFor: ".slider-nav",
              arrows: false,
          });

          $(".slider-nav").slick({
              slidesToShow: 5,
              slidesToScroll: 1,
              asNavFor: ".slider-for",
              dots: false,
              arrows: false,
              centerMode: true,
              centerPadding: "0px",
              focusOnSelect: true,
              responsive: [
                  {
                      breakpoint: 1024,
                      settings: {
                          slidesToShow: 3,
                      },
                  },
                  {
                      breakpoint: 768,
                      settings: {
                          slidesToShow: 1,
                      },
                  },
              ],
          });

          $(".custom-prev").click(function () {
              $(".slider-nav").slick("slickPrev");
          });

          $(".custom-next").click(function () {
              $(".slider-nav").slick("slickNext");
          });
      }
  });

  /******************* ## WOW ******************/
  // if (typeof WOW != "undefined") {
  //     new WOW({}).init();
  // }

  /******************* ## Preloader ******************/
  $(document).ready(function () {
    let percent = 0;
    const $percentEl = $("#percent");
    const $loader = $(".loader");
    const target = 100;
  
  
    const interval = setInterval(function () {
      if (percent < target) {
        percent++;
        $percentEl.text(percent + "%");
      } else {
        clearInterval(interval);
  
        $loader.fadeOut(500, function () {
        });
      }
    }, 30);
  });

  /******************* ## Window Scroll ******************/
  $(window).on("scroll", function () {
    let windowpos = $(window).scrollTop();
    let sticky = $(".header-area");
  
    function headerStyle() {
      if ($(".header-area").length) {
        const scrollLink = $(".back-to-top");
        if (windowpos >= 100) {
          scrollLink.addClass("scroll-to-target");
        } else {
          scrollLink.removeClass("scroll-to-target");
        }
      }
    }
    headerStyle();
  
    function stickyHeader() {
      if ($(".header-area").length) {
        if (windowpos < 100) {
          sticky.removeClass("sticky");
        } else {
          sticky.addClass("sticky");
        }
      }
    }
    stickyHeader();
  });


  /******************* ## Cursor ******************/
  $(document).ready(function () {
    const $cursorTag = $(".custom-cursor");
    if ($cursorTag.length) {
      const $balls = $cursorTag.find("div");
      const $ballMessage = $cursorTag.find("div span");
      const $cursorData = $("[data-cursor]");
      const $cursorImg = $cursorTag.find(".custom-cursor__img");
  
      let aimX = 0;
      let aimY = 0;
  
      $balls.each(function (index) {
        let $ball = $(this);
        let currentX = 0;
        let currentY = 0;
        let speed = 0.15 - index * 0.025;
  
        function animateCursor() {
          currentX += (aimX - currentX) * speed;
          currentY += (aimY - currentY) * speed;
  
          $ball.css({
            left: currentX + "px",
            top: currentY + "px",
          });
  
          requestAnimationFrame(animateCursor);
        }
        animateCursor();
      });
  
      $(document).on("mousemove", function (event) {
        aimX = event.pageX;
        aimY = event.pageY;
      });
  
      $cursorData.on("mouseover", function () {
        let text = $(this).data("cursor");
        $ballMessage.addClass("visible").html(text);
        $cursorImg.addClass("visible");
      });
  
      $cursorData.on("mouseout", function () {
        $ballMessage.removeClass("visible");
        $cursorImg.removeClass("visible");
      });
    }
  });
      


  $(".hero-img-main").on("mousemove", function (e) {
    if ($(window).width() > 991) {
      const wrapper = $(this);
      const img = wrapper.find(".hero-img");
  
      const offset = wrapper.offset();
      const x = e.pageX - offset.left;
      const y = e.pageY - offset.top;
  
      const centerX = wrapper.width() / 2;
      const centerY = wrapper.height() / 2;
  
      const rotateX = (centerY - y) / 50;
      const rotateY = (x - centerX) / 50;
  
      img.css("transform", `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
      wrapper.find(".arrow-icon").css("opacity", 1);
    }
  });
  
  $(".hero-img-main").on("mouseleave", function () {
    const img = $(this).find(".hero-img");
    img.css("transform", "rotateX(0deg) rotateY(0deg)");
    $(this).find(".arrow-icon").css("opacity", 0);
  });


  /******************* ## Scroll Nav Menu Active ******************/
  $(document).ready(function () {
    const sections = $("section[id]");
    const navLinks = $(".main-menu ul li a");
  
      $(window).on("scroll", function () {
        let scrollPos = $(window).scrollTop();
        let currentSection = null;
    
        sections.each(function () {
          const sectionTop = $(this).offset().top - 100;
          const sectionHeight = $(this).outerHeight();
    
          if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            currentSection = $(this).attr("id");
            return false; 
          }
      });
    
        navLinks.removeClass("active");
    
        if (currentSection) {
          navLinks.each(function () {
            const href = $(this).attr("href");
            if (href.includes(currentSection)) {
              $(this).addClass("active");
            }
          });
        }
      });
  });
  


  $('#myTextArea').on('input keyup paste', function() {
    var $el = $(this),
        offset = $el.innerHeight() - $el.height();

    if ($el.innerHeight() < this.scrollHeight) {
      $el.height(this.scrollHeight - offset);
    } else {
      
      $el.height(1);
      $el.height(this.scrollHeight - offset);
    }
  });


  // Add your audio/video control logic here
  $(document).ready(function () {
    let isPlaying = false;

    $('.play-button').on('click', function () {
      isPlaying = !isPlaying;

      const $icon = $(this).find('i');
      $icon.toggleClass('fa-play', !isPlaying);
      $icon.toggleClass('fa-pause', isPlaying);

      if (isPlaying) {
        console.log("Playing...");
      } else {
        console.log("Stopped.");
      }
    });
  });
    
})(window.jQuery);

