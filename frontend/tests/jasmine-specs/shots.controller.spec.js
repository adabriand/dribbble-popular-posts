(function () {
    'use strict';

    describe("Shots Controller", function () {
        var $controller;
        var $scope;
        var $shotsService;

        beforeEach(module('viewer.shots'));

        beforeEach(inject(function (_$rootScope_, _$controller_, _shotsService_) {
            $scope = _$rootScope_.$new();
            $controller = _$controller_;
            $shotsService = _shotsService_;
        }));

        it('should have a shotsCtrl', function () {
            var controller = $controller('shotsCtrl', {$scope: $scope});
            expect(controller).toBeDefined();
        });

        it('should have initiated the model variables', function () {
            $controller('shotsCtrl', {$scope: $scope});
            expect($scope.currentPageNumber).toBe(1);
            expect($scope.isLoadingData).toBe(false);
            expect($scope.shotsData).toEqual([]);
        });

        it('should call getShotsData on loadMoreShots', function () {
            $controller('shotsCtrl', {$scope: $scope, shotsService: $shotsService});
            spyOn($shotsService, "getShotsData").and.returnValue({
                then: function () {
                }
            });
            $scope.loadMoreShots();
            expect($shotsService.getShotsData).toHaveBeenCalledWith(1);
            expect($scope.isLoadingData).toBe(true);
            expect($scope.currentPageNumber).toBe(1);
            expect($scope.shotsData).toEqual([]);
        });

        it('should update shotsData after loadMoreShots', function () {
            var testData = [{"id": 1}];
            $controller('shotsCtrl', {$scope: $scope, shotsService: $shotsService});
            spyOn($shotsService, "getShotsData").and.returnValue({
                then: function (callback) {
                    callback(testData);
                }
            });
            spyOn($shotsService, "mergeShotsData").and.callFake(function (shotsData, newData) {
                return newData;
            });

            $scope.loadMoreShots();
            expect($shotsService.getShotsData).toHaveBeenCalledWith(1);
            expect($shotsService.mergeShotsData).toHaveBeenCalledWith([], testData);
            expect($scope.isLoadingData).toBe(false);
            expect($scope.currentPageNumber).toBe(2);
            expect($scope.shotsData).toEqual(testData);
        });
    });
}());
