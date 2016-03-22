var app = angular.module('bikeApp', ['ngRoute']);
	

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/Views/gettingStarted.html',
        controller: 'getStartCont'
        });
    $routeProvider.when('/bikeRoutes', {
        templateUrl: '/Views/bikeRoutes.html',
        controller:'bikeRoutes'
        });
    $routeProvider.when('/bikeMap', {
        templateUrl: '/Views/bikeMap.html'
        });
    $routeProvider.when('/home', {
        templateUrl: '/Views/gettingStarted.html',
        controller: 'getStartCont'
        });
    $routeProvider.when('/beginner_Routes', {
        templateUrl: '/Views/easyRoute.html',
        controller: 'easyController'
        });
    $routeProvider.when('/intermediate_Routes', {
        templateUrl: '/Views/intRoutes.html',
        controller: 'intermediateController'
        });
    $routeProvider.when('/advanced_Routes', {
        templateUrl: '/Views/advRoutes.html',
        controller: 'advancedController'
        });
    $routeProvider.when('/create_Your_Own', {
        templateUrl: '/Views/createRouteView.html',
        controller: 'routeGenController'
        });
  }]);



// app.directive('diffBtn', function() {
// 	return {
// 			restrict: 'E',
// 			templateURL: "Views/difficultyTemplate.html",
// 			replace: false
// 		}
// 	});


app.directive('diffBtn', function(){
	return {
		restrict: 'E',
		replace: false,
		templateUrl: "Views/templates/difficultyTemplate.html",
		scope: {
			bgcolor: '=',
			route: '='
		},
		controller: function($scope, $location) {
			$scope.changeView = function() {
				$location.path($scope.route);
			}
		}

	};
});
app.directive('mapGen', ['mapData', function(mapData){
	return {
		restrict: 'E',
		replace: false,
		scope: {
			click: '=',
			map: '=',
			difficulty: '='
		},
		template: '<button>{{click}}</button>',
		link: function(scope, element, attrs) {
			element.bind('click', function() {
				if (scope.difficulty === 'easy') {
					return mapData.easyMap[scope.map]();
				} else if (scope.difficulty ==='int') {
					return mapData.intMap[scope.map]();
				} else {
					return mapData.advMap[scope.map]();
				}
				
			})
		}
	}
}]);

app.directive('weatherDays', function(){
	return {
		restrict: 'E',
		replace: false,
		templateUrl: "Views/templates/weatherTemplate.html"
	};
});
app.controller('intermediateController', ['mapData', '$scope', function(mapData, $scope) {
	

	return mapData.mainInt();


}]);
app.controller('advancedController', ['mapData', '$scope', function(mapData, $scope) {
	


	return mapData.mainAdv();
}]);



app.controller('easyController', ['mapData', '$scope', function(mapData, $scope) {

	

	 return mapData.mainEasy();


}]);
app.controller('getStartCont', function($scope, $location) {
	$scope.changeView = function(view){
		$location.path(view);
	}
});
app.controller('routeGenController', ['routingData', '$scope', function(routingData, $scope) {

	var directionsDisplayOne;
	var directionsServiceOne = new google.maps.DirectionsService();
	var instructions = document.getElementById('directions');

	function removeMarkers() {
		routingData.points.forEach(function(element) {
			element.setMap(null);
		})
	}

		$scope.Route = function() {
		console.log('routing')
		var start = new google.maps.LatLng(routingData.points[0].position.lat(), routingData.points[0].position.lng());
		var end = new google.maps.LatLng(routingData.points[0].position.lat(), routingData.points[0].position.lng());
		removeMarkers();
		var request = {
			origin: start,
			destination: end,
			travelMode: google.maps.TravelMode.BICYCLING,
			waypoints: routingData.waypoints,
			unitSystem: google.maps.UnitSystem.IMPERIAL
		};
		directionsServiceOne.route(request, function(result, status) {
			instructions.innerHTML = '';
			routingData.genMap().setPanel(instructions);
			if (status === google.maps.DirectionsStatus.OK) {
				routingData.genMap().setDirections(result);
				
			} else {
				alert('couldnt do it' + status);
			}

		})

	}
	return routingData.genMap();

}]);
app.controller('bikeRoutes', ['$http', 'weatherService', '$scope', '$location', 'mapData', function($http, weatherService, $scope, $location, mapData){
	weatherService.then(function success(response){
		$scope.printWeather = function() {
			var list = response.data,
			 sunset = list.sys.sunset,
			 sunrise = list.sys.sunrise,
			 sunsetdate = new Date(sunset * 1000).toLocaleTimeString(),		
			 sunrisedate = new Date(sunrise * 1000).toLocaleTimeString(),					
			 temps= list.main.temp.toFixed(1),
			 weather= list.weather[0].description,
			 icon = list.weather[0].icon;

			 	var modal = document.getElementById('rentalModal');
				var btn = document.getElementById('toggleMe');
				var span = document.getElementById('toggleOff');

				btn.onclick = function() {
				    modal.style.display = 'block';
				    return mapData.rentBike();
				}
				span.onclick = function() {
				    modal.style.display = 'none';
				}
				window.onclick = function(event) {
				    if (event.target === modal) {
				        modal.style.display = 'none';
				    }
				}

			return {
				temp: temps,
				weather: weather,
				icon: icon,
				sunrise: sunrisedate,
				sunset: sunsetdate,
				list: list,
			}
		};	
	});
}]);



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
var advMapCanvas;

