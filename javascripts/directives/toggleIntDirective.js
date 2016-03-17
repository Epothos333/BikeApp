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
			function btn1Show(){
<<<<<<< HEAD
				map1.style.display = '';
				map2.style.display = 'none';
				map3.style.display = 'none';
				console.log(element);
			}	
			function btn2Show(){
				map1.style.display = 'none';
				map2.style.display = '';
				map3.style.display = 'none';
				console.log(element);		
			}	
			function btn3Show(){
				map1.style.display = 'none';
				map2.style.display = 'none';
				map3.style.display = '';
				console.log(element);	
=======
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
>>>>>>> 97002d23653f1d5690fcb8713c65d8a52ecf2d23
			}				
		}

	}
})