'use strict';

module.exports = function($scope, $http, $location, $routeParams, requestsService){
    $scope.authorId = $routeParams.authorId;

    requestsService.getAuthorArticles($scope.authorId).then(function(result){
        $scope.articles = result.data.articles;
        $scope.author = result.data;
    });

    // $http.get(markRequest).success(function(data){
    //     $scope.articles = data.articles;
    //     $scope.author = data;
    // });
}

