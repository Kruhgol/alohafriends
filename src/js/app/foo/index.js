'use strict';

module.exports = angular.module('AlohaFriends.foo',[])
	.config(require('./routes.js'))
	.controller('countryCtrl', require('./controllers/country.controller'))
    .controller('homeCtrl', require('./controllers/home.controller'))
    .controller('menuCtrl', require('./controllers/menu.controller'))
    .controller('articlesCtrl', require('./controllers/articles.controller'))
    .controller('articleCtrl', require('./controllers/article.controller'))

    .directive('menuDir', ['$templateCache', '$location', require('./directives/menu.directive')])
    .directive('karuselDir', ['$templateCache', '$location', require('./directives/karusel.directive')])