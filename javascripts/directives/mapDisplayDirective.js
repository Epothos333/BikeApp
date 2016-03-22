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
