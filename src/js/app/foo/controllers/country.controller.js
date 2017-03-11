'use strict';

module.exports = function($scope, $http, $location, $routeParams, requestsService, $rootScope){
    // $http.get('/requests' + $location.path()).success(function(data){
    //     $scope.country = data;
    // });

    // requestsService.getData($location.path()).then(function(response){
    //     console.log(response);
    //     $scope.country = response.data;
    // })

    $scope.countryId = $routeParams.countryId;

    requestsService
        .getCountry($scope.countryId)
        .then(function(result){
            $scope.country = result.data;
        });

    
    //var articlesRequest = '/articles/' + $routeParams.countryId + '/';

    requestsService.getArticles($scope.countryId).then(function(result){
        $scope.articles = result.data;
    });



    // $http.get(articlesRequest).success(function(data){
    //     $scope.articles = data;
    // });

}


