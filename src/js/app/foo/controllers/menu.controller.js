'use strict';

module.exports = function menuCtrl($scope, $http, $location, $routeParams){
	$http.get('/requests/country/').success(function(data){
        $scope.countryes = data;
        console.log("zapros");
        for(var i=0; i<data.length; i++){
            if (data[i].url == $location.path().substring(9)){
                $scope.country = data[i];
            }
        }
    });
    $http.get('/requests/marks/').success(function(data){
        console.log(data);
        console.log(data[0]);
        $scope.marks = data;
    });

}
