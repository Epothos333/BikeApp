app.directive('toggleClass', function() {
	return {
		template: "<button id='butts'>Easy Route One</button>",
		link: function($scope, element, attr){
			var fds = document.getElementById('EZmapOne');
			var btn = document.getElementById('butts');
			btn.addEventListener("click", hideClass);
			function hideShowClass(){
				fds.classList.add('hide');					
			}				
		}

	}
})