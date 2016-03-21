app.directive('advClass', function() {
	return {
		template: "<button id='btnadv1'>Advanced Route One</button><button id='btnadv2'>Advanced Route Two</button><button id='btnadv3'>Advanced Route Three</button>",
		link: function(){
			var map1 = document.getElementById('ADVmapOne');
			var map2 = document.getElementById('ADVmapTwo');
			var map3 = document.getElementById('ADVmapThree');						
			var btn1 = document.getElementById('btnadv1');
			var btn2 = document.getElementById('btnadv2');
			var btn3 = document.getElementById('btnadv3');						
			btnadv1.addEventListener("click", btn1Show);
			btnadv2.addEventListener("click", btn2Show);
			btnadv3.addEventListener("click", btn3Show);
			map2.style.display="none";
			map3.style.display="none";									
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