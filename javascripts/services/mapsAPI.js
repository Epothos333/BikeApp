app.factory('mapData', function(){

	var redCircle = {
				path: google.maps.SymbolPath.CIRCLE,
				scale: 7,
				strokeColor: '#FF0000',
		      	strokeOpacity: 0.8,
		      	strokeWeight: 2,
		      	fillColor: '#FF0000',
		      	fillOpacity: 0.35
	};

var bikeLayer = new google.maps.BicyclingLayer();
var directionsService = new google.maps.DirectionsService();
	// Rental Bikes Map
	function rentBike() {
		var bikeMap = new google.maps.Map(document.getElementById('rentalMap'), {
			center: {
			lat: 42.330984, 
			lng: -83.043208
				},
			zoom: 14,
			mapTypeId: google.maps.MapTypeId.TERRAIN
			});
		bikeLayer.setMap(bikeMap);
		
		//Class for creating markers
		var CreateMark = function(latit, lngit, title, message) {
		var contentString = message || 'yo';
		var infowindow = new google.maps.InfoWindow({
   			content: contentString
  		});
		var vm = this;
		vm.marker = new google.maps.Marker({
			position: {
				lat: latit,
				lng: lngit
					},
			icon: redCircle,
			map: bikeMap,
			title: title
				});
		vm.marker.addListener('click', function() {
			infowindow.open(bikeMap, vm.marker);
		});
			};

		var detroitWH = new CreateMark(42.330543, -83.032071, 'Detroit Wheel House', 'The wheelhouse yo'),
	     zagSter1 = new CreateMark(42.330640, -83.046645, 'Zagster Rental Station', '611 Woodward'),
	     zagSter2 = new CreateMark(42.331165, -83.048808, 'Zagster Rental Station', '730 Shelby '),
	     zagSter3 = new CreateMark(42.330984, -83.043208, 'Zagster Rental Station', '160 E Congress'),
	     zagSter4 = new CreateMark(42.328996, -83.045499, 'Zagster Rental Station', '1 Woodward'),
	     zagSter5 = new CreateMark(42.334633, -83.041486, 'Zagster Rental Station', 'Greektown'),
	     zagSter6 = new CreateMark(42.335645, -83.049324, 'Zagster Rental Station', '1528 Woodward'),
	     zagSter7 = new CreateMark(42.336298, -83.049400, 'Zagster Rental Station', ' Broadway');
}

function advancedRouteOne() {
		var aDV_one = new google.maps.Map(document.getElementById('ADVmapOne'), {
		center: {
			lat: 42.349115, 
			lng:  -83.038386
		},
		zoom: 13,
		mapTypeId: google.maps.MapTypeId.TERRAIN
		
	});
	directionsDisplay = new google.maps.DirectionsRenderer();
	directionsDisplay.setMap(aDV_one);
	pathOne = [{
    			location: {
    				lat: 42.339090,
    				lng: -83.030374
    			},
    			stopover: true
    		},
    		{
			
		    	 location: {
		    		lat: 42.347390,
		    	 	lng: -83.035791
		    	 },
		    	 stopover: true
		    },
		    {
		    	 location: {
		    	 	lat: 42.349377, 
		    	 	lng: -83.034366		 
		    	 },
		    	 stopover: true
		    },
		    {
		    	 location:{
		    	 	lat: 42.377727, 
		    	 	lng: -83.053509		 
		    	 },
		    	 stopover: true
		    },
		    {	 
		    	 location:{
		    	 	lat: 42.366935, 
		    	 	lng: -83.082565	    			    	   	 
		    	 },
		    	 stopover: true
		    },
		    {
		    	 location:{
		    	 	lat: 42.361124, 
		    	 	lng: -83.083826	    			    	   	 
		    	 },
		    	 stopover: true
		    },
		    {
		    	 location:{
		    	 	lat: 42.325903, 
		    	 	lng: -83.062717		    			    	   	 
		    	 },
		    	 stopover: true
		    },
			{
		    	 location:{
		    	 	lat: 42.354928, 
		    		lng: -82.992002    			    	   	 
		    	 },
		    	 stopover: true
		    	}];
		 (function route() {
			var start = new google.maps.LatLng(42.354928, -82.992002);
			var end = new google.maps.LatLng(42.354928, -82.992002);
			var request = {
				origin: start,
				destination: end,
				travelMode: google.maps.TravelMode.BICYCLING,
				waypoints: pathOne
			};
			directionsService.route(request, function(result, status) {
				if (status === google.maps.DirectionsStatus.OK) {
					directionsDisplay.setDirections(result);
				} else {
					alert('couldnt do it' + status);
				}
			})
	})();

	new google.maps.BicyclingLayer().setMap(aDV_one);

	var aDV_two = new google.maps.Map(document.getElementById('ADVmapTwo'), {
		center: {
			lat: 42.410492, 
			lng: -83.080348
		},
		zoom: 11,
		mapTypeId: google.maps.MapTypeId.TERRAIN
	});
	new google.maps.BicyclingLayer().setMap(aDV_two);

	var aDV_three = new google.maps.Map(document.getElementById('ADVmapThree'), {
		center: {
			lat: 42.383040, 
			lng: -82.953605
		},
		zoom: 12,
		mapTypeId: google.maps.MapTypeId.TERRAIN
	});
	new google.maps.BicyclingLayer().setMap(aDV_three);


		    
		   
	var lineTwo = new google.maps.Polyline(
		{
		    path: [
		    	{
		    		lat:42.328666,
		    		lng: -83.044576
		    	},
		    	{
		    		lat: 42.475901, 
		    	 	lng: -83.149433 
		    	  			    	   	 
		    	 }],
		    geodesic: true,
		    strokeColor: '#FF0000',
		    strokeOpacity: 1.0,
		    strokeWeight: 5
   
     });
		    lineTwo.setMap(aDV_two);

	var lineThree = new google.maps.Polyline(
		{
		    path: [
		    	{
		    		lat: 42.334768, 
		    		lng: -82.995750
		    	},
		    	{
		    		lat:42.391148,
		    	 	lng:  -82.893182
		    	},
		    	/*{
		    		lat:42.371021,
		    	 	lng:  -82.949260
		    	},*/
		    	{
		    		lat: 42.407058, 
		    	 	lng: -82.886745
		    	 },
		    	 {
		    	 	lat: 42.417260, 
		    	 	lng: -82.911378 	 
		    	 },
		    	 {
		    	 	lat: 42.412444, 
		    	 	lng: -82.912923		 
		    	 },
		    	 {
		    	 	lat: 42.389437, 
		    	 	lng: -82.976181    			    	   	 
		    	 },
		    	 {
		    	 	lat: 42.373079, 
		    	 	lng: -83.018753    			    	   	 
		    	 },
		    	 {
		    	 	lat: 42.345545, 
		    	 	lng: -83.000750	    			    	   	 
		    	 },
		    	 {
		    	 	lat: 42.334768, 
		    		lng: -82.995750    			    	   	 
		    	 }],
		    geodesic: true,
		    strokeColor: '#FF0000',
		    strokeOpacity: 1.0,
		    strokeWeight: 5
   
     });
		    lineThree.setMap(aDV_three);
}


function intermediateRouteOne() {
	var iNT_one = new google.maps.Map(document.getElementById('INTmapOne'), {
		center: {
			lat: 42.357615, 
			lng: -83.009135
		},
		zoom: 12,
		mapTypeId: google.maps.MapTypeId.TERRAIN
	});
	new google.maps.BicyclingLayer().setMap(iNT_one);

	var iNT_two = new google.maps.Map(document.getElementById('INTmapTwo'), {
		center: {
			lat: 42.343244, 
			lng: -83.053627
		},
		zoom: 13,
		mapTypeId: google.maps.MapTypeId.TERRAIN
	});
	new google.maps.BicyclingLayer().setMap(iNT_two);

	var iNT_three = new google.maps.Map(document.getElementById('INTmapThree'), {
		center: {
			lat: 42.329296, 
			lng: -83.076447
		},
		zoom: 13,
		mapTypeId: google.maps.MapTypeId.TERRAIN
	});
	new google.maps.BicyclingLayer().setMap(iNT_three);

	var lineOne = new google.maps.Polyline(
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
		    	 },
		    	 {
		    	 	lat: 42.334904, 
		    	 	lng: -83.045468	    			    	   	 
		    	 },
		    	 {
		    	 	lat: 42.334608, 
		    	 	lng: -83.045335		    			    	   	 
		    	 },
		    	 {
		    	 	lat: 42.333329, 
		    	 	lng: -83.044270	    			    	   	 
		    	 }],
		    geodesic: true,
		    strokeColor: '#FF0000',
		    strokeOpacity: 1.0,
		    strokeWeight: 5
   
     });

		 lineOne.setMap(iNT_one); 

		var lineTwo = new google.maps.Polyline(
		{
		    path: [
		    	{
		    		lat: 42.327492,  
		    		lng: -83.044356
		    	},
		    	{
		    		lat: 42.361963, 
		    		lng: -83.065015
		    	},
		    	{
		    		lat: 42.362978,  
		    	 	lng: -83.062741
		    	 },
		    	 {
		    	 	lat: 42.353844, 
		    	 	lng: -83.056625	 
		    	 },
		    	 {
		    	 	lat: 42.354685, 
		    	 	lng: -83.053643     			    	   	 
		    	 },{
		    	 	lat: 42.349582, 
		    	 	lng: -83.052320   			    	   	 
		    	 },{
		    	 	lat: 42.347410, 
		    	 	lng: -83.057899	    			    	   	 
		    	 },
		    	 {
		    	 	lat: 42.327492, 
		    	 	lng: -83.044356   			    	   	 
		    	 }],
		    geodesic: true,
		    strokeColor: '#FF0000',
		    strokeOpacity: 1.0,
		    strokeWeight: 5
   
     });
		 lineTwo.setMap(iNT_two); 
