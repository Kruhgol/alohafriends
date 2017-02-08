'use strict';

module.exports = function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: "templates/home.html"
		// controller: "homeCtrl"
	})
	.when('/country/:countryId',{
		templateUrl: "templates/country.html",
		controller: "countryCtrl"
	})
	.when('/article/:articleId',{
		templateUrl: "templates/article.html",
		controller: "articleCtrl"
	})
	.when('/communication',{
		templateUrl: "templates/communication.html"
	})
	.when('/about',{
		templateUrl: "templates/about.html"
	})
	.when('/map',{
		templateUrl: "templates/map.html",
		controller: "mapCtrl"
	})	
	.when('/mark/:markId',{
		templateUrl: "templates/mark.html",
		controller: "markCtrl"
	})		
	.otherwise({
		redirectTo: "/home"
	});
}
