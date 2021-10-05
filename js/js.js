$(document).ready(function(){
	$(".links ul li a").click(function(){
		$(this).parent().addClass("active").siblings().removeClass("active");
	});
	
	$('.links li a').click(function(){
		$('html, body').animate({
			scrollTop: $("#" + $(this).data('value')).offset().top
		},2000);
		console.log($(this).data('value'));
	});
	/* out auto slider code */
	(function auto(){
			/* self invoke function */
			$('.slider .activeslider').each(function(){
				
				if (!$(this).is(':last-child')){
					
					$(this).delay(3000).fadeOut(1000, function(){
						
						$(this).removeClass("activeslider").next().addClass("activeslider").fadeIn();
						
						auto();
					});
				} 
				else{
					$(this).delay(3000).fadeOut(1000, function(){
						
						$(this).removeClass('activeslider');
						$('.slider div').eq(0).addClass('activeslider').fadeIn();
						auto();
						
					});
					
				}
				
			});
	}());
	
	/* MixItUp working */
	// Instantiate MixItUp:

	$('#Container').mixItUp();
	/* adgust shuffle links */
	$('.shuffle li').click(function(){
		$(this).addClass('selected-progects').siblings().removeClass('selected-progects');
	});
	
	/* nice scroll http://areaaperta.com/nicescroll/index.html */
	//$("html").niceScroll();
});