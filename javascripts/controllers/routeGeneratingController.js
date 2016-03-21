app.controller('routeGenController', ['routingData', '$scope', function(routingData, $scope) {

	var directionsDisplay;
	var directionsService = new google.maps.DirectionsService();

	function removeMarkers() {
		routingData.points.forEach(function(element) {
			element.setMap(null);
		})
	}

		$scope.Route = function() {
		console.log('routing')
		var start = new google.maps.LatLng(routingData.points[0].position.lat(), routingData.points[0].position.lng());
		var end = new google.maps.LatLng(routingData.points[0].position.lat(), routingData.points[0].position.lng());
		removeMarkers();
		var request = {
			origin: start,
			destination: end,
			travelMode: google.maps.TravelMode.BICYCLING,
			waypoints: routingData.waypoints
		};
		directionsService.route(request, function(result, status) {
			if (status === google.maps.DirectionsStatus.OK) {
				routingData.genMap().setDirections(result);
			} else {
				alert('couldnt do it' + status);
			}
		})
	}
	return routingData.genMap();

}]);