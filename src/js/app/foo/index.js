'use strict';

module.exports = angular.module('AlohaFriends.foo',[])
	.config(require('./routes.js'))
    
    .controller('appCtrl', require('./controllers/app.controller'))

    .value('userConfig', require('./service/user.service'))
    .value('languageService', require('./service/language.service'))
    .config(['$httpProvider', require('./service/configHttpProvider')])




// .directive('headerDir', ['$templateCache', '$location', 'languageService', require('./directives/header.directive')])