function advMap() {
	directionsDisplay = new google.maps.DirectionsRenderer({
		draggable: true
	});
	advMapCanvas = new google.maps.Map(document.getElementById('advmaps'), {
		center: {
			lat: 42.336285,
			lng:-83.050367
		},
		zoom: 12,
		mapTypeId: google.maps.MapTypeId.TERRAIN
	});
	new google.maps.BicyclingLayer().setMap(advMapCanvas);
	directionsDisplay.setPanel(document.getElementById('directionAdv'));
	directionsDisplay.setMap(advMapCanvas);
	return directionsDisplay;
}
function advancedRouteOne() {	
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
				waypoints: pathOne,
			unitSystem: google.maps.UnitSystem.IMPERIAL		};
			directionsDisplay.setPanel(document.getElementById('directionAdv'));
			directionsService.route(request, function(result, status) {
				if (status === google.maps.DirectionsStatus.OK) {
					directionsDisplay.setDirections(result);
				} else {
					alert('couldnt do it' + status);
				}
			})
	})();

}

    
function advancedRouteTwo() {  
	pathTwo= [{	 
		    	 location:{
		    	 	lat: 42.475901, 
		    	 	lng: -83.149433     			    	   	 
		    	 },
		    	 stopover: true
		    }];
		   
		   
		 (function route() {
			var start = new google.maps.LatLng(42.328666, -83.044576);
			var end = new google.maps.LatLng(42.328666, -83.044576);
			var request = {
				origin: start,
				destination: end,
				travelMode: google.maps.TravelMode.BICYCLING,
				waypoints: pathTwo
	,
	unitSystem: google.maps.UnitSystem.IMPERIAL		};
			directionsService.route(request, function(result, status) {
				if (status === google.maps.DirectionsStatus.OK) {
					directionsDisplay.setDirections(result);
				} else {
					alert('couldnt do it' + status);
				}
			})
	})();
    }

    function advancedRouteThree() {
	pathThree = [{
    			location: {
    				lat: 42.334768, 
		    		lng: -82.995750
    			},
    			stopover: true
    		},
    		{
			
		    	 location: {
		    		lat:42.391148,
		    	 	lng:  -82.893182
		    	 },
		    	 stopover: true
		    },
		    {
		    	 location:{
		    	 	lat: 42.407058, 
		    	 	lng: -82.886745   			    	   	 
		    	 },
		    	 stopover: true
		   
		    	}];
		   
		 (function route() {
			var start = new google.maps.LatLng(42.334768, -82.995750);
			var end = new google.maps.LatLng(42.334768, -82.995750 );
			var request = {
				origin: start,
				destination: end,
				travelMode: google.maps.TravelMode.BICYCLING,
				waypoints: pathThree,
				unitSystem: google.maps.UnitSystem.IMPERIAL
			};
			directionsService.route(request, function(result, status) {
				if (status === google.maps.DirectionsStatus.OK) {
					directionsDisplay.setDirections(result);
				} else {
					alert('couldnt do it' + status);
				}
			})
	})(); 
}
  


var intMapCanvas;

function intMap() {
	directionsDisplay = new google.maps.DirectionsRenderer({
		draggable: true
	});
	intMapCanvas = new google.maps.Map(document.getElementById('intmaps'), {
		center: {
			lat: 42.336285,
			lng:-83.050367
		},
		zoom: 12,
		mapTypeId: google.maps.MapTypeId.TERRAIN
	});
	new google.maps.BicyclingLayer().setMap(intMapCanvas);
	directionsDisplay.setPanel(document.getElementById('directionInt'));
	directionsDisplay.setMap(intMapCanvas);
	return directionsDisplay;
}

