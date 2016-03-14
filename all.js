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


app.controller('bikeRoutes', ['$http', 'weatherService', function($http, weatherService){
	var vm = this;
	weatherService.then(function success(response){
		vm.posts = response.weatherdata.location.name;
	});
}]);
angular.module('bikeApp')
	.factory('weatherService', ['$http', function($http){
		return $http({
			method: 'GET',
			url: 'http://api.openweathermap.org/data/2.5/forecast?q=Detroit,us&mode=xml&appid=b1b15e88fa797225412429c1c50c122a',
		})

	}]);


var map;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 42.3314, lng: 83.0458},
		zoom: 8
	});
}
var app = angular.module('bikeApp', []);

app.controller('bikeRoutes', ['$http', 'weatherService', function($http, weatherService){
	var vm = this;
	weatherService.then(function success(response){
		vm.posts = response.weatherdata.location.name;
	});
}]);
angular.module('bikeApp')
	.factory('weatherService', ['$http', function($http){
		return $http({
			method: 'GET',
			url: 'http://api.openweathermap.org/data/2.5/forecast?q=Detroit,us&mode=xml&appid=b1b15e88fa797225412429c1c50c122a',
		})

	}]);