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
	## Aos
	## Preloader
	## Window Scroll
	## Cursor
	## Hero Img 3D
  ## Scroll Nav Menu Active
  ## Audio Btn
  ## Countdown for Our Success
  ## About
  ## Progress Bar
  ## FAQ
	
----------------------------------------------------------------------*/

(function ($) {
  "use strict";

  $(document).ready(function () {
    /******************* ## Main Menu ******************/
    if ($(".menu-toggle").length) {
      const navMenu = $(".mobile-nav-menu");
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
    if ($(".testimonials-section").length) {
      if ($(".single-item").length > 0) {
        $(".single-item").slick({
          dots: false,
          arrows: false, 
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          responsive: [
            {
              breakpoint: 991,
              settings: {
                dots: true 
              }
            }
          ]
        });
        $(".custom-next").on("click", function () {
          $(".single-item").slick("slickNext");
        });
    
        $(".custom-prev").on("click", function () {
          $(".single-item").slick("slickPrev");
        });
      }
    }    
  });

  /******************* ## Aos ******************/
  AOS.init();

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

        $loader.fadeOut(500, function () {});
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
  
    function initCustomCursor() {
      if ($(window).width() <= 991) {
        $cursorTag.hide();
        return;
      }
  
      $cursorTag.show();
  
      const $balls = $cursorTag.find("div");
      const $ballMessage = $cursorTag.find("div span");
      const $cursorData = $("[data-cursor]");
      const $cursorImg = $cursorTag.find(".custom-cursor__img");
  
      let aimX = 0;
      let aimY = 0;
  
      const cursorSize = 50;
  
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
  
      $(document).on("mousemove.customCursor", function (event) {
        aimX = event.clientX;
        aimY = event.clientY;
      });
  
      $cursorData.on("mouseover.customCursor", function () {
        let text = $(this).data("cursor");
        $ballMessage.addClass("visible").html(text);
        $cursorImg.addClass("visible");
      });
  
      $cursorData.on("mouseout.customCursor", function () {
        $ballMessage.removeClass("visible");
        $cursorImg.removeClass("visible");
      });
    }
  
    initCustomCursor();
  
    $(window).on("resize", function () {
      $(document).off(".customCursor");
      $("[data-cursor]").off(".customCursor");
      initCustomCursor();
    });
  });

  /******************* ## Hero Img 3D ******************/
  $(".hero-image-container").on("mousemove", function (e) {
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

  $(".hero-image-container").on("mouseleave", function () {
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

  /******************* ## Audio Btn ******************/
    $(document).ready(function () {
      let currentAudio = null; 
      let currentButton = null; 
    
      $(".play-button").on("click", function () {
        const $button = $(this);
        const $icon = $button.find("i");
        const $audio = $button.siblings("audio")[0]; 
    
        if (currentAudio && currentAudio !== $audio) {
          currentAudio.pause();
          currentAudio.currentTime = 0;
          $(currentButton).find("i").removeClass("fa-pause").addClass("fa-play");
        }
    
        if ($audio.paused) {
          $audio.play();
          $icon.removeClass("fa-play").addClass("fa-pause");
          currentAudio = $audio;
          currentButton = $button;
          console.log("Playing...");
        } else {
          $audio.pause();
          $audio.currentTime = 0;
          $icon.removeClass("fa-pause").addClass("fa-play");
          currentAudio = null;
          currentButton = null;
          console.log("Stopped.");
        }
      });
    });  

  /******************* ## Countdown for Our Success ******************/
  const countObServer = new IntersectionObserver((entries, observer) => {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        let target = $(entry.target);
        if (!target.hasClass("counted")) {
          target.addClass("counted");
          let countTo = target.data("stop");
          $({ countNum: target.text() }).animate(
            { countNum: countTo },
            {
              duration: 2000,
              easing: "swing",
              step: function () {
                target.text(Math.floor(this.countNum));
              },
              complete: function () {
                target.text(this.countNum);
              },
            }
          );
        }
      }
    });
  });

  $(".count-text").each(function () {
    countObServer.observe(this);
  });
  
  /******************* ## FAQ ******************/
  $(document).ready(function () {
    const $faqItems = $(".accordion-card");

    const $firstItem = $faqItems.first();
    if ($firstItem.length) {
      $firstItem.addClass("active");
      const $firstAnswer = $firstItem.find(".accordion-content");
      $firstAnswer.css("max-height", $firstAnswer[0].scrollHeight + "px");
    }

    $faqItems.on("click", function () {
      const $clickedItem = $(this);
      const $clickedAnswer = $clickedItem.find(".accordion-content");

      $faqItems.not($clickedItem).each(function () {
        $(this).removeClass("active").find(".accordion-content").css("max-height", 0);
      });

      $clickedItem.toggleClass("active");

      if ($clickedItem.hasClass("active")) {
        $clickedAnswer.css("max-height", $clickedAnswer[0].scrollHeight + "px");
      } else {
        $clickedAnswer.css("max-height", 0);
      }
    });
  });
})(window.jQuery);


$(document).ready(function () {
  const pricingData = {
    monthly: [
      { price: "$0", period: "/month" },
      { price: "$10", period: "/month" },
      { price: "$50", period: "/month" }
    ],
    yearly: [
      { price: "$0", period: "/year" },
      { price: "$100", period: "/year" },
      { price: "$500", period: "/year" }
    ]
  };

  $(".plan-btn").on("click", function () {
    const selectedPlan = $(this).data("plan");

    $(".plan-btn").removeClass("active");
    $(this).addClass("active");

    const selectedPrices = pricingData[selectedPlan];
    $(".pricing-row .rainbow-pricing").each(function (index) {
      $(this).find(".price-text").text(selectedPrices[index].price);
      $(this).find(".text").text(selectedPrices[index].period);
    });
  });
});
