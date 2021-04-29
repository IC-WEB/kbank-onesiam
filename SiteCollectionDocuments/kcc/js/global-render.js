(function () {
  if (!String.prototype.includes) {
    String.prototype.includes = function(search, start) {
      'use strict';
  
      if (search instanceof RegExp) {
        throw TypeError('first argument must not be a RegExp');
      }
      if (start === undefined) { start = 0; }
      return this.indexOf(search, start) !== -1;
    };
  }

  function getVue(u){
    return new Promise(function (resolve, reject) {
      if(localStorage.getItem("lib_vuejs") == "v2.6.12"){
        console.log("Vue.js have already loaded.");
        resolve(localStorage.getItem("lib_vuejs_src"));
      }else{
        var req = new XMLHttpRequest();
        req.open("GET", u, true)
        req.send();
        req.onreadystatechange = function() {
          if (req.readyState==4 && req.status==200){
            console.log("Vue.js have been loaded successfully.");
            localStorage.setItem("lib_vuejs", "v2.6.12");
            localStorage.setItem("lib_vuejs_src", req.responseText);
            resolve(req.responseText);
          }
        };
      }
    });
  }

  function getScript(u){
    return new Promise(function (resolve, reject) {
      var req = new XMLHttpRequest();
      req.open("GET", u, true)
      req.send();
      req.onreadystatechange = function() {
        if (req.readyState == 4 && req.status == 200){
          console.log("The script has been loaded successfully.");
          resolve(req.responseText);
        }
      };
    });
  }

  getScript("/SiteCollectionDocuments/kcc/dat/application-detail.js?v=" + (Math.random() * 100)).then(function (data) {
    window.eval(data);

    getVue("/SiteCollectionDocuments/assets/js/garage/vue.min.js").then(function (src) {
      eval(src);

      new Vue({
        el: "#application-details",
        data: {
          app: null,
          tab: null,
          card: null,
        },
        computed: {
          isMobile: function () {
            return window.outerWidth < 992;
          }
        },
        created: function () {
          this.app = APP_DETAIL;

          console.log(this.app);
          console.log(APP_DETAIL);

          this.tab = this.app.map(function (c) {
            return {
              href: "#" + c.tabId,
              title: c.tabTitle
            }
          });

          this.card = this.app[0].tabCards.map(function (c) {
            return {
              cardTitle: c.cardTitle,
              cardName: c.cardName
            };
          });
        },
        mounted: function () {
          console.log("Vue > #application-details mounted");

          $(".tab-container-rv").each(function () {
            var tab = $(this).find(".tab-rv"),
            tabContent = $(this).find(".tab-content-rv");
      
            var item = tab.find("a");
      
            tab.on("click", "a", function (e) {
              e.preventDefault();
      
              item.removeClass("active");
              $(this).addClass("active");
      
              var tabAttr = $(this).attr("href");
      
              tabContent.removeClass("active");
              $(tabAttr).addClass("active");
      
              $(window).trigger("compn-rewidth");
            });
          });

          $("#application-details .tab-container-rv .open-popup-image").magnificPopup({
            type: "image",
            preloader: false,
            closeOnContentClick: true,
            mainClass: "popup-image-style"
          });

          getScript("/SiteCollectionDocuments/kcc/dat/benefits-popup.html?v=" + (Math.random() * 100)).then(function (data) {
            $("#page").append(data);
          });

          $(window).trigger("link-scroll-ready");

          $.each($("#application-details .compn-overflow"), function () {
            var width = $(this).find(".compn-overflow-wrapper").width() 
                * $(this).find(".compn-overflow-wrapper").width() 
                / $(this).find(".compn").width();
        
            $(this).find(".compn-overflow-scroll").css("width", width + "px");
        
            $(this).find(".compn-overflow-wrapper").scroll(function () {
              width = $(this).width() * $(this).width() / $(this).find(".compn").width();
              $(this).parent().find(".compn-overflow-scroll").css("width", width + "px");
              $(this).parent().find(".compn-overflow-scroll").css(
                "margin-left", ($(this).scrollLeft()
                / $(this).parent().find(".compn").width()
                * $(this).width()) + "px");
            });
          });
        }
      });
    });
  });

  getScript("/SiteCollectionDocuments/kcc/dat/benefits.js?v=" + (Math.random() * 100)).then(function (data) {
    window.eval(data);

    getVue("/SiteCollectionDocuments/assets/js/garage/vue.min.js").then(function (src) {
      eval(src);

      new Vue({
        el: "#benefits",
        data: {
          card: null,
          mainCard: null
        },
        computed: {
          isMobile: function () {
            return window.outerWidth < 992;
          }
        },
        created: function () {
          this.card = APP_BENEFITS;
          this.mainCard = [APP_BENEFITS.slice(0, 3), APP_BENEFITS.slice(3)];
        },
        mounted: function () {
          console.log("Vue > #benefits mounted");

          try {
            $(".sc-benefits .cards").slick({
              autoplay: false,
              autoplaySpeed: 5000,
              centerMode: true,
              centerPadding: "0px",
              dots: true,
              slidesToShow: 3,
              speed: 400,
              responsive: [
                {
                  breakpoint: 1025,
                  settings: {
                    centerPadding: "250px",
                    slidesToShow: 1
                  }
                },
                {
                  breakpoint: 992,
                  settings: {
                    centerPadding: "150px",
                    slidesToShow: 1
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    centerPadding: "100px",
                    slidesToShow: 1
                  }
                },
                {
                  breakpoint: 576,
                  settings: {
                    centerPadding: "20px",
                    slidesToShow: 1
                  }
                }
              ]
            });
          } catch(error) {
            console.log(error);
          }

          var path = window.location.pathname.toLocaleLowerCase();
          var theme = [
            {
              page: "shopee",
              themeName: "theme-shopee"
            },
            {
              page: "platinum",
              themeName: "theme-platinum"
            },
            {
              page: "linepoints",
              themeName: "theme-linepoints"
            }
          ];

          var themeName = null;

          theme.forEach(function (v, i, a) {
            if (path.indexOf(v.page) != -1) {
              themeName = v.themeName;
            }
          });

          $(".toggle-benefits-popup").magnificPopup({
            type: "inline",
            mainClass: "kcc popup-revise",
            autoFocusLast: false,
            fixedContentPos: true,
            closeMarkup: '<button type="button" class="mfp-close"></button>',
            callbacks: {
              open: function () {
                $(this.container).find(".global-popup").addClass(themeName);
              }
            }
          });

          $("#benefits-more-toggle .link").click(function (e) {
            e.preventDefault();

            if ($("#benefits .main-card-more").is(":visible")) {
              $("#benefits .main-card-more").slideUp();
              $("#benefits-more-toggle .link:first-child").show();
              $("#benefits-more-toggle .link:last-child").hide();
            } else {
              $("#benefits .main-card-more").slideDown();
              $("#benefits-more-toggle .link:last-child").show();
              $("#benefits-more-toggle .link:first-child").hide();
            }
          });

          $(window).on("resize", function () {
            if ($(window).outerWidth() < 992) {
              $(".global-section.sc-benefits .main-card-more").hide();
              $("#benefits-more-toggle .link:last-child").hide();
            } else {
              $(".global-section.sc-benefits .main-card-more").show();
            }
          });

          $(window).trigger("resize");
          $(window).trigger("link-scroll-ready");
        }
      });
    });
  });
})();