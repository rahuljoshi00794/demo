$(document).ready(function(){
		$(".row.navigation li.navigation-li").hover(function(){
		$(this).find("ul:first").slideDown("fast");
		},
		function(){
		$(this).find("ul:first").hide();
		});
		
		$(".row.navigation .padded-left button").click(function(){
			$(".button-dropdown").slideToggle("fast");
		});
		
		$(document).scroll(function(){
			$("#top-scroll").show("fast");
		});
		$(window).scroll(function() {
		var height = $(window).scrollTop();
		if(height==0){
			$("#top-scroll").hide("fast");
		}
	});
});