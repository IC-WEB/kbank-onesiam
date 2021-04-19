/* highlight Slider */
$(function(){ 
    if($(".highlight-slider").length){
        $('.highlight-slider').slick({
            arrows: false,
            dots: true,
            infinite: true,
            speed: 900
        });
    }
});

/* Credit List Slider */
$(function() {
    if($(".credit-lists-slider").length){
        var swiper_creditLists = new Swiper('.swiper-container.credit-lists-slider', {
            slidesPerView: 'auto',
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            scrollbar: {
                el: '.swiper-scrollbar',
                hide: false,
            },
            loop: false,
            init: false
        });

        enquire.register("screen and (max-width: 991px)", {
            match : function() {
                swiper_creditLists.init();
            },
            unmatch : function() {
                swiper_creditLists.destroy();
            }
        }, true);
    }
});

/* Promotions Slider */
$(function(){ 
    if($(".promotions-slider").length){
        var swiper = new Swiper('.promotions-slider.swiper-container', {
            slidesPerView: 'auto',
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
});

/* Help */
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $(function(){
        if ($(".help-lists").length) {
            $('.help-lists .heading').on('click', function(){
                $(this).closest('.help-lists').toggleClass('active');
            });
        }
    });
}
$(function(){
    if ($(".helps-sub-list").length) {
        $('.menu-sub .menu-sub-heading').on('click', function(){
            $(this).next().toggleClass('active');
        });
    }
});

/* Form Step */
/* https://codepen.io/atakan/pen/gqbIz */
$(function () {
    if ($("#msform").length) {
        //jQuery time
        var current_fs, next_fs, previous_fs; //fieldsets
        var left, opacity, scale; //fieldset properties which we will animate
        var animating; //flag to prevent quick multi-click glitches

        $("#msform .next").click(function () {
            if (animating) return false;
            animating = true;

            current_fs = $(this).parent();
            next_fs = $(this).parent().next();

            //activate next step on progressbar using the index of next_fs
            $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

            //show the next fieldset
            next_fs.show();
            //hide the current fieldset with style
            current_fs.animate({
                opacity: 0
            }, {
                step: function (now, mx) {
                    //as the opacity of current_fs reduces to 0 - stored in "now"
                    //1. scale current_fs down to 80%
                    scale = 1 - (1 - now) * 0.2;
                    //2. bring next_fs from the right(25%)
                    left = (now * 25) + "%";
                    //3. increase opacity of next_fs to 1 as it moves in
                    opacity = 1 - now;
                    current_fs.css({
                        'position': 'absolute',
                        'left': '-25%',
                        'opacity': '0',
                    });
                    next_fs.css({
                        'left': left,
                        'opacity': opacity,
                    });
                },
                duration: 300,
                complete: function () {
                    current_fs.hide();
                    next_fs.css({
                        'position': 'relative'
                    });
                    animating = false;
                    $('html, body').scrollTop($('#apply').offset().top - ((window.outerWidth > 820) ? 80 : 60));
                },
                //this comes from the custom easing plugin
                easing: 'easeOutQuad'
            });

            //**custom
            /*
            var property_check_offset = $('#apply').offset().top - $('.header-device-fixed').height();
            $('html, body').animate({
                scrollTop: property_check_offset
            }, 700, 'easeOutQuad');
            */
        });

        $("#msform .previous").click(function () {
            if (animating) return false;
            animating = true;

            current_fs = $(this).parent();
            previous_fs = $(this).parent().prev();

            //de-activate current step on progressbar
            $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

            //show the previous fieldset
            previous_fs.show();
            //hide the current fieldset with style
            current_fs.animate({
                opacity: 0
            }, {
                step: function (now, mx) {
                    //as the opacity of current_fs reduces to 0 - stored in "now"
                    //1. scale previous_fs from 80% to 100%
                    scale = 0.8 + (1 - now) * 0.2;
                    //2. take current_fs to the right(25%) - from 0%
                    left = ((1 - now) * 25) + "%";
                    //3. increase opacity of previous_fs to 1 as it moves in
                    opacity = 1 - now;
                    current_fs.css({
                        'left': left,
                        'position': 'absolute',
                    });
                    previous_fs.css({
                        'opacity': '1',
                        'left': '0%',
                        '-webkit-transition': 'left 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95)',
                        '-o-transition': 'left 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95)',
                        'transition': 'left 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95)',
                    });
                },
                duration: 300,
                complete: function () {
                    current_fs.hide();
                    previous_fs.css({
                        'position': 'relative'
                    });
                    animating = false;
                    $('html, body').scrollTop($('#apply').offset().top - ((window.outerWidth > 820) ? 80 : 60));
                },
                //this comes from the custom easing plugin
                easing: 'easeOutQuad'
            });

            //**custom
            /*
            var property_check_offset = $('#apply').offset().top - $('.header-device-fixed').height();
            $('html, body').animate({
                scrollTop: property_check_offset
            }, 700, 'easeOutQuad');
            */
        });

        /*
        $(".submit").click(function(){
            return false;
        });
        */
    }
});

/* Form */
$(function(){
    
    var formElement = $('input, textarea, select');
    
    formElement.each(function(){
        if( !$(this).val() ) {	
            $(this).closest('.input').removeClass('filled');
        } else {
            $(this).closest('.input').addClass('filled');
        }
    });
    
    formElement.focusin(function(){
        $(this).closest('.input').addClass('filled');
    });
    
    formElement.focusout(function(){
        if( !$(this).val() ) {	
            $(this).closest('.input').removeClass('filled');
        }
    });
    
    // Select
    $(".select").each(function() {
        var selectParent = $(this),
            select = $(this).find(".select2"),
            selectFilter = $(this).find(".select2-filter");
        
        var query = {};
        function markMatch (text, term) {
            var match = text.toUpperCase().indexOf(term.toUpperCase());
            
            var $result = $('<span></span>');

            if (match < 0) {
                return $result.text(text);
            }

            $result.text(text.substring(0, match));

            var $match = $('<span class="select2-rendered__match"></span>');
            $match.text(text.substring(match, match + term.length));

            $result.append($match);

            $result.append(text.substring(match + term.length));

            return $result;
        }
        
        select.select2({
            width: '100%',
            minimumResultsForSearch: -1,
            dropdownParent: selectParent,
            templateResult: function (item) {
                if (item.loading) {
                    return item.text;
                }

                var term = query.term || '';
                var $result = markMatch(item.text, term);

                return $result;
            },
            language: {
                searching: function (params) {
                    query = params;
                    return 'Searching...';
                }
            }
        });
        
        selectFilter.select2({
            width: '100%',
            allowClear: true,
            dropdownParent: selectParent,
            templateResult: function (item) {
                if (item.loading) {
                    return item.text;
                }

                var term = query.term || '';
                var $result = markMatch(item.text, term);

                return $result;
            },
            language: {
                searching: function (params) {
                    query = params;
                    return 'Searching...';
                }
            }
        }).on("select2:unselecting", function(e) {
            $(this).data('state', 'unselected');
        }).on("select2:open", function(e) {
            if ($(this).data('state') === 'unselected') {
                $(this).removeData('state'); 
                var self = $(this);
                self.select2('close');
            } 
        });
        
        select.parent(".select").addClass("select2-parent");
        selectFilter.parent(".select").addClass("select2-parent");
        
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            select.select2("destroy");
            select.parent(".select").removeClass("select2-parent");
        }
    });
    
    // Choice
    $('.choice-other').each(function(){
        var label = $(this).find('.choice-label input[type="checkbox"], .choice-label input[type="radio"]'),
            input = $(this).find('.input > input');

        label.click(function(){
            if( $(this).prop("checked") == true ) {
                input.attr( "disabled", false ).focus();
                input.parent(".input").removeClass("disabled");
            } else {
                input.attr( "disabled", true );
                input.parent(".input").addClass("disabled");
            }
        });
    });
});

/* Accordion */
$(function() {
    if ($(".accordion").length) {
        $(".accordion").each(function() {
            var acc = $(this),
                title = $(this).find(">.accordion-title"),
                content = $(this).find(">.accordion-content"); 

            content.hide();

            if(acc.find(".accordion-content").length == 0) {
                acc.addClass("empty");
            }

            if(title.hasClass('active')) {
                $(this).parent().find(content).slideDown(300);
            }

            title.click(function() {
                if ($(this).hasClass('active')) {
                   $(this).removeClass('active').parent().find(content).slideUp(300);
                } else {
                   $(this).toggleClass('active').parent().find(content).slideDown(300);
                }
                return false;
            });
        });
    }
});

/* Tab */
function showTab( elem ){
    $(elem).parents('.tab-group').find('.tab-content').removeClass('active');
    $(elem + '.tab-content').addClass('active');
}
function selectDestroyMobile(Obj){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        Obj.select2("destroy");
        Obj.parent(".select").removeClass("select2-parent");
    }
}
$(function(){
    var tabGroupParent = null;
    var Selec2Options = null;

    $('.tab-group').each(function(){
        var obj = $(this);
        Selec2Options = {
            width: '100%',
            minimumResultsForSearch: -1,
            dropdownParent: obj.find('select.tab-select2').parents('.select')
        };

        var mySelect2 = obj.find('select.tab-select2');
        mySelect2.select2( Selec2Options );
        mySelect2.parents(".select").addClass("select2-parent");
        selectDestroyMobile(mySelect2);
    });

    $('.tab-group .control a').click(function( e ){
        var tabGroupParent = $(this).parents('.tab-group');
        var _id = $(this).attr('href');
        Selec2Options.dropdownParent = tabGroupParent.find('select.tab-select2').parents('.select')

        tabGroupParent.find('.control a').removeClass('active');
        tabGroupParent.find('select option').prop('selected', false).removeAttr('selected');
        $(this).addClass('active');
        showTab( _id );
        tabGroupParent.find('select option[value="'+ _id +'"]').prop('selected', true).attr('selected', true);
        tabGroupParent.find('select.tab-select2').select2('destroy');
        tabGroupParent.find('select.tab-select2').select2( Selec2Options );

        selectDestroyMobile( tabGroupParent.find('select.tab-select2') );

        e.preventDefault();
    });

    $('.tab-group select.tab-select2').change(function(){
        $(this).parents('.tab-group')
        $(this).parents('.tab-group').find('.control a').removeClass('active');
        $('.tab-group .control a[href="'+ $(this).val() +'"]').addClass('active')
        showTab( $(this).val() );
    });
});

