var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    browserify = require('gulp-browserify'),
    watch = require('watch'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    eslint = require('gulp-eslint'),
    jsdoc = require('gulp-jsdoc3');

gulp.task('html', function(){
    gulp.src('./app/*.html')
        .pipe(gulp.dest('./dist'))
        .pipe(reload({stream: true}));
});

gulp.task('scripts', function(){
    // Single entry point to browserify
    gulp.src('./app/scripts/main.js')
        .pipe(browserify({
            insertGlobals: true,
            debug: !gulp.env.production
        }))
        .pipe(gulp.dest('./dist/scripts'))
        .pipe(reload({stream: true}));
});

gulp.task('images', function(){
    gulp.src('./app/assets/**/*.*')
        .pipe(gulp.dest('./dist/assets'));
});

gulp.task('watch', function(){
    gulp.watch('./app/**/*.*', ['html', 'lint', 'scripts', 'images']);
});

gulp.task('lint', () => {
    return gulp.src(['./app/js/**/*.js','!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});


gulp.task('doc', function (cb) {
    gulp.src(['README.md', './app/js/**/*.js'], {read: false})
        .pipe(jsdoc(cb));
});


gulp.task('browser-sync', function(){
    browserSync({
        server:{
            baseDir: './dist/'
        }
    });
});

gulp.task('default', ['html', 'lint', 'scripts', 'images', 'browser-sync','watch']);