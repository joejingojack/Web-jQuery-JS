$(document).ready (function () {
    $('#nav li a').each (function (){
        $('#nav li a').removeClass('hover');
        $(this).addClass('hover');
        $('#container').addClass('hover');
    });
    $('#nav li a').hover (function (){
        $('#nav li a').removeClass('hover');
        $(this).addClass('hover');
        $('#container').addClass('hover');
    });

});

var myVideo = document.getElementById("video1");
var myVideo2 = document.getElementById("video2");
var menu = document.getElementById("menu");
var menu2 = document.getElementById("menu2");
myVideo.style.marginLeft = "-20px";
myVideo2.style.marginLeft = "-20px";


function playPause() {
    if (myVideo.paused) myVideo.play();
    else myVideo.pause();
}

function makeBig() {
    myVideo.height = 325;
    myVideo.width = 650;
    myVideo.style.marginLeft = "-35px";
    menu.style.width = '578px';
    menu.style.marginLeft = "1px";
}

function makeSmall() {
    myVideo.height = 175;
    myVideo.width = 350;
    myVideo.style.marginLeft = "-58px";
    menu.style.width = '312px';
    menu.style.marginLeft = "115px";
}

function makeNormal() {
    myVideo.height = 250;
    myVideo.width = 500;
    myVideo.style.marginLeft = "-20px";
    menu.style.width = '444px';
    menu.style.marginLeft = "68px";
}

//--------video2--------//

function playPause2() {
    if (myVideo2.paused) myVideo2.play();
    else myVideo2.pause();
}

function makeBig2() {
    myVideo2.height = 390;
    myVideo2.width = 600;
    myVideo2.style.marginLeft = "-20px";
    menu2.style.width = '592px';
    menu2.style.marginLeft = "-6px";
}

function makeSmall2() {
    myVideo2.height = 210;
    myVideo2.width = 420;
    myVideo2.style.marginLeft = "-52px";
    menu2.style.width = '318px';
    menu2.style.marginLeft = "115px";
}

function makeNormal2() {
    myVideo2.height = 300;
    myVideo2.width = 600;
    myVideo2.style.marginLeft = "-20px";
    menu2.style.width = '454px';
    menu2.style.marginLeft = "63.5px";
}