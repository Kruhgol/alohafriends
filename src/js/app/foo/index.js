'use strict';

module.exports = angular.module('AlohaFriends.foo',[])
	.config(require('./routes.js'))
	.controller('headCtrl', require('./controllers/head.controller'))
	.controller('countryCtrl', require('./controllers/country.controller'))
	.controller('articleCtrl', require('./controllers/article.controller'))