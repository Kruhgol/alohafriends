'use strict';

module.exports = function($scope, $http, $location, $routeParams, userConfig){
    $http.get('/requests/marks/').success(function(data){
        $scope.marks = data;
    });
}

