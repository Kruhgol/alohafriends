'use strict';

module.exports = function($templateCache, $location){
    return {
        link: function(scope, element, attribute){
            if($location.path() == '/') {
                document.getElementById("titul").style.display="block";
                document.getElementById('header-img').src = "media/images/headfoto.png";
            }
            if($location.path().substring(0,8) == '/country'){
                document.getElementById("country-name").style.display="block";

                scope.$watch(watchCountryName, function(newValue, oldValue){ 
                    document.getElementById('header-img').src = newValue.picture;
                    document.getElementById('header-img').style.marginTop = "40px";
                });

                function watchCountryName(){
                    return scope.country;
                }            
            }
            if($location.path().substring(0,8) == '/article'){
                document.getElementById("article-name").style.display="block";

                scope.$watch(watchCountryName, function(newValue, oldValue){ 
                    document.getElementById('header-img').src = newValue.picture;
                    document.getElementById('header-img').style.marginTop = "40px";
                });

                function watchCountryName(){
                    return scope.article;
                }            
            }



        },

        restrict: 'EA',

        template: $templateCache.get('header.html')

    }
}