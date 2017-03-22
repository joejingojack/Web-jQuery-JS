$(document).ready(function() {
 
  $("h5").hover(function () {
    $("#img_gallery").toggleClass('hover').siblings().removeClass('hover');
    $("#img_three").animate({
    opacity:0.9,
    height: "toggle"
  }, 1000, function() {
    // Animation complete.
  });
  });
  $("#img_three").hover(function () {

$("#img_gallery").toggleClass('hover').siblings().removeClass('hover');
    
  });

    $("#img_gallery").hover(function () {
    $(this).toggleClass('hover');
    $(".center-col").toggleClass('hover');      
  });

  $('.center-col').hover(function () {
    $(this).toggleClass('hover');
    $("#img_gallery").toggleClass('hover');
  });
  
});