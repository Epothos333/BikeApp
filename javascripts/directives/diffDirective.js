app.directive('diffBtn', function(){
	return {
		restrict: 'E',
		replace: false,
		templateUrl: "Views/templates/difficultyTemplate.html",
		scope: {
			bgcolor: '=',
			route: '='
		},
		controller: function($scope, $location) {
			$scope.changeView = function() {
				$location.path($scope.route);
			}
		}

	};
});