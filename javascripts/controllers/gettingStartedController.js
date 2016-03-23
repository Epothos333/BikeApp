app.controller('gettingStartedController', ['$scope', '$location', function($scope, $location) {
    
    $scope.changeViewToRoutes = function(){
            $location.path('/bikeRoutes');
        };

   	$scope.changeViewToMYO = function(){
            $location.path('/create_Your_Own');
        };    

}]);