/* Benefit More */
$(function() {
    if ($(".benefit-more").length) {
        $( ".benefit-more" ).click(function() {
            $( ".benefit-show-more" ).toggle(500);

            var BenefitMore = $(this).find("a");
            BenefitMore.toggleClass("expand");
            
            if(BenefitMore.hasClass("expand")){
               BenefitMore.html('ย่อสิทธิประโยชน์ <i class="ic ic-chevron-up"></i>');
            }else {
                BenefitMore.html('ดูสิทธิประโยชน์เพิ่มเติม <i class="ic ic-chevron-down"></i>');
            }
        });
    }
});

$(function() {
    if ($(".benefit-more-en").length) {
        $( ".benefit-more-en" ).click(function() {
            $( ".benefit-show-more" ).toggle(500);

            var BenefitMore = $(this).find("a");
            BenefitMore.toggleClass("expand");
            
            if(BenefitMore.hasClass("expand")){
               BenefitMore.html('See less <i class="ic ic-chevron-up"></i>');
            }else {
                BenefitMore.html('See additional privileges <i class="ic ic-chevron-down"></i>');
            }
        });
    }
});

/* All Card More */
$(function() {
    if ($(".all-card-more").length) {
        $( ".all-card-more" ).click(function() {
            $( ".all-card-show-more" ).toggle( 500 );
            
            var AllCardMore = $(this).find("a.btn");
            AllCardMore.toggleClass("expand");
            
            if(AllCardMore.hasClass("expand")){
               AllCardMore.html('ย่อบัตรทั้งหมด <i class="ic ic-chevron-up"></i>');
            }else {
                AllCardMore.html('ดูบัตรเพิ่มเติม <i class="ic ic-chevron-down"></i>');
            }
        });
    }
});
$(function() {
    if ($(".all-card-more-en").length) {
        $( ".all-card-more-en" ).click(function() {
            $( ".all-card-show-more" ).toggle( 500 );
            
            var AllCardMore = $(this).find("a.btn");
            AllCardMore.toggleClass("expand");
            
            if(AllCardMore.hasClass("expand")){
               AllCardMore.html('See fewer cards <i class="ic ic-chevron-up"></i>');
            }else {
                AllCardMore.html('See more cards <i class="ic ic-chevron-down"></i>');
            }
        });
    }
});

