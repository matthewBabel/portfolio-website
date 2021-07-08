$(function () {   
    $('.video-pause').each(function(){
        if (!$(this).is(":in-viewport")) {
            $(this)[0].pause();
        }
    })
})