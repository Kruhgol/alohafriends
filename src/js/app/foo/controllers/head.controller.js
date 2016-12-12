'use strict';

module.exports = function headCtrl($scope, $http, $location){
	$http.get('/requests/marks/').success(function(data){
        console.log(data);
        console.log(data[0]);
		$scope.marks = data;
	});
}