/* Selector Result Show and Slider */
$(function() {
    if ($(".selector-result-show").length) {
        $( ".selector-result-show" ).click(function() {
            $( ".sc-selector-result" ).slideDown( 1000 );
            if($(".selector-slider").length){
                var swiper_selector = new Swiper('.swiper-container.selector-slider', {
                    slidesPerView: 'auto',
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    scrollbar: {
                        el: '.swiper-scrollbar',
                        hide: false,
                    },
                    loop: false,
                    init: false
                });

                enquire.register("screen and (max-width: 991px)", {
                    match : function() {
                        swiper_selector.init();
                    },
                    unmatch : function() {
                        swiper_selector.destroy();
                    }
                }, true);
            }
        });
    }
});

/* Selector Summary */
$(function() {
    if ($(".selector-summary").length) {
        $( ".selector-summary-detail .edit" ).click(function() {
            $( ".selector-form" ).slideToggle();
        });
    }
});

/* Compare Card */
$(function(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        var TotalCompareCard = 2;
    } else {
        var TotalCompareCard = 2;
    }
    $('.compare-card .compare-card-close').click(function(){
        $(this).closest('.compare-card').removeClass('hv-card');
        var RemoveCardId = $(this).data('card_id');
        $('input[value="'+RemoveCardId+'"]').click();
    });

    var compareList = [];
    $('input.checkbox-compare-card').click(function(){
        var inputValue =    $(this).val();
        if($(this).is(":checked")){
            $('.sc-compare-bar').addClass('show');
            compareList.push(inputValue);
            if(compareList.length >= TotalCompareCard){
            // Disabled button
                $("input.checkbox-compare-card:not(:checked)").each(function(){
                $(this).prop('disabled', true);
                });
            }
        }else{
            compareList = jQuery.grep(compareList, function(value) {
                return value != inputValue;
            });
            $("input.checkbox-compare-card").prop('disabled', false);
        }
        $('.compare-cards').find('.compare-card').find('img').attr('src', '');
        $('.compare-cards').find('.compare-card').removeClass('hv-card');
        $.each( compareList, function( key, value ) {
            var CardImage = $('#' + value + '-img').attr('src');
            $('.compare-cards').find('.compare-card').eq(key).find('img').attr('src', CardImage);
            $('.compare-cards').find('.compare-card').eq(key).find('a').attr('data-card_id', value);
            $('.compare-cards').find('.compare-card').eq(key).addClass('hv-card');
        });
    });
});

