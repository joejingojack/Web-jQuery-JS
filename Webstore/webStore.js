		$.fn.slider = function(){

		  $this = this;
		  var itemCount = $($this).find('li').size();
		  var activeItem = 0;

		  $('li:first-child', $this).show();

		  function cycle(){
		    if (activeItem == itemCount - 1) {
		      activeItem = 0;
		    } else {
		      activeItem += 1;
		    };
		    $($this).find('li').fadeOut(1000).parent().find('li:eq(' + (activeItem) + ')').fadeIn(1000);
		  }

		  interval = setInterval(cycle, 4000);

		}

$(document).ready(function() {
  $('.sliderimg').slider();
  
  $('.contact li:nth-child(1)').hover(function (){
    $('.contact li:nth-child(2)').addClass('hover');
  });
	
  $('.menu-dropdown').click(function(){
    $('.catalog-text').toggleClass('hover');
    $('#salewrap').removeClass('hover');
  });
  $('.menu-dropdown').hover(function (){
    $('#salewrap').removeClass('hover');
  });
  $('#salewrap').hover(function(){
    $(this).removeClass('hover');
    $(this).addClass('hover');
  });
  
  $('.cart-widget').click(function(){
    $(this).children('.cart-widget-offer').hide();
    $('html, body').animate({scrollTop:
    $(document).height() /2.5}, 'slow');
    return false;
  });
  
  $(".menu-dropdown").click(function() {   
  $('.menu-submenu').toggle("slow");
});

$(".menu-submenu").click.mouseup(function() {
  return false
});
  
$(".menu-dropdown").click.mouseup(function() {
  return false
});

$(document).mouseup(function() {
  $(".menu-submenu").toggle("slow");
});

}); 