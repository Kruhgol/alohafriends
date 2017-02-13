'use strict';

module.exports = function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: "home.html",
		controller: "homeCtrl"
	})
	.when('/country/:countryId',{
		templateUrl: "country.html",
		controller: "countryCtrl"
	})
	.when('/article/:articleId',{
		templateUrl: "article.html",
		controller: "articleCtrl"
	})
	// .when('/communication',{
	// 	templateUrl: "templates/communication.html"
	// })
	// .when('/about',{
	// 	templateUrl: "templates/about.html"
	// })
	// .when('/map',{
	// 	templateUrl: "templates/map.html",
	// 	controller: "mapCtrl"
	// })	
	// .when('/mark/:markId',{
	// 	templateUrl: "templates/mark.html",
	// 	controller: "markCtrl"
	// })		
	// .otherwise({
	// 	redirectTo: "/home"
	// });
}
