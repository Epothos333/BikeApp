var app = angular.module('bikeApp', []);

app.controller('bikeRoutes', ['$http', 'weatherService', function($http, weatherService){
	var vm = this;
	weatherService.then(function success(response){
		vm.posts = response.weatherdata.location.name;
	});
}]);