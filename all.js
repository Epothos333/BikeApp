var app = angular.module('bikeApp', ['ngRoute'])
	app.config(function($routeProvider) {
		$routeProvider.when("/",
		{
			templateUrl:"gettingStared.html",
			controller: "gettingStared"
		});

		
		$routeProvider.when("/bikeRoutes",
		{
			templateUrl:"bikeRoutes.html",
			controller: "bikeRoutes"
		});
$routeProvider.when("/bikeMap",
		{
			templateUrl:"bikeMap.html",
			controller: "BikeMap"
		});

	});
