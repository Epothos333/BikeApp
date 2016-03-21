app.factory('routingData', function() {

	// function genMap() {
		var Center = new google.maps.LatLng(42.34043, -83.055155);
		var directionsDisplay;
		var directionsService = new google.maps.DirectionsService();
		var map;

	function initialize() {

		directionsDisplay = new google.maps.DirectionsRenderer();
		var properties = {
			center: Center,
			zoom: 15,
			mapTypeId: google.maps.MapTypeId.SATELLITE
		};

		map = new google.maps.Map(document.getElementById('routeHere'), properties);
		directionsDisplay.setMap(map);
		var marker = new google.maps.Marker({
			position: Center,
			animation: google.maps.Animation.BOUNCE
		});
			map.setOptions({disableDoubleClickZoom: true });
	map.addListener("dblclick", function (e) {
    var latLng = e.latLng;
    console.log(latLng.lat());
    console.log(latLng.lng());

    });
		marker.setMap(map);
		Route();

		

	}

	function Route() {
		var start = new google.maps.LatLng(18.210885, -67.140884);
		var end = new google.maps.LatLng(18.210888, -67.123144);
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

	}
return initialize;
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



		



