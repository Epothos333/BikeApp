app.controller('routeGenController', ['routingData', '$scope', function(routingData, $scope) {

	var directionsDisplayOne;
	var directionsServiceOne = new google.maps.DirectionsService();
	var instructions = document.getElementById('directions');

	function removeMarkers() {
		routingData.points.forEach(function(element) {
			element.setMap(null);
		})
	}
		$scope.reload = function() {
			console.log('reload');
			location.reload();
			
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
			waypoints: routingData.waypoints,
			unitSystem: google.maps.UnitSystem.IMPERIAL
		};
		directionsServiceOne.route(request, function(result, status) {
			instructions.innerHTML = '';
			routingData.genMap().setPanel(instructions);
			if (status === google.maps.DirectionsStatus.OK) {
				routingData.genMap().setDirections(result);
				
			} else {
				alert('couldnt do it' + status);
			}

		})

	}
	return routingData.genMap();

}]);