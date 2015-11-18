(function($){
	/**
	 * [yzm description]
	 * @param  {[type]}
	 * @param  {[type]}
	 * @param  {Function}
	 * @return {[type]}
	 */
	$.fn.yzm=function(times,callBackStart,callBackEnd){
		var sves=times;
		var timeout=null;
		this.live("click",function(){
			callBackStart && callBackStart();
			if($(this).attr("disabled")!="disabled"){
				var that=$(this);
				clearInterval(timeout);
				that.attr("disabled", "disabled");
				timeout=setInterval(function(){
					that.val(times + "秒再次发送");
	                times--;
	                if (times < 0) {
	                    clearInterval(timeout);
	                    that.val("发送验证码");
	                    times = sves;
	                    that.removeAttr("disabled");
	                    callBackEnd && callBackEnd();
	                }
				},1000)

			}
		})
	}





	$.yanzheng=function(element,times,callBackStart,callBackEnd){
		var sves=times;
		var timeout=null;
		$(element).live("click",function(){
		callBackStart && callBackStart();
		if($(this).attr("disabled")!="disabled"){
		var that=$(this);
		clearInterval(timeout);
		that.attr("disabled", "disabled");
		timeout=setInterval(function(){
		that.val(times + "秒再次发送");
		                times--;
		                if (times < 0) {
		                    clearInterval(timeout);
		                    that.val("发送验证码");
		                    times = sves;
		                    that.removeAttr("disabled");
		                    callBackEnd && callBackEnd();
		                }
		},1000)

		}
		})
}


$.fn.moneformat=function(){
	this.bind("keyup",function(){
		  var v, j, sj, rv = "";
		  v = $(this).val().replace(/,/g,"").split(".");
		  j = v[0].length % 3;
		  sj = v[0].substr(j).toString();
		  for (var i = 0; i < sj.length; i++)
		  {
		    rv = (i % 3 == 0) ? rv + "," + sj.substr(i, 1): rv + sj.substr(i, 1);
		  }
		  var rvalue = (v[1] == undefined) ? v[0].substr(0, j) + rv: v[0].substr(0, j) + rv + "." + v[1];
		  if (rvalue.charCodeAt(0) == 44)
		  {
		    rvalue = rvalue.substr(1);
		  }
		  $(this).val(rvalue);
	})
	 

}



	


})(Zepto)