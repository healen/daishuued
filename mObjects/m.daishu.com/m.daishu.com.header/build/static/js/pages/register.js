

// $(".verification").yzm(10,function(){
// 	alert("发送成功");
// })


$(".verification").on("click",function(){
	$.yanzheng(".verification",10,function(){},function(){
		alert(1)
	})
})