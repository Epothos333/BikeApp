app.factory('weatherService', ['$http', function($http){
		return $http({
			method: 'GET',
			url: 'http://api.openweathermap.org/data/2.5/weather?zip=48216,us&units=imperial&APPID=c4e648130458b76564cd4aa311c5a3d3'
		})

	}]);