'use strict';

module.exports = angular.module('AlohaFriends.foo',[])
	.config(require('./routes.js'))
    .directive('headerDir', ['$templateCache', '$location', require('./directives/header.directive')])
    .directive('commentsDir', ['$templateCache', '$location', require('./directives/comments.directive')])
    .directive('markDir', ['$templateCache', '$location', require('./directives/mark.directive')])
    .directive('authDir', ['$templateCache', '$location', require('./directives/auth.directive')])
    .directive('fbDir', ['$templateCache', '$location', require('./directives/fb.directive')])
    .directive('randomarticleDir', ['$templateCache', '$location', require('./directives/randomArticle.directive')])    
    .controller('homeCtrl', ['$http', '$location', '$routeParams', require('./controllers/home.controller')])
    .controller('headerCtrl', require('./controllers/header.controller'))
    .controller('countryCtrl', require('./controllers/country.controller'))
    .controller('articleCtrl', require('./controllers/article.controller'))
    .controller('appCtrl', require('./controllers/app.controller'))
    .controller('markCtrl', require('./controllers/mark.controller'))
    .controller('authorCtrl', require('./controllers/author.controller'))
    .factory('requestsService', require('./service/requests.service'))

    .value('userConfig', {
        first_name: '',
        last_name: '',
        link: '',
        picture: '',
        isAuth: false
    })

    .config(['$httpProvider',
                function($httpProvider) {
                    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
                    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
                    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
                    $httpProvider.defaults.transformRequest = [
                        function(data) {
                            /**
                             * The workhorse; converts an object to x-www-form-urlencoded serialization.
                             * @param {Object} obj
                             * @return {String}
                             */
                            var param = function(obj) {
                                var query = '';
                                var name, value, fullSubName, subName, subValue, innerObj, i;
                                for (name in obj) {
                                    value = obj[name];
                                    if (value instanceof Array) {
                                        for (i = 0; i < value.length; ++i) {
                                            subValue = value[i];
                                            fullSubName = name + '[' + i + ']';
                                            innerObj = {};
                                            innerObj[fullSubName] = subValue;
                                            query += param(innerObj) + '&';
                                        }
                                    } else if (value instanceof Object) {
                                        for (subName in value) {
                                            subValue = value[subName];
                                            fullSubName = name + '[' + subName + ']';
                                            innerObj = {};
                                            innerObj[fullSubName] = subValue;
                                            query += param(innerObj) + '&';
                                        }
                                    } else if (value !== undefined && value !== null) {
                                        query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
                                    }
                                }
                                return query.length ? query.substr(0, query.length - 1) : query;
                            };
                            return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
                        }
                    ];
                }
            ])
