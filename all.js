var app = angular.module('bikeApp', ['ngRoute']);
	

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/bikeRoutes', {
        templateUrl: '/bikeRoutes.html',
        controller: 'bikeRoutes'
          });
    $routeProvider.when('/bikeMap', {
        templateUrl: '/bikeMap.html',
        controller: 'mapController'
        });
  }]);

app.factory('mapData', function(){

var map;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 42.3404308730309, 
			lng: -83.05515061325411
		},
		zoom: 11
	});

}

return initMap;

})
app.controller('mapController', ['mapData', '$scope', function(mapData, $scope) {
	console.log("i am working");
	return mapData();


}]);
app.controller('bikeRoutes', ['$http', 'weatherService', '$scope', function($http, weatherService, $scope){
	weatherService.then(function success(response){
		$scope.posts = response.city.name;
		console.log($scope.posts);
	});
}]);
app.factory('weatherService', ['$http', function($http){
		return $http({
			method: 'GET',
			url: 'http://api.openweathermap.org/data/2.5/forecast/city?id=4990729&APPID=c4e648130458b76564cd4aa311c5a3d3'
		})

	}]);