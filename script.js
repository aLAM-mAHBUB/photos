$(document).ready(function () {
    $('.nav-button').on('click', function () {
        $(this).toggleClass('change');
    });
    $(window).on('scroll', function () {
        let position = $(this).scrollTop();
        if (position >= 200) {
            $('.nav-menu').addClass('custom-navbar');
        } else {
            $('.nav-menu').removeClass('custom-navbar');
        }
    });

    $(window).on('scroll', function () {
        let position = $(this).scrollTop();
        console.log(position);
        if (position >= 720) {
            $('.camera-img').addClass('fromLeft');
            $('.mission-text').addClass('fromRight');
        } else {
            $('.camera-img').removeClass('fromLeft');
            $('.mission-text').removeClass('fromRight');
        }
    });

    $('.gallery-list-item').on('click', function () {
        let value = $(this).attr('data-filter');
        if (value === 'all') {
            $('.filter').show(300);
        } else {
            $('.filter').not('.' + value).hide(300);
            $('.filter').filter('.' + value).show(300);
        }
    });

    $('.gallery-list-item').on('click', function () {
        $(this).addClass('active-item').siblings().removeClass('active-item');
    });

    $(window).on('scroll', function () {
        let position = $(this).scrollTop();
        if (position >= 4650) {
            $('.card-1').addClass('moveFromLeft');
            $('.card-2').addClass('moveFromBottom');
            $('.card-3').addClass('moveFromRight');
        } else {
            $('.card-1').removeClass('moveFromLeft');
            $('.card-2').removeClass('moveFromBottom');
            $('.card-3').removeClass('moveFromRight');
        }
    });

});