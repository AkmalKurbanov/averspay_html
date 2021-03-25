$(document).ready(function () {


  setTimeout(function () {
    $('.wide').addClass('wide-js');
    $('.normal').addClass('normal-js');

    $('.bottom').css('opacity', '1');
    // parnters start
    $('.partners-js').slick({
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      infinite: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000,
      draggable: true,
      prevArrow: '<i class="icon-arrow-long"></i>',
      nextArrow: '<i class="icon-arrow-long"></i>'
    });
    // parnters start end  

  }, 500);


  const swup = new Swup();

  swup.on('contentReplaced', function () {
    $('.thematic-image').addClass('transition-thematicImage');
    $('.nav__item').on('click', function () {
      $(this).toggleClass('show');
      $('.nav__item').not(this).removeClass('show');
    });

    jQuery(function ($) {
      $(document).mouseup(function (e) {
        var div = $(".nav__item");
        if (!div.is(e.target) &&
          div.has(e.target).length === 0) {
          $('.nav__item').removeClass('show');
        }
      });
    });

    setTimeout(function () {
      $('.wide').addClass('wide-js');
      $('.normal').addClass('normal-js');

      $('.nav ul li ul').clone().appendTo('.pagination');
      $('.pagination a').text('');



      // parnters start
      $('.partners-js').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        draggable: true,
        prevArrow: '<i class="icon-arrow-long"></i>',
        nextArrow: '<i class="icon-arrow-long"></i>'
      });
      // parnters start end  

      $('.bottom').css('opacity', '1');

    }, 500);
  });

  $('.nav__item').on('click', function () {
    $(this).toggleClass('show');
    $('.nav__item').not(this).removeClass('show');
  });

  jQuery(function ($) {
    $(document).mouseup(function (e) {
      var div = $(".nav__item");
      if (!div.is(e.target) &&
        div.has(e.target).length === 0) {
        $('.nav__item').removeClass('show');
      }
    });
  });

  new WOW().init();




  $('.thematic-image').addClass('transition-thematicImage');

 






