'use strict';

module.exports = function($scope, $http, $location, $routeParams, userConfig, requestsService){

    // $http.get('/requests/marks/').success(function(data){
    //     $scope.marks = data;
    // });
    requestsService.getMarks().then(function(result){
        $scope.marks = result.data;
    });
}

