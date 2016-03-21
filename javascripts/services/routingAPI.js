app.factory('routingData', function() {

		var Center = new google.maps.LatLng(42.34043, -83.055155);
		var routeMap;
		var points = [];
		var waypoints = [];

	function genMap() {
		directionsDisplay = new google.maps.DirectionsRenderer();
		var properties = {
			center: Center,
			zoom: 15,
			mapTypeId: google.maps.MapTypeId.TERRAIN
		};

		routeMap = new google.maps.Map(document.getElementById('routeHere'), properties);
		directionsDisplay.setMap(routeMap);
		routeMap.setOptions({
			disableDoubleClickZoom: true 
		});
		routeMap.addListener("dblclick", function (e) {

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
    	}
    	
    });
		return directionsDisplay;
}


	
return {
	genMap: genMap,
	points: points,
	waypoints: waypoints
}
});



		



