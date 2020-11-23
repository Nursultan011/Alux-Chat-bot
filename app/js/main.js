$(document).ready($(function () {

    // ------ Модальное окно -----

    $('.popup-open').click(function () {
        $('.popup-fade').fadeIn();
        return false;
    });

    $('.popup-close').click(function () {
        $(this).parents('.popup-fade').fadeOut();
        return false;
    });

    $('.popup-fade').click(function (e) {
        if ($(e.target).closest('.popup').length == 0) {
            $(this).fadeOut();
        }
    });

    // ------ Бургер меню ----------

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

    // ----- Слайдер -------

    $('.work-us__sliders').slick({
        prevArrow: '<button class="slick-prev"><img src="../img/main-page/arrow-left.svg"></button>',
        nextArrow: '<button class="slick-next"><img src="../img/main-page/arrow-right.svg"></button>'
    });

    // ------ Анимация с цифрами -------

    let scrolled = false
    let pageOffset = 400
    function myFunction(x) {
        if (x.matches) { // If media query matches
            pageOffset = 800
        } else {
            pageOffset = 400
        }
    }

    window.addEventListener('scroll', (e) => {
        var x = window.matchMedia("(max-width: 767px)")
        myFunction(x)
        x.addListener(myFunction)
        if (window.scrollY > pageOffset && !scrolled) {
            scrolled = true
            call()
        }

    });
    let year = 0, worker = 0, project = 0;
    function setCount(item, className, duration, limit) {
        setInterval(() => {
            $(`.${className}`).text(item);
            if (item < limit) item++
            else clearInterval(this)
        }, duration);
    }

    function call() {
        setCount(year, 'year', 30, 14)
        setCount(worker, 'worker', 30, 25)
        setCount(project, 'project', 1, 500)
    }

    // ----- Табы ------

    let qur = 0

    $(".tabs").first().show();
    $(".news-content__btn")[qur].classList.add('news-content__btn-active')
    $(".news-content__btn").click(function () {
        $(".news-content__btn")[qur].classList.remove('news-content__btn-active')
        $(this).addClass('news-content__btn-active')
        qur = $(".news-content__btn").index(this)
        $(".tabs").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass(".news-content__btn-active");
}));