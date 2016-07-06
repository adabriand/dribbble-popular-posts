(function () {
    'use strict';

    describe("Viewer Controller", function () {
        var $controller;
        var $scope;

        beforeEach(module('viewer'));

        beforeEach(inject(function (_$rootScope_, _$controller_) {
            $scope = _$rootScope_.$new();
            $controller = _$controller_;
        }));

        it('should have a viewerCtrl', function () {
            var controller = $controller('viewerCtrl', {$scope: $scope});
            expect(controller).toBeDefined();
        });

        it('should have initiated the model variables', function () {
            $controller('viewerCtrl', {$scope: $scope});
        });
    });
}());
