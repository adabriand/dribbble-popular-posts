var gulp = require('gulp');
var sass = require('gulp-sass');
var stylesFiles = 'frontend/src/sass/**/*.sass';

// Styles tasks
gulp.task('styles', function() {
    gulp.src(stylesFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('frontend/src/css/'));
});

gulp.task('styles-watch',function() {
    gulp.watch(stylesFiles, ['styles']);
});
