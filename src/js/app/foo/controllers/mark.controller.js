'use strict';

module.exports = function markCtrl($scope, $http, $location, $routeParams){
    $scope.markId = $routeParams.markId;

    var markRequest = '/requests/mark/' + $scope.markId + '/';
    $http.get(markRequest).success(function(data){
        $scope.markArticles = data;
        console.log(data);
    });
}
