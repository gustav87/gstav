(function() {

angular
	.module('myApp')
	.controller('MapController', MapController);

MapController.$inject = ['$scope'];

/* @ngInject */
function MapController($scope) {
	var vm = this;
	vm.title = 'MapPage';

	initMap();
	
	function initMap() {
		var infowindow = new google.maps.InfoWindow({});

		var libraries = [
			{name: 'Alviks bibliotek', coords: {lat:59.332774, lng:17.982328}, hours: 'Mon-Fri 08-17', openWeekends: true},
			{name: 'Aspuddens bibliotek', coords: {lat:59.305518, lng:18.001548}, hours: 'Mon-Thu 10-20', openWeekends: false},
			{name: 'Bagarmossens bibliotek', coords: {lat:59.277238, lng:18.132909}, hours: 'Mon-Fri 10-15', openWeekends: true},
			{name: 'Barnens bokbuss', coords: {lat:59.343136, lng:18.052624}, hours: 'Tue-Fri 12-14', openWeekends: false},
			{name: 'Björkhagens bibliotek', coords: {lat:59.290778, lng:18.116702}, hours: 'Mon-Fri 08-17', openWeekends: true},
			{name: 'Blackebergs bibliotek', coords: {lat:59.347722, lng:17.883068}, hours: 'Mon-Fri 09-17', openWeekends: false},
			{name: 'Bredängs bibliotek', coords: {lat:59.294811, lng:17.934061}, hours: 'Mon-Fri 10-20', openWeekends: true},
			{name: 'Brommaplans bibliotek', coords: {lat:59.338849, lng:17.939923}, hours: 'Mon-Fri 11-16', openWeekends: false},
			{name: 'Enskede bibliotek', coords: {lat:59.285185, lng:18.093892}, hours: 'Mon-Fri 12-15', openWeekends: true},
			{name: 'Farsta bibliotek', coords: {lat:59.242485, lng:18.090051}, hours: 'Mon-Fri 13-17', openWeekends: false}
		];
		var mapOptions = {
			center: {lat: 59.331707, lng: 18.062537},
			zoom: 11
		};

		var map = new google.maps.Map(document.getElementById('map'), mapOptions);

		libraries.forEach(function(library, index) {
			var marker = addMarker(library.coords);

			marker.addListener('click', function(e) {
				console.log('marker clicked');
				showDetail(marker, library);
			});
		});
		map.addListener('click', function(e) {hideDetail();});

		function showDetail(marker, library) {
			var pos = {lat: marker.position.lat(), lng: marker.position.lng()};
			map.setZoom(13);
			map.setCenter(pos);
			map.panTo(pos);
			infowindow.setContent('<h1>' + library.name + '</h1>' + 
				'<p>:)</p>' + '<p> Öppettider: ' + library.hours + '</p>' +
				'<p>Öppet på helgen: ' + (library.openWeekends ? 'Ja' : 'Nej') + '</p>');
			infowindow.open(map, marker);
		}
		function hideDetail() {infowindow.close();}
		function addMarker(coords) {
			return new google.maps.Marker({
				position: coords,
				map: map
			});
		}
	}
}
}());

