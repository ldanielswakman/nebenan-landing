// defining scrollevents
scrollevents = 'ready scroll resize scrollstart scrollstop';

// Component: navOnScroll
$(document).on(scrollevents, function () {
    headerOnScroll($('header'));
});

function headerOnScroll($obj) {
    scroll = $(window).scrollTop();
    if (scroll < 48) {
        $obj.css('top', 48 - scroll);
        $obj.removeClass('is-sticky');
    } else {
        $obj.css('top', 0);
        $obj.addClass('is-sticky');
    }
}


// Init Owl Carousel
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5000,
        // autoplayHoverPause: true,
        onInitialize: resetProgressBar,
        onInitialized: startProgressBar,
        onTranslate: resetProgressBar,
        onTranslated: startProgressBar
    });
});

function startProgressBar() {
    // apply keyframe animation
    $(".owl-dot span").css({
        width: "100%",
        transition: "width 5000ms linear"
    });
}

function resetProgressBar() {
    $(".owl-dot span").css({
        width: 0,
        transition: "width 0s"
    });
}