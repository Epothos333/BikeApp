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
	// 	var marker = new google.maps.Marker({
	// 	position: {
	// 		lat: 42.330543, 
	// 		lng: -83.032071
	// 	},
	// 		map: map,
	// 		title: 'Detroit Wheel House'
	// });

		var bikeLayer = new google.maps.BicyclingLayer();
  		bikeLayer.setMap(map);
	

	
		  var line = new google.maps.Polyline({
		    path: [{lat: 42.32900, lng: -83.050639},{lat: 42.369977, lng: -83.075277},{lat: 42.371626, lng: -83.071844},{lat: 42.340800, lng: -83.050214},{lat: 42.338136, lng: -83.057252}],
		    geodesic: true,
		    strokeColor: '#FF0000',
		    strokeOpacity: 1.0,
		    strokeWeight: 2
   
     });
		    
		    line.setMap(map);
	}

		    return initMap
  });



