'use strict';

module.exports = function videoCtrl($scope, $http, $location, $routeParams){
    $http.get('/requests/video/').success(function(data){
        $scope.videos = data;
        console.log(data);
    });
}