function intermediateRouteOne() {

	pathOne = [{
    			location: {
    				lat: 42.350501, 
		    		lng: -83.004196
    			},
    			stopover: true
    		},
    		{
			
		    	 location: {
		    		lat: 42.355666,
		    	 	lng: -83.007591
		    	 },
		    	 stopover: true
		    },
		    {	 
		    	 location:{
		    	 	lat: 42.334904, 
		    	 	lng: -83.045468	    			    	   	 
		    	 },
		    	 stopover: true
		    },
		    {
		    	 location:{
		    	 	lat: 42.334608, 
		    	 	lng: -83.045335	    			    	   	 
		    	 },
		    	 stopover: true
		    },
		    {
		    	 location:{
		    	 	lat: 42.333329, 
		    	 	lng: -83.044270	 	    			    	   	 
		    	 },
		    	 stopover: true
		    }],
			
		 (function route() {
			var start = new google.maps.LatLng(42.333181, -83.044203);
			var end = new google.maps.LatLng(42.333181, -83.044203);
			var request = {
				origin: start,
				destination: end,
				travelMode: google.maps.TravelMode.BICYCLING,
				waypoints: pathOne
	,
	unitSystem: google.maps.UnitSystem.IMPERIAL		};
			directionsService.route(request, function(result, status) {
				if (status === google.maps.DirectionsStatus.OK) {
					directionsDisplay.setDirections(result);
				} else {
					alert('couldnt do it' + status);
				}
			})
	})();


}


	function intermediateRouteTwo() {  
	pathTwo = [{
    			location: {
    				lat: 42.361963, 
		    		lng: -83.065015
    			},
    			stopover: true
    		},
    		{
			
		    	 location: {
		    		lat: 42.362978,  
		    	 	lng: -83.062741
		    	 },
		    	 stopover: true
		    },
		    {
		    	 location: {
		    	 	lat: 42.353844, 
		    	 	lng: -83.056625		 
		    	 },
		    	 stopover: true
		    },
		    {
		    	 location:{
		    	 	lat: 42.354685, 
		    	 	lng: -83.053643 		 
		    	 },
		    	 stopover: true
		    },
		    {	 
		    	 location:{
		    	 	lat: 42.349582, 
		    	 	lng: -83.052320	    			    	   	 
		    	 },
		    	 stopover: true
		    },
		    {
		    	 location:{
		    	 	lat: 42.347410, 
		    	 	lng: -83.057899	 	    			    	   	 
		    	 },
		    	 stopover: true
		    },
		    {
		    	 location:{
		    	 	lat: 42.327492, 
		    	 	lng: -83.044356 	    			    	   	 
		    	 },
		    	 stopover: true
		    }],
		   
		   
		 (function route() {
			var start = new google.maps.LatLng(42.327492, -83.044356);
			var end = new google.maps.LatLng(42.327492, -83.044356);
			var request = {
				origin: start,
				destination: end,
				travelMode: google.maps.TravelMode.BICYCLING,
				waypoints: pathTwo
	,
	unitSystem: google.maps.UnitSystem.IMPERIAL		};
			directionsService.route(request, function(result, status) {
				if (status === google.maps.DirectionsStatus.OK) {
					directionsDisplay.setDirections(result);
				} else {
					alert('couldnt do it' + status);
				}
			})
	})();
    }

    function intermediateRouteThree() {
	pathThree = [{
    			location: {
    			    lat: 42.331213, 
		    		lng: -83.111288
    			},
    			stopover: true
    		},
    		{
			
		    	 location: {
		    		lat: 42.309829, 
		    	 	lng: -83.096098
		    	 },
		    	 stopover: true
		    },
		    {
		    	 location: {
		    	 	lat: 42.322469, 
		    	 	lng: -83.066974		 
		    	 },
		    	 stopover: true
		    },
		    {
		    	 location:{
		    	 	lat: 42.345196, 
		    	 	lng: -83.080625		 
		    	 },
		    	 stopover: true
		    },
		    {	 
		    	 location:{
		    	 	lat: 42.333698, 
		    	 	lng: -83.052270	    			    	   	 
		    	 },
		    	 stopover: true
		    },
		    {
		    	 location:{
		    	 	lat: 42.334237,
		    	 	lng:  -83.048665 	    			    	   	 
		    	 },
		    	 stopover: true
		    },
		    {
		    	 location:{
		    	 	lat: 42.332201, 
		    	 	lng: -83.046842 	    			    	   	 
		    	 },
		    	 stopover: true
		    }],
		   
		 (function route() {
			var start = new google.maps.LatLng(42.334768, -82.995750);
			var end = new google.maps.LatLng(42.334768, -82.995750 );
			var request = {
				origin: start,
				destination: end,
				travelMode: google.maps.TravelMode.BICYCLING,
				waypoints: pathThree,
				unitSystem: google.maps.UnitSystem.IMPERIAL
			};
			directionsService.route(request, function(result, status) {
				if (status === google.maps.DirectionsStatus.OK) {
					directionsDisplay.setDirections(result);
				} else {
					alert('couldnt do it' + status);
				}
			})
	})();
}

