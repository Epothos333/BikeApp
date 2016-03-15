app.controller('getStartCont', function($scope, $location) {
	$scope.changeView = function(view) {
		$location.path(view);
		console.log(view);
	}
});