var app = angular.module('bikeApp', ['ngRoute']);
	

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/bikeRoutes', {
        templateUrl: '/Views/bikeRoutes.html',
        controller:'bikeRoutes'
        });
    $routeProvider.when('/bikeMap', {
        templateUrl: '/Views/bikeMap.html',
        controller: 'mapController'
        });
    $routeProvider.when('/', {
        templateUrl: '/Views/gettingStarted.html'
        });
  }]);
