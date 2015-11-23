function popupAlert(title,content){
			$.popup({
		            title:title,
		            content: "<div style='text-align:center'>"+content+"</div>",
		            close: true, //是否关闭
		            closeCallback:null,
		            Dwidth: 320,
		            popupPosition:"fixed",
		            btnList:[
		                    {
		                        "class": "",
		                        "text": "确认",
		                        "callback":function(){
		                        	$.close(".popup")
		                        } 
		                    }
		            ]
		           
		     });
		}


		function comfrimAlert(title,content,comfrim){
			$.popup({
		            title:title,
		            content: "<div style='text-align:center'>"+content+"</div>",
		            close: true, //是否关闭
		            closeCallback:null,
		            Dwidth: 320,
		            popupPosition:"fixed",
		            btnList:[
		            		{
		                        "class": "",
		                        "text": "取消",
		                        "callback":function(){
		                        	$.close(".popup")
		                        } 
		                    },
		                    {
		                        "class": "btn-primary",
		                        "text": "确认",
		                        "callback":function(){
		                        	comfrim && comfrim();
		                        	$.close(".popup")
		                        } 
		                    }
		            ]
		           
		     });
		}

		function popupDetailBox(title,content,width){
			$.popup({
		            title:title,
		            content: content,
		            close: true, //是否关闭
		            closeCallback:null,
		            Dwidth: width || 600,
		            popupPosition:"fixed"
		     });
		}