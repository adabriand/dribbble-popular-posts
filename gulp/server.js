var gulp = require('gulp');
var shell = require('gulp-shell');

// Server running tasks
gulp.task('start', ['dist'], shell.task([
    'node index.js'
]));

gulp.task('start-dev', ['dist-dev'], shell.task([
    'node index.js -d'
]));
