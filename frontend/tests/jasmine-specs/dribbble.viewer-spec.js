(function () {
    'use strict';

    describe("Dribbble Viewer Module", function () {
        var $controller;
        var $scope;

        beforeEach(module('dribbble.viewer'));
        
        beforeEach(inject(function(_$rootScope_, _$controller_) {
            $scope = _$rootScope_.$new();
            $controller = _$controller_;
        }));

        it('should have a dribbbleViewerCtrl', function () {
            var controller = $controller('dribbbleViewerCtrl', {$scope: $scope});
            expect(controller).toBeDefined();
        });

        it('should have initiated the model variables', function () {
            $controller('dribbbleViewerCtrl', {$scope: $scope});
            expect($scope.message).toBe('Hello World!');
        });

    });
}());
