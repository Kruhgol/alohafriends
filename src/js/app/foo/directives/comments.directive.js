'use strict';

module.exports = function($templateCache, $location){
    return {
        link: function(scope, element, attribute){

        },

        controller: function($scope, $http, $location, $routeParams, $sce, userConfig, requestsService){
            $scope.userConfig = userConfig;

            // var commentsRequest = '/requests/comments/' + $scope.articleId + '/';
            // $http.get(commentsRequest).success(function(data){
            //     $scope.comments = data;
            //     $scope.c = $scope.comments.comments;
            // });

            requestsService.getArticleComments($scope.articleId).then(function(result){
                $scope.comments = result.data;
                $scope.c = $scope.comments.comments;
            });

            $scope.sendComment = function(answer) {
                answer['first_name'] = userConfig.first_name;
                answer['last_name'] = userConfig.last_name;
                answer['link'] = userConfig.link;
                answer['picture'] = userConfig.picture;

                requestsService.postArticleComment($scope.articleId, answer).then(function(result){
                    $scope.comments = result.data;
                    $scope.c = $scope.comments.comments;            
                });
            }

            // $scope.sendComment = function(answer) {
            //     var commentAddRequest = '/requests/' + $scope.articleId + '/addcomment/';
            //     answer['first_name'] = userConfig.first_name;
            //     answer['last_name'] = userConfig.last_name;
            //     answer['link'] = userConfig.link;
            //     answer['picture'] = userConfig.picture;

            //     $http.post(commentAddRequest, answer).success(function(data){
            //         $scope.comments = data;
            //         $scope.c = $scope.comments.comments;
            //         });
            // }


        },

        restrict: 'EA',

        template: $templateCache.get('comments.html')

    }
}