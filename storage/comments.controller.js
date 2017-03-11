'use strict';

module.exports = function($scope, $http, $location, $routeParams, $sce, requestsService){
    var commentsRequest = '/comments/' + $scope.articleId + '/';

    requestsService.getArticleComments($scope.articleId).then(function(result){
        $scope.comments = result.data;
        $scope.c = $scope.comments.comments;
    });

    // $http.get(commentsRequest).success(function(data){
    //     $scope.comments = data;
    //     $scope.c = $scope.comments.comments;
    // });


    $scope.sendComment = function(answer) {
        requestsService.postArticleComment($scope.articleId, answer).then(function(result){
            $scope.comments = result.data;
            $scope.c = $scope.comments.comments;            
        });

        // $http.post(commentAddRequest, answer).success(function(data){
        //     $scope.comments = data;
        //     $scope.c = $scope.comments.comments;
        //     });
    }


}


