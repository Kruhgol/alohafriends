'use strict';

module.exports = function($scope, 
                          $http, 
                          $location, 
                          $routeParams, 
                          $rootScope, 
                          requestsService, 
                          languageService){
    // $http.get('/requests/header/').success(function(data){
    //     $scope.countries = data;
    // });
    // $scope.isRuLanguage = languageService.isRuLanguage;
    console.log($scope.dictionary);
    $scope.changeRuLanguage = function(){
        languageService.isRuLanguage = true;
        languageService.isEngLanguage = false;
        languageService.language();
        $scope.dictionary = languageService.dictionary;
        window.location.assign('#/');
    }

    $scope.changeEngLanguage = function(){
        languageService.isRuLanguage = false;
        languageService.isEngLanguage = true;
        languageService.language();
        $scope.dictionary = languageService.dictionary;
        window.location.assign('#/');
    }

    $scope.$watch('dictionary', function(newValue){
        console.log($scope.dictionary);
        console.log(languageService);
        $scope.dictionary = languageService.dictionary;
        $scope.homeRuContent = languageService.isRuLanguage;
        $scope.homeEngContent = languageService.isEngLanguage;
        $scope.homeEngContent = true;
    });

    requestsService.getHeader().then(function(result){
        $scope.countries = result.data;
        for(var i=0; i<$scope.countries.length; i++){
            $scope.countries[i].title = $scope.countries[i][languageService.howLanguage()].title;
        }
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

