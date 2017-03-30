'use strict';

module.exports = function($scope, 
                          $http, 
                          $location, 
                          $routeParams, 
                          userConfig, 
                          requestsService, 
                          languageService){

    languageService.language();
    $scope.ruLanguage = languageService.isRuLanguage;

    // $scope.$watch('homeEngContent', function(){
    //   alert("rulanguage in App");
    //   $scope.dictionary = languageService.dictionary;
    //   $scope.homeRuContent = languageService.isRuLanguage;
    //   $scope.homeEngContent = languageService.isEngLanguage;
    // })
    
    
    // $scope.$watch('isRuLanguage', function(newValue){
    //     alert('change!!!!');
    //     languageService.isRuLanguage ? $scope.dictionary = dictionaryService.ru : $scope.dictionary = dictionaryService.eng;
    // })

    requestsService.getMarks().then(function(result){
        $scope.marks = result.data;
        for(var i=0; i<$scope.marks.length; i++){
            $scope.marks[i].name = $scope.marks[i][languageService.howLanguage()].name
        }

    });
}

