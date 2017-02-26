'use strict';

module.exports = function($scope, $http, $location, $routeParams){
    $scope.authorId = $routeParams.authorId;

    var markRequest = '/requests/author/' + $scope.authorId + '/';
    $http.get(markRequest).success(function(data){
        $scope.articles = data.articles;
        $scope.author = data;
        console.log(data);
    });
}

