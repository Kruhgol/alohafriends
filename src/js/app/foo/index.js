'use strict';

module.exports = angular.module('AlohaFriends.foo',[])
	.config(require('./routes.js'))
	.controller('testCtrl', require('./controllers/test.controller'))