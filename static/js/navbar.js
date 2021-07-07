$(function () {
    var scrollToElem = $('#project-section').offset().top
    var betweenElem = scrollToElem + 100;
    var windowTop = $(window).scrollTop();

    var windowWidth = $(window).width();

    //mobile design
    if (windowWidth <= 768) {
        $('#navbar').addClass('isFixed');
    } else {
        if (windowTop >= betweenElem) {
            $('#navbar').addClass('isFixed');
        } else if (windowTop >= scrollToElem) {
            $('#navbar').addClass('isBetween');
        } else {
            $('#navbar').removeClass('isFixed');
            $('#navbar').removeClass('isBetween');
        }
    }


    var windowHeight = $(window).height();
    var windowTopCenter = windowTop + (windowHeight / 2);
    var windowBottomCenter = windowTop + windowHeight - (windowHeight / 2);

    var homeTop = $('#home-section').offset().top;
    var homeBottom = windowHeight;

    if (windowTopCenter >= homeTop && windowBottomCenter <= homeBottom) {
        $('.home').addClass('highlight-link');

    } else {
        $('.home').removeClass('highlight-link');
    }

    var projectTop = $('#project-section').offset().top;
    var projectBottom = $('#project-section').outerHeight() + projectTop;

    if (windowTopCenter >= projectTop && windowBottomCenter <= projectBottom) {
        $('.project').addClass('highlight-link');
    } else {
        $('.project').removeClass('highlight-link');
    }

    var aboutTop = $('#about-section').offset().top;
    var aboutBottom = $('#about-section').outerHeight() + aboutTop;

    if (windowTopCenter >= aboutTop && windowBottomCenter <= aboutBottom) {
        $('.about').addClass('highlight-link');
    } else {
        $('.about').removeClass('highlight-link');
    }

    var contactTop = $('#contact-section').offset().top;
    var contactBottom = $('#contact-section').outerHeight() + contactTop;

    if (windowTopCenter >= contactTop && windowBottomCenter <= contactBottom) {
        $('.contact').addClass('highlight-link');
    } else {
        $('.contact').removeClass('highlight-link');
    }
});