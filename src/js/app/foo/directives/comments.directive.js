'use strict';

module.exports = function($templateCache, $location){
    return {
        link: function(scope, element, attribute){

        },

        controller: function($scope, $http, $location, $routeParams, $sce){
            var commentsRequest = '/requests/comments/' + $scope.articleId + '/';
            $http.get(commentsRequest).success(function(data){
                $scope.comments = data;
                $scope.c = $scope.comments.comments;
                console.log(data);
            });

            //console.log(document['comment-form']['comment-text']);

            $scope.sendComment = function(answer) {
                var commentAddRequest = '/requests/' + $scope.articleId + '/addcomment/';

                $http.post(commentAddRequest, answer).success(function(data){
                    $scope.comments = data;
                    $scope.c = $scope.comments.comments;
                    });
            }


        },

        restrict: 'EA',

        template: $templateCache.get('comments.html')

    }
}


            // if($location.path() == '/') {
            //     document.getElementById("titul").style.display="block";
            //     document.getElementById('header-img').src = "media/images/headfoto.png";
            // }
            // if($location.path().substring(0,8) == '/country'){
            //     document.getElementById("country-name").style.display="block";

            //     scope.$watch(watchCountryName, function(newValue, oldValue){ 
            //         document.getElementById('header-img').src = newValue.picture;
            //         document.getElementById('header-img').style.marginTop = "40px";
            //     });

            //     function watchCountryName(){
            //         return scope.country;
            //     }            
            // }
            // if($location.path().substring(0,8) == '/article'){
            //     document.getElementById("article-name").style.display="block";

            //     scope.$watch(watchCountryName, function(newValue, oldValue){ 
            //         document.getElementById('header-img').src = newValue.picture;
            //         document.getElementById('header-img').style.marginTop = "40px";
            //     });

            //     function watchCountryName(){
            //         return scope.article;
            //     }            
            // }