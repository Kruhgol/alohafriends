'use strict';

module.exports = function countryCtrl($scope, $http, $location, $routeParams){
    $scope.countryId = $routeParams.countryId;

    $scope.country = {
        title: ''
    }
    $http.get('/requests/country/').success(function(data){
        $scope.countryes = data;
        console.log(data);
        for(var i=0; i<data.length; i++){
            if (data[i].title == $location.path().substring(9)){
                $scope.country = data[i];
            }
        }
    });
    var articlesRequest = '/requests/articles/' + $scope.countryId + '/';
    $http.get(articlesRequest).success(function(data){
        console.log(data);
        var articles = data;
        for(var i = 0; i<articles.length; i++){
            articles[i].text = articles[i].text.substring(0,101) + '...';           
        }
        $scope.articles = articles;
    });
}
