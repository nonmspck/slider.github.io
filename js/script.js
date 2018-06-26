$(document).ready(function () {
    $(".slider").slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false
                }
            }
        ]
    }).on("mousewheel", function (event) {
        event.preventDefault();
        if (event.deltaX > 0 || event.deltaY < 0) {
            $(this).slick("slickNext");
        } else if (event.deltaX < 0 || event.deltaY > 0) {
            $(this).slick("slickPrev");
    }}).on("beforeChange", function (event, slick, currentSlide, nextSlide) {
        if ( slick.slideCount === nextSlide + $(this).slick( "slickGetOption", "slidesToShow" ) ) {
            $(this).addClass("slider-last");
        } else {
            $(this).removeClass("slider-last");
        }
    });
});