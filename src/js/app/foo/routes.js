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
	.when('/registration', {
		templateUrl: 'registration.html',
		controller: 'registrationCtrl'
	})
	.when('/mark/:markId', {
		templateUrl: 'mark.html',
		controller: 'markCtrl'
	})
	.when('/author/:authorId', {
		templateUrl: 'author.html',
		controller: 'authorCtrl'
	})
	.when('/contacts', {
		templateUrl: 'contacts.html'
	})
	.when('/map', {
		templateUrl: 'map.html',
		controller: 'mapCtrl'
	})
	.when('/design', {
		templateUrl: 'design.html'
	})
	.when('/relink', {
		templateUrl: 'home.html',
		controller: 'relinkCtrl'
	})
	.otherwise({
		redirectTo: "/"
	});
}
