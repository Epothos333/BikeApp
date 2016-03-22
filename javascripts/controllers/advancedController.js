app.controller('advancedController', ['mapData', '$scope', function(mapData, $scope) {
	


	return {
		mapOne: mapData.advMapOne(),
		mapTwo: mapData.advMapTwo(),
		mapThree: mapData.advMapThree()()
		}
}]);


