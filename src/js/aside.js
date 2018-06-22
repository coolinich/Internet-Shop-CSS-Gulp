;(function ($){
    let asideToggleBtn = $(".mobile-aside-toggle");
    let body = $("body");
    let overlay = $(".overlay");

    function toggleAside(e) {
        body.toggleClass("show-aside");
    }

    asideToggleBtn.on('click', toggleAside);
    overlay.on('click', toggleAside);
})(jQuery);