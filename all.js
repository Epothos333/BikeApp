
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