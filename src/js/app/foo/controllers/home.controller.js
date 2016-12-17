'use strict';

module.exports = function homeCtrl($scope, $http, $location, $routeParams){
	$http.get('/requests/country/').success(function(data){
        console.log(data);
        console.log(data[0]);
        $scope.countryes = data;
    });
    $http.get('/requests/marks/').success(function(data){
        console.log(data);
        console.log(data[0]);
        $scope.marks = data;
    });

}
