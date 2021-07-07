$(function () {
    var leftElements = document.querySelectorAll('.hidden-left');
    var rightElements = document.querySelectorAll('.hidden-right');
    var topElements = document.querySelectorAll('.hidden-top');
    windowHeight = window.innerHeight - (window.innerHeight/4);

    console.log(windowHeight)

    for (var i = 0; i < leftElements.length; i++) {
        var element = leftElements[i];
        var positionFromTop = leftElements[i].getBoundingClientRect().top;

        if (positionFromTop - windowHeight <= 0) {
            element.classList.add('fade-in-element-left');
            element.classList.remove('hidden-left');
        }
    }

    for (var i = 0; i < rightElements.length; i++) {
        var element = rightElements[i];
        var positionFromTop = rightElements[i].getBoundingClientRect().top;

        if (positionFromTop - windowHeight <= 0) {
            element.classList.add('fade-in-element-right');
            element.classList.remove('hidden-right');
        }
    }

    for (var i = 0; i < topElements.length; i++) {
        var element = topElements[i];
        var positionFromTop = topElements[i].getBoundingClientRect().top;

        if (positionFromTop - windowHeight <= 0) {
            element.classList.add('fade-in-element-top');
            element.classList.remove('hidden-top');
        }
    }
});