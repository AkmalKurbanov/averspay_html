$(document).ready(function () {

  const options = {
    plugins: [new SwupScriptsPlugin({
        head: true,
        body: true,
        optin: true
      }),
      new SwupDebugPlugin()
    ]
  };
  const swup = new Swup(options);

  $('.hidden_map .contacts_map iframe').clone().appendTo('.contacts_map .map_wrap');
  $('.hidden_map .terminal_map iframe').clone().appendTo('.terminal_map .map_wrap');
  $('.contacts_map .map_wrap frame, .terminal_map .map_wrap frame').css('width', '100%');

  swup.on('contentReplaced', function () {



    $('.thematic-image').addClass('transition-thematicImage');
    // $('.nav__item').on('click', function () {
    //   $(this).toggleClass('show');
    //   $('.nav__item').not(this).removeClass('show');
    // });

    // jQuery(function ($) {
    //   $(document).mouseup(function (e) {
    //     var div = $(".nav__item");
    //     if (!div.is(e.target) &&
    //       div.has(e.target).length === 0) {
    //       $('.nav__item').removeClass('show');
    //     }
    //   });
    // });

    setTimeout(function () {
      $('.wide').addClass('wide-js');
      $('.normal').addClass('normal-js');

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


  });




  setTimeout(function () {
    $('.wide').addClass('wide-js');

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

  }, 500);




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
  $('.transition-terminalFade').addClass('slideUp');
  $('.transition-terminalFade').removeClass('transition-thematicImage');

  let thematicImage = $('.thematic-image, .transition-terminalFade').width();
  let totalWidth = (thematicImage / 2.7);
  let thematic = (thematicImage / 2);
  document.documentElement.style.setProperty('--thematic', `${thematic}px`);
  document.documentElement.style.setProperty('--totalWidth', `${totalWidth}px`);
console.log(thematic)

});