app.controller('easyController', ['mapData', '$scope', function(mapData, $scope) {

	$scope.theEasyRoutes = [easyRouteOne, easyRouteTwo, easyRouteThree];


function easyRouteOne() {
		var eZ_one = new google.maps.Map(document.getElementById('EZmapOne'), {
		center: {
			lat: 42.336285, 
			lng: -83.050367
		},
		zoom: 13,
		mapTypeId: google.maps.MapTypeId.TERRAIN
		
	});
	directionsDisplay = new google.maps.DirectionsRenderer();
	directionsDisplay.setMap(eZ_one);
	pathOne = [{
    			location: {
    				lat: 42.334082, 
		     	 lng:  -83.044869
    			},
    			stopover: true
    		},
    		{
			
		    	 location: {
		    		lat: 42.334717, 
		     	    lng: -83.045341
		    	 },
		    	 stopover: true
		    },
		    {
		    	 location: {
		    	 	lat: 42.338428, 
		     	    lng: -83.042830		 
		    	 },
		    	 stopover: true
		    },
		    {
		    	 location:{
		    	 	lat: 42.340776, 
		     	    lng: -83.048023 
		    	 },
		    	 stopover: true
		    },
		    {	 
		    	 location:{
		    	 	lat: 42.340030, 
		     	    lng: -83.049654    			    	   	 
		    	 },
		    	 stopover: true
		    },
		    {
		    	 location:{
		    	 	lat: 42.340760, 
		     	    lng: -83.050212	    			    	   	 
		    	 },
		    	 stopover: true
		    },
		    {
		    	 location:{
		    	 	lat:42.337952, 
		     	    lng: -83.056370  	    			    	   	 
		    	 },
		    	 stopover: true
		    }],
			
		 (function route() {
			var start = new google.maps.LatLng(42.332210, -83.046456);
			var end = new google.maps.LatLng(42.332210, -83.046456);
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

	new google.maps.BicyclingLayer().setMap(eZ_one);
}


function easyRouteTwo() {  
	var eZ_two = new google.maps.Map(document.getElementById('EZmapTwo'), {
		center: {
			lat: 42.349115, 
			lng: -83.038386
		},
		zoom: 11,
		mapTypeId: google.maps.MapTypeId.TERRAIN
	});

	directionsDisplay = new google.maps.DirectionsRenderer();
	directionsDisplay.setMap(eZ_two);
	pathTwo = [{
    			location: {
    				lat:42.338983, 
		     	    lng: -83.023099
    			},
    			stopover: true
    		},
    		{	 
		    	 location:{
		    	 	lat:42.335256, 
		     	    lng: -83.020632    			    	   	 
		    	 },
		    	 stopover: true
		    },
		    {
		    	 location:{
		    	 	lat:42.327753, 
		     	    lng: -83.040244 	    			    	   	 
		    	 },
		    	 stopover: true
		    },
		    {
		    	 location:{
		    	 	lat:42.330574, 
		     	    lng: -83.042552	    			    	   	 
		    	 },
		    	 stopover: true
		    }],
		   
		   
		 (function route() {
			var start = new google.maps.LatLng(42.329595, -83.044946);
			var end = new google.maps.LatLng(42.329595, -83.044946);
			var request = {
				origin: start,
				destination: end,
				travelMode: google.maps.TravelMode.BICYCLING,
				waypoints: pathTwo
			};
			directionsService.route(request, function(result, status) {
				if (status === google.maps.DirectionsStatus.OK) {
					directionsDisplay.setDirections(result);
				} else {
					alert('couldnt do it' + status);
				}
			})
	})();
	new google.maps.BicyclingLayer().setMap(eZ_two);
    }

    function easyRouteThree() {
	 var eZ_three = new google.maps.Map(document.getElementById('EZmapThree'), {
		center: {
			lat: 42.383040, 
			lng: -82.953605
		},
		zoom: 11,
		mapTypeId: google.maps.MapTypeId.TERRAIN
	});

	directionsDisplay = new google.maps.DirectionsRenderer();
	directionsDisplay.setMap(eZ_three);
	pathThree = [{
    			location: {
    			    lat:42.335071, 
		     	    lng: -83.055471
    			},
    			stopover: true
    		},
    		{
		    	 location:{
		    	 	lat:42.338973,
		     	    lng:  -83.046716	 
		    	 },
		    	 stopover: true
		    },
		    {	 
		    	 location:{
		    	 	lat:42.349409, 
		     	    lng: -83.053840    			    	   	 
		    	 },
		    	 stopover: true
		    },
		    {
		    	 location:{
		    	 	lat:42.341986, 
		     	    lng: -83.072637 	    			    	   	 
		    	 },
		    	 stopover: true
		    },
		    {
		    	 location:{
		    	 	lat: 42.336499,
		     	    lng: -83.059376 	    			    	   	 
		    	 },
		    	 stopover: true
		    }],
		   
		 (function route() {
			var start = new google.maps.LatLng(42.336499, -83.059376);
			var end = new google.maps.LatLng(42.336499, -83.059376 );
			var request = {
				origin: start,
				destination: end,
				travelMode: google.maps.TravelMode.BICYCLING,
				waypoints: pathThree
			};
			directionsService.route(request, function(result, status) {
				if (status === google.maps.DirectionsStatus.OK) {
					directionsDisplay.setDirections(result);
				} else {
					alert('couldnt do it' + status);
				}
			})
	})();
	new google.maps.BicyclingLayer().setMap(eZ_three);
             }
	

	// return mapData.easyMapOne();


}]);