app.controller('gettingStartedController', ['$scope', '$location', function($scope, $location) {
    
    $scope.changeView = function(view){
            $location.path(view);
        }; 
}]);