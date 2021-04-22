function max(_array) {
  return Math.max.apply(Math, _array);
}

function mapHeight(_selector) {
  return $(_selector).map(function () {
    return $(this).outerHeight();
  });
}

function resetCardHeight() {
  $('.sc-special .cards .card .caption > h3').css('height', 'auto');
  $('.sc-special .cards .card .caption > p').css('height', 'auto');
  $('.sc-special .cards .card .caption > .action').css('height', 'auto');
}

function setCardHeight() {
  var headerHightest = max(mapHeight('.sc-special .cards .card .caption > h3'));
  var descriptionHightest = max(
    mapHeight('.sc-special .cards .card .caption > p')
  );
  var actionHightest = max(
    mapHeight('.sc-special .cards .card .caption > .action')
  );

  $('.sc-special .cards .card .caption > h3').css(
    'height',
    headerHightest + 'px'
  );
  $('.sc-special .cards .card .caption > p').css(
    'height',
    descriptionHightest + 'px'
  );
  $('.sc-special .cards .card .caption > .action').css(
    'height',
    actionHightest + 'px'
  );
}

$(document).ready(function ($) {
  $('#page').addClass('theme-onesiam');

  try {
    $('.sc-product-hero .cards').slick({
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000,
      centerMode: true,
      centerPadding: '0px',
      fade: true,
      infinite: true,
      slidesToShow: 1,
    });
  } catch (error) {
    console.log(error);
  }
  
  try {
    $('.sc-special .cards').on('init', function (slick) {
      resetCardHeight();
      setCardHeight();
    });

    $('.sc-special .cards').on('setPosition', function (slick) {
      resetCardHeight();
      setCardHeight();
    });

    const slickMain = $('.sc-special .cards').slick({
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            centerPadding: '200px',
            dots: true,
            infinite: true,
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            dots: true,
            infinite: true,
            slidesToShow: 1,
          },
        },
      ],
    });
    
    $('.sc-special .cardTab__item').on('click', function (e) {
      e.preventDefault();
      // $('.sc-special .cards').slick('unslick');
      $('.sc-special .cardWrap').removeClass('cardWrap--active');

      $('.sc-special .cardTab__item').removeClass('cardTab__item--active');
      $('.sc-special .cardTab__item .cardTab__icon').removeClass('active');

      $(this).addClass('cardTab__item--active').parent('.cardTab__icon');
      $('.sc-special .cardTab__item--active')
        .find('.cardTab__icon')
        .addClass('active');
      $('.sc-special .cardWrap-' + $(this).attr('id')).addClass(
        'cardWrap--active'
      );
      $('.sc-special .cardWrap-' + $(this).attr('id')).slick('refresh');
    });

  } catch (error) {
    console.log('>', error);
  }

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('.header-top').addClass('kcc-active');
      $('.sc-floating-apply').addClass('active');
    } else {
      $('.header-top').removeClass('kcc-active');
      $('.sc-floating-apply').removeClass('active');
    }

    var isAutoDetection = $('.sc-floating-apply-m').data('autoDetection');

    var isVisible =
      ($('.pxtm-click-btnApply:visible').visible(false, true) ||
        $('.sc-apply:visible').visible(false, true) ||
        $('.sc-apply #msform:visible').visible(false, true) ||
        $('.sc-apply #msform .field:visible').visible(false, true)) &&
      isAutoDetection;

    if ($(window).outerWidth() > 1024) {
      $('.sc-floating-apply-m').hide();

      if (!isVisible) {
        $('.sc-floating-apply').fadeIn();
      } else {
        $('.sc-floating-apply').fadeOut();
      }
    } else {
      $('.sc-floating-apply').hide();

      if (!isVisible) {
        $('.sc-floating-apply-m').fadeIn();
      } else {
        $('.sc-floating-apply-m').fadeOut();
      }
    }
  });

  $(window).trigger('scroll');

  try {
    $('.sc-benefits .cards').slick({
      autoplay: true,
      autoplaySpeed: 5000,
      centerMode: true,
      centerPadding: '0px',
      dots: true,
      slidesToShow: 3,
      speed: 400,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            centerPadding: '250px',
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            centerPadding: '150px',
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            centerPadding: '100px',
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 576,
          settings: {
            centerPadding: '20px',
            slidesToShow: 1,
          },
        },
      ],
    });
  } catch (error) {
    console.log(error);
  }

  $(window).resize(function (e) {
    $('.compn-overflow').each(function (e) {
      var compn = $(this).find('.compn');
      var compnWrapper = compn.parent();

      if (compn.outerWidth() > compnWrapper.outerWidth()) {
        $(this).find('.compn-overflow-scroll-wrapper').show();
      } else {
        $(this).find('.compn-overflow-scroll-wrapper').hide();
      }
    });
  });

  try {
    $('.sc-services .cards')
      .slick({
        appendDots: $('.sc-services .cards .card .dots-slot'),
        dots: true,
        fade: true,
        slidesToShow: 1,
        speed: 0,
      })
      .on('afterChange', function (e, slick, curr) {
        slick.$dots.each(function (i) {
          $(this)
            .find('li')
            .removeClass('slick-active')
            .attr('aria-hidden', true);
          $(this)
            .find('li')
            .eq(curr)
            .addClass('slick-active')
            .attr('aria-hidden', false);
        });
      });
  } catch (error) {
    console.log(error);
  }

  // popup
  $('.toggle-popup').magnificPopup({
    type: 'inline',
    mainClass: 'kcc popup-content-style',
    autoFocusLast: false,
    fixedContentPos: true,
  });
});
