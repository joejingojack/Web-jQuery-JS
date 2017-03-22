$(document).ready(function (){
    
var myVar;
setTimeout(function()
           {
    $('.fade :first-child').appendTo('.fade');
    myVar = setInterval(function(){
        $('.fade :first-child').appendTo('.fade').hide().fadeIn(1000).end();
        textSlideShow()
    },1000);
               
},1000);
    $('.fade').on('click', function() {
        clearInterval(myVar);
    });
    
var num=1;
text1 = "Picture One [TEXT]"
text2 = "Picture Two [TEXT]"
text3 = "Picture Three [TEXT]"

    function textSlideShow()
    {
        num=num+1
        if (num>3) num=1;
        $('input[NAME=textfield]').val(window['text'+num])
    }
    
});