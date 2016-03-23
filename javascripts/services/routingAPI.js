app.factory('routingData', function() {

		var Center = new google.maps.LatLng(42.34043, -83.055155);
		var routeMap;
		var points = [];
		var waypoints = [];
		

	function genMap() {
		directionsDisplayOne = new google.maps.DirectionsRenderer({
			draggable: true
		});
		directionsDisplayOne.setPanel(document.getElementById("directions"))
		var properties = {
			center: Center,
			zoom: 13,
			mapTypeId: google.maps.MapTypeId.TERRAIN
		};

		

		routeMap = new google.maps.Map(document.getElementById('routeHere'), properties);
		directionsDisplayOne.setMap(routeMap);
		routeMap.setOptions({
			disableDoubleClickZoom: true 
		});
		new google.maps.BicyclingLayer().setMap(routeMap);
		routeMap.addListener("dblclick", function (e) {

    	var point = new google.maps.Marker({
    		position: e.latLng,
    		map: routeMap,
    		animation: google.maps.Animation.DROP,
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
		return directionsDisplayOne;
}


	
return {
	genMap: genMap,
	points: points,
	waypoints: waypoints
}
});



		



