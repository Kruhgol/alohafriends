'use strict';

module.exports = function headCtrl($scope, $http, $location){
	$http.get('files/marks.json').success(function(data){
		$scope.marks = data;
	});
}
