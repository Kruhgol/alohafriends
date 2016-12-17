'use strict';

module.exports = function($templateCache, $location){
    return {
        link: function(scope, element, attribute){
            var welcome = $templateCache.get('templates/welcome.html');
            var countryHeader = $templateCache.get('templates/countryHeader.html');
            var articleHeader = $templateCache.get('templates/articleHeader.html');

            scope.$watch(watchCountryName, function(newValue, oldValue){ 
                el.text(newValue.title);
                var sss = "background: url(" + newValue.picture + ") no-repeat center; ";
                element.find('header').attr('style',sss); 
            });

            scope.$watch(watchArticleName, function(newValue, oldValue){ 
                el.text(newValue.title);
                var sss = "background: url(" + newValue.photos[0] + ") no-repeat center; height: 600px; ";
                element.find('header').attr('style',sss); 
            });

            var elParent = angular.element('<div class="row">');
            var el = angular.element("<div class='col-lg-12 name-country'>");
            if ($location.path() == '/'){
                element.children().children().append(welcome);
            }
            function watchCountryName(){
                return scope.country;
            }
            function watchArticleName(){
                return scope.article;
            }
            if($location.path().substring(0,8) == '/country'){
                
                element.children().children().append(countryHeader);
                element.children().children().append(elParent);
                elParent.append(el);
            }
            if($location.path().substring(0,8) == '/article'){
                
                element.children().children().append(articleHeader);
                element.children().children().append(elParent);
                elParent.append(el);
            }
            

        },

        restrict: 'EA',

        template: $templateCache.get('templates/menu.html'),

    }
}
