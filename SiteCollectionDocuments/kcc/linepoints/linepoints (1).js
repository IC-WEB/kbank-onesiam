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

document.querySelector('main').classList.add('loading');

$(function () {
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

    $('.sc-special .cards').slick({
      centerMode: true,
      centerPadding: '0px',
      infinite: true,
      dots: true,
      slidesToShow: 1,
      variableWidth: true,
      lazyLoad: 'progressive',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            centerPadding: '200px',
            dots: true,
            infinite: true,
            slidesToShow: 1,
            variableWidth: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            variableWidth: false,
          },
        },
      ],
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
        $('.sc-floating-apply').fadeIn(0);
      } else {
        $('.sc-floating-apply').fadeOut(0);
      }
    } else {
      $('.sc-floating-apply').hide();

      if (!isVisible) {
        $('.sc-floating-apply-m').fadeIn(0);
      } else {
        $('.sc-floating-apply-m').fadeOut(0);
      }
    }
  });

  $(window).trigger('scroll');

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

  // popup
  $('.toggle-popup').magnificPopup({
    type: 'inline',
    mainClass: 'kcc popup-content-style',
    autoFocusLast: false,
    fixedContentPos: true,
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

  // bottom bar tel link
  setTimeout(function () {
    $('.sc-bottom-bars .bottom-bars .list:last-child a').prop(
      'href',
      'tel:+6628888888'
    );
  }, 2000);

  // uat shortcutnav
  $('nav.shortcutnav').hide();
});
