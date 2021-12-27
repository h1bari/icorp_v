$('.fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrow: true,
});

Fancybox.bind('[data-fancybox="gallery"]', {
    dragToClose: false,

    Toolbar: false,
    closeButton: "top",

    Image: {
        zoom: false,
    },

    on: {
        initCarousel: (fancybox) => {
            const slide = fancybox.Carousel.slides[fancybox.Carousel.page];

            fancybox.$container.style.setProperty(
                "--bg-image",
                `url("${slide.$thumb.src}")`
            );
        },
        "Carousel.change": (fancybox, carousel, to, from) => {
            const slide = carousel.slides[to];

            fancybox.$container.style.setProperty(
                "--bg-image",
                `url("${slide.$thumb.src}")`
            );
        },
    },
});
$(document).ready(function () {
    $(".navbar-toggle").on("click", function () {
        $(".head_menu").hasClass("active") ? ($(this).parent(".head_menu").removeClass("active"),
            $(this).removeClass("close")) : ($(this).parent(".head_menu").addClass("active"),
            $(this).addClass("close"))
    })
});


