
$.page=function(callback){
	$(window).scroll(function(){
	　　var scrollTop = $(this).scrollTop();
	　　var scrollHeight = $("body > .warp").height();
		// alert(scrollHeight)
	　　var windowHeight = $(this).height();
		console.log(scrollTop + windowHeight)
	　　if(scrollTop + windowHeight >= scrollHeight){
			console.log("you are in the bottom");
			callback&&callback();
	　　}
	});
}

