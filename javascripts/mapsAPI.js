app.factory('mapData', function(){


function initMap() {

	var map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 42.3404308730309, 
			lng: -83.05515061325411

		},
		zoom: 11,
		 mapTypeId: google.maps.MapTypeId.TERRAIN



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
	

	
		  var line = new google.maps.Polyline({
		    path: [{lat: 42.34, lng: -83.05}, {lat: 42.33, lng: -83.03}],
		    geodesic: true,
		    strokeColor: '#FF0000',
		    strokeOpacity: 1.0,
		    strokeWeight: 2
   
     });
		    
		    line.setMap(map);
	}

		    return initMap
  });



