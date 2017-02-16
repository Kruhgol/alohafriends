'use strict';

module.exports = function($scope, $http, $location, $routeParams){
    $scope.createUser = function(newUser){
        console.log(newUser);
        $http.post('/accounts/registration/', newUser).success(function(data){
            if(data.error){
                alert('nepravelniy parol');
            }
            else {
                $scope.user = data;
                console.log($scope.user);                
            }

        })
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
