var gulp = require('gulp');
var fs = require('fs')
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var inject = require('gulp-inject');
var angularFileSort = require('gulp-angular-filesort');
var wireDep = require('wiredep').stream;

var sourceDir = 'frontend/src/';
var sourceAppDir = sourceDir + 'app/';
var sourceCSSDir = sourceDir + 'css/';
var sourceFontsDir = sourceDir + 'fonts/';
var sourceImgsDir = sourceDir + 'imgs/';
var sourceScriptsDir = sourceDir + 'bower_components/';
var sourceInjectOptions = {ignorePath: sourceDir, addRootSlash: false};
var buildDir = 'frontend/dist/';
var buildAppDir = buildDir + 'app/';
var buildCSSDir = buildDir + 'css/';
var buildFontsDir = buildDir + 'fonts/';
var buildImgsDir = buildDir + 'imgs/';
var buildScriptsDir = buildDir + 'bower_components/';
var buildInjectOptions = {ignorePath: buildDir, addRootSlash: false};

function _replaceIfSourceFileExists(filePath, oldStr, newStr) {
    var newFilePath = filePath.replace(oldStr, newStr);
    var completeNewFilePath = sourceDir + newFilePath;
    if (fs.existsSync(completeNewFilePath)) {
        filePath = newFilePath;
    }
    return filePath;
}

var wireBuildDepOptions = {
    fileTypes: {
        html: {
            replace: {
                css: function (filePath) {
                    return '<link rel="stylesheet" href="' + _replaceIfSourceFileExists(filePath, '.css', '.min.css') + '"/>';
                },
                js: function (filePath) {
                    return '<script src="' + _replaceIfSourceFileExists(filePath, '.js', '.min.js') + '"></script>';
                }
            }
        }
    }
};

// Building tasks
gulp.task('uglify-angular-app', function () {
    return gulp.src(sourceAppDir + '**/*.js')
        .pipe(angularFileSort())
        .pipe(concat(buildDir))
        .pipe(rename('viewer.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(buildAppDir));
});

gulp.task('dist-html', function () {
    return gulp.src(sourceAppDir + '**/*.html')
        .pipe(gulp.dest(buildAppDir));
});

gulp.task('dist-js', function () {
    return gulp.src(sourceScriptsDir + '**/*')
        .pipe(gulp.dest(buildScriptsDir));
});

gulp.task('dist-base-css', function () {
    return gulp.src(sourceCSSDir + 'base.css')
        .pipe(rename('base.min.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest(buildCSSDir));
});

gulp.task('dist', ['lint', 'styles', 'uglify-angular-app', 'dist-html', 'dist-js', 'dist-base-css'], function () {
    gulp.src(sourceFontsDir + '**/*')
        .pipe(gulp.dest(buildFontsDir));
    gulp.src(sourceImgsDir + '**/*')
        .pipe(gulp.dest(buildImgsDir));

    var injectStyles = gulp.src([
            buildCSSDir + '*.css'
        ], {read: false}
    );
    var injectScripts = gulp.src([
        buildAppDir + '*.js'], {read: false}
    );
    return gulp.src(sourceDir + 'index.tmpl.html')
        .pipe(rename('index.html'))
        .pipe(inject(injectStyles, buildInjectOptions))
        .pipe(inject(injectScripts, buildInjectOptions))
        .pipe(wireDep(wireBuildDepOptions))
        .pipe(gulp.dest(buildDir));
});

gulp.task('dist-dev', ['lint', 'styles'], function () {
    var injectStyles = gulp.src([
            sourceCSSDir + '*.css', '!' + sourceCSSDir + '*.min.css'
        ], {read: false}
    );
    var injectScripts = gulp.src(
        sourceAppDir + '**/*.js'
    ).pipe(angularFileSort());

    return gulp.src(sourceDir + 'index.tmpl.html')
        .pipe(rename('index.html'))
        .pipe(inject(injectStyles, sourceInjectOptions))
        .pipe(inject(injectScripts, sourceInjectOptions))
        .pipe(wireDep())
        .pipe(gulp.dest(sourceDir));
});
