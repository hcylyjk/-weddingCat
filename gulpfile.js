const gulp = require('gulp');//gulp包
const sass = require('gulp-sass');//编译sass
// const minifyHtml = require('gulp-minify-html');//压缩html
// const uglify = require('gulp-uglify');//压缩js
// const minifyCss = require('gulp-minify-css');//压缩css
// const imagemin = require('gulp-imagemin');//压缩图片
const connect = require('gulp-connect');//浏览器自动刷新



gulp.task('sass',function (){  //编译Sass
    return gulp.src('./sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(connect.reload())
});


gulp.task('minifyHtmlIndex',function (){//index.html
    return gulp.src('./*.html')
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload())
});

gulp.task('minifyHtmlChildrens',function (){//子页面html
    return gulp.src('./html/*.html')
    .pipe(gulp.dest('./dist/html'))
    .pipe(connect.reload())
});

gulp.task('uglifyJs',function (){//js
    return gulp.src('./js/*.js')
    .pipe(gulp.dest('./dist/js'))
    .pipe(connect.reload())
});

gulp.task('minifyCss',function (){//css
    return gulp.src('./css/*.css')
    .pipe(gulp.dest('./dist/css'))
    .pipe(connect.reload())
});


gulp.task('reload',function (done){//自动更新
    connect.server({
        livereload: true,
    });
    done();
});


// 监视文件变化
gulp.task('watchs',function (){
    // 监视css文件夹中的所有.css文件的变化并执行copy任务
    // gulp.watch('./css/*.css',gulp.series('copy'));
    gulp.watch('./sass/*.scss',gulp.series('sass'));
    gulp.watch('./css/*.css',gulp.series('minifyCss'));//监视css变化
    gulp.watch('./js/*.js',gulp.series('uglifyJs'));//监视js变化
    gulp.watch('./*.html',gulp.series('minifyHtmlIndex'));//监视Indexhtml变化
    gulp.watch('./html/*.html',gulp.series('minifyHtmlChildrens'));//监视子页面html变化
});

gulp.task('run',gulp.series('reload','watchs'));





























