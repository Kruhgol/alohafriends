'use strict';

module.exports = function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: "main.html"
	})
	.otherwise({
		redirectTo: "/"
	});
}
