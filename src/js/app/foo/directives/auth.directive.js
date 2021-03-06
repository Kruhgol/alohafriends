'use strict';

module.exports = function($templateCache, $location){
    return {
        link: function(scope, element, attribute){

        },

        controller: function($scope, $http, $location, $routeParams, $sce, userConfig){

            $scope.socSetiUser = function(first_name, last_name, link, picture, isAuth){
                    userConfig.first_name = first_name;
                    userConfig.last_name = last_name;
                    userConfig.link = link;
                    userConfig.picture = picture;
                    userConfig.isAuth = isAuth;
                }

            $scope.fbAuth = function(){

                $scope.fbVisible = true;

                //Подлкючение виджета авторизации ФБ

                (function(d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) return;
                    js = d.createElement(s); js.id = id;
                    js.src = "//connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v2.8&appId=417325898654737";
                    fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));

                window.fbAsyncInit = function() {
                    FB.init({
                        appId      : '417325898654737',
                        xfbml      : true,
                        version    : 'v2.8'
                    });
                    //FB.AppEvents.logPageView();

                    FB.login(function(response) {
                        if (response.authResponse){
                            FB.api('/me', {fields: ['last_name', 'first_name', 'link', 'picture']}, function(response) {
                                $scope.socSetiUser(response.first_name, response.last_name, response.link, response.picture.data.url, true);

                            })            
                        }
                    })
                };
                window.fbAsyncInit();
            }

            // $scope.vkAuth = function(){
            //     $scope.vkVisible = true;
            //     //подключенеи виджета авторизации ВК
            //     VK.Widgets.Auth("vk_auth", {width: "200px",  onAuth: function(data){
            //         $scope.socSetiUser(data.first_name, data.last_name, 'vk.com/id' + data.uid, data.photo_rec, true);
            //      }});        
            // }
        },

        restrict: 'EA',

        template: $templateCache.get('auth.html')

    }
}
