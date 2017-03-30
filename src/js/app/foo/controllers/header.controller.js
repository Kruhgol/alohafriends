'use strict';

module.exports = function($scope, $http, $location, $routeParams, requestsService, languageService){
    // $http.get('/requests/header/').success(function(data){
    //     $scope.countries = data;
    // });
    $scope.isRuLanguage = languageService.isRuLanguage;

    $scope.changeRuLanguage = function(){
        languageService.isRuLanguage = true;
        languageService.isEngLanguage = false;
        alert(languageService.isEngLanguage);
    }

    $scope.changeEngLanguage = function(){
        languageService.isRuLanguage = false;
        languageService.isEngLanguage = true;
        $scope.isRuLanguage = languageService.isRuLanguage
    }

    requestsService.getHeader().then(function(result){
        $scope.countries = result.data;
    });

    $scope.getSearch = function(markSearch) {
        requestsService.postSearch(markSearch).then(function(result){
            if(result.data.status){
                window.location.assign('#/mark/' + result.data.mark)
            }
            else{
                alert('Извините по запросу \"' + markSearch.text + '\" ничего не найденно!')
            }
        });
    }
}

