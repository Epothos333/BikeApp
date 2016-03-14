

var map;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: -34.397, lng: 150.644},
		zoom: 8
	});
}
var app = angular.module('bikeApp', ['ngRoute'])
	.config(function($routeProvider) {
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
