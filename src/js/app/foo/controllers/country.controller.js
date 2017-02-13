'use strict';

module.exports = function($scope, $http, $location, $routeParams){
    $http.get('/requests' + $location.path()).success(function(data){
        $scope.country = data;
        console.log("hello");
        console.log(data);
    });

    $scope.countryId = $routeParams.countryId;

    var articlesRequest = '/requests/articles/' + $scope.countryId + '/';
    $http.get(articlesRequest).success(function(data){
        $scope.articles = data;
        console.log(data);
    });
}




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
