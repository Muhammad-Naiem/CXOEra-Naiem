(function ($) {
    $(function () {

        $('.sub-nav').parent('li').addClass('has-sub-nav')


        if ($('.sponsor-item-wrap').length) {
            $('.sponsor-item-wrap').slick({
                speed: 5000,
                autoplay: true,
                autoplaySpeed: 0,
                centerMode: true,
                swipe: false,
                cssEase: 'linear',
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true,
                infinite: true,
                initialSlide: 1,
                arrows: false,
                buttons: false,
                pauseOnHover: false,
            });
        }

        if ($('.company-updates-sliders').length) {
            $('.company-updates-sliders').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                prevArrow: '.slider-arrow-left',
                nextArrow: '.slider-arrow-right',
            });
        }

        $('input').each(function () {
            var $_this = (this)
            $('input').on('keyup', function () {
                var $$_this = $(this)

                if ($$_this.val() == '') {
                    $$_this.parent().removeClass('focused');
                } else {
                    $$_this.parent().addClass('focused');
                }
            });

        })

    }) // End ready function.
})(jQuery)