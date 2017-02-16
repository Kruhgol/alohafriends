'use strict';

module.exports = angular.module('AlohaFriends.foo',[])
	.config(require('./routes.js'))
    .directive('headerDir', ['$templateCache', '$location', require('./directives/header.directive')])
    .directive('commentsDir', ['$templateCache', '$location', require('./directives/comments.directive')])
    .controller('homeCtrl', ['$http', '$location', '$routeParams', require('./controllers/home.controller')])
    .controller('headerCtrl', require('./controllers/header.controller'))
    .controller('countryCtrl', require('./controllers/country.controller'))
    .controller('articleCtrl', require('./controllers/article.controller'))
    .controller('registrationCtrl', require('./controllers/registration.controller'))
    .controller('appCtrl', require('./controllers/app.controller'))

    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
       //$httpProvider.defaults.headers.post['X-CSRFToken'] = $('input[name=csrfmiddlewaretoken]').val();
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
 
        // Переопределяем дефолтный transformRequest в $http-сервисе
        $httpProvider.defaults.transformRequest = [function(data)
            {
            /**
             * рабочая лошадка; преобразует объект в x-www-form-urlencoded строку.
             * @param {Object} obj
             * @return {String}
             */ 
            var param = function(obj)
            {
              var query = '';
              var name, value, fullSubName, subValue, innerObj, i;
              
              for(name in obj)
              {
                value = obj[name];
                
                if(value instanceof Array)
                {
                  for(i=0; i<value.length; ++i)
                  {
                    subValue = value[i];
                    fullSubName = name + '[' + i + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += param(innerObj) + '&';
                  }
                }
                else if(value instanceof Object)
                {
                  for(subName in value)
                  {
                    subValue = value[subName];
                    fullSubName = name + '[' + subName + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += param(innerObj) + '&';
                  }
                }
                else if(value !== undefined && value !== null)
                {
                  query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
                }
              }
              
              return query.length ? query.substr(0, query.length - 1) : query;
            };

            return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
            }];

    }]);

    // .run( function run( titleService, $http, $cookies ){
    //     titleService.setSuffix( '[title]' );

    //     // For CSRF token compatibility with Django
    //     $http.defaults.headers.post['X-CSRFToken'] = $cookies['csrftoken'];
    // })
    
 //    
 //    // .controller('menuCtrl', require('./controllers/menu.controller'))
 //    .controller('articlesCtrl', require('./controllers/articles.controller'))
 //    .controller('articleCtrl', require('./controllers/article.controller'))
 //    .controller('videoCtrl', require('./controllers/video.controller'))
 //    .controller('mapCtrl', require('./controllers/map.controller'))
 //    .controller('markCtrl', require('./controllers/mark.controller'))
 //    .directive('menuDir', ['$templateCache', '$location', require('./directives/menu.directive')])
 //    .directive('karuselDir', ['$templateCache', '$location', require('./directives/karusel.directive')])
 //    // .component('footer-component', require('./components/footer.component'))
 //    .filter('trustAsHtml', ['$sce', require('./filters/trustAsHtml.filter')])