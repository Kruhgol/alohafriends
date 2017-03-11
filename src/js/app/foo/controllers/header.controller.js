'use strict';

module.exports = function($scope, $http, $location, $routeParams, requestsService){
    // $http.get('/requests/header/').success(function(data){
    //     $scope.countries = data;
    // });

    requestsService.getHeader().then(function(result){
        $scope.countries = result.data;
    });

    $scope.getSearch = function(markSearch) {
        requestsService.postSearch(markSearch).then(function(result){
            if(result.data.status){
                window.location.assign('#/mark/' + result.data.mark)
            }
            else{
                alert('Извините по запросу \"' + markSearch.text + '\" ничего не найденно!')
            }
        });
    }
}

