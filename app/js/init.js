;( function($) {
    // init ion range slider
    if ($("#price-range".lenght) > 0) {
        $("#price-range").ionRangeSlider({
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
    $('.carousel').carousel();
    
//     // init tabs
// if ($( '.prodcuts-tabs' ).length) {
//     $( '.prodcuts-tabs' ).tabs();
// }
    //Init jquery form styler
    if ($('.select-styler, .form-control, .input-file-styler').length) {
        $('.select-styler, .form-control, .input-file-styler').styler();
    }

} )(jQuery);

