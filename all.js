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



app.controller('advancedController', ['mapData', '$scope', function(mapData, $scope) {
	


	return {
		mapOne: mapData.advMapOne(),
		mapTwo: mapData.advMapTwo(),
		mapThree: mapData.advMapThree()()
		}
}]);



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
app.controller('getStartCont', function($scope, $location) {
	$scope.changeView = function(view){
		$location.path(view);
	}
});
app.controller('intermediateController', ['mapData', '$scope', function(mapData, $scope) {
	

	return mapData.intMapOne();


}]);
app.controller('routeGenController', ['routingData', '$scope', function(routingData, $scope) {

	var directionsDisplay;
	var directionsService = new google.maps.DirectionsService();
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
		directionsService.route(request, function(result, status) {
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
			map: '='
		},
		template: '<button>{{click}}</button>',
		link: function(scope, element, attrs) {
			element.bind('click', function() {
				console.log('button works');
				var tests = document.getElementsByClassName('testing');
				console.log(mapData.easyMap);
				return mapData.easyMap[scope.map]();
			})
		}
	}
}]);

// app.directive('advClass', function() {
// 	return {
// 		template: "<button id='btnadv1'>Advanced Route One</button><button id='btnadv2'>Advanced Route Two</button><button id='btnadv3'>Advanced Route Three</button>",
// 		link: function(){
// 			var map1 = document.getElementById('ADVmapOne');
// 			var map2 = document.getElementById('ADVmapTwo');
// 			var map3 = document.getElementById('ADVmapThree');						
// 			var btn1 = document.getElementById('btnadv1');
// 			var btn2 = document.getElementById('btnadv2');
// 			var btn3 = document.getElementById('btnadv3');						
// 			btnadv1.addEventListener("click", btn1Show);
// 			btnadv2.addEventListener("click", btn2Show);
// 			btnadv3.addEventListener("click", btn3Show);
// 			map2.style.display="none";
// 			map3.style.display="none";									
// 			function btn1Show(){
// 				map2.style.display="none";	
// 				map3.style.display="none";
// 				map1.style.display="";				
// 			}	
// 			function btn2Show(){
// 				map1.style.display="none";	
// 				map3.style.display="none";	
// 				map2.style.display="";			
// 			}	
// 			function btn3Show(){
// 				map2.style.display="none";	
// 				map1.style.display="none";		
// 				map3.style.display="";		
// 			}				
// 		}

// 	}
// })
// app.directive('toggleClass', function() {
// 	return {
// 		template: "<button id='btn1'>Easy Route One</button><button id='btn2'>Easy Route Two</button><button id='btn3'>Easy Route 3</button>",
// 		link: function(){
// 			var map1 = document.getElementById('EZmapOne');
// 			var map2 = document.getElementById('EZmapTwo');
// 			var map3 = document.getElementById('EZmapThree');						
// 			var btn1 = document.getElementById('btn1');
// 			var btn2 = document.getElementById('btn2');
// 			var btn3 = document.getElementById('btn3');						
// 			btn1.addEventListener("click", btn1Show);
// 			btn2.addEventListener("click", btn2Show);
// 			btn3.addEventListener("click", btn3Show);

// 			map2.style.display="none";
// 			map3.style.display="none";						
// 			function btn1Show(){
// 				map2.style.display="none";	
// 				map3.style.display="none";
// 				map1.style.display="";				
// 			}	
// 			function btn2Show(){
// 				map1.style.display="none";	
// 				map3.style.display="none";	
// 				map2.style.display="";			
// 			}	
// 			function btn3Show(){
// 				map2.style.display="none";	
// 				map1.style.display="none";		
// 				map3.style.display="";		
// 			}
// 	}
// }
// })
// app.directive('intClass', function() {
// 	return {
// 		template: "<button id='btnint1'>Intermediate Route One</button><button id='btnint2'>Intermediate Route Two</button><button id='btnint3'>Intermediate Route 3</button>",
// 		link: function(element){
// 			var map1 = document.getElementById('INTmapOne');
// 			var map2 = document.getElementById('INTmapTwo');
// 			var map3 = document.getElementById('INTmapThree');						
// 			var btn1 = document.getElementById('btnint1');
// 			var btn2 = document.getElementById('btnint2');
// 			var btn3 = document.getElementById('btnint3');						
// 			btnint1.addEventListener("click", btn1Show);
// 			btnint2.addEventListener("click", btn2Show);
// 			btnint3.addEventListener("click", btn3Show);
// 			map2.style.display="none";
// 			map3.style.display="none";									
// 			function btn1Show(){
// 				map2.style.display="none";	
// 				map3.style.display="none";
// 				map1.style.display="";				
// 			}	
// 			function btn2Show(){
// 				map1.style.display="none";	
// 				map3.style.display="none";	
// 				map2.style.display="";			
// 			}	
// 			function btn3Show(){
// 				map2.style.display="none";	
// 				map1.style.display="none";		
// 				map3.style.display="";		
// 			}				
// 		}

