$(function () {
    $(document).on('submit', '#contact-form', function () {
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();

        var data = new FormData();
        data.append('name', name);
        data.append('email', email);
        data.append('message', message);

        var xhr = new XMLHttpRequest();
        xhr.open('POST', "/static/php/storeMsg.php");
        xhr.onload = function () {
          console.log(this.response);
        };
        xhr.send(data);

        // frontend 
        $("#pre-contact").addClass("invis");
        $('#post-contact').removeClass('invis');
        return false;
    });
});