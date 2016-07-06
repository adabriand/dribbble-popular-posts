(function () {
    'use strict';

    angular.module('viewer.about').directive('about', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/about/about.html'
        };
    });
}());