$(document).ready(function() {
	// navbar toggle pressed effect
	$('.navbar-toggle').click(function(){
		$(this).toggleClass('activated');
	});	
	
	// overlay effect
	$(".toggle-search").click(function(){
		$('.overlay-search').toggleClass('display-overlay');
	});    
});