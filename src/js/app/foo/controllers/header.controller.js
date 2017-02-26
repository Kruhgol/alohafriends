'use strict';

module.exports = function($scope, $http, $location, $routeParams){
    $http.get('/requests/header/').success(function(data){
        $scope.countries = data;
        console.log(data);
    });

    $scope.getSearch = function(markSearch) {
        $http.post('/requests/searchMark/', markSearch).success(function(data){
            console.log('fghjklfghjklghjkl');
            console.log(data);
            if(data.status){
                window.location.assign('#/mark/' + data.mark)
            }
            else{
                alert('Извините по запросу \"' + markSearch.text + '\" ничего не найденно!')
            }
        });
    }
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
