app.factory('mapData', function(){

		var goldStar = {

				path: google.maps.SymbolPath.CIRCLE,
				scale: 10

	    };
function map2() {
	var mapTwo = new google.maps.Map(document.getElementById('themap'), {
		center: {
			lat: 42.3404308730309, 
			lng: -83.05515061325411
		},
		zoom: 11,
		mapTypeId: google.maps.MapTypeId.TERRIAN
	});
}

function map1() {


	var map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 42.3404308730309, 
			lng: -83.05515061325411
		},
		zoom: 12,
		 mapTypeId: google.maps.MapTypeId.TERRAIN
	});
		//Class for creating markers
		var CreateMark = function(latit, lngit, title) {
			var vm = this;
			vm.marker = new google.maps.Marker({
				position: {
					lat: latit,
					lng: lngit
				},
				icon: goldStar,
				map: map,
				title: title
			});
		};

	    var detroitWH = new CreateMark(42.330543, -83.032071, 'Detroit Wheel House'),
	     zagSter1 = new CreateMark(42.330640, -83.046645, 'Bike Rental Station at 611 Woodward'),
	     zagSter2 = new CreateMark(42.331165, -83.048808, 'Bike Rental Station at 730 Shelby '),
	     zagSter3 = new CreateMark(42.330984, -83.043208, 'Bike Rental Station at 160 E Congress'),
	     zagSter4 = new CreateMark(42.328996, -83.045499, 'Bike Rental Station at 1 Woodward'),
	     zagSter5 = new CreateMark(42.334633, -83.041486, 'Bike Rental Station at Greektown'),
	     zagSter6 = new CreateMark(42.335645, -83.049324, 'Bike Rental at 1528 Woodward'),
	     zagSter7 = new CreateMark(42.336298, -83.049400, 'Bike Rental at 1555 Boradway');


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
		    return {
		    	firstMap: map1,
		    	secondMap: map2
		    }
  });





		



