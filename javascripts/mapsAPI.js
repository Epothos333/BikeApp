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
		var bikeLayer = new google.maps.BicyclingLayer();
  		bikeLayer.setMap(map);	
		  var line = new google.maps.Polyline({
		    path: [
		    {
		    	lat: 42.32900,
		     	lng: -83.050639
		     },
		     {
		     	lat: 42.369977,
		     	 lng: -83.075277
		     },
		     {
		     	lat: 42.371626,
		     	lng: -83.071844
		     },
		     {
		     	lat: 42.340800,
		     	lng: -83.050214
		     },
		     {
		     	lat: 42.338136, 
		     	lng: -83.057252
		     }],
		    geodesic: true,
		    strokeColor: '#FF0000',
		    strokeOpacity: 1.0,
		    strokeWeight: 2
     });		    
		    line.setMap(map);

		var lineTwo = new google.maps.Polyline(
		{
		    path: [
		    	{
		    		lat: 42.333181, 
		    		lng: -83.044203
		    	},
		    	{
		    		lat: 42.350501, 
		    		lng: -83.004196
		    	},
		    	{
		    		lat: 42.355666,
		    	 	lng: -83.007591
		    	 },
		    	 {
		    	 	lat: 42.369439, 
		    	 	lng: -82.972243		 
		    	 },
		    	 {
		    	 	lat: 42.404987, 
		    	 	lng: -82.997672		    			    	   	 
		    	 },{
		    	 	lat: 42.334904, 
		    	 	lng: -83.045468	    			    	   	 
		    	 },{
		    	 	lat: 42.334608, 
		    	 	lng: -83.045335		    			    	   	 
		    	 },
		    	 {
		    	 	lat: 42.333329, 
		    	 	lng: -83.044270	    			    	   	 
		    	 }],
		    geodesic: true,
		    strokeColor: '#003366',
		    strokeOpacity: 1.0,
		    strokeWeight: 2
   
     });
		    
		    lineTwo.setMap(map); 
		
		var lineThree = new google.maps.Polyline(
		{
		    path: [
		    	{
		    		lat: 42.354928, 
		    		lng: -82.992002
		    	},
		    	{
		    		lat: 42.339090,
		    	 	lng: -83.030374
		    	},
		    	{
		    		lat: 42.347390,
		    	 	lng: -83.035791
		    	 },
		    	 {
		    	 	lat: 42.349377, 
		    	 	lng: -83.034366		 
		    	 },
		    	 {
		    	 	lat: 42.377727, 
		    	 	lng: -83.053509		 
		    	 },
		    	 {
		    	 	lat: 42.366935, 
		    	 	lng: -83.082565	    			    	   	 
		    	 },
		    	 {
		    	 	lat: 42.361124, 
		    	 	lng: -83.083826	    			    	   	 
		    	 },
		    	 {
		    	 	lat: 42.325903, 
		    	 	lng: -83.062717		    			    	   	 
		    	 },
		    	 {
		    	 	lat: 42.354928, 
		    		lng: -82.992002    			    	   	 
		    	 }],
		    geodesic: true,
		    strokeColor: '#ffd700',
		    strokeOpacity: 1.0,
		    strokeWeight: 2
   
     });
		    
		    lineThree.setMap(map); 
		}
		    return initMap
  });


	// 	var marker = new google.maps.Marker({
	// 	position: {
	// 		lat: 42.330543, 
	// 		lng: -83.032071
	// 	},
	// 		map: map,
	// 		title: 'Detroit Wheel House'
	// });





