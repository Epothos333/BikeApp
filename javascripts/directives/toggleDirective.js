app.directive('toggleClass', function() {
	return {
		template: "<button id='btn1'>Easy Route One</button><button id='btn2'>Easy Route Two</button><button id='btn3'>Easy Route 3</button>",
		link: function(){
			var map1 = document.getElementById('EZmapOne');
			var map2 = document.getElementById('EZmapTwo');
			var map3 = document.getElementById('EZmapThree');						
			var btn1 = document.getElementById('btn1');
			var btn2 = document.getElementById('btn2');
			var btn3 = document.getElementById('btn3');						
			btn1.addEventListener("click", btn1Show);
			btn2.addEventListener("click", btn2Show);
			btn3.addEventListener("click", btn3Show);						
			function btn1Show(){
				map2.style.display="none";	
				map3.style.display="none";
				map1.style.display="";				
			}	
			function btn2Show(){
				map1.style.display="none";	
				map3.style.display="none";	
				map2.style.display="";			
			}	
			function btn3Show(){
				map2.style.display="none";	
				map1.style.display="none";		
				map3.style.display="";		
			}
	}
}
})