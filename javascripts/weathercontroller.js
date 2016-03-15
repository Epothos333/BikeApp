app.controller('bikeRoutes', ['$http', 'weatherService', '$scope', '$location', function($http, weatherService, $scope, $location){
	weatherService.then(function success(response){
		$scope.printWeather = function() {
			var list = response.data.list[0];
			$scope.temps= list.main.temp;
			$scope.weather= list.weather[0].description;
			$scope.icon = list.weather[0].icon;

		$scope.changeView = function(view) {
			$location.path(view);
			}

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