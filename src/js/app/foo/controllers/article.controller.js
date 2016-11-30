'use strict';

module.exports = function articleCtrl($scope, $http, $location, $routeParams){
	$scope.countryId = $routeParams.countryId; 
	$scope.articleId = $routeParams.articleId; 

	$http.get('files/' + $scope.countryId + '/' + $scope.articleId + '.json').success(function(data){
		$scope.article = data;
		$scope.pictures = $scope.article.pictures;
		$scope.mainImg = $scope.pictures[$scope.article.picture];

		$scope.strImg=[];
		var arr=[];
		var k = 0;
		var j = 0;

		for(var i = 0; i < $scope.pictures.length; i++){
			arr.push($scope.pictures[i]);
			console.log(arr);
			if(arr.length == 3){
				$scope.strImg[k] = arr;
				arr = [];
				k++;
			}
		}
	});
	
	$scope.changeImg = function(img){
		$scope.mainImg = img;
	}

	$scope.changeNumberImg = function(direction){
		if(direction === "+") {
			if($scope.article.picture != $scope.article.pictures.length - 1){
				$scope.article.picture++;
				$scope.mainImg = $scope.pictures[$scope.article.picture];
			}
		} else if(direction === "-"){
			if($scope.article.picture != 0){
				$scope.article.picture--;
				$scope.mainImg = $scope.pictures[$scope.article.picture];
			}
		}
	}

	$scope.ifNumberImgNotMin = function(){

		if ($scope.article.picture == 0) return true;
	}

	$scope.ifNumberImgNotMax = function(){
		if ($scope.article.picture == $scope.article.pictures.length - 1) return true;
	}
}
