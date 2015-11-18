$(function(){
	$(".wx").hover(function(){
		$(".erweima").addClass("on");
	},function(){
		$(".erweima").removeClass("on");
	})

	$("ul.nav li").hover(function(){
		if($(this).find(".nav-dropdown").length>=0){
			$(this).find(".nav-dropdown").show();
			$(this).find("a").addClass("on");
		}
	},function(){
		if($(this).find(".nav-dropdown").length>=0){
			$(this).find(".nav-dropdown").hide();
			$(this).find("a").removeClass("on");
		}

	})
})