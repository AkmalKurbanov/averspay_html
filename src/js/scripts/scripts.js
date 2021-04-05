$(document).ready(function () {
  // $('.hidden_map .contacts_map iframe').clone().appendTo('.contacts_map .map_wrap');
  // $('.hidden_map .terminal_map iframe').clone().appendTo('.terminal_map .map_wrap');
  // $('.contacts_map .map_wrap frame, .terminal_map .map_wrap frame').css('width', '100%');



  $(".map_wrap").on({
    'mouseenter': function () {
      $('.terminalFade').addClass('terminalFadeHover');
    },
    'mouseleave': function () {
      $('.terminalFade').removeClass('terminalFadeHover');
    }
  });

  $('.play_btn_wrap').on('click', function () {
    $('.thematic-image').addClass('them-demonstration');
    $('.play_btn_wrap').addClass('--hide');
    $('body').addClass('them-demonstration-layout');
  });

  jQuery(function ($) {
    $(document).mouseup(function (e) {
      var div = $(".them-demonstration .thematic-gif, .play_btn_wrap");
      if (!div.is(e.target) &&
        div.has(e.target).length === 0) {
        $('.them-demonstration').removeClass('them-demonstration');
        $('body').removeClass('them-demonstration-layout');
        setTimeout(function () {
          $('.play_btn_wrap').removeClass('--hide');
        }, 1000);

      }
    });
  });

  $(".nav ul li").each(function () {
    if ($(this).has('ul')) {
      $(this).children('a').on('click', function (event) {
        event.preventDefault();
      });
    }
  });

  $(".nav ul li ul li").each(function () {
    if ($(this).hasClass('nav__item_active')) {
      $(this).parent().parent().addClass('nav__item_active');
    }
  });
  $('.nav ul li ul').clone().appendTo('.pagination');
  $('.pagination a').text('');
  $('.pagination ul:not(:first)').remove()
  var $classLoop = $('#slide_word > .slide_word_item'),
    i = 0;
  setInterval(function () {
    $classLoop.removeClass('current').filter($classLoop[i]).toggleClass('current');
    i < $classLoop.length - 1 ? i++ : i = 0;
  }, 2500);

  $('.logo a').hover(function () {
    $('#slide_word').css('opacity', '0');
  });

  $('.logo a').on('mousemove', function (e) {
    $('#slide_word').css('opacity', '1');
  });

  $('body').on('mousemove', function (e) {
    $('#pursuer').offset({
      top: parseInt(e.pageY - $('#pursuer').height() / 2),
      left: parseInt(e.pageX - $('#pursuer').width() / 2)
    });
  });






  $(".btn__inner").mouseenter(function (e) {
    var parentOffset = $(this).offset();

    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).prev(".btn__bubble").css({
      "left": relX,
      "top": relY
    });
    $(this).prev(".btn__bubble").removeClass("desplode-bubble");
    $(this).prev(".btn__bubble").addClass("explode-bubble");

  });

  $(".btn__inner").mouseleave(function (e) {

    var parentOffset = $(this).offset();

    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).prev(".btn__bubble").css({
      "left": relX,
      "top": relY
    });
    $(this).prev(".btn__bubble").removeClass("explode-bubble");
    $(this).prev(".btn__bubble").addClass("desplode-bubble");

  });




  $("li, a, .list__item, .map_wrap, .btn").on({
    'mouseenter': function () {
      $('#pursuer').css({
        'opacity': '0',
        'z-index': '0',
        'transform': 'scale(0)',
      });
    },
    'mouseleave': function () {
      $('#pursuer').css({
        'opacity': '1',
        'z-index': '999999999',
        'transform': 'scale(1)',
      });
    }
  });






  $('nav ul li ul').parent().append('<i class="icon-up-open"></i>');
  $('.nav ul li i:not(:first)').remove()
  setTimeout(function () {
    $('.bottom').css('opacity', 1);
  }, 500);

  $('.col .col__wrap:first').prepend('<div class="mobile_menu"><div class="mobile_menu-wrap"><div class="second_level_menu"></div><div class="first_level_menu"></div></div></div>');
  $('.nav ul').not('.nav ul li ul').clone().appendTo('.first_level_menu')
  $('.first_level_menu ul li ul').remove();
  $('.nav ul li ul').clone().appendTo('.second_level_menu')


  $('.hamburger').on('click', function () {
    $('.mobile_menu:not(:first)').remove()
    $(this).toggleClass('open-ham');
    $('.mobile_menu').toggleClass('open-menu');
    $('body').toggleClass('scroll-block');
    $(".mobile_menu a[href=''], .mobile_menu a:not([href])").parent().hide();
  });
  $('.nav li a').on('click', function () {
    $('.mobile_menu').removeClass('open-menu');
    $('.hamburger').removeClass('open-ham');

  });

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



  swup.on('contentReplaced', function () {

    $(".nav ul li ul li").each(function () {
      if ($(this).hasClass('nav__item_active')) {
        $(this).parent().parent().addClass('nav__item_active');
      }
    });
    $('.nav ul li ul').clone().appendTo('.pagination');
    $('.pagination a').text('');

    $('body').removeClass('scroll-block');
    $('.thematic-image').addClass('transition-thematicImage');

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
        nextArrow: '<i class="icon-arrow-long"></i>',
        responsive: [{
            breakpoint: 1770,
            settings: {
              slidesToShow: 5
            }
          },
          {
            breakpoint: 1500,
            settings: {
              slidesToShow: 4
            }
          }, {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5
            }
          }, {
            breakpoint: 576,
            settings: {
              slidesToShow: 3
            }
          }
        ]
      });
      // parnters start end  

      $('.bottom').css('opacity', 1);
    }, 600);


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
      nextArrow: '<i class="icon-arrow-long"></i>',
      responsive: [{
          breakpoint: 1770,
          settings: {
            slidesToShow: 5
          }
        },
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 4
          }
        }, {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5
          }
        }, {
          breakpoint: 576,
          settings: {
            slidesToShow: 3
          }
        }
      ]
    });

  }, 600);




  $('.nav ul li').on('click', function () {
    $(this).toggleClass('show');
    $(this).find('ul li').removeClass('show');
    $('.nav ul li').not(this).removeClass('show');
  });

  jQuery(function ($) {
    $(document).mouseup(function (e) {
      var div = $(".nav ul li");
      if (!div.is(e.target) &&
        div.has(e.target).length === 0) {
        $('.nav ul li').removeClass('show');
      }
    });
  });

  wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: false,
    live: true
  })
  wow.init();



  $('.thematic-image').addClass('transition-thematicImage');
  $('.transition-terminalFade').addClass('slideUp');
  $('.transition-terminalFade').removeClass('transition-thematicImage');

  let thematicImage = $('.thematic-image, .transition-terminalFade').width();
  let headerHeight = $('.header').width();
  if ($(window).width() < 1025) {
    let totalWidth = (thematicImage / 1.7);
    document.documentElement.style.setProperty('--totalWidth', `${totalWidth}px`);
  } else {
    let totalWidth = (thematicImage / 2.7);
    document.documentElement.style.setProperty('--totalWidth', `${totalWidth}px`);
  }


  let thematic = (thematicImage / 2);
  document.documentElement.style.setProperty('--thematic', `${thematic}px`);

  document.documentElement.style.setProperty('--headerHeight', `${headerHeight}px`);

  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

});