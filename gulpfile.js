var gulp = require('gulp'),
    rename = require('gulp-rename'),
    minifycss = require('gulp-cssmin'),
    tinypng = require('gulp-tinypng');
    autoprefixer = require('gulp-autoprefixer'),
    del = require('del'),
    spritesmith = require('gulp.spritesmith'),
    merge = require('merge-stream'),
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
    return gulp.src([
        "app/css/**/*.css",
        "!app/css/style.min.css"

    ])
    .pipe(concat(styles.css))
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
           baseDir: 'app'
       },
       notify: false
   }); 
});

gulp.task('sprite', function() {
    var spriteData = gulp.src('src/sprite/*.png')
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprite.css',
            imgPath: '../img/sprite.png'
        }));

    var imgStream = spriteData.img
        .pipe(gulp.dest('app/img/'));
        
    var cssStream = spriteData.css
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/css/'));
    return merge(imgStream, cssStream);        
}); 


gulp.task('watch', ['css', 'cssmin', 'sprite', 'browser-sync'], function(){
    gulp.watch('src/css/**/*.css', ['css']);
    gulp.watch('app/css/style.css', ['cssmin']);
    gulp.watch('src/sprite/*.png', ['sprite']);
});


gulp.task('clean', function(){
    del.sync('app/css');
    del.sync('app/js');
    del.sync('app/img');
//add all other folders which should be removed in /app/ before build-task
})

//here in list of tasks also 'tinypng' should be added
gulp.task('build', ['clean', 'css', 'cssmin'], function(){
//this one will be unnecessary if 'tinypng' is present in tasks list 
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