'use strict';

module.exports = function($scope, $http, $location, $routeParams){
    $scope.markId = $routeParams.markId;

    var markRequest = '/requests/mark/' + $scope.markId + '/';
    $http.get(markRequest).success(function(data){
        $scope.articles = data.articles;
        $scope.mark = data;
        console.log(data);
    });
}