// 	}
// })
app.directive('weatherDays', function(){
	return {
		restrict: 'E',
		replace: false,
		templateUrl: "Views/templates/weatherTemplate.html"
	};
});
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
			directionsDisplay.setPanel(document.getElementById('directionAdv'));
			directionsService.route(request, function(result, status) {
				if (status === google.maps.DirectionsStatus.OK) {
					
					directionsDisplay.setDirections(result);
				} else {
					alert('couldnt do it' + status);
				}
			})
	})();

	new google.maps.BicyclingLayer().setMap(aDV_one);
}

    
function advancedRouteTwo() {  
	var aDV_two = new google.maps.Map(document.getElementById('ADVmapTwo'), {
		center: {
			lat: 42.349115, 
			lng: -83.038386
		},
		zoom: 11,
		mapTypeId: google.maps.MapTypeId.TERRAIN
	});

	directionsDisplay = new google.maps.DirectionsRenderer();
	directionsDisplay.setMap(aDV_two);
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
			};
			directionsService.route(request, function(result, status) {
				if (status === google.maps.DirectionsStatus.OK) {
					directionsDisplay.setDirections(result);
				} else {
					alert('couldnt do it' + status);
				}
			})
	})();
	new google.maps.BicyclingLayer().setMap(aDV_two);
    }

    function advancedRouteThree() {
	 var aDV_three = new google.maps.Map(document.getElementById('ADVmapThree'), {
		center: {
			lat: 42.383040, 
			lng: -82.953605
		},
		zoom: 11,
		mapTypeId: google.maps.MapTypeId.TERRAIN
	});

	directionsDisplay = new google.maps.DirectionsRenderer();
	directionsDisplay.setMap(aDV_three);
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
	new google.maps.BicyclingLayer().setMap(aDV_three);
             }
  




function intermediateRouteOne() {
		var iNT_one = new google.maps.Map(document.getElementById('INTmapOne'), {
		center: {
			lat: 42.349115, 
			lng:  -83.038386
		},
		zoom: 13,
		mapTypeId: google.maps.MapTypeId.TERRAIN
		
	});
	directionsDisplay = new google.maps.DirectionsRenderer();
	directionsDisplay.setMap(iNT_one);
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
			};
			directionsService.route(request, function(result, status) {
				if (status === google.maps.DirectionsStatus.OK) {
					directionsDisplay.setDirections(result);
				} else {
					alert('couldnt do it' + status);
				}
			})
	})();

	new google.maps.BicyclingLayer().setMap(iNT_one);
}


	function intermediateRouteTwo() {  
	var iNT_two = new google.maps.Map(document.getElementById('INTmapTwo'), {
		center: {
			lat: 42.349115, 
			lng: -83.038386
		},
		zoom: 11,
		mapTypeId: google.maps.MapTypeId.TERRAIN
	});

	directionsDisplay = new google.maps.DirectionsRenderer();
	directionsDisplay.setMap(iNT_two);
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
			};
			directionsService.route(request, function(result, status) {
				if (status === google.maps.DirectionsStatus.OK) {
					directionsDisplay.setDirections(result);
				} else {
					alert('couldnt do it' + status);
				}
			})
	})();
	new google.maps.BicyclingLayer().setMap(iNT_two);
    }

    function intermediateRouteThree() {
	 var iNT_three = new google.maps.Map(document.getElementById('INTmapThree'), {
		center: {
			lat: 42.383040, 
			lng: -82.953605
		},
		zoom: 11,
		mapTypeId: google.maps.MapTypeId.TERRAIN
	});

	directionsDisplay = new google.maps.DirectionsRenderer();
	directionsDisplay.setMap(aDV_three);
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
	new google.maps.BicyclingLayer().setMap(iNT_three);
             }

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
  
		    return {
		    	easyMap: [easyRouteOne, easyRouteTwo, easyRouteThree],
		    	intMapOne: intermediateRouteOne,
		    	intMapTwo: intermediateRouteTwo,
		    	intMapThree: intermediateRouteThree,
		    	advMapOne: advancedRouteOne,
		    	advMapTwo: advancedRouteTwo,
		    	advMapThree: advancedRouteThree,
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
		directionsDisplay = new google.maps.DirectionsRenderer({
			draggable: true
		});
		directionsDisplay.setPanel(document.getElementById("directions"))
		var properties = {
			center: Center,
			zoom: 15,
			mapTypeId: google.maps.MapTypeId.TERRAIN
		};

		bikeLayer.setMap(routeMap);

		routeMap = new google.maps.Map(document.getElementById('routeHere'), properties);
		directionsDisplay.setMap(routeMap);
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
		return directionsDisplay;
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