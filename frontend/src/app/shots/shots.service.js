(function () {
    'use strict';

    angular.module('viewer.shots').service("shotsService", ['$http', function ($http) {
        var CLIENT_ACCESS_TOKEN = '9f5e44799a8ee4b0ef2efc22f45b0dda1d0b511940a0547ee2644de1d91555ee';
        var API_ENDPOINT = 'https://api.dribbble.com/v1/shots';
        var BASE_API_URL = API_ENDPOINT + '?access_token=' + CLIENT_ACCESS_TOKEN;
        var RECENT_SHOTS_API_URL = BASE_API_URL + '&sort=views';

        function _hasShot(shotsData, shot) {
            if (typeof shot === "undefined") return false;
            for (var i = 0; i < shotsData.length; i++) {
                if (shotsData[i].id === shot.id) {
                    return true;
                }
            }
            return false;
        }

        return {
            getShotsData: function (pageNumber) {
                if (typeof pageNumber === "undefined") return;
                var requestUrl = RECENT_SHOTS_API_URL + '&page=' + pageNumber;
                return $http.get(requestUrl)
                    .then(function (response) {
                        console.log(response);
                        return response.data;
                    });
            },
            mergeShotsData: function (shotsData, newData) {
                if (typeof newData === "undefined") return shotsData;
                for (var i = 0; i < newData.length; i++) {
                    if (_hasShot(shotsData, newData[i])) {
                        continue;
                    }
                    shotsData.push(newData[i]);
                }
                return shotsData;
            }
        };
    }]);
}());