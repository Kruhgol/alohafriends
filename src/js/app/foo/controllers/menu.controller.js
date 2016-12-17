'use strict';

module.exports = function menuCtrl($scope, $http, $location, $routeParams){
	$http.get('/requests/country/').success(function(data){
        $scope.countryes = data;
        for(var i=0; i<data.length; i++){
            if (data[i].title == $location.path().substring(9)){
                $scope.country = data[i];
                console.log('*************');
                console.log($scope.country);
            }
        }
    });
    $http.get('/requests/marks/').success(function(data){
        console.log(data);
        console.log(data[0]);
        $scope.marks = data;
    });

}
