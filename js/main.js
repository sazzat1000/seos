$(document).ready(function() {


/* 1. Proloder */
$(window).on('load', function () {
  $('#preloader-active').delay(450).fadeOut('slow');
  $('body').delay(450).css({
    'overflow': 'visible'
  });
});




  // Slick Nav Start ==================================================
  $(".menu").slicknav({
    brand:
      '<a href="#"><img src="img/logo/logo.png" alt="Logo" title="Logo" /></a>',
    closedSymbol: "+",
    openedSymbol: "-"
  });
  // Slick Nav End ==================================================

  // Testimonial Start ==================================================
  var testimonial = $(".all-testimonial");
  if (testimonial.length) {
    testimonial.slick({
      dots: false,
      infinite: true,
      speed: 1000,
      autoplay: true,
      loop: true,
      arrows: false,
      prevArrow:
        '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrow: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
      ]
    });
  };

/* 7.  Custom Sticky Menu  */
$(window).on('scroll', function () {
  var scroll = $(window).scrollTop();
  if (scroll < 245) {
    $(".header-sticky").removeClass("sticky-bar");
  } else {
    $(".header-sticky").addClass("sticky-bar");
  }
});

// $(window).on('scroll', function () {
//   var scroll = $(window).scrollTop();
//   if (scroll < 245) {
//       $(".header-sticky").removeClass("sticky");
//   } else {
//       $(".header-sticky").addClass("sticky");
//   }
// });
































});
