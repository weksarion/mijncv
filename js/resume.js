/*
 * Weksarion  (https://github.com/weksarion)
----------------------------------[==> Ihor Stoianovskyi | 2025 jaar <==]----------------------------------
*/

(function($) {
  "use strict"; // Функция старта использования структур

  // Плавная прокрутка с помощью плавности jQuery
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Закрывает ад. меню во время нажатия по ссылке-тригере прокрутки
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict
