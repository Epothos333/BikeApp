var app = angular.module('bikeApp', ['ngRoute']);
	

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/bikeRoutes', {
        templateUrl: '/Views/bikeRoutes.html',
        controller:'bikeRoutes'
        });
    $routeProvider.when('/bikeMap', {
        templateUrl: '/Views/bikeMap.html',
        controller: 'mapController'
        });
    $routeProvider.when('/home', {
        templateUrl: '/Views/gettingStarted.html'
        });
  }]);

app.factory('mapData', function(){


function initMap() {

	var map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 42.3404308730309, 
			lng: -83.05515061325411

		},
		zoom: 11
		


	});
		var marker = new google.maps.Marker({
		position: {
			lat: 42.3404308730309, 
			lng: -83.05515061325411
		},
		map: map,
		title: 'Ayyyyyyye'
	});
		var marker = new google.maps.Marker({
		position: {
			lat: 42.330543, 
			lng: -83.032071
		},
		map: map,
		title: 'Detroit Wheel House'
	});

		var bikeLayer = new google.maps.BicyclingLayer();
  		bikeLayer.setMap(map);
	};

	
		  var line = new google.maps.Polyline({
		    path: [{lat: 42.34, lng: -83.05}, {lat: 42.33, lng: -83.03}],
		    geodesic: true,
		    strokeColor: '#FF0000',
		    strokeOpacity: 1.0,
		    strokeWeight: 2
   
     });
		    map: map

		    return initMap
  });





app.controller('mapController', ['mapData', '$scope', function(mapData, $scope) {
	return mapData();


}]);
app.controller('bikeRoutes', ['$http', 'weatherService', '$scope', function($http, weatherService, $scope){
	weatherService.then(function success(response){
		$scope.printWeather = function() {
			var list = response.data.list[0];
			$scope.temps= list.main.temp;
			$scope.weather= list.weather[0].description;
			$scope.icon = list.weather[0].icon;

			return {
				temp: $scope.temps,
				weather: $scope.weather,
				icon: $scope.icon
			}
		};	
	});
}]);

app.directive('weatherDays', function(){
	return {
		restrict: 'E',
		replace: false,
		template: "<h1>{{printWeather().temp}}</h1><img src='../images/{{printWeather().icon}}.png'/><h2>{{printWeather().weather}}</h2>"
	};
});
app.factory('weatherService', ['$http', function($http){
		return $http({
			method: 'GET',
			url: 'http://api.openweathermap.org/data/2.5/forecast/city?id=4990729&units=imperial&APPID=c4e648130458b76564cd4aa311c5a3d3'
		})

	}]);