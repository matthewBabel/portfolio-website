
$(function () {
    var text = document.getElementById('typewriter-text');

    var typewriter = new Typewriter(text, {
        delay: 40,
        deleteSpeed: 20,
    });
/*<h1>Hello, I'm <b style="color:lightsalmon">Matthew Babel</b>.<br> I'm a full-stack web developer.</h1>*/

    typewriter.typeString("Hello, I'm <b>Matthew Babel</b>.<br> I'm a full-stack web developer.</h1>")
    .pauseFor(1500)
    .deleteChars(32)
    .typeString("What can I do for <b>you</b>?")
    .start();

});