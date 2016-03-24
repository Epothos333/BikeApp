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
			buttons = document.getElementsByTagName('map-gen');
			changeColor(0, '#028090')
			element.bind('click', function() {
				for (var i = 0; i < buttons.length; i++) {
					changeColor(i, 'orange')
				}
				changeColor(scope.map, '#028090');
				if (scope.difficulty === 'easy') {
					console.log(buttons)

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
var buttons;
function changeColor(index, newColor) {
	buttons[index].firstChild.style.backgroundColor = newColor;
}
