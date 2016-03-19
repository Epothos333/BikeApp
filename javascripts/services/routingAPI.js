app.factory('routingData', function($http) {

	function genMap() {
	var routeMap = new google.maps.Map(document.getElementById('routeHere'), {
		center: {
			lat: 42.3404308730309, 
			lng: -83.05515061325411
		},
		zoom: 11,
		mapTypeId: google.maps.MapTypeId.TERRAIN,
		});

	routeMap.setOptions({disableDoubleClickZoom: true });
	routeMap.addListener("dblclick", function (e) {
    var latLng = e.latLng;
    console.log(latLng.lat());
    console.log(latLng.lng());

    });
	}

	return genMap;
});



		



