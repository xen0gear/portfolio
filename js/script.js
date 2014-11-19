var myApp = angular.module('app', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/', {
			//templateUrl must alwasy be expressed relative to the index.html file's location!!!
			//controller is just an javascript function to handle this view
			templateUrl: 'partials/partial1.html',
			controller: 'HomeCtrl'
			});
		// when('/plans', {
		// 	templateUrl: 'views/plans.html',
		// 	controller: 'PlanCtrl'
		// 	}).
		// when('/cart', {
		// 	templateUrl: 'views/cart.html',
		// 	//controller: 'CartCtrl'
		// 	}).
		// when('/', {
		// 	templateUrl: 'views/home.html',
		// 	controller: 'HomeCtrl'
		// 	}).
		// otherwise({
		// 	redirectTo: '/'
		// 	});
	}]);

myApp.controller('HomeCtrl', function($scope){

});