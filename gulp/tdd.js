var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var karmaServer = require('karma').Server;
var jshint = require('gulp-jshint');
var sourceAppDir = 'frontend/src/app/**/*.js';

// Testing tasks
function _createKarmaServer(callback, isSingleRun) {
    return new karmaServer({
        configFile: __dirname + '/karma.conf.js',
        singleRun: isSingleRun
    }, callback);
}

gulp.task('test', ['lint'], function(done) {
    _createKarmaServer(done, true).start();
});

gulp.task('tdd', ['styles-watch'], function(done) {
    _createKarmaServer(done, false).start();
});

gulp.task('lint', function() {
    gulp.src(sourceAppDir)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});