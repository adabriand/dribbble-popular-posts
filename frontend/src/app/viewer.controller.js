(function () {
    'use strict';

    angular.module('viewer').controller('viewerCtrl', ['$scope', function ($scope) {
        $scope.showingAbout = false;

        $scope.showAbout = function () {
            $scope.showingAbout = true;
        };
        $scope.showShots = function () {
            $scope.showingAbout = false;
        };
    }]);
}());