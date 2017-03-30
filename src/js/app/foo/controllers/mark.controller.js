'use strict';

module.exports = function($scope, $http, $location, $routeParams, requestsService, languageService){
    $scope.markId = $routeParams.markId;
    requestsService.getMarkArticles($scope.markId).then(function(result){
        $scope.mark = result.data;
        $scope.mark.mark_name = $scope.mark[languageService.howLanguage()].mark_name;
        $scope.articles = result.data.articles;

        for(var i=0; i<$scope.articles.length; i++){
            $scope.articles[i].title = $scope.articles[i][languageService.howLanguage()].title;
            $scope.articles[i].anatation = $scope.articles[i][languageService.howLanguage()].anatation;
            $scope.articles[i].author = $scope.articles[i][languageService.howLanguage()].author;
            for(var j=0; j<$scope.articles[i].marks.length; j++){
                $scope.articles[i].marks[j].name = $scope.articles[i].marks[j][languageService.howLanguage()].name;
            }
        }

    });

}

