app.factory('routingData', function($http) {
	function genMap() {
	var routeMap = new google.maps.Map(document.getElementById('routeHere'), {
		center: {
			lat: 42.3404308730309, 
			lng: -83.05515061325411
		},
		zoom: 11,
		mapTypeId: google.maps.MapTypeId.TERRAIN
		});
	}

	return $http.get('https://maps.googleapis.com/maps/api/directions/json?origin=Boston,MA&destination=Concord,MA&waypoints=Charlestown,MA|Lexington,MA&key=AIzaSyCAkVGVXTEcdcDGMEmFZoUia0Y19X6q3pA');
});



		



