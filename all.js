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
  }]);



app.controller('intermediateController', ['mapData', '$scope', function(mapData, $scope) {
	

	return mapData.intMapOne();


}]);
app.controller('advancedController', ['mapData', '$scope', function(mapData, $scope) {
	

	return mapData.advMapOne();


}]);
app.controller('easyController', ['mapData', '$scope', function(mapData, $scope) {
	

	return mapData.easyMapOne();


}]);
app.controller('getStartCont', function($scope, $location) {
	$scope.changeView = function(view){
		$location.path(view);
	}
});
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
				list: list
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
app.directive('googleMap', function() {
	return {
		restrict: 'E',
		replace: 'false',
		controller: function(mapData, $scope) {
			return mapData;
		},
		transclude: true,
		templateUrl: 'Views/templates/mapTemplate.html'
	}
})
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

	    function rentBike() {
	    	var bikeMap = new google.maps.Map(document.getElementById('rentalMap'), {
			center: {
			lat: 42.330984, 
			lng: -83.043208
			},
			zoom: 15,
			mapTypeId: google.maps.MapTypeId.TERRIAN
	});

		bikeLayer.setMap(bikeMap);

				//Class for creating markers
		var CreateMark = function(latit, lngit, title) {
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
	};

		
	    var detroitWH = new CreateMark(42.330543, -83.032071, 'Detroit Wheel House'),
	     zagSter1 = new CreateMark(42.330640, -83.046645, 'Zagster Rental Station at 611 Woodward'),
	     zagSter2 = new CreateMark(42.331165, -83.048808, 'Zagster Rental Station at 730 Shelby '),
	     zagSter3 = new CreateMark(42.330984, -83.043208, 'Zagster Rental Station at 160 E Congress'),
	     zagSter4 = new CreateMark(42.328996, -83.045499, 'Zagster Rental Station at 1 Woodward'),
	     zagSter5 = new CreateMark(42.334633, -83.041486, 'Zagster Rental Station at Greektown'),
	     zagSter6 = new CreateMark(42.335645, -83.049324, 'Zagster Rental at 1528 Woodward'),
	     zagSter7 = new CreateMark(42.336298, -83.049400, 'Zagster Rental at 1555 Broadway');



	    }
function advancedRouteOne() {
	var aDV_one = new google.maps.Map(document.getElementById('ADVmapOne'), {
		center: {
			lat: 42.3404308730309, 
			lng: -83.05515061325411
		},
		zoom: 11,
		mapTypeId: google.maps.MapTypeId.TERRIAN
	});
	bikeLayer.setMap(aDV_one);

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
		    
		    lineThree.setMap(aDV_one); 


}


function intermediateRouteOne() {
	var iNT_one = new google.maps.Map(document.getElementById('INTmapOne'), {
		center: {
			lat: 42.3404308730309, 
			lng: -83.05515061325411
		},
		zoom: 11,
		mapTypeId: google.maps.MapTypeId.TERRIAN
	});
	bikeLayer.setMap(iNT_one);

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
		 lineTwo.setMap(iNT_one); 


}

function easyRouteOne() {
	var eZ_one = new google.maps.Map(document.getElementById('EZmapOne'), {
		center: {
			lat: 42.3404308730309, 
			lng: -83.05515061325411
		},
		zoom: 12,
		 mapTypeId: google.maps.MapTypeId.TERRAIN
	});
  		bikeLayer.setMap(eZ_one);	
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
		    line.setMap(eZ_one);
		}
		    return {
		    	easyMapOne: easyRouteOne,
		    	intMapOne: intermediateRouteOne,
		    	advMapOne: advancedRouteOne,
		    	rentBike: rentBike
		    }
  });





		




app.factory('weatherService', ['$http', function($http){
		return $http({
			method: 'GET',
			url: 'http://api.openweathermap.org/data/2.5/weather?lat=42.331429&lon=-83.045753&units=imperial&APPID=c4e648130458b76564cd4aa311c5a3d3'
		})

	}]);