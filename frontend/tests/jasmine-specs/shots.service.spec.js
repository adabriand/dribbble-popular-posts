(function () {
    'use strict';

    describe("Shots Service", function () {
        var $shotsService;
        var $httpBackend;

        beforeEach(module('viewer.shots'));

        beforeEach(inject(function (_shotsService_, _$httpBackend_) {
            $shotsService = _shotsService_;
            $httpBackend = _$httpBackend_;
        }));

        it('should return shotsData on getShotsData', function () {
            var pageNumber = undefined;
            expect($shotsService.getShotsData(pageNumber)).toBeUndefined();

            var testData = {'id': 1};
            pageNumber = 1;
            $httpBackend.whenGET("/(.+)api\.dribbble\.com\/v1\/shots(.+)/").respond(testData);
            $shotsService.getShotsData(pageNumber).then(function (shotsData) {
                expect(data).toEqual(shotsData);
            });
        });

        it('should update shotsData on mergeShotsData', function () {
            var testData = undefined;
            var shotsData = [];
            var mergedShots = $shotsService.mergeShotsData(shotsData, testData);
            expect(mergedShots).toEqual(shotsData);

            testData = [{'id': 1}];
            mergedShots = $shotsService.mergeShotsData(shotsData, testData);
            expect(mergedShots).toEqual(testData);

            testData.push({'id': 2});
            mergedShots = $shotsService.mergeShotsData(shotsData, testData);
            expect(mergedShots).toEqual(testData);

            var testDataTwo = [{'id': 3}];
            mergedShots = $shotsService.mergeShotsData(shotsData, testDataTwo);
            expect(mergedShots).toEqual(testData.concat(testDataTwo));
        });
    });
}());
