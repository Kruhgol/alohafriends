'use strict';

module.exports = function($templateCache, $location){
    return {
        link: 
            function(scope, element, attribute){
        },

        scope: {
            picture:"@picture", 
            name:"@name", 
            description:"@description"
        },

        controller: 
            function($scope, $http, $location, $routeParams, $sce, userConfig){
                $scope.$watch('name', function(){
                    document.getElementById("vkShare").innerHTML = VK.Share.button({
                    url: $location.absUrl(),
                    title: $scope.name,
                    image: 'http://' + $location.host() + $scope.picture,
                    noparse: true
                },{type: 'custom', text: '<img src="/media/images/vk.png" />'});
                })
                


                // window.fbAsyncInit = function() {
                //     FB.init({appId: '361660487549516', status: true, cookie: true,
                //     xfbml: true});
                // };
                window.fbAsyncInit = function() {
                    FB.init({appId: '417325898654737', status: true, cookie: true,
                    xfbml: true});
                };

                (function() {
                    var e = document.createElement('script'); e.async = true;
                    e.src = document.location.protocol +
                    '//connect.facebook.net/en_US/all.js';
                    document.getElementById('fb-root').appendChild(e);
                }());

                document.getElementById("fbShare").onclick = function(post){
                    FB.ui(
                        {
                            method: 'feed',
                            name: $scope.name,
                            link: $location.absUrl(),
                            picture: 'http://' + $location.host() + $scope.picture,
                            caption: post.caption,
                            description: $scope.description,
                            message: ''
                        });
                }
        },

        restrict: 'EA',

    }
}
