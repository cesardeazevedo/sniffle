var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var exec = require('child_process').exec;
var browserSync = require('browser-sync');


gulp.task('build', function() {
    return browserify({ entries: './static/app/app.browserify.js', debug: true })
    .transform(babelify)
    .bundle()
    .pipe(source('app.min.js'))
    .pipe(gulp.dest('./static/dist'));
});

gulp.task('runserver', function(){
    return exec('python manage.py runserver');
});

gulp.task('browsersync', function(){
    browserSync({
        notify: false,
        proxy: 'http://localhost:8000'
    });
});

gulp.task('watch', function(){
    gulp.watch('./static/app/**/*.js', ['build']);
});

gulp.task('default', ['build', 'watch']);
gulp.task('serve',   ['default', 'browsersync', 'runserver']);
