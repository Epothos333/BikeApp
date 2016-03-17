app.directive('googleMap', function() {
	return {
		restrict: 'E',
		replace: 'false',
		controller: function(mapData, $scope) {
			return mapData;
		},
		transclude: true,
		templateUrl: 'Views/templates/mapTemplate.html'
	}
})