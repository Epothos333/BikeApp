var app = angular.module('bikeApp', ['ngRoute'])
	.config(function($routeProvider) {
		$routeProvider.when("/",
		{
			templateUrl:"../gettingStared.html",
			controller: "gettingStared"
		});

		
		$routeProvider.when("/bikeRoutes",
		{
			templateUrl:"../bikeRoutes.html",
			controller: "bikeRoutes"
		});
		$routeProvider.when("/bikeMap",
		{
			templateUrl:"../bikeMap.html",
			controller: "BikeMap"
		});

	});

var map;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 42.3314, lng: 83.0458},
		zoom: 8
	});
}
var app = angular.module('bikeApp', []);

app.controller('bikeRoutes', ['$http', 'weatherService', '$scope', function($http, weatherService, $scope){
	weatherService.then(function success(response){
		$scope.posts = city.name;
		console.log("hi");
	});
}]);
angular.module('bikeApp')
	.factory('weatherService', ['$http', function($http){
		return $http({
			method: 'GET',
			url: 'http://api.openweathermap.org/data/2.5/forecast/city?id=4990729&APPID=c4e648130458b76564cd4aa311c5a3d3'
		})

	}]);