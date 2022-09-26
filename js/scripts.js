// defining scrollevents
scrollevents = 'ready scroll resize scrollstart scrollstop';

// Component: navOnScroll
$(document).on(scrollevents, function () {
    headerOnScroll($('header'));
});

function headerOnScroll($obj) {
    scroll = $(window).scrollTop();
    if (scroll < 40) {
        $obj.css('top', 40 - scroll);
        $obj.removeClass('is-sticky');
    } else {
        $obj.css('top', 0);
        $obj.addClass('is-sticky');
    }
}

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