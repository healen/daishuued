
/*
 * jQuery placeholder, fix for IE6,7,8,9
 * @author JENA
 * @since 20131115.1504
 * @website ishere.cn
 */
var JPlaceHolder = {
    //检测
    _check : function(){
        return 'placeholder' in document.createElement('input');
    },
    //初始化
    init : function(){
        if(!this._check()){
            this.fix();
        }
    },
    //修复
    fix : function(){
        jQuery(':input[placeholder]').each(function(index, element) {
            var self = $(this), txt = self.attr('placeholder');
            self.wrap($('<div></div>').css({position:'relative', zoom:'1', border:'none', background:'none', padding:'none', margin:'none'}));
            var pos = self.position(), h = self.outerHeight(true), paddingleft = self.css('padding-left');
            var holder = $('<span></span>').text(txt).css({'position':'absolute', 'left':pos.left, 'top':pos.top, 'height':h, 'line-height':h, 'padding-left':'padding-left', 'color':'#d9d9d9'}).appendTo(self.parent());
            self.focusin(function(e) {
                holder.hide();
            }).focusout(function(e) {
                if(!self.val()){
                    holder.show();
                }
            });
            holder.click(function(e) {
                holder.hide();
                self.focus();
            });
        });
    }
};



/*得到焦点*/

$(".text_control").bind({
    focus:function(){
        var p=$(this).parents(".inputbox");
        p.addClass("focus");
    },
    blur:function(){
        var p=$(this).parents(".inputbox");
        p.removeClass("focus");
    }
})


/*Tab*/
$(".tabview a").click(function(){
    var num=$(this).index();
    $(this).addClass("active").siblings().removeClass("active");
    $(".viewbtnbox").eq(num).show();
    $(".viewbtnbox").eq(num).siblings(".viewbtnbox").hide();
})

/**
 * 获取验证码
 * @param  {[string]} ele  [DOM元素]
 * @param  {[number]} time [倒计时时间]
 */
var verify=function(ele,time){
    var timer=null;
    var sce=time;
    $(ele).on("click",function(){
        var oW=$(this);
        oW.attr("disabled","disabled");
        oW.val(sce+"秒重新获取");
        clearInterval(timer);
        timer=setInterval(function(){
            sce--
            if(sce<1){
                oW.removeAttr("disabled").val("获取验证码");
                clearInterval(timer);
                sce=time
                return
            }
            oW.val(sce+"秒重新获取");
        },1000);
    })
}


$(function(){
	JPlaceHolder.init(); 
	$(".navbox li.toggle").hover(function(){
		$(this).addClass("on");
	},function(){
		$(this).removeClass("on");
	});
    /*管理首页路由JS*/
	$('.navbox > ul > li').each(function(){
        var cc = $(this);
        cc.attr('class','');
	});
	if(window.location.href.indexOf('index')>-1){
		$('#index').attr('class','active');
	}else if(window.location.href.indexOf('investment')>-1){
		$('#investment').attr('class','active');
	}else if(window.location.href.indexOf('my_borrow')>-1){
		$('#my_borrow').attr('class','active');
	}else if(window.location.href.indexOf('about_us')>-1){
		$('#about_us').attr('class','active');
	}else if(window.location.href.indexOf('novice_area')>-1){
		$('#novice_area').attr('class','active');
	}else if(window.location.href.indexOf('my')>-1){
        $('#my').attr('class','active');
    }else{
		$('.navbox > ul > li').attr('class','');
	}


    /*个人中心路由JS*/
    $("#leftNavSider > li").removeClass("active").removeClass("open");



    if(window.location.href.indexOf('my_index')>1){
        $("li[data-role='my_index']").attr('class','active open');
    }else if(window.location.href.indexOf('my_user')>1){
         $("li[data-role='my_user']").attr('class','active open');
    }else if(window.location.href.indexOf('my_money')>1){
         $("li[data-role='my_money']").attr('class','active open');
    }else if(window.location.href.indexOf('my_reward')>1){
         $("li[data-role='my_reward']").attr('class','active open');
    }else if(window.location.href.indexOf('my_borrow')>1){
         $("li[data-role='my_borrow']").attr('class','active open');
    }else if(window.location.href.indexOf('my_friend')>1){
         $("li[data-role='my_friend']").attr('class','active open');
    }
	
})






/**
 * 人民币格式
 * @param num
 * @return 金额格式的字符串,如'1,234,567.45'
 */
function formatCurrency(num) {
    num = num.toString().replace(/\$|\,/g,'');
    if(isNaN(num))
    num = "0";
    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num*100+0.50000000001);
    cents = num%100;
    num = Math.floor(num/100).toString();
    if(cents<10)
    cents = "0" + cents;
    for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
    num = num.substring(0,num.length-(4*i+3))+','+
    num.substring(num.length-(4*i+3));
    return (((sign)?'':'-') + num + '.' + cents);
}

