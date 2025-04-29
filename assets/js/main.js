/*----------------------------------------------------------------------
Template Name: Song Al Generator One Page HTML Template - Song Al
Description: SongAI is a Creative and Modern customer-focused Responsive HTML template built for the Song Al Generator & AI Technology Startups.
Author: webuitheme
Author URI: https://themeforest.net/user/webuitheme
Version: 1.0 

----------------------------------------------------------------------
    Js Index Here
----------------------------------------------------------------------
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
	
	$(document).ready(function(){
		
		function mainMenu(){
			 // Variables
			let navMenu = $(".songai-nav-menu");
			let body = $("body");
			
			// navbar toggler
			$(".menu-toggle").on("click", function () {
				navMenu.addClass("open");
				body.addClass("no-scroll");
			});
			
		}
		mainMenu();
		
		/*** Off Overlay ***/
		$(".menu-toggle,.header-overlay").on("click", function () {
			$(".header-overlay").toggleClass("visible");
		});
		
		$(".header-overlay").on("click", function () {
			$(".songai-nav-menu").removeClass("open");
			$("body").removeClass("no-scroll");
		});
		
		
		/*** playing ***/
		if($(".hero-content .playing").length) {
			let playingHero = '';
			for (let j = 0; j < 8; j++) { 
				for (let i = 1; i <= 5; i++) {
					playingHero += `<div class="rect${i}"></div>`;
				}
			}
			$(".hero-content .playing").append(playingHero);
		}
		if($(".playing.style-one").length) {
			let playingHero = '';
			for (let j = 0; j < 3; j++) { 
				for (let i = 1; i <= 5; i++) {
					playingHero += `<div class="rect${i}"></div>`;
				}
			}
			$(".playing.style-one").append(playingHero);
		}
		
		/*** 3D Effect for Hero Section Image  ***/
		function heroImageMove(){
			$(".expand-hero-image").on("mousemove", function (e) {
			  let wrapper = $(this);
			  let img = wrapper.find(".hero-img");
			  
			  let offset = wrapper.offset();
			  let x = e.pageX - offset.left;
			  let y = e.pageY - offset.top;
			  
			  let centerX = wrapper.width() / 2;
			  let centerY = wrapper.height() / 2;
			  
			  let rotateX = (centerY - y) / 50;
			  let rotateY = (x - centerX) / 50;

			  img.css("transform", `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
			  wrapper.find(".arrow-icon").css("opacity", 1);
			
		  });
		}
		heroImageMove();
		function heroImageLeave(){
		  $(".expand-hero-image").on("mouseleave", function () {
			const img = $(this).find(".hero-img");
			img.css("transform", "rotateX(0deg) rotateY(0deg)");
			$(this).find(".arrow-icon").css("opacity", 0);
		  });
		}
		heroImageLeave();
		
		/*** Audio Play ***/
		if($(".play-button").length) {
			let isPlaying = false;
			$(".play-button").on("click", function () {
			  isPlaying = !isPlaying;

			  const $icon = $(this).find("i");
			  $icon.toggleClass("fa-play", !isPlaying);
			  $icon.toggleClass("fa-pause", isPlaying);

			});
		}
		
		/*** Song Progress  ***/
		function songProgress(target) {
			const $progressBar = $(".song-count-line");
			const $progressText = $("#count-number");
			let current = 0;
			const increment = target / 100;
			const interval = setInterval(function() {
				current += increment;
				if (current >= target) {
					current = target; 
					clearInterval(interval);
				}
	  
				$progressText.text(Math.round(current) + "%");
				$progressBar.css("width", Math.round(current) + "%");
			}, 10);
		}
		if($(".song-progressbar-wrapper").length){
			let isAnimating = false;
			const observer = new IntersectionObserver(function(entries) {
				entries.forEach(function(entry) {
					if (entry.isIntersecting && !isAnimating) {
						isAnimating = true; 
						songProgress(67);
					}
				});
			}, { threshold: 0.5 });
			observer.observe(document.querySelector(".song-progressbar-wrapper"));
		}
		
		/*** Testimonials ***/
		if ($(".testimonials-section").length) {
		  if ($(".testimonials-slider").length > 0) {
			$(".testimonials-slider").slick({
			  dots: false,
			  arrows: false, 
			  slidesToScroll: 1,
			  autoplay: false,
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
			$(".testimonials .next-arrow").on("click", function () {
			  $(".testimonials-slider").slick("slickNext");
			});
		
			$(".testimonials .prev-arrow").on("click", function () {
			  $(".testimonials-slider").slick("slickPrev");
			});
		  }
		}
	});
	/*==========================================
		Execute when the document is scroll
	==========================================*/
	$(window).on("scroll", function () {
		
		let windowpos = $(window).scrollTop();
		
		/*** Sticky header ***/
		if ($(".header-area").length) {
			let sticky = $(".header-area");
			if (windowpos < 100) {
			  sticky.removeClass("sticky");
			} else {
			  sticky.addClass("sticky");
			}
		  }

		/* function headerStyle() {
		  if ($(".header-area").length) {
			const scrollLink = $(".back-to-top");
			if (windowpos >= 100) {
			  scrollLink.addClass("scroll-to-target");
			} else {
			  scrollLink.removeClass("scroll-to-target");
			}
		  }
		}
		headerStyle(); */
	});
	/*==========================================
		Execute when the document is loaded
	==========================================*/
  
	$(window).on('load', function () {

        /*** Preloader ***/
        function songAiPreloader() {
            let percent = 0;
			let $percentEl = $("#percent");
			let $loader = $(".loader");
			let target = 100;

			let interval = setInterval(function () {
			  if (percent < target) {
				percent++;
				$percentEl.text(percent + "%");
			  } else {
				clearInterval(interval);

				$loader.fadeOut(500, function () {});
			  }
			}, 30);
        }
        songAiPreloader();  
		
		/*** Custom Cursor ***/
		if ($('.custom-cursor').length) {
			const $cursorTag = $(".custom-cursor");
			const $balls = $cursorTag.find("div");
			const $cursorData = $("[data-cursor]");

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

					$ball.css({left: currentX + "px",top: currentY + "px"});

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
			});
		}		
    });
	
	/*==========================================
		AOS Animation
	==========================================*/
	AOS.init();
	
})(window.jQuery);


