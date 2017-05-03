'use strict';

module.exports = function($scope, $http, $location, $routeParams, $sce, requestsService, languageService){
    requestsService.getMap().then(function(result){
        $scope.mapDescriptions = result.data[languageService.howLanguage()];
    })

}
