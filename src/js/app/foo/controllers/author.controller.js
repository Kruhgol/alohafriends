'use strict';

module.exports = function($scope, $http, $location, $routeParams, requestsService, languageService){
    $scope.authorId = $routeParams.authorId;

    requestsService.getAuthorArticles($scope.authorId).then(function(result){
        $scope.author = result.data;
        $scope.author.article_author = $scope.author[languageService.howLanguage()].article_author;
        $scope.articles = result.data.articles;
        for(var i=0; i<$scope.articles.length; i++){
            $scope.articles[i].title = $scope.articles[i][languageService.howLanguage()].title;
            $scope.articles[i].anatation = $scope.articles[i][languageService.howLanguage()].anatation;
            $scope.articles[i].author = $scope.articles[i][languageService.howLanguage()].author;
            console.log($scope.articles[i].title);
            console.log('222');
            for(var j=0; j<$scope.articles[i].marks.length; j++){
                $scope.articles[i].marks[j].name = $scope.articles[i].marks[j][languageService.howLanguage()].name;
            }
        }

    });

    // $http.get(markRequest).success(function(data){
    //     $scope.articles = data.articles;
    //     $scope.author = data;
    // });
}
