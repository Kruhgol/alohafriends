'use strict';

module.exports = function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: "templates/home.html",
		controller: "testCtrl"
	})
	.when('/home',{
		templateUrl: "templates/home.html",
		controller: "testCtrl"
	})
	.otherwise({
		redirectTo: "/"
	});
}