/* Select with Image */
$(function(){
    if ($(".select-hv-img").length) {
        $(".select-hv-img").msDropDown();
    }
});


/* Compares Select Fixed */
$(function () {
    if(!$("html").hasClass("ie8")){
        window.addEventListener('scroll', function (e) {
            var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 80,
                compares = $(".compares");
            if (distanceY > shrinkOn) {
                compares.addClass("fixed");
            } else {
                if (compares.hasClass("fixed")) {
                    compares.removeClass("fixed")
                }
            }
        });
    }
});


/* Fn matchHeight */
$(function() {
    if($(".matchHeight-group").length){
        $('.matchHeight-group').each(function() {
            $(this).find('.matchHeight').matchHeight({
                byRow: false,
                property: 'height',
                target: null,
                remove: false
            });
        });
    }
});

/* Specials Slider */
$(function(){ 
    if($(".specials-slider").length){
        var swiper = new Swiper('.specials-slider.swiper-container', {
            slidesPerView: 'auto',
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
});

/* Intro Card Slider */
function callWidgetRender() {
    $(function () {
        var ele = $('.intro-card-container');
        if (ele.length) {
            ele.on('init', function (event, slick) {
                ele.each(function () {
                    $(this).find('.caption').matchHeight({
                        byRow: true
                    });
                });
            });

            ele.slick({
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 3,
                dots: true,
                arrows: true,
                infinite: true,
                speed: 400,
                touchThreshold: 300,
                autoplay: true,
                autoplaySpeed: 5000,
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            centerPadding: '180px',
                            slidesToShow: 1,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            centerPadding: '120px',
                            slidesToShow: 1,
                        }
                    },
                    {
                        breakpoint: 641,
                        settings: {
                            centerPadding: '30px',
                            slidesToShow: 1,
                        }
                    },
                    {
                        breakpoint: 376,
                        settings: {
                            centerPadding: '25px',
                            slidesToShow: 1,
                        }
                    }
                ]
            });

            function elePc() {

                if ($(document).width() > 991) {
                    // ele.on("beforeChange", function (slick, currentSlide, nextSlide) {
                    //     ele.find('.slick-slide .intro-card').css({
                    //         "-webkit-transform": "scale(0.76)",
                    //         "-ms-transform": "scale(0.76)",
                    //         "transform": "scale(0.76)"
                    //     });
                    // });

                    // ele.on("afterChange", function (slick, currentSlide) {
                    //     ele.find('.slick-active .intro-card').css({
                    //         "-webkit-transform": "scale(0.86) translateX(-30px)",
                    //         "-ms-transform": "scale(0.86) translateX(-30px)",
                    //         "transform": "scale(0.86) translateX(-30px)"
                    //     });
                    //     ele.find('.slick-active + .slick-active .intro-card').css({
                    //         "-webkit-transform": "scale(0.86) translateX(30px)",
                    //         "-ms-transform": "scale(0.86) translateX(30px)",
                    //         "transform": "scale(0.86) translateX(30px)"
                    //     });
                    //     ele.find('.slick-active.slick-center .intro-card').css({
                    //         "-webkit-transform": "none",
                    //         "-ms-transform": "none",
                    //         "transform": "none"
                    //     });
                    // });
                }

            }

            function eleDevice() {

                if ($(document).width() < 992) {
                    // ele.on("beforeChange", function (slick, currentSlide, nextSlide) {
                    //     ele.find('.slick-slide .intro-card').css({
                    //         "-webkit-transform": "scale(0.86)",
                    //         "-ms-transform": "scale(0.86)",
                    //         "transform": "scale(0.86)"
                    //     });
                    // });

                    // ele.on("afterChange", function (slick, currentSlide) {
                    //     ele.find('.slick-active .intro-card').css({
                    //         "-webkit-transform": "scale(0.96)",
                    //         "-ms-transform": "scale(0.96)",
                    //         "transform": "scale(0.96)"
                    //     });
                    //     ele.find('.slick-active + .slick-active .intro-card').css({
                    //         "-webkit-transform": "scale(0.96)",
                    //         "-ms-transform": "scale(0.96)",
                    //         "transform": "scale(0.96)"
                    //     });
                    //     ele.find('.slick-active.slick-center .intro-card').css({
                    //         "-webkit-transform": "none",
                    //         "-ms-transform": "none",
                    //         "transform": "none"
                    //     });
                    // });
                }

            }

            elePc();
            eleDevice();
            $(window).resize(function () {
                elePc();
                eleDevice();
            });
        }
    });
}

