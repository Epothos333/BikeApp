app.factory('routingData', function() {

	// function genMap() {
		var Center = new google.maps.LatLng(42.34043, -83.055155);
		var directionsDisplay;
		var directionsService = new google.maps.DirectionsService();
		var routeMap;
		var points = [];

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
    	points.push(point);

    	if (points.length === 2) {
    		Route();
    	}

    });
}

	function removeMarkers() {
		points.forEach(function(element) {
			element.setMap(null);
		})
	}

	function Route() {
		var start = new google.maps.LatLng(points[0].position.lat(), points[0].position.lng());
		var end = new google.maps.LatLng(points[1].position.lat(), points[1].position.lng());
		removeMarkers();
		var request = {
			origin: start,
			destination: end,
			travelMode: google.maps.TravelMode.WALKING
		};
		directionsService.route(request, function(result, status) {
			if (status === google.maps.DirectionsStatus.OK) {
				directionsDisplay.setDirections(result);
			} else {
				alert('couldnt do it' + status);
			}
		})
	}

	
return genMap;
	// var routeMap = new google.maps.Map(document.getElementById('routeHere'), {
	// 	center: {
	// 		lat: 42.3404308730309, 
	// 		lng: -83.05515061325411
	// 	},
	// 	zoom: 11,
	// 	mapTypeId: google.maps.MapTypeId.TERRAIN,
	// 	});



	// console.log('1')
	// console.log($http.get('https://maps.googleapis.com/maps/api/directions/json?origin=Toronto&destination=Montreal&key=AIzaSyCAkVGVXTEcdcDGMEmFZoUia0Y19X6q3pA').then(function(x) {
	// 	return ''
	// }));

	// $http.get('https://maps.googleapis.com/maps/api/directions/json?origin=Toronto&destination=Montreal&key=AIzaSyCAkVGVXTEcdcDGMEmFZoUia0Y19X6q3pA').then(function(response){
	// 	console.log(response.data);
	// });
	// console.log('2')
});



		



