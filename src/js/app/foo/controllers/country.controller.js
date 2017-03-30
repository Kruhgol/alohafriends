'use strict';

module.exports = function($scope, $http, $location, $routeParams, requestsService, $rootScope, languageService){
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
            $scope.country.title = $scope.country[languageService.howLanguage()].title;
        });

    requestsService.getArticles($scope.countryId).then(function(result){
        $scope.articles = result.data;

        for(var i=0; i<$scope.articles.length; i++){
            $scope.articles[i].title = $scope.articles[i][languageService.howLanguage()].title;
            $scope.articles[i].text = $scope.articles[i][languageService.howLanguage()].text;
            $scope.articles[i].anatation = $scope.articles[i][languageService.howLanguage()].anatation;
            $scope.articles[i].author = $scope.articles[i][languageService.howLanguage()].author;
            console.log($scope.articles[i].title);
            console.log('222');
            for(var j=0; j<$scope.articles[i].marks.length; j++){
                $scope.articles[i].marks[j].name = $scope.articles[i].marks[j][languageService.howLanguage()].name;
            }
        }


    });
}