function imgChangeInit() {
    $('.img-change').each(function () {
        imgChange(this);
    });
}
$(function () {
    imgChangeInit();
    callWidgetRender();
});

/* Fn Video  */
$(document).on('click','.js-videoPoster',function(e) {
//   e.preventDefault();
//   var poster = $(this);
//   var wrapper = poster.closest('.js-videoWrapper');
//   videoPlay(wrapper);
});

function videoPlay(wrapper) {
//   var iframe = wrapper.find('.js-videoIframe');
//   var src = iframe.data('src');
//   wrapper.addClass('videoWrapperActive');
//   iframe.attr('src',src);
}

/* highlight Slider */
$(function(){ 
    if($(".service-special-slider").length){
        $('.service-special-slider').slick({
            arrows: true,
            dots: true,
            infinite: true,
            speed: 900,
            loop: true,
            fade: true,
            cssEase: 'linear'
        });
    }
});


/* Selector Result Show and Slider */
$(function() {
    if($(".relate-card-slider").length){
        var swiper_relateCard = new Swiper('.swiper-container.relate-card-slider', {
            slidesPerView: 'auto',
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            scrollbar: {
                el: '.swiper-scrollbar',
                hide: false,
            },
            loop: false,
            init: false
        });
        
        swiper_relateCard.init();

//        enquire.register("screen and (max-width: 991px)", {
//            match : function() {
//                swiper_relateCard.init();
//            },
//            unmatch : function() {
//                swiper_relateCard.destroy();
//            }
//        }, true);
    }
});

