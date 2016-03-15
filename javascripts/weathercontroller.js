app.controller('bikeRoutes', ['$http', 'weatherService', '$scope', '$location', function($http, weatherService, $scope, $location){
	weatherService.then(function success(response){
		$scope.printWeather = function() {
			var list = response.data;
			var sunset = list.sys.sunset;						
			var temps= list.main.temp.toFixed(1);
			var weather= list.weather[0].description;
			var icon = list.weather[0].icon;

		$scope.changeView = function(view) {
			$location.path(view);
			}

			return {
				temp: temps,
				weather: weather,
				icon: icon,
				sunset: sunset,
				list: list
			}
		};	
	});
}]);

app.directive('weatherDays', function(){
	return {
		restrict: 'E',
		replace: false,
		templateUrl: "Views/weatherview.html"
	};
});