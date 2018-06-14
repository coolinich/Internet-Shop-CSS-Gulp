;( function($) {
    // init ion range slider
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
} )(jQuery);