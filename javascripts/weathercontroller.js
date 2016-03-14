app.controller('bikeRoutes', ['$http', 'weatherService', '$scope', function($http, weatherService, $scope){
	weatherService.then(function success(response){
		$scope.posts = response.city.name;
		console.log($scope.posts);
	});
}]);