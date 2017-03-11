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

