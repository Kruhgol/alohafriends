'use strict';

module.exports = function countryCtrl($scope, $http, $location, $routeParams){
	$scope.countryId = $routeParams.countryId; 
	$http.get('files/' + $scope.countryId + '.json').success(function(data){
		$scope.country = data;
	});

	$http.get('files/' + $scope.countryId + 'Articles.json').success(function(data){
		$scope.articles = data;
	});
}
