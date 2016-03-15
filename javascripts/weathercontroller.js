app.controller('bikeRoutes', ['$http', 'weatherService', '$scope', function($http, weatherService, $scope){
	weatherService.then(function success(response){
		$scope.posts = response.data.city.name;
		$scope.temps = response.data.list[0].main.temp;
		$scope.weather = response.data.list[0].weather[0].description;		
	});
}]);

app.directive('weatherDays', function(){
	return {
		restrict: 'E',
		replace: false,
		template: "<h1>{{posts}}</h1>"
	};
});