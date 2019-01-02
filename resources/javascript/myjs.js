$(document).ready(function () {
  // sticky navigation
  $('.js--section-mission').waypoint(function (direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: "130px;"
  });
  // scroll on buttons "hire us"
  $('.js--scroll-to-contact').click(function () {
    $("html,body").animate({
      scrollTop: $(".js--section-plans").offset().top - 100
    }, 1000);
  });
  // scroll on buttons "Our work"
  $('.js--scroll-to-work').click(function () {
    $("html,body").animate({
      scrollTop: $(".js--section-work").offset().top - 100
    }, 1000);
  });

  // navigation scrool
  $(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - 120
          }, 1000);
          return false;
        }
      }
    });
  });
  // animation on scroll
  $('.js--wp-1').waypoint(function (direction) {
    $('.js--wp-1').addClass('animated fadeInUp')
  }, {
    offset: '50%'
  });
  $('.js--wp-2').waypoint(function (direction) {
    $('.js--wp-2').addClass('animated fadeInLeft')
  }, {
    offset: '50%'
  });
  $('.js--wp-3').waypoint(function (direction) {
    $('.js--wp-3').addClass('animated fadeInRight')
  }, {
    offset: '50%'
  });
  $('.js--wp-4').waypoint(function (direction) {
    $('.js--wp-4').addClass('animated fadeIn')
  }, {
    offset: '50%'
  });
});