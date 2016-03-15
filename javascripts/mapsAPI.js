app.factory('mapData', function(){


function initMap() {

	var map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 42.3404308730309, 
			lng: -83.05515061325411
		},
		zoom: 11
	});
		var marker = new google.maps.Marker({
		position: {
			lat: 42.3404308730309, 
			lng: -83.05515061325411
		},
		map: map,
		title: 'Ayyyyyyye'
	});
		var marker = new google.maps.Marker({
		position: {
			lat: 42.330543, 
			lng: -83.032071
		},
		map: map,
		title: 'Detroit Wheel House'
	});

		var bikeLayer = new google.maps.BicyclingLayer();
  		bikeLayer.setMap(map);
	};

	return initMap;

})



