'use strict';

module.exports = function($templateCache, $location){
    return {
        link: 
            function(scope, element, attribute){

                scope.$watch('marks', function(newVal){
                    if (newVal){
                        var p = angular.element('<p>');
                        for(var i=0; i<newVal.length; i++){
                            var a = angular.element("<a>");
                            a.attr('href','#/mark/'+newVal[i].url);
                            a.text(newVal[i].name);
                            a.attr('style','font-size:'+getRandomHeight(18,36)+';');
                            p.append(a);
                        }
                        element.append(p); 
                    }

                });

                function getRandomHeight(min,max){
                    return (Math.floor(Math.random() * (max - min + 1)) + min) + 'px';
                }
                // function getRandomColor(){
                //     var max = 192;
                //     var min = 0;
                //     var r = Math.floor(Math.random() * (max - min + 1)) + min;
                //     var g = Math.floor(Math.random() * (max - min + 1)) + min;
                //     var b = Math.floor(Math.random() * (max - min + 1)) + min;
                //     var color = 'rgb(' + r + ',' + g + ',' + b + ')';
                //     return color;
                // }

            },

        restrict: 'EA',

    }
}