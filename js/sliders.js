$( document ).ready( function(){
	
	$( ".gifts-slider" ).slick({

	dots: false,
	arrows: false,
  	dotsClass: 'slick-dots',
  	infinite: true,
  	cssEase: 'linear', 
  	autoplay:true,
  	autoplaySpeed:3000,
  	
  	prevArrow:'<button type="button" class="slick-prev"></button>',
  	nextArrow:'<button type="button" class="slick-next"></button>',
  	centerMode:true,
  	slidesToScroll:1,
  	fade:true,
  	responsive: null,

	});
	
});
