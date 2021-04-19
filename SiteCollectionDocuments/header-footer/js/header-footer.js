$(function() {

    setTimeout(function() {
        $("#page").css("opacity", "1");
    }, 90);

    $(".page-nav-m").each(function(){
        var pageH = $(this).find(".box-inner").height();
        $(this).height(pageH);
        var pageActiveH = $(".page-nav-m.mm-open").height();
        $(".main-nav-container").height(pageActiveH);
    });

    $( ".main-nav-m .has-submenu a" ).on( "click", function() {
        var pageTarget = $(this).attr("href");
        //$(pageTarget).removeClass("mm-close");
        $(pageTarget).addClass("mm-open");
        $(this).parents(".page-nav-m").removeClass("mm-closeback");
        $(this).parents(".page-nav-m").removeClass("mm-open");
        $(this).parents(".page-nav-m").addClass("mm-close");
        var pageActiveH = $(".page-nav-m.mm-open").height();
        $(".main-nav-container").height(pageActiveH);
        return false;
    });

    $( ".btn-menu-comp" ).on( "click", function() {
        var pageTarget = $(this).attr("href");
        $('.page-nav-m').removeClass("mm-close");
        $('.page-nav-m').removeClass("mm-closeback");
        $(".page-nav-m.mm-open").removeClass("mm-open");
        $(".page-nav-m.mm-open").addClass("mm-close");
        $(pageTarget).removeClass("mm-close");
        $(pageTarget).addClass("mm-open");
        var pageActiveH = $(".page-nav-m.mm-open").height();
        $(".main-nav-container").height(pageActiveH);
        $(".row-nav-common").hide();
        return false;
    });

    $( ".nav-back a" ).on( "click", function() {
        var pageTargetBack = $(this).attr("href");
        $(".row-nav-common").show();
        $(pageTargetBack).addClass("mm-closeback");
        $(this).parents(".page-nav-m").removeClass("mm-closeback");
        $(this).parents(".page-nav-m").removeClass("mm-open");
        $(this).parents(".page-nav-m").removeClass("mm-close");
        var pageActiveH3 = $(".page-nav-m.mm-closeback").height();
        $(".main-nav-container").height(pageActiveH3);
        return false;
    });

    $( ".dropdown-site-m .btn-personal" ).on( "click", function() {
        $(this).toggleClass("active");
        $(this).next().toggleClass("dd-open");
        $(this).parent().toggleClass("active");
        $(".menu-mobile-container").toggleClass("fixed-body");
        return false;
    });
    
    $( ".btn-menu-mobile a" ).on( "click", function() {
        $("html, body").toggleClass("fixed-body");
        $(".header-top").addClass("active");
        $(".menu-mobile-container").toggleClass('slide-in');
        $(".main").toggleClass('slide-out');
        $(this).parent().toggleClass('active');
        $(".dropdown-login").toggleClass('hidden');

        /*if($(".header-top").hasClass("fixed-top")) {
            $(".menu-mobile-container").removeClass("pad-bt");
        } else {
            $(".menu-mobile-container").addClass("pad-bt");
        }*/

        return false;
    });

    //.btn-nav-dropdown
    $( ".btn-nav-dropdown" ).on( "click", function() {
        $(this).next().slideToggle();

        return false;
    });

    $( ".btn-show-ft-menu" ).on( "click", function() {
        $(this).parents('.footer-top').next().slideToggle();
        $(this).toggleClass('active');
        return false;
    });

    $(".btn-to-top").click(function() {
        $('html, body').animate({
          scrollTop: 0
        }, 800);
        return false;
    });

    $(".header-top .main-nav, .header-top .dropdown-site, .header-top .dropdown-login, .header-top .sw-lang").mouseenter(function() {
        $(".header-top").addClass("active");
    }).mouseleave(function() {
        if ($(".header-top").hasClass("fixed-top")) {
            $(".header-top").addClass("active");
        } else {
            $(".header-top").removeClass("active");
        }
    });

    $(window).scroll(function() {
        var topPos = $(this).scrollTop();
        if (topPos > 80) {
            $(".header-top").addClass("active");
            $(".header-top").addClass("fixed-top");
            $(".local-nav").addClass("active");
    
        } else {
            $(".header-top").removeClass("active");
            $(".header-top").removeClass("fixed-top");
            $(".local-nav").removeClass("active");
        }
    
    });
});
