app.controller('gettingStartedController', ['$scope', '$location', function($scope, $location) {
    
    $scope.changeViewToRoutes = function(view){
            $location.path('view');
        };  

}]);