var easyMapCanvas;

function easyMap() {
	directionsDisplay = new google.maps.DirectionsRenderer({
		draggable: true
	});

	easyMapCanvas = new google.maps.Map(document.getElementById('easymaps'), {
		center: {
			lat: 42.336285,
			lng:-83.050367
		},
		zoom: 12,
		mapTypeId: google.maps.MapTypeId.TERRAIN
	});
	new google.maps.BicyclingLayer().setMap(easyMapCanvas);
	directionsDisplay.setPanel(document.getElementById('directionEasy'));
	directionsDisplay.setMap(easyMapCanvas);
	return directionsDisplay;
}
function easyRouteOne() {
	
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
	,
	unitSystem: google.maps.UnitSystem.IMPERIAL		};
			directionsService.route(request, function(result, status) {
				if (status === google.maps.DirectionsStatus.OK) {
					directionsDisplay.setDirections(result);
				} else {
					alert('couldnt do it' + status);
				}
			})
	})();
}

    
function easyRouteTwo() {  
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
				waypoints: pathTwo,
				unitSystem: google.maps.UnitSystem.IMPERIAL		
			};
			directionsService.route(request, function(result, status) {
				if (status === google.maps.DirectionsStatus.OK) {
					directionsDisplay.setDirections(result);
				} else {
					alert('couldnt do it' + status);
				}
			})
	})();
    }

    function easyRouteThree() {
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
				waypoints: pathThree,
				unitSystem: google.maps.UnitSystem.IMPERIAL
			}
			directionsService.route(request, function(result, status) {
				if (status === google.maps.DirectionsStatus.OK) {
					directionsDisplay.setDirections(result);
				} else {
					alert('couldnt do it' + status);
				}
			})
	})();
}
		    return {
		    	mainEasy: easyMap,
		    	mainInt: intMap,
		    	mainAdv: advMap,
		    	easyMap: [easyRouteOne, easyRouteTwo, easyRouteThree],
		    	intMap: [intermediateRouteOne, intermediateRouteTwo, intermediateRouteThree],
		    	advMap: [advancedRouteOne, advancedRouteTwo, advancedRouteThree],
		    	rentBike: rentBike
		    }
});





		




app.factory('routingData', function() {

		var Center = new google.maps.LatLng(42.34043, -83.055155);
		var routeMap;
		var points = [];
		var waypoints = [];
		var bikeLayer = new google.maps.BicyclingLayer();

	function genMap() {
		directionsDisplayOne = new google.maps.DirectionsRenderer({
			draggable: true
		});
		directionsDisplayOne.setPanel(document.getElementById("directions"))
		var properties = {
			center: Center,
			zoom: 15,
			mapTypeId: google.maps.MapTypeId.TERRAIN
		};

		bikeLayer.setMap(routeMap);

		routeMap = new google.maps.Map(document.getElementById('routeHere'), properties);
		directionsDisplayOne.setMap(routeMap);
		routeMap.setOptions({
			disableDoubleClickZoom: true 
		});
		routeMap.addListener("dblclick", function (e) {

    	var point = new google.maps.Marker({
    		position: e.latLng,
    		map: routeMap,
    		title: 'Pointy'
    	});
    	if (points.length === 0) {
    		points.push(point);
    	} else {
    		waypoints.push({
    			location: {
    				lat: point.position.lat(),
    				lng: point.position.lng()
    			},
    			stopover: true
    		});
    	}
    	
    });
		return directionsDisplayOne;
}


	
return {
	genMap: genMap,
	points: points,
	waypoints: waypoints
}
});



		




app.factory('weatherService', ['$http', function($http){
		return $http({
			method: 'GET',
			url: 'http://api.openweathermap.org/data/2.5/weather?zip=48216,us&units=imperial&APPID=c4e648130458b76564cd4aa311c5a3d3'
		})

	}]);