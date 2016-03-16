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
        templateUrl: '/Views/bikeMap.html',
        controller: 'mapController'
        });
    $routeProvider.when('/home', {
        templateUrl: '/Views/gettingStarted.html',
        controller: 'getStartCont'
        });
    $routeProvider.when('/beginner_Routes', {
        templateUrl: '/Views/easyRoute.html'
        });
    $routeProvider.when('/intermediate_Routes', {
        templateUrl: '/Views/intRoutes.html'
        });
    $routeProvider.when('/advanced_Routes', {
        templateUrl: '/Views/advRoutes.html'
        });
  }]);

var modal = document.getElementById('myModal');
var btn = document.getElementById('myBtn');
var span = document.getElementsByClassName('close')[0];

btn.onclick = function() {
    modal.style.display = 'block';
}
span.onclick = function() {
    modal.style.display = 'none';
}
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}


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
		templateUrl: "Views/difficultyTemplate.html",
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
app.controller('getStartCont', function($scope, $location) {
	$scope.changeView = function(view){
		$location.path(view);
	}
});
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

		var goldStar = {
	    path: 'M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z',
	    fillColor: 'yellow',
	    fillOpacity: 0.6,
	    scale: .07,
	    strokeColor: 'gold',
	    strokeWeight: 2
	    };

	    var detroitWH = new CreateMark(42.330543, -83.032071, 'Detroit Wheel House');
	    var zagSter1 = new CreateMark(42.330640, -83.046645, 'Bike Rental Station at 611 Woodward');
	    var zagSter2 = new CreateMark(42.331165, -83.048808, 'Bike Rental Station at 730 Shelby ');
	    var zagSter3 = new CreateMark(42.330984, -83.043208, 'Bike Rental Station at 160 E Congress');
	    var zagSter4 = new CreateMark(42.328996, -83.045499, 'Bike Rental Station at 1 Woodward');
	    var zagSter5 = new CreateMark(42.334633, -83.041486, 'Bike Rental Station at Greektown');
	    var zagSter6 = new CreateMark(42.335645, -83.049324, 'Bike Rental at 1528 Woodward');
	    var zagSter7 = new CreateMark(42.336298, -83.049400, 'Bike Rental at 1555 Boradway');

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





		




app.controller('mapController', ['mapData', '$scope', function(mapData, $scope) {
	

	return mapData();


}]);
app.controller('bikeRoutes', ['$http', 'weatherService', '$scope', '$location', function($http, weatherService, $scope, $location){
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

app.directive('weatherDays', function(){
	return {
		restrict: 'E',
		replace: false,
		templateUrl: "Views/weatherview.html"
	};
});


app.factory('weatherService', ['$http', function($http){
		return $http({
			method: 'GET',
			url: 'http://api.openweathermap.org/data/2.5/weather?lat=42.331429&lon=-83.045753&units=imperial&APPID=c4e648130458b76564cd4aa311c5a3d3'
		})

	}]);