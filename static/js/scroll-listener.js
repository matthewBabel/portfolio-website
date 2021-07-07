$(function () {
    window.addEventListener('scroll', scrollEvent);


    function scrollEvent() {
        $.getScript("/static/js/navbar.js");
        $.getScript("/static/js/element-transition.js");
    }
});