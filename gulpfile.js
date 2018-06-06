var gulp = require('gulp'),
    rename = require('gulp-rename'),
    minifycss = require('gulp-cssmin'),
    tinypng = require('gulp-tinypng');
    autoprefixer = require('gulp-autoprefixer'),
    del = require('del');
    browserSync = require('browser-sync');

gulp.task('css', function(){
    return gulp.src("src/css/**/*.css")
    .pipe(autoprefixer({
        browsers: ['cover 99.5%', 'iOS 7']
    }))
    .pipe(gulp.dest("app/css/"))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('cssmin', function(){
    return gulp.src("src/css/**/style.css")   //minify style.css from /src/ folder so build task also can work
    .pipe(minifycss())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('app/css/'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('tinypng', function(){
    return gulp.src(["src/img/*.png", "src/img/*.jpg"])
    .pipe(tinypng("sJsbrFotLaTukWnLmbFWP2Ztandg8nzA"))
    .pipe(gulp.dest('app/img'));
});

gulp.task('browser-sync', function(){
   browserSync({
       server: {
           baseDir: 'src'
       },
       notify: false
   }); 
});

gulp.task('watch', ['css', 'cssmin', 'browser-sync'], function(){
    gulp.watch('src/css/**/*.css', ['css']);
    gulp.watch('app/css/style.css', ['cssmin']);
});


gulp.task('clean', function(){
    del.sync('app/css');
    del.sync('app/js');
    del.sync('app/img');
//add all other folders which should be removed in /app/ before build-task
})

//here in list of tasks also 'tinypng' should be added
gulp.task('build', ['clean', 'css', 'cssmin'], function(){
    gulp.src('src/img/**/*.+(jpg|png|jpeg)')
    .pipe(gulp.dest('app/img'));

    gulp.src('src/fonts/**/*.*')
    .pipe(gulp.dest('app/fonts'));

//here should be handler for JS files
    gulp.src('src/js/**/*.*')
    .pipe(gulp.dest('app/js'));


    gulp.src('src/*.html')
    .pipe(gulp.dest('app/'));

});