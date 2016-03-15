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
    $routeProvider.when('/', {
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

}

return initMap;

})
app.controller('mapController', ['mapData', '$scope', function(mapData, $scope) {
	return mapData();


}]);
app.controller('bikeRoutes', ['$http', 'weatherService', '$scope', function($http, weatherService, $scope){
	weatherService.then(function success(response){
		$scope.posts = response.data.city.name;
		$scope.temps = response.data.list[0].main.temp;
		$scope.weather = response.data.list[0].weather[0].description;		
	});
}]);

app.directive('weatherDays', function(){
	return {
		restrict: 'E',
		replace: false,
		template: "<h1>{{posts}}</h1>"
	};
});
app.factory('weatherService', ['$http', function($http){
		return $http({
			method: 'GET',
			url: 'http://api.openweathermap.org/data/2.5/forecast/city?id=4990729&units=imperial&APPID=c4e648130458b76564cd4aa311c5a3d3'
		})

	}]);