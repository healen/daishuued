$("#leftNavSider>li>a").bind("click",function(){
    var parentLi=$(this).parents("li");
    var ul=parentLi.find("ul").length;
    parentLi.addClass("active").siblings("li").removeClass("active")
    if(ul>0){
        if(parentLi.find("ul").is(":hidden")){
            parentLi.find("ul").stop(true,false).slideDown(250);
            parentLi.siblings().find("ul").stop(true,false).slideUp(250);
         }else{
            parentLi.find("ul").stop(true,false).slideUp(250);
             parentLi.removeClass("active")
         }
       
    }
})

$("#leftNavSider>li>ul>li").bind("click",function(){
    $(this).addClass("active").siblings("li").removeClass("active");
})


$(".titlename .close").bind("click",function(){
    var parent=$(this).parents(".titlename");
    parent.hide();

})