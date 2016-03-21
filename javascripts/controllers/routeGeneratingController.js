app.controller('routeGenController', ['routingData', '$scope', function(routingData, $scope) {

	var directionsDisplay;
	var directionsService = new google.maps.DirectionsService();
			var points = [];
		var waypoints = [];

	function removeMarkers() {
		routingData.points.forEach(function(element) {
			element.setMap(null);
		})
	}
		routingData.genMap().routeMap.addListener("dblclick", function (e) {

    	var point = new google.maps.Marker({
    		position: e.latLng,
    		map: routeMap,
    		title: 'Pointy'
    	});
    	if (points.length === 0) {
    		points.push(point);
    	} else {
    		waypoints.push({
    			location: {
    				lat: point.position.lat(),
    				lng: point.position.lng()
    			},
    			stopover: true
    		});
    		Route();
    	}
    	
    });
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
				routingData.genMap().directionsDisplay.setDirections(result);
			} else {
				alert('couldnt do it' + status);
			}
		})
	}
	return routingData.genMap();

}]);