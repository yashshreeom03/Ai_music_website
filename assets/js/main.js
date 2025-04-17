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
  if (typeof WOW != "undefined") {
      new WOW({}).init();
  }

  /******************* ## Preloader ******************/
  $(window).on("load", function () {
      function handlePreloader() {
          if ($(".dh-preloader").length) {
              $(".dh-preloader").delay(0).fadeOut(700);
          }
      }
      handlePreloader();
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



    
})(window.jQuery);
