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
});