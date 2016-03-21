app.factory('routingData', function() {

		var Center = new google.maps.LatLng(42.34043, -83.055155);
		var routeMap;


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
		return {
			directionsDisplay: directionsDisplay,
			routeMap: routeMap
		}
}


	
return {
	genMap: genMap,
	points: points,
	waypoints: waypoints
}
});



		



