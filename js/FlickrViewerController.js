(function() {

angular
	.module('myApp')
	.controller('FlickrViewerController', FlickrViewerController);

FlickrViewerController.$inject = ['$scope', '$http'];

/* @ngInject */
function FlickrViewerController($scope, $http) {
	var vm = this;
	vm.username = 'flickrviewer..';
	vm.getImgSrc = getImgSrc;
	init();

	function init() {
		getPhotos();
	}

	function getPhotos() {
		$http.get('https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=f925454b5e14cf6a8240faa38443cd71&gallery_id=66911286-72157685568512954&format=json&nojsoncallback=1')
			.then(function(response) {
				vm.photos = response.data.photos.photo;

			}, function(err) {
				vm.err = err;
			});
	}
	function getImgSrc(p) {
		return 'https://farm' + p.farm + '.staticflickr.com/' + p.server + '/' + p.id + '_' + p.secret + '.jpg';
	}

//6d3a9ee3ce484b53f9627d23792ef987

// photos.forEach(function(item, index) {
// 	var farm = item.farm;
// 	var server = item.server;
// 	var id = item.id;
// 	var secret = item.secret;

// 	flickrGallery.append('<img src="https://farm' + farm + '.staticflickr.com/' + server + '/' + id + '_' + secret + '.jpg"/>');
// });


}
}());