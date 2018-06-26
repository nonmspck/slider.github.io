$(document).ready(function () {
    $(".slider").slick({
        infinite: true,
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
    }).on("wheel", function (event) {
        event.preventDefault();
        if (event.originalEvent.deltaY < 0) {
            $(this).slick('slickNext');
          } else {
            $(this).slick('slickPrev');
          }}).on("beforeChange", function (event, slick, currentSlide, nextSlide) {
        if ( slick.slideCount > nextSlide + $(this).slick( "slickGetOption", "slidesToShow" ) ) {
            $(this).removeClass("slider-last");
        } else {
            $(this).addClass("slider-last");
        }
    });
});