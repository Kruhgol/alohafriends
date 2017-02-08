'use strict';

module.exports = function homeCtrl($scope, $http, $location, $routeParams){
	$http.get('/requests/country/').success(function(data){
        $scope.countryes = data;
    });
    $http.get('/requests/marks/').success(function(data){
        var marksStyle = [];
        for(var i = 0; i < data.length; i++){
            var rand = Math.random();
            if (rand < 0.2) rand = 0.2;
            marksStyle[i] = {'font-size' :  rand * 5 + 'rem'};
        };
        $scope.marksStyle = marksStyle;
        $scope.marks = data;
        console.log(data);
    });

}
