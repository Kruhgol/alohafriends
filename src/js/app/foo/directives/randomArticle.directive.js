'use strict';

module.exports = function($templateCache, $location){
    return {
        link: 
            function(scope, element, attribute){

            },

        restrict: 'EA',

        controller: function($scope, $http, $location, $routeParams, $sce, userConfig, requestsService){

            requestsService.getArticleComments().then(function(result){
                $scope.randomArticles = result.data;
            });

        },
        
        template: $templateCache.get('randomArticle.html')

    }
}