//解决火狐获取焦点不生效
function setFocus(id){
    $('#'+id).focus();
}
/**
 * 浮点数减法
 * @param arg1
 * @param arg2
 * @returns
 */
function floatSub(arg1,arg2){  
    var r1,r2,m,n;  
    try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}  
    try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}  
    m=Math.pow(10,Math.max(r1,r2));  
    //动态控制精度长度  
    n=(r1>=r2)?r1:r2;  
    return ((arg1*m-arg2*m)/m).toFixed(n);  
}
function toDecimal(x) {  
    var f = parseFloat(x);              
    if (isNaN(f)) {  
            return;              
    }              
    f = Math.round(x*100)/100;              
    return f;          
} 

//生成圆的方法多次调用的方法
function get_series_data(arr){
    var colors =['#eee', '#8bd8ff'];//
    var data = [    
        {                          
            color: colors[1],
            name: '完成',
            y: arr[0]
        },
        {
            color: colors[0],
            name: '剩余',
            y: arr[1]
        }
    ];
    return data;
}

function highcharts_tubiao(k, spec){
    $(k).highcharts({
        chart: {
            renderTo: 'container',
            type: 'pie',
            backgroundColor:'#ffffff',
            borderColor:"#ffffff",
            borderWidth:0,
            height:60,
            width:60,
            margin:[0,0,0,0]
          
        },
        title: {
            text: ''
        },
        exporting:{
            enabled: false
        },
        tooltip: {
            valueSuffix: '%',
            enabled:false
        },
        plotOptions: {
            pie: {
                allowPointSelect: false,
                size:60,
                innerSize: '250%',

                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: false,
                borderWidth:0,
                shadow: false
            }
        },
        credits:{
             enabled:false // 禁用版权信息
        },
        series: [
            {
                name: '额度',
                data: spec
               
            }
        ]
    })

}

function createline(obj,arr){
    var spec = get_series_data(arr);
    highcharts_tubiao(obj.find('.svgbox'),spec);
    if(spec[0].y>=0 && spec[0].y<=25){
        obj.find(".comm-position").addClass("position-1");
    }else if(spec[0].y>=26 && spec[0].y<=50){
        obj.find(".comm-position").addClass("position-2");
    }else if(spec[0].y>=51 && spec[0].y<=75){
        obj.find(".comm-position").addClass("position-3");
    }else{
        obj.find(".comm-position").addClass("position-4");
    }
}

function formatMoney(number, places, symbol, thousand, decimal) {
    number = number/10000 || 0;
    places = !isNaN(places = Math.abs(places)) ? places : 2;
    symbol = symbol !== undefined ? symbol : "$";
    thousand = thousand || ",";
    decimal = decimal || ".";
    var negative = number < 0 ? "-" : "",
        i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
}

/**
 * 
 * @param annualRate 利率
 * @param repayMode 还款方式
 * @param repayPeriod 期限
 * @param investAmt 投资额
 * @returns
 */

//格式化金额
function foramtmoney(price, len)   
{  
   len = len > 0 && len <= 20 ? len : 2;   
   price = parseFloat((price + "").replace(/[^\d\.-]/g, "")).toFixed(len) + "";   
   var l = price.split(".")[0].split("").reverse(),   
   r = price.split(".")[1];   
   t = "";   
   for(i = 0; i < l.length; i ++ )   
   {   
      t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");   
   }   
   var re = t.split("").reverse().join("") + "." + r;
   return re.replace("-,","-");
}

function accAdd(arg1,arg2){
   var r1,r2,m;
   try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
   try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
   m=Math.pow(10,Math.max(r1,r2));
   return (arg1*m+arg2*m)/m;
} 


function format(val){
    return parseFloat(val.replace(/\,/g,""));
}



function highcharpie(element,data){
     $(element).highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: true
        },
        title: {
             text: ''
        },
        tooltip: {
            pointFormat: '占{series.name}百分比: <b>{point.percentage:.1f}%</b>'
        },

         exporting:{
            enabled: true
        },
        credits:{
             enabled:false // 禁用版权信息
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                size:250,
       
                dataLabels: {
                    enabled: true,
                    color: '#666',
                    // connectorColor: '#a6a6a6',
                    style:{
                        "fontFamily":"微软雅黑",
                        "fontSize":"16px",
                        "lineHeight":"22px"
                    },
                    format: '{point.name}<br />{point.y:.1f}元'// 
                },
             
            }
           

        },

        // plotOptions.pie.dataLabels.enabled=true;
        series: [{
            type: 'pie',
            name: '总资产',
            // colorByPoint: true,
            states:{
                hover:{
                    lineColor:"#ff0000"
                }
            },
            data: data
        }]
    });
}               



(function($){
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
        this.bind('blur',function(){
            var vs=$(this).val();
            if(format(vs)>0 && vs.indexOf(".00") < 0 ){
                var v = $(this).val()+".00";
                $(this).val(v);
            }

           
        })
    }
})(jQuery)
