$(function () {

    $('.hamburger').on('click', function (e) {
        e.preventDefault;
        $(this).toggleClass('hamburger_active');
        return;
    });

    $('.hamburger').click(function () {
        if ($(".active__menu").is(":visible") == true) {
            $('.active__menu').hide();
            $('.header').removeClass("slick_active")
        } else {
            $('.active__menu').show();
            $(".header").addClass("slick_active")
        }
    });

    $('.close_navbar').on('click', function () {
        $('.active__menu').fadeOut();
    });


    $('.work-us__sliders').slick({
        prevArrow: '<button class="slick-prev"><img src="../img/main-page/arrow-left.svg"></button>',
        nextArrow: '<button class="slick-next"><img src="../img/main-page/arrow-right.svg"></button>'
    });
});