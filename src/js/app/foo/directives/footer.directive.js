'use strict';

module.exports = function($templateCache, $location){
    return {
        link: 
            function(scope, element, attribute){
                
            },

        restrict: 'EA',

         template: $templateCache.get('footer.html')

    }
}