/* Application Details */
$(function () {
    $('<div class="tab-headline qualifications"><h2 class="heading">คุณสมบัติ</h2></div>').prependTo('.tab-container').hide();
    $('<div class="tab-headline documents"><h2 class="heading">เอกสารประกอบการสมัคร</h2></div>').prependTo('.tab-container').hide();
    $('.details-clones-control #qualifications, .open-qualifications').click(function () {
        $('html').addClass('details-clones-enabled');
        $('.details-clones').addClass('open');
        $('.details-container.documents').hide();
        $('.tab-headline.documents').hide();
        $('.tab-headline.qualifications').show();
        $('.header-top').fadeOut();
        $('#apply-online').fadeIn().addClass('popup-active');
        $('#apply-online-2').removeClass("hide-bar");
    });
    $('.details-clones-control #documents, .open-documents').click(function () {
        $('html').addClass('details-clones-enabled');
        $('.details-clones').addClass('open');
        $('.details-container.qualifications').hide();
        $('.tab-headline.qualifications').hide();
        $('.tab-headline.documents').show();
        $('.header-top').fadeOut();
        $('#apply-online').fadeIn().addClass('popup-active');
        $('#apply-online-2').removeClass("hide-bar");
    });
    $('.details-clones-close').click(function () {
        $('html').removeClass('details-clones-enabled');
        $('.details-clones').removeClass('open');
        $('.details-container').show();
        $('.tab-headline').hide();
        $('.header-top').fadeIn();
        $('#apply-online').removeClass('popup-active');
    });
});
$(function () {
    $('<div class="tab-headline qualifications-en"><h2 class="heading">Qualifications</h2></div>').prependTo('.tab-container').hide();
    $('<div class="tab-headline documents-en"><h2 class="heading">Documents</h2></div>').prependTo('.tab-container').hide();
    $('.details-clones-control #qualifications-en, .open-qualifications').click(function () {
        $('html').addClass('details-clones-enabled');
        $('.details-clones').addClass('open');
        $('.details-container.documents-en').hide();
        $('.tab-headline.documents-en').hide();
        $('.tab-headline.qualifications-en').show();
        $('.header-top').fadeOut();
        $('#apply-online').fadeIn().addClass('popup-active');
        $('#apply-online-2').removeClass("hide-bar");
    });
    $('.details-clones-control #documents-en, .open-documents').click(function () {
        $('html').addClass('details-clones-enabled');
        $('.details-clones').addClass('open');
        $('.details-container.qualifications-en').hide();
        $('.tab-headline.qualifications-en').hide();
        $('.tab-headline.documents-en').show();
        $('.header-top').fadeOut();
        $('#apply-online').fadeIn().addClass('popup-active');
        $('#apply-online-2').removeClass("hide-bar");
    });
    $('.details-clones-close').click(function () {
        $('html').removeClass('details-clones-enabled');
        $('.details-clones').removeClass('open');
        $('.details-container').show();
        $('.tab-headline').hide();
        $('.header-top').fadeIn();
        $('#apply-online').removeClass('popup-active');
    });
});

$(function () {
   
   setTimeout(function(){
       if(window.location.hash){
           console.log("--- #hash ---");
           var _hash = (window.location.hash).toLocaleLowerCase(),
               _headH = (window.outerWidth > 820) ? 90 : 54;

           var _offsetPoint = $(_hash).offset().top;
           switch(_hash){
               case "#qualifications":
                   _offsetPoint = $("#application-details").offset().top;
                   if(_headH == 54){
                       // mobiles
                       $(window.location.hash).trigger("click");
                   }
                   break;
                   case "#documents":
                   _offsetPoint = $("#application-details").offset().top;
                   if(_headH == 54){
                       // mobiles
                       $(window.location.hash).trigger("click");
                   }
                   break;
           }
           $('html, body').animate({
               scrollTop: _offsetPoint - _headH
           }, 0);
       }
   }, 500)

});

/* Application details Tab */
$(function () {
    $('.tab-container').each(function () {

        var tab = $(this).find('.tab'),
            tabContent = $(this).find('.tab-content');

        var selector = tab.find(".selector");

        var item = tab.find('a'),
            itemTotal = tab.find('a').length;

        function tabSelector() {
            var activeItem = tab.find('.active'),
                activeWidth = activeItem.innerWidth();

            selector.css({
                "left": activeItem.position.left + "px",
                "width": activeWidth + "px"
            });
        }

        tabSelector();

        tab.on("click", "a", function (e) {
            e.preventDefault();
            item.removeClass('active');
            $(this).addClass('active');

            var activeWidth = $(this).innerWidth(),
                itemPos = $(this).position();

            selector.css({
                "left": itemPos.left + "px",
                "width": activeWidth + "px"
            });

            var tabAttr = $(this).attr("href");

            tabContent.removeClass('active');
            $(tabAttr).addClass('active');
        });

        $(window).resize(function () {
            tabSelector();

            setTimeout(function () {
                var activeWidth = tab.find('.active').innerWidth(),
                    itemPos = tab.find('.active').position();

                selector.css({
                    "left": itemPos.left + "px",
                    "width": activeWidth + "px"
                });
            }, 100);
        });

    });
});

/* Filter Expand */
$(function(){
    if ($(".filter-btn").length) {
        $( ".filter-btn" ).click(function() {
            $( ".filter-expand" ).toggleClass( "active" );
        });
        
        $( ".filter-btn-m" ).click(function() {
            $( ".filter-expand" ).toggleClass( "active" );
        });
        
        $( ".filter-expand-back" ).click(function() {
            $( ".filter-expand" ).toggleClass( "active" );
        });
    }
});

