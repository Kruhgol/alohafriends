'use strict';

module.exports = function($scope, $http, $location, $routeParams, $sce){
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


}


 // $scope.articleId = $routeParams.articleId; 

 //    var articleRequest = '/requests/article/' + $scope.articleId + '/';
    
 //    $http.get(articleRequest).success(function(data){
 //        console.log(data);
 //        $scope.article = data;
 //        $scope.articleText = $sce.trustAsHtml($scope.article.text);
 //        $scope.imgArray = [];
 //        for(var i=0; i<$scope.article.photos.length/4; i++){
 //            $scope.imgArray[i] = []
 //        }
 //        var j = 0;
 //        var k = 0;
 //        for (var i=0; i < $scope.article.photos.length; i++){
 //                $scope.imgArray[k][j] = {};
 //                $scope.imgArray[k][j]['src'] = $scope.article.photos[i];
 //                $scope.imgArray[k][j]['alt'] = i;
 //                j++;
 //                if(j==4){
 //                    j=0;
 //                    k++;
 //                }
 //        }
 //    });

 //    $scope.photoViwer = function(event) {
 //        $scope.index = event.target.getAttribute('data-number');
 //        var photoViwerBlock = document.getElementById("photoviwer");

 //        var height = document.documentElement.clientHeight;
 //        var width = document.documentElement.clientWidth;

 //        photoViwerBlock.style = 'height:' + height + 'px; width:' + width + 'px' + '; display: table';
 //        var div = document.getElementById("photoviwer-img");
 //        // if (height >= width){
 //        //     div.style = 'background-size: 80% auto;';
 //        // }
 //        // if (height < width){
 //        //     div.style = 'background-size: auto 90%;';
 //        // }
 //        div.style = 'background-image: url(' + $scope.article.photos[$scope.index] + ');'; 

 //        $scope.preview = function() {
 //            if ($scope.index <= 0) return;
 //            $scope.index--;
 //            div.style = 'background-image: url(' + $scope.article.photos[$scope.index] + ');';
 //        }
 //        $scope.next = function() {
 //            if ($scope.index >= $scope.article.photos.length-1) return;
 //            $scope.index++;
 //            div.style = 'background-image: url(' + $scope.article.photos[$scope.index] + ');';
 //        }

 //    }

 //    $scope.photoViwerClose = function(){
 //        var photoViwerBlock = document.getElementById("photoviwer");
 //        photoViwerBlock.style = 'display: none';
 //    }


    // $http.get('/requests/country/').success(function(data){
    //     $scope.countryes = data;
    // });
    // $http.get('/requests/marks/').success(function(data){
    //     var marksStyle = [];
    //     for(var i = 0; i < data.length; i++){
    //         var rand = Math.random();
    //         if (rand < 0.2) rand = 0.2;
    //         marksStyle[i] = {'font-size' :  rand * 5 + 'rem'};
    //     };
    //     $scope.marksStyle = marksStyle;
    //     $scope.marks = data;
    //     console.log(data);
    // });
