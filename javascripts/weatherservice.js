angular.module('bikeApp')
	.factory('weatherService', ['$http', function($http){
		return $http({
			method: 'GET',
			url: 'http://api.openweathermap.org/data/2.5/forecast?q=Detroit,us&mode=xml&appid=b1b15e88fa797225412429c1c50c122a',
		})

	}]);