/* Sticky Menu */
$(function () {
    if ($(".px-sticky").length) {
        // Nav
        $(".px-sticky").find("a[href^='#']").each(function () {
            $(this).click(function (e) {
                e.preventDefault();
                var pY = $($(this).attr('href')).offset().top - 80;
                $('html,body').animate({
                    scrollTop: pY + 5
                }, 400, "easeInOutSine");
            })
        });

        //
        var _vH = window.innerHeight;

        var _section = $(".fx-section"),
            _navList = $(".fx-section-nav"),
            _max = _section.length,
            _navIndex = -1;
        if (window.innerWidth < 768) {
            // Mobile Mode
            var _titlex = $(".fx-section-title");
            function moveScroll() {
                var _pY = $(window).scrollTop(),
                    _intY = _pY - _vH,
                    _endY = _pY + _vH;

                /**/
                // elements.getBoundingClientRect().top  -- can replace this function
                var _reflow = true;
                for (var i = 0; i < _max; i++) {
                    var _obj = $(_section[i]),
                        _top = _obj.offset().top - 50,
                        _bottom = _top + _obj.outerHeight();
                    if ((_pY >= _top) && (_pY < _bottom)) {
                        if (_navIndex == i) {
                            _reflow = false;
                            break;
                        }
                        break;
                    }
                }
                if (_reflow && (_navIndex != i)) {
                    _navIndex = i;
                    _section.removeClass("focus");
                    if (i < _max) {
                        _titlex.stop().css("opacity",0).fadeTo(360,1,"easeOutSine").text($(_navList[i]).find("a").text());
                        _navList.removeClass("active");
                        _obj.addClass("focus");
                        $(_navList[i]).addClass("active");
                    }
                }
            }
        } else {
            // Desktop Mode
            function moveScroll() {
                var _pY = $(window).scrollTop(),
                    _intY = _pY - _vH,
                    _endY = _pY + _vH;

                /**/
                // elements.getBoundingClientRect().top  -- can replace this function
                var _reflow = true;
                for (var i = 0; i < _max; i++) {
                    var _obj = $(_section[i]),
                        _top = _obj.offset().top - 60,
                        _bottom = _top + _obj.outerHeight();
                    if ((_pY >= _top) && (_pY < _bottom)) {
                        if (_navIndex == i) {
                            _reflow = false;
                            break;
                        }
                        break;
                    }
                }
                if (_reflow && (_navIndex != i)) {
                    _navIndex = i;
                    _section.removeClass("focus");
                    _navList.removeClass("active");
                    if (i < _max) {
                        _obj.addClass("focus");
                        $(_navList[i]).addClass("active");
                    }
                }
            }
        }
        moveScroll();
        $(window).scroll(moveScroll).resize(function () {
            _vH = window.innerHeight;
            moveScroll();
        });
    }
    
     $(".sticky-no-smooth").find("a[href^='#']").each(function () {
        $(this).click(function (e) {
            //e.preventDefault();
            var pY = $($(this).attr('href')).offset().top - 80;
            $('html,body').animate({
                scrollTop: pY + 5
            }, 1, "easeInOutSine");
        })
    });
    
//    $(".sticky-no-smooth-compare").find("a[href^='#']").each(function () {
//        $(this).click(function (e) {
//            //e.preventDefault();
//            var pY = $($(this).attr('href')).offset().top - 80;
//            $('html,body').animate({
//                scrollTop: pY + 5
//            }, 1, "easeInOutSine");
//        })
//    });
    $(".sticky-no-smooth-compare").find("a[href^='#']").each(function () {
        $(this).click(function (e) {
            $('html,body').animate({
                scrollTop: 1300
            }, 400, "easeInOutSine");
        })
    });
    
    $(".sticky-no-smooth-ptt").find("a[href^='#']").each(function () {
        $(this).click(function (e) {
//            e.preventDefault();
            var headtop_H = $('.header-top').height();
            var pY = $($(this).attr('href')).offset().top - (headtop_H+61);
            
            console.log(pY);
            $('html,body').animate({
                scrollTop: pY
            }, 1, "easeInOutSine");
        })
    });
    
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $(".sticky-no-smooth").find("a[href^='#']").each(function () {
            $(this).click(function (e) {
                //e.preventDefault();
                var pY = $($(this).attr('href')).offset().top - 60;
                $('html,body').animate({
                    scrollTop: pY + 5
                }, 1, "easeInOutSine");
            })
        });
        $(".sticky-no-smooth-compare").find("a[href^='#']").each(function () {
            $(this).click(function (e) {
                $('html,body').animate({
                    scrollTop: 1200
                }, 400, "easeInOutSine");
            })
        });
    }
});

