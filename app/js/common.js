// animate scroll
$(".go_to").on("click", function (event) {
    event.preventDefault();
    let id = $(this).attr('href'),
        top = $(id).offset().top,
        headerHeight = $('header').height();
    $('body,html').animate({scrollTop: top - headerHeight}, 500);
    $(".go_to").removeClass('active');
    $(this).addClass('active');
});

// header fixed
$(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }
});

// input focus
$("input,textarea").focus(function () {
    $(this).parent().addClass("focus");
}).blur(function () {
    if ($(this).val() === '') {
        $(this).parent().removeClass("focus");
    }
});

$('.technology-slider').slick({
    slidesToShow: 1,
    infinite: false,
    appendArrows: '.technology-slider-nav',
    prevArrow: '<button type="button" class="slick-prev">Передняя сторона</button>',
    nextArrow: '<button type="button" class="slick-next">Задняя сторона</button>',
    fade: true
});

// mobile menu
$('.navbar-toggler').on('click', function () {
   $('.overlay').fadeIn();
   $('.mobile-menu').fadeIn();
});

$('.btn-close').on('click', function () {
    $('.mobile-menu').fadeOut();
    $('.overlay').fadeOut();
});
