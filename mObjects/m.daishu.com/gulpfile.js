/*引入插件*/
var gulp=require("gulp"),
    less=require("gulp-less"),
    clean=require("gulp-clean");
/*task任务编译LESS*/
gulp.task("less",["clean"],function(){
    gulp.src("./Mosa/less/*.less")
        .pipe(less({compress: false}))
        .on("error",function(e){console.log(e)})
        .pipe(gulp.dest("./static/css/"));
});
/*清理CSS*/
gulp.task("clean", function(){
    gulp.src("./static/css/*.css", { read:true })
        .pipe(clean());
});

/*监考任务*/
gulp.task('watch', function () {
   gulp.watch('./Mosa/**/*.less',function(){
     gulp.run('less','clean','watch');
   });
});


/*自动跑任务*/
gulp.task('default',function(){
    gulp.run('less','clean','watch');
})

gulp.task('copy',function(){
    var fs = require( 'fs' ),
    stat = fs.stat;
    /*
     * 复制目录中的所有文件包括子目录
     * @param{ String } 需要复制的目录
     * @param{ String } 复制到指定的目录
     */
    var copy = function( src, dst ){
        // 读取目录中的所有文件/目录
        fs.readdir( src, function( err, paths ){
            if( err ){
                throw err;
            }
            paths.forEach(function( path ){
                var _src = src + '/' + path,
                    _dst = dst + '/' + path,
                    readable, writable;       
                stat( _src, function( err, st ){
                    if( err ){
                        throw err;
                    }
                    // 判断是否为文件
                    if( st.isFile() ){
                        // 创建读取流
                        readable = fs.createReadStream( _src );
                        // 创建写入流
                        writable = fs.createWriteStream( _dst );   
                        // 通过管道来传输流
                        readable.pipe( writable );
                    }
                    // 如果是目录则递归调用自身
                    else if( st.isDirectory() ){
                        exists( _src, _dst, copy );
                    }
                });
            });
        });
    };
    // 在复制目录前需要判断该目录是否存在，不存在需要先创建目录
    var exists = function( src, dst, callback ){
        fs.exists( dst, function( exists ){
            // 已存在
            if( exists ){
                callback( src, dst );
            }
            // 不存在
            else{
                fs.mkdir( dst, function(){
                    callback( src, dst );
                });
            }
        });
    };
    // 复制目录
    exists( './pages', './build/pages/', copy );
    exists( './static', './build/static/', copy );
  
})








