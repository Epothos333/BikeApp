app.controller('routeGenController', ['routingData', '$scope', function(routingData, $scope) {
	return routingData.then(function(response) {
		console.log(response.data.routes);
	});
}]);