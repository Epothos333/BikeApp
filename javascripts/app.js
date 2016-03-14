var app = angular.module('bikeApp', ['ngRoute']);
	

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/bikeRoutes', {
        templateUrl: '/bikeRoutes.html',
        controller: 'bikeRoutes'
          });
    $routeProvider.when('/bikeMap', {
        templateUrl: '/bikeMap.html',
        controller: 'mapController'
        });
  }]);
