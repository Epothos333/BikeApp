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
