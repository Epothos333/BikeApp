app.directive('intClass', function() {
	return {
		template: "<button id='btnint1'>Intermediate Route One</button><button id='btnint2'>Intermediate Route Two</button><button id='btnint3'>Intermediate Route 3</button>",
		link: function(element){
			var map1 = document.getElementById('INTmapOne');
			var map2 = document.getElementById('INTmapTwo');
			var map3 = document.getElementById('INTmapThree');						
			var btn1 = document.getElementById('btnint1');
			var btn2 = document.getElementById('btnint2');
			var btn3 = document.getElementById('btnint3');						
			btnint1.addEventListener("click", btn1Show);
			btnint2.addEventListener("click", btn2Show);
			btnint3.addEventListener("click", btn3Show);
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