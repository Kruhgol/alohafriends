'use strict';

module.exports = function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: "home.html"
	})
	.otherwise({
		redirectTo: "/"
	});
}
