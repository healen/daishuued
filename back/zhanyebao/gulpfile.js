/*引入插件*/
var gulp=require("gulp"),
    less=require("gulp-less"),
    clean=require("gulp-clean");
/*task任务编译LESS*/
gulp.task("less",function(){
    gulp.src("./less/*.less")
        .pipe(less({compress: false}))
        .on("error",function(e){console.log(e)})
        .pipe(gulp.dest("./css/"));
});
/*清理CSS*/
// gulp.task("clean", function(){
//     gulp.src("./public/styles/*.css", { read:true })
//         .pipe(clean());
// });

/*监考任务*/
gulp.task('watch', function () {
   gulp.watch('./less/*.less',function(){
     gulp.run('less','watch');
   });
});

/*自动跑任务*/
gulp.task('default',function(){
    gulp.run('less','watch');
})