var lineThree = new google.maps.Polyline(
		{
		    path: [
		    	{
		    		lat: 42.332201, 
		    		lng: -83.046842
		    	},
		    	{
		    		lat: 42.331213, 
		    		lng: -83.111288
		    	},
		    	{
		    		lat: 42.309829, 
		    	 	lng: -83.096098
		    	 },
		    	 {
		    	 	lat: 42.322469, 
		    	 	lng: -83.066974	 
		    	 },
		    	 {
		    	 	lat: 42.345196, 
		    	 	lng: -83.080625	    			    	   	 
		    	 },{
		    	 	lat: 42.333698, 
		    	 	lng: -83.052270    			    	   	 
		    	 },{
		    	 	lat: 42.334237,
		    	 	lng:  -83.048665		    			    	   	 
		    	 },
		    	 {
		    	 	lat: 42.332201, 
		    	 	lng: -83.046842    			    	   	 
		    	 }],
		    geodesic: true,
		    strokeColor: '#FF0000',
		    strokeOpacity: 1.0,
		    strokeWeight: 5
   
     });
		 lineThree.setMap(iNT_three); 
}

function easyRouteOne() {
	var eZ_one = new google.maps.Map(document.getElementById('EZmapOne'), {
		center: {
			lat: 42.336285, 
			lng: -83.050367
		},
		zoom: 15,
		 mapTypeId: google.maps.MapTypeId.TERRAIN
	});
	new google.maps.BicyclingLayer().setMap(eZ_one);

	var eZ_two = new google.maps.Map(document.getElementById('EZmapTwo'), {
		center: {
			lat: 42.333937, 
			lng: -83.030197
		},
		zoom: 15,
		 mapTypeId: google.maps.MapTypeId.TERRAIN
	});
	new google.maps.BicyclingLayer().setMap(eZ_two);

	var eZ_three = new google.maps.Map(document.getElementById('EZmapThree'), {
		center: {
			lat: 42.3404308730309, 
			lng: -83.05515061325411
		},
		zoom: 14,
		 mapTypeId: google.maps.MapTypeId.TERRAIN
	});
  	new google.maps.BicyclingLayer().setMap(eZ_three);	

	var lineOne = new google.maps.Polyline({
		    path: [
		    {
		    	lat: 42.332210, 
		     	lng: -83.046456
		     },
		     {
		     	lat: 42.334082, 
		     	 lng:  -83.044869
		     },
		     {
		     	lat: 42.334717, 
		     	lng: -83.045341
		     },
		     {
		     	lat: 42.338428, 
		     	lng: -83.042830 
		     },
		     {
		     	lat: 42.341759, 
		     	lng: -83.045534
		     },
		     {
		     	lat: 42.340776, 
		     	lng: -83.048023
		     }, {
		     	lat: 42.340030, 
		     	lng: -83.049654
		     }, {
		     	lat: 42.340760, 
		     	lng: -83.050212
		     }, {
		     	lat:42.337952, 
		     	lng: -83.056370 
		     }, {
		     	lat: 42.331703,  
		     	lng: -83.052679
		     },
		     {
		     	lat: 42.332210,
		     	lng: -83.046693
		     }],
		    geodesic: true,
		    strokeColor: '#FF0000',
		    strokeOpacity: 1.0,
		    strokeWeight: 5
     });		    
	lineOne.setMap(eZ_one);

	var lineTwo = new google.maps.Polyline({
		    path: [
		    {
		    	lat: 42.329595, 
		     	lng: -83.044946
		     },
		     {
		     	lat:42.338983, 
		     	lng: -83.023099
		     },
		     {
		     	lat:42.335256, 
		     	lng: -83.020632 
		     },
		     {
		     	lat:42.327753, 
		     	lng: -83.040244
		     },
		     {
		     	lat:42.330574, 
		     	lng: -83.042552
		     }
		     ],
		    geodesic: true,
		    strokeColor: '#FF0000',
		    strokeOpacity: 1.0,
		    strokeWeight: 5
     });		    
	lineTwo.setMap(eZ_two);

	var lineThree = new google.maps.Polyline({
		    path: [
		    {
		    	lat: 42.336499, 
		     	lng: -83.059376 
		     },
		     {
		     	lat:42.335071, 
		     	lng: -83.055471
		     },
		     {
		     	lat:42.338973,
		     	lng:  -83.046716
		     },
		     {
		     	lat:42.349409, 
		     	lng: -83.053840
		     },
		     {
		     	lat:42.341986, 
		     	lng: -83.072637
		     },
		     {
		     	lat: 42.336499,
		     	lng: -83.059376 
		     }
		     ],
		    geodesic: true,
		    strokeColor: '#FF0000',
		    strokeOpacity: 1.0,
		    strokeWeight: 5
     });		    
	lineThree.setMap(eZ_three);
}
		    return {
		    	easyMapOne: easyRouteOne,
		    	intMapOne: intermediateRouteOne,
		    	advMapOne: advancedRouteOne,
		    	rentBike: rentBike
		    }
});





		



