$(function () {
    $("#navbar").load("/static/html/navbar.html", function() {
        $.getScript("/static/js/mobile-menu.js");
    });
    $("#project-section").load("/static/html/project.html");
    $("#about-section").load("/static/html/about.html");
    $("#contact-section").load("/static/html/contact.html");
    $("#footer").load("/static/html/footer.html");
});