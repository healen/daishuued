

// $(".verification").yzm(10,function(){
// 	alert("发送成功");
// })





if($("#telNumber").val() != ""){
	$(".verification").on("click",function(){
		$.yanzheng(".verification",10,function(){},function(){
			alert(1)
		})
	})
}
