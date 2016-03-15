app.factory('weatherService', ['$http', function($http){
		return $http({
			method: 'GET',
			url: 'http://api.openweathermap.org/data/2.5/forecast/city?id=4990729&units=imperial&APPID=c4e648130458b76564cd4aa311c5a3d3'
		})

	}]);