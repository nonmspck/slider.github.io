$(document).ready(function () {
    $(".slider").slick({
        infinite: true,
        slidesToScroll: 1,
        arrows: false,
        variableWidth: true
    }).on("wheel", function (event) {
        event.preventDefault();
        if (event.originalEvent.deltaY < 0) {
            $(this).slick('slickNext');
          } else {
            $(this).slick('slickPrev');
          }}).on("beforeChange", function (event, slick, currentSlide, nextSlide) {
        if ( slick.slideCount > 2 + nextSlide + $(this).slick( "slickGetOption", "slidesToShow" ) ) {
            $(this).removeClass("slider-last");
        } else {
            $(this).addClass("slider-last");
        }
    });
});