$(document).ready(function() {
    console.log('script work!');

    // Делаем карусель в секции photos
    $('.js-slider-wrap').each(function(index, sliderWrap) {
        let slider = $(sliderWrap).find('.js-slider');
        let btnPrev = $(sliderWrap).find('.js-btn-prev');
        let btnNext = $(sliderWrap).find('.js-btn-next');

        $(slider).slick({
            // autoplay: true,
            // dots: true,
            prevArrow: btnPrev,
            nextArrow: btnNext,
        });

        console.log(index);
        console.log(sliderWrap);
    });


});