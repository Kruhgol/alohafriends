'use strict';

module.exports = function($scope, $http, $location, $routeParams, requestsService){
    $scope.markId = $routeParams.markId;

    requestsService.getMarkArticles($scope.markId).then(function(result){
        $scope.mark = result.data;
        $scope.articles = result.data.articles;
    });

}

