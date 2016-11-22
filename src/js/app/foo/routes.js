'use strict';

module.exports = function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: "templates/home.html",
		controller: "headCtrl"
	})
	.when('/home',{
		templateUrl: "templates/home.html",
		controller: "headCtrl"
	})
	.when('/country/:countryId',{
		templateUrl: "templates/country.html",
		controller: "countryCtrl"
	})
	.otherwise({
		redirectTo: "/"
	});
}
