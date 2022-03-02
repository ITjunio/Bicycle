function ibg() {

   $.each($('.ibg'), function (index, val) {
      if ($(this).find('img').length > 0) {
         $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
      }
   });
}

ibg();

//----------------------------------------------------------------------

if ($('.slider__body').length > 0) {
   $('.slider__body').slick({
      //autoplay:true,
      //infinite:false,
      adaptiveHeight: true,
      dots: true,
      arrows: true,
      slidesToShow: 1,
      accessibility: false,
      atoplaySpeed: 3000,
      nextArrow: '<button type="button" class="slick-next"></button>',
      prevArrow: '<button type="button" class="slick-prev"></button>',
      responsive: [{
         breackpoint: 768,
         settings: {}
      }]
   });
}

//------------------------------------------------------------------------------

$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock'); /*блочим прокрутку при открытии меню*/
   })
})

//------------------------------------------------------------------------------

$(window).resize(function (event) {
   adaptive_function();
})
function adaptive_header(w, h) {
   var headerMenu = $('.header__menu');
   var headerNav = $('.header__nav');
   if (w < 769) {
      if (!headerNav.hasClass('done')) {
         headerNav.addClass('done').appendTo(headerMenu);
      }
   } else {
      $.each($('.header__nav'), function (index, val) {
         if ($(this).hasClass('nav-left')) {
            if ($(this).hasClass('done')) {
               $(this).removeClass('done').prependTo($('.header__row'));
            }
         } else {
            if ($(this).hasClass('done')) {
               $(this).removeClass('done').appendTo($('.header__row'));
            }
         }
      });
   }
}
function adaptive_function() {
   var w = $(window).outerWidth();
   var h = $(window).outerHeight();
   adaptive_header(w, h);
}
adaptive_function();