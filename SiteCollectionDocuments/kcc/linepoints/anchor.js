// header bar height without margin
function getHeaderHeight () { return $(".header-top").outerHeight(); }

// apply online button bar height is 90px when visible
var applyOnlineDesktopHeight = 61;

// mobile feature break point = 992px
function isMobile () { return $(window).outerWidth() < 992; }

// use in application detail responsive
var currentPosition = 0;

$(function () {
  console.log("Load -> anchor.js");

  // Application details event begin
  var defaultDuration = 500;

  $(".sc-application-detail .tab-responsive-rv li").click(function (e) {
    e.preventDefault();
    activeApplicationDetailsSection($(this).data("tab-selection"), false, defaultDuration);
  });

  $(".open-qualification").click(function (e) {
    e.preventDefault();
    if (isMobile()) {
      activeApplicationDetailsSection("qualification", false, defaultDuration);
    }
  });

  $(".open-document").click(function (e) {
    e.preventDefault();
    if (isMobile()) {
      activeApplicationDetailsSection("document", false, defaultDuration);
    }
  });

  $(".sc-application-detail .tab-responsive-close-rv,\
      .sc-floating-apply-m .action a").click(function (e) {
    e.preventDefault();
    inactiveApplicationDetailsSection(defaultDuration);
  });
  // Application details event end

  // link-scroll event begin
  $(window).on("link-scroll-ready", function () {
    $(".link-scroll").off("click");
    $(".link-scroll").on("click", function (e) {
      e.preventDefault();
  
      if ($(this).prop("hash")) {
        hashLanding($(this).prop("hash").toLocaleLowerCase(), { column: $(this).data("column") }, 0);
      }
    });
  });

  $(window).trigger("link-scroll-ready");
  // link-scroll event end
});

// Link anchor begin
document.onreadystatechange = function (evt) {
  console.log("--state--", this.readyState);

  if(document.readyState == "complete"){
    history.scrollRestoration = "manual";
    if(window.location.hash){
      hashLanding((window.location.hash).toLocaleLowerCase());
    } else {
      $("main").removeClass("loading");
    }

    try {
      var lazyload = new LazyLoad();
    } catch (error) {
      console.log(error);
    }
  }
}
// Link anchor end

function hashLanding(_hash, dataset, delay) {
  dataset = dataset || null;
  delay = delay || 100;

  console.log("Hash Landing >>>> ", _hash);

  var _offestRef = _hash;
  var sectionOffset = 0;
  var isIncludingSectionOffset = false;
  var isAutoScroll = true;
  var isIncludingApplySection = true;

  var column = dataset == null ? null : dataset.column;

  switch(_hash){
    // Application details section
    case "#application-details":
      _offestRef = "#application-details";
      break;
    case "#qualifications":
      _offestRef = ".tab-content-rv.active .qualification-content";
      // $(".sc-application-detail .tab-rv a:first-child").trigger("click");
      if (isMobile()) {
        activeApplicationDetailsSection("qualification", true, 500);
        isAutoScroll = false;
      } else {
        isIncludingSectionOffset = true;
        sectionOffset = 15;
      }
      break;
    case "#documents":
      _offestRef = ".tab-content-rv.active .document-content";
      // $(".sc-application-detail .tab-rv a:first-child").trigger("click");
      if (isMobile()) {
        activeApplicationDetailsSection("document", true, 500);
        isAutoScroll = false;
      } else {
        // isIncludingApplySection = false;
        isIncludingSectionOffset = true;
        sectionOffset = 15;
      }
      break;

    case "#apply":
      _offestRef = _hash;
      isIncludingApplySection = false;
      break;

    case "#kplus-services":
      _offestRef = _hash;
      isIncludingSectionOffset = true;
      sectionOffset = -45;
      break;

    case "#special-offers":
      _offestRef = _hash;
      isIncludingSectionOffset = true;
      sectionOffset = 15;
      break;

    case "#product-hero":
    case "#carousel":
    case "#benefits":
    case "#faqs":
    case "#related-card":
      _offestRef = _hash;
      break;

    default:
      _offestRef = _hash;
  }

  setTimeout(function () {
    if (isAutoScroll) {
      var _top = $(_offestRef).offset().top;

      sectionOffset = isIncludingSectionOffset ? sectionOffset : 0;
      window.scrollTo(0, (_top - getHeaderHeight() - sectionOffset));

      setTimeout(function () {
        window.scrollTo(0, $(window).scrollTop() - (!isMobile() && $(".sc-floating-apply.active").is(":visible") ? applyOnlineDesktopHeight : 0));
      }, 0);
    }
    
    $("main").removeClass("loading");

  }, delay);
}

function activeApplicationDetailsSection(target, isSkipAnimation, defaultDuration) {
  isSkipAnimation = isSkipAnimation || false;

  currentPosition = $("html, body").scrollTop();

  $(".sc-application-detail a.tab-responsive-close-rv, .sc-application-detail .tab-heading-rv").show();

  setTimeout(function () {
    $("html, body").css("overflow", "hidden");
    $("body").css("height", "100vh");
  }, 300);


  $(".sc-floating-apply-m").data("autoDetection", false).fadeIn();

  $(".header-top").hide();

  switch (target) {
    case "qualification":
      $(".qualification-content").show();
      $(".document-content").hide();
      break;
    case "document":
      $(".document-content").show();
      $(".qualification-content").hide();
      break;
    default:
      $(".document-content").show();
      $(".qualification-content").show();
  }

  $(".sc-application-detail .tab-container-rv").addClass("container");
  
  if (isSkipAnimation) {
    $(".sc-application-detail .tab-responsive-scroll-rv").addClass("active");
    $(".sc-application-detail .tab-responsive-scroll-rv.active").css("transition-duration", "0ms");
    
    // set duration as before (500ms bacause css value is 0.5s), after opened the section
    setTimeout(function () {
      $(".sc-application-detail .tab-responsive-scroll-rv.active").css("transition-duration", "300ms");
    }, defaultDuration);
  } else {
    // default open section
    $(".sc-application-detail .tab-responsive-scroll-rv").addClass("active");
  }

  $(window).trigger("resize");

  // show apply button
  $(".sc-application-detail .tab-rv a:first-child").trigger("click");
}

function inactiveApplicationDetailsSection(defaultDuration) {
  setTimeout(function (e) {
    $(".sc-application-detail .tab-responsive-scroll-rv").removeClass("active");
    $(".sc-application-detail .tab-container-rv").removeClass("container");
    $(".sc-application-detail a.tab-responsive-close-rv, .sc-application-detail h4.tab-heading-rv").hide();
    $(".sc-application-detail .document-content, .sc-application-detail .qualification-content").show();
    $(".sc-application-detail .tab-heading-rv").hide();

    // hide apply button and trigger scroll event
    $(".sc-floating-apply-m").data("autoDetection", true);
    $(window).trigger("scroll");
  }, 100);

  $("html, body").css("overflow", "");
  $("body").css("height", "");
  $(".header-top").show();

  $("html, body").scrollTop(currentPosition);
}