(function () {
    'use strict';

    angular.module('viewer.header').directive('header', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/header/header.html'
        };
    });
}());