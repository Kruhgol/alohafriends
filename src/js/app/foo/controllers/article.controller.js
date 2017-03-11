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


    // $http.get(articleRequest).success(function(data){
    //     $scope.article = data;
    //     $scope.articleText = $sce.trustAsHtml($scope.article.text);
    //     $scope.imgArray = [];
    //     for(var i=0; i<$scope.article.photos.length/4; i++){
    //         $scope.imgArray[i] = []
    //     }
    //     var j = 0;
    //     var k = 0;
    //     for (var i=0; i < $scope.article.photos.length; i++){
    //             $scope.imgArray[k][j] = {};
    //             $scope.imgArray[k][j]['src'] = $scope.article.photos[i];
    //             $scope.imgArray[k][j]['alt'] = i;
    //             j++;
    //             if(j==4){
    //                 j=0;
    //                 k++;
    //             }
    //     }
    // });

    $scope.photoViwer = function(event) {
        $scope.index = event.target.getAttribute('data-number');
        var photoViwerBlock = document.getElementById("photoviwer");

        var height = document.documentElement.clientHeight;
        var width = document.documentElement.clientWidth;

        photoViwerBlock.style = 'height:' + height + 'px; width:' + width + 'px' + '; display: table';
        var div = document.getElementById("photoviwer-img");
        div.style = 'background-image: url(' + $scope.article.photos[$scope.index] + ');'; 

        $scope.preview = function() {
            if ($scope.index <= 0) return;
            $scope.index--;
            div.style = 'background-image: url(' + $scope.article.photos[$scope.index] + ');';
        }
        $scope.next = function() {
            if ($scope.index >= $scope.article.photos.length-1) return;
            $scope.index++;
            div.style = 'background-image: url(' + $scope.article.photos[$scope.index] + ');';
        }

    }

    $scope.photoViwerClose = function(){
        var photoViwerBlock = document.getElementById("photoviwer");
        photoViwerBlock.style = 'display: none';
    }

}
