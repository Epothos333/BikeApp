var map;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 42.3314, lng: 83.0458},
		zoom: 8
	});
}