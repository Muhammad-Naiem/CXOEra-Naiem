(function ($) {
    $(function () {

        $('#phone-nav').click(function () {
            $('body').toggleClass('navShown')
        })

        $('.sub-nav').parent('li').addClass('has-sub-nav')
        if ($(window).width() > 991) {

$('.header-cta a.login').mouseenter(function(){
    $(this).addClass('hoverd')
    $('.main-nav > ul > li').stop(true, true).removeClass('hoverd')
})

            $('.main-nav > ul > li, .header-cta a.login').addClass('hoverd')
            $('.main-nav > ul > li > a').mouseenter(function (e) {
                e.preventDefault()
                console.log('enter')
                $('.main-nav > ul > li, .header-cta a.login').stop(true, true).removeClass('hoverd')
                $(this).parent('li').stop(true, true).addClass('hoverd')
            })
            $('.main-nav > ul > li > a, .header-cta a.login').mouseleave(function () {
                console.log('enter')
                $('.main-nav > ul > li, .header-cta a.login').stop(true, true).addClass('hoverd')
            })

            $('.has-sub-nav').each(function () {
                var $this = $(this)
                $this.find('> a').mouseenter(function () {
                    $(this).stop(true, true).addClass('nav-open')
                    $this.find('.sub-nav').stop(true, true).fadeIn()
                })
                $this.mouseleave(function () {
                    $('.has-sub-nav a').removeClass('nav-open')
                    $this.find('.sub-nav').stop(true, true).fadeOut()
                })
            })
        }

        if ($(window).width() < 992) {
            $(".has-sub-nav").each(function () {
                var $this = $(this);
                $this.find(" > a").on("click touch", function (e) {
                    e.preventDefault();
                    $(".has-sub-nav > a").removeClass("nav-open")
                    $(".sub-nav").slideUp();
                    if ($this.find(".sub-nav:visible").length) {
                        $(".has-sub-nav > a").removeClass("nav-open")
                        $(".sub-nav").slideUp();
                    } else {
                        $this.find('> a').addClass("nav-open")
                        $(".sub-nav").slideUp();
                        $this.find(".sub-nav").slideDown();
                    }
                })
            })
        }


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
                pauseOnHover: false
            });
        }

        if ($('.company-updates-sliders').length) {
            $('.company-updates-sliders').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                prevArrow: '.slider-arrow-left',
                nextArrow: '.slider-arrow-right',
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            adaptiveHeight: true,
                        },
        },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        },
        },
      ],
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