app.controller('bikeRoutes', ['$http', 'weatherService', '$scope', '$location', 'mapData', function($http, weatherService, $scope, $location, mapData){
	weatherService.then(function success(response){
		$scope.printWeather = function() {
			var list = response.data,
			 sunset = list.sys.sunset,
			 sunrise = list.sys.sunrise,
			 sunsetdate = new Date(sunset * 1000).toLocaleTimeString(),		
			 sunrisedate = new Date(sunrise * 1000).toLocaleTimeString(),					
			 temps= list.main.temp.toFixed(1),
			 weather= list.weather[0].description,
			 icon = list.weather[0].icon;

			 	var modal = document.getElementById('rentalModal');
				var btn = document.getElementById('toggleMe');
				var span = document.getElementById('toggleOff');

				btn.onclick = function() {
				    modal.style.display = 'block';
				    return mapData.rentBike();
				}
				span.onclick = function() {
				    modal.style.display = 'none';
				}
				window.onclick = function(event) {
				    if (event.target === modal) {
				        modal.style.display = 'none';
				    }
				}

			return {
				temp: temps,
				weather: weather,
				icon: icon,
				sunrise: sunrisedate,
				sunset: sunsetdate,
				list: list,
			}
		};	
	});
}]);


