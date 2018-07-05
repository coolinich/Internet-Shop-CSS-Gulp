"use strict";

;(function ($) {
    var asideToggleBtn = $(".mobile-aside-toggle");
    var body = $("body");
    var closeAside = $(".close-mobile-aside");

    function toggleAside(e) {
        body.toggleClass("show-aside");
    }

    asideToggleBtn.on('click', toggleAside);
    closeAside.on('click', toggleAside);
})(jQuery);
"use strict";

;(function ($) {
  // init ion range slider
  if ($("#price-range").length > 0) {
    $("#price-range").ionRangeSlider({
      type: "double",
      grid: false,
      min: 0,
      max: 1000,
      from: 200,
      to: 800,
      prefix: "$",
      hide_min_max: true
    });
  }
  //init carousel
  if ($('.responsive-carousel').length > 0) {
    $('.responsive-carousel').slick({
      arrows: false,
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }, {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });
  }

  //Init jquery form styler
  if ($('.select-styler, .form-control, .input-file-styler').length) {
    $('.select-styler, .form-control, .input-file-styler').styler();
  }

  //Init slicknav header
  $('.header-nav').slicknav({
    appendTo: '#header .bottom-header .container',
    label: ''
  });
})(jQuery);