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

