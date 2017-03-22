$(document).ready (function () {
    $('#first').each (function (){
        $(this).addClass('hover');
    });

    $('#nav li a').hover (function (){
        $('#nav li a').removeClass('hover');
        $(this).addClass('hover');
        $('#container').addClass('hover');
    });

$('.play').click(function () {
  video = '<iframe style="margin-bottom:50px;" width="600" height="375" frameborder="0" src="' + $('#one').attr('data-video') + '"></iframe>';
    $('.video').replaceWith(video);
});

$('.play2').click(function () {
    video2 = '<iframe style="margin-top:50px; margin-bottom:50px;" width="720" height="450" frameborder="0" src="' + $('#two').attr('data-video') + '"></iframe>';
    $('.video2').replaceWith(video2);
});

$('.play3').click(function () {
  video3 = '<iframe style="margin-top:50px; margin-bottom:50px;" width="864" height="540" frameborder="0" src="' + $('#three').attr('data-video') + '"></iframe>';
    $('.video3').replaceWith(video3);
});

});