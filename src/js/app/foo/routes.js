'use strict';

module.exports = function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: "templates/home.html",
		controller: "homeCtrl"
	})
	.when('/country/:countryId',{
		templateUrl: "templates/country.html",
		controller: "countryCtrl"
	})
	.when('/article/:articleId',{
		templateUrl: "templates/article.html",
		controller: "articleCtrl"
	})
	.otherwise({
		redirectTo: "/home"
	});
}
