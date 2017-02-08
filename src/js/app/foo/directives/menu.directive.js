'use strict';

module.exports = function($templateCache, $location){
    return {
        link: function(scope, element, attribute){
            console.log($location.path());
            var welcome = $templateCache.get('templates/welcome.html');
            var countryHeader = $templateCache.get('templates/countryHeader.html');
            var articleHeader = $templateCache.get('templates/articleHeader.html');
            var heightCountry = window.innerHeight * 0.6;
            var heightArticle = window.innerHeight * 0.3;
            var heightWelcome = window.innerHeight;
            scope.$watch(watchCountryName, function(newValue, oldValue){ 
                el.text(newValue.title);
                console.log("picture - " + newValue.picture);
                var sss = "background: url(" + newValue.picture + ") no-repeat center; height: " + heightCountry + "px;";
                element.find('header').attr('style',sss); 
            });

            scope.$watch(watchArticleName, function(newValue, oldValue){ 
                el.text(newValue.title);
                var sss = "background: url(" + newValue.photos[0] + ") no-repeat center; height: " + heightArticle + "px; ";
                element.find('header').attr('style',sss); 
            });

            var elParent = angular.element('<div class="row row-name-country">');
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
            if($location.path()[1] == undefined){
                if (heightWelcome < 500) {
                    heightWelcome= 500;
                }
                var sss = "height: " + heightWelcome + "px; ";
                element.find('header').attr('style',sss); 
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
            if($location.path().substring(0,14) == '/communication'||
                $location.path().substring(0,6) == '/video' ||
                $location.path().substring(0,4) == '/map' ||
                $location.path().substring(0,5) == '/mark'){
                if (window.innerWidth < 768){
                    element.css('height','300px');   
                } else {
                    element.css('height','50px');                
                }
                element.css('background-color','gray');
                element.find('header').css('background-image','none');

            }

        },

        restrict: 'EA',

        template: $templateCache.get('templates/directives/menu.html')

    }
}
