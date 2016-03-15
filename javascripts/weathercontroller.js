app.controller('bikeRoutes', ['$http', 'weatherService', '$scope', function($http, weatherService, $scope){
	weatherService.then(function success(response){
		$scope.printWeather = function() {
			var list = response.data.list[0];
			$scope.temps= list.main.temp;
			$scope.weather= list.weather[0].description;
			$scope.icon = list.weather[0].icon;

			return {
				temp: $scope.temps,
				weather: $scope.weather,
				icon: $scope.icon
			}
		};	
	});
}]);

app.directive('weatherDays', function(){
	return {
		restrict: 'E',
		replace: false,
		template: "<h1>{{printWeather().temp}}</h1><img src='../images/{{printWeather().icon}}.png'/><h2>{{printWeather().weather}}</h2>"
	};
});