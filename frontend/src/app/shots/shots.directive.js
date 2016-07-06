(function () {
    'use strict';

    angular.module('viewer.shots').directive('shots', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/shots/shots.html'
        };
    });
}());