/* Filter Checkbox */
$(function(){
    if ($(".credit-card-choice").length) {
        $( ".credit-card-choice .choice .choice-label" ).click(function() {
            var filter_ID = $(this).find('.choice-input').attr('data-filter_ID');
            if($(this).find('.choice-input').is(':checked')==true) {
                $( '.credit-card-choice .choice input[data-filter_ID="'+filter_ID+'"]' ).prop('checked', true);
                $( '.credit-card-choice .choice input[data-filter_ID="'+filter_ID+'"]' ).closest('.choice').addClass("active");
            }else {
                $(this).closest('.choice').removeClass("active");
                $( '.credit-card-choice .choice input[data-filter_ID="'+filter_ID+'"]' ).prop('checked', false);
                $( '.credit-card-choice .choice input[data-filter_ID="'+filter_ID+'"]' ).closest('.choice').removeClass("active");
            }
        });
    }
});

/* Popup Modal */
$(function () {
    $('.open-popup-image').magnificPopup({
        type: 'image',
		preloader: false,
        closeOnContentClick: true,
        mainClass: 'popup-image-style'
        
    });
	$('.popup-content').magnificPopup({
		type: 'inline',
		preloader: false,
        closeOnContentClick: true,
        mainClass: 'popup-content-style',
		focus: '#username',
		modal: true
	});
	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
    $(document).on('click', '.popup-modal-close', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});

/* Phone number in Desktop */
var _isTouch = 'ontouchstart' in document.documentElement;
$(function () {
    var _ua = (navigator.userAgent || navigator.vendor || window.opera),
        _device = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

    $("body").addClass((_isTouch) ? "isTouch" : "no-touch");
    if (_device.test(_ua)) {
        $("body").addClass("device-mobile");
    } else {
        $('a[href^="tel:"]').removeAttr("href");
    }
});

if(! /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $(function () {
        if(!$("html").hasClass("ie8")){
            window.addEventListener('scroll', function (e) {
                var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                    shrinkOn = 200,
                    SCApplyBar = $(".sc-apply-bar");
                if (distanceY > shrinkOn) {
                    SCApplyBar.addClass("show");
                } else {
                    if (SCApplyBar.hasClass("show")) {
                        SCApplyBar.removeClass("show")
                    }
                }
            });
        }
    });
}

jQuery(document).ready(function(){
    jQuery('.tab-container .tab').scrollbar();
});

//jQuery(document).ready(function(){
//    jQuery('.tab-container .tab').scrollbar({
//        "autoScrollSize": false,
//        "scrollx": $('.external-scroll_x'),
//        "scrolly": $('.external-scroll_y')
//    });
//});

$(function() {
    if (!$("html").hasClass("ie8")) {
        window.addEventListener('scroll', function(e) {
            var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 400,
                ApplyOnline = $(".sc-apply-online");
            if (distanceY > shrinkOn) {
                ApplyOnline.addClass("full");
            } else {
                if (ApplyOnline.hasClass("full")) {
                    ApplyOnline.removeClass("full")
                }
            }
        });
    }
});

$(document).scroll(function(){
    if(!$('#apply-online').hasClass('popup-active')){
       var _MinFormApply     =    $('#apply').offset().top-($('#apply').height())
       var _MaxFormApply     =    $('#apply').offset().top+$('#apply').height()
       if($(document).scrollTop()>_MinFormApply && $(document).scrollTop()<_MaxFormApply){
           $('#apply-online').slideUp();
       }else{
           $('#apply-online').slideDown();
       }
    }
});

$(document).scroll(function(){
   var _MinFormApply2     =    $('#apply').offset().top-($('#apply').height())
   var _MaxFormApply2     =    $('#apply').offset().top+$('#apply').height()
   if($(document).scrollTop()>_MinFormApply2 && $(document).scrollTop()<_MaxFormApply2){
       $('#apply-online-2').addClass("hide-bar");
   }else{
       $('#apply-online-2').removeClass("hide-bar");
   }
});

$('a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    if(window.location.hash !==""){
        var _scrollHash =    $('.header-top').height()
    }else{
        var _scrollHash =    $('.header-top').height() + $('#apply-online').height()
    }

    if (this.hash !== "") {
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top - _scrollHash
        }, function(){
            window.location.hash = hash;
        });
    }
});

$('#apply-online').on('click', function(){
   $('.details-clones-close').click();
});

$('#apply-online-2').on('click', function(){
   $('.details-clones-close').click();
});