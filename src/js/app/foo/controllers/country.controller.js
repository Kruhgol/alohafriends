'use strict';

module.exports = function countryCtrl($scope, $http, $location, $routeParams){
    $scope.countryId = $routeParams.countryId;

    $scope.country = {
        title: ''
    }
    $http.get('/requests/country/').success(function(data){
        $scope.countryes = data;
        console.log("countryCtrl");
        console.log(data);
        for(var i=0; i<data.length; i++){
            if (data[i].url == $location.path().substring(9)){
                $scope.country = data[i];
            }
        }
    });
    var articlesRequest = '/requests/articles/' + $scope.countryId + '/';
    $http.get(articlesRequest).success(function(data){
        $scope.articles = data;
    });
}
