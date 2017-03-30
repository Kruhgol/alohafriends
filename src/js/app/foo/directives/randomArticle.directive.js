'use strict';

module.exports = function($templateCache, $location, languageService){
    return {
        link: 
            function(scope, element, attribute){
            },

        restrict: 'EA',

        controller: function($scope, $http, $location, $routeParams, $sce, userConfig, requestsService, languageService){

            requestsService.getRandomArticles().then(function(result){
                $scope.randomArticles = result.data;
                for(var i=0; i<$scope.randomArticles.length; i++){
                    $scope.randomArticles[i].title = $scope.randomArticles[i][languageService.howLanguage()].title;
                    $scope.randomArticles[i].country = $scope.randomArticles[i][languageService.howLanguage()].country;
                }
            });

        },
        
        template: $templateCache.get('randomArticle.html')

    }
}