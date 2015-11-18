// var mousedownAndTouchstart="ontouchstart" in document ? "touchstart" : "mousedown";//判断是否有触摸事件
//    var mouseupAndTouchend="ontouchend" in document ? "touchend" : "mouseup";//判断是否有触摸事件
(function($){
   
    $.fn.Tap=function(AddClass){
       this.bind({
           touchstart:function(){
               $(this).addClass(AddClass);
           },
           touchend:function(){
               $(this).removeClass(AddClass);
           }
       });
    };
    
})(jQuery);
