/*引入插件*/
var gulp=require("gulp"),
    less=require("gulp-less"),
    clean=require("gulp-clean")
    fs = require('fs');
/*task任务编译LESS*/
gulp.task("less",["clean"],function(){
    gulp.src("./Mosa/less/*.less")
        .pipe(less({compress: false}))
        .on("error",function(e){console.log(e)})
        .pipe(gulp.dest("./public/styles/"));
});
/*清理CSS*/
gulp.task("clean", function(){
    gulp.src("./public/styles/*.css", { read:true })
        .pipe(clean());
});
/*自定义模板引擎任务*/
gulp.task('tpl',function(){
    fs.readdir("./tpl",function(err,file){
        var HTMLfileFilter=[];
        var TPLfileFilter=[];
        var fileArr=file;
        var HTMLreg=/.*\.html$/;
        var TPLreg=/.*\.tpl$/;
        var page = fs.existsSync("./page");
        var dataFIS;
        if(!page){
            fs.mkdir('./page',function(err){
                if(err){
                    console.log('文件夹创建出错')
                }
            })
        }
        //var INCLUDEreg=/^%\s*inc=\'(.*\..*)\'\s*%$/   //{% inc='footer.tpl' %}
        var write=[];
        /*过滤*/
        for(var i=0;i<fileArr.length;i++){
            if(HTMLreg.test(fileArr[i])){
                HTMLfileFilter.push(fileArr[i])
            }
            if(TPLreg.test(fileArr[i])){
                TPLfileFilter.push(fileArr[i])
            }
        }
        /*写入读取*/
        for(var i=0;i<HTMLfileFilter.length;i++){
            var filenames= "./tpl/"+HTMLfileFilter[i];
            dataFIS=fs.readFileSync("./tpl/"+HTMLfileFilter[i]);
            for (j in TPLfileFilter){
                Tpldata=fs.readFileSync("./tpl/"+TPLfileFilter[j]);
                console.log("模板tpl:"+TPLfileFilter[j]);
                dataFIS = dataFIS.toString().replace(new RegExp("{%.*inc='"+TPLfileFilter[j]+"'.*%}","g"),Tpldata.toString());
            }
            console.log("页面HTML:"+HTMLfileFilter[i]);
            fs.writeFile("./page/"+HTMLfileFilter[i],dataFIS,function(err){});
            console.log("-----------"+HTMLfileFilter[i]+"写入成功-----------");
        }
    })
})

/*监考任务*/
gulp.task('watch', function () {
   gulp.watch(['./Mosa/**/*.less','./tpl/**/*'],function(){
     gulp.run('less','clean','watch','tpl');
   });
});



/*自动跑任务*/
gulp.task('default',function(){
    gulp.run('less','clean','watch','tpl');
})



