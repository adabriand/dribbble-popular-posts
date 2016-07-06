// karma.conf.js
module.exports = function(config) {
    config.set({
        basePath: '../',
        frameworks: ['jasmine'],
        reporters: ['spec'],
        browsers: ['PhantomJS'],
        files: [
            'frontend/src/bower_components/**/dist/jquery.js',
            'frontend/src/bower_components/**/angular.js',
            'frontend/src/bower_components/**/ng-infinite-scroll.js',
            'frontend/src/bower_components/**/angular-sanitize.js',
            'frontend/src/app/**/*.module.js',
            'frontend/src/app/**/*.directive.js',
            'frontend/src/app/**/*.controller.js',
            'frontend/src/app/**/*.service.js',
            'frontend/tests/js/angular-mocks.js',
            'frontend/tests/jasmine-specs/**/*.js'
        ]
    });
};