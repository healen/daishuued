
$.page=function(callback){
	$(window).scroll(function(){

	　　var scrollTop = $(this).scrollTop();
	　　var scrollHeight = $("body > .warp").height();
	　　var windowHeight = $(this).height();
	　　if(scrollTop + windowHeight >= scrollHeight){

			callback&&callback();
			
	　　}
	});
}

