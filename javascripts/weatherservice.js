app.factory('weatherService', ['$http', function($http){
		return $http({
			method: 'GET',
			url: 'http://api.openweathermap.org/data/2.5/weather?lat=42.331429&lon=-83.045753&units=imperial&APPID=c4e648130458b76564cd4aa311c5a3d3'
		})

	}]);