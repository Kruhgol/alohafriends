'use strict';

module.exports = function($scope, $http, $location, $routeParams, $sce, requestsService){
    
    $scope.articleId = $routeParams.articleId; 
    // var articleRequest = '/article/' + $scope.articleId + '/';

    requestsService.getArticle($scope.articleId).then(function(result){
        $scope.article = result.data;
        $scope.articleText = $sce.trustAsHtml($scope.article.text);
        $scope.imgArray = [];
        for(var i=0; i<$scope.article.photos.length/4; i++){
            $scope.imgArray[i] = []
        }
        var j = 0;
        var k = 0;
        for (var i=0; i < $scope.article.photos.length; i++){
                $scope.imgArray[k][j] = {};
                $scope.imgArray[k][j]['src'] = $scope.article.photos[i];
                $scope.imgArray[k][j]['alt'] = i;
                j++;
                if(j==4){
                    j=0;
                    k++;
                }
        }
    });


}
