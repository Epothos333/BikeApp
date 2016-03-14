app.controller('bikeRoutes', ['$http', 'weatherService', '$scope', function($http, weatherService, $scope){
	weatherService.then(function success(response){
		$scope.posts = response.data.city.name;
		$scope.temps = response.data.list[main];		
	});
}]);