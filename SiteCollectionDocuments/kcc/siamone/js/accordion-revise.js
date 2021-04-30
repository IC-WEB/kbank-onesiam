/* Accordion */
$(function () {
  if ($('.accordion-revise').length) {
    let accRewise = $('.accordion-revise'),
      title = $(accRewise).find(
        '>.accordion-title-revise:not(".accordion-popup-title")'
      ),
      content = $(accRewise).find(
        '>.accordion-content:not(".accordion-popup-content")'
      ),
      popupTitle = $(accRewise).find(
        '>.accordion-title-revise.accordion-popup-title'
      ),
      popupContent = $(accRewise).find(
        '>.accordion-content.accordion-popup-content'
      );

    if (accRewise.find('.accordion-popup-content').length == 0) {
      accRewise.addClass('empty');
    }

    if (popupTitle.hasClass('active')) {
      $(this).parent().find(popupContent).slideDown(300);
    }

    popupTitle.click(function (ele) {
      ele.preventDefault();
      console.log(`popup title click : Class Name ${popupTitle.attr('class')}`);
      clickAccordionPopup($(this), popupContent);
    });

    title.click(function (ele) {
      ele.preventDefault();
      console.log(
        `popup title default click : Class Name  ${title.attr('class')}`
      );
      clickAccordionPopup($(this), content);
    });

    $(window).on('load resize', function (e) {
      var win = $(this); //this = window
      if (win.width() <= 768) {
        title.addClass('active');
        content.css('display', 'block');
        popupTitle.removeClass('active');
        popupContent.css('display', 'none');
      } else {
        popupTitle.addClass('active');
        popupContent.css('display', 'block');
      }
    });
  }
});

function clickAccordionPopup(elem, findElem) {
  if ($(window).outerWidth() <= 768) {
    if ($(elem).hasClass('active')) {
      $(elem).removeClass('active').parent().find($(findElem)).slideUp(300);
    } else {
      $(elem).toggleClass('active').parent().find($(findElem)).slideDown(300);
    }
  }
}
