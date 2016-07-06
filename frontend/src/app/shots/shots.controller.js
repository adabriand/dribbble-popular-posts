(function () {
    'use strict';

    angular.module('viewer.shots').controller('shotsCtrl', ['$scope', 'shotsService', function ($scope, shotsService) {
        $scope.isLoadingData = false;
        $scope.currentPageNumber = 1;
        $scope.shotsData = [];

        $scope.loadMoreShots = function () {
            if ($scope.isLoadingData) return;
            $scope.isLoadingData = true;
            shotsService.getShotsData($scope.currentPageNumber).then(function (newData) {
                $scope.currentPageNumber++;
                $scope.shotsData = shotsService.mergeShotsData($scope.shotsData, newData);
                $scope.isLoadingData = false;
            });
        };
    }]);
}());