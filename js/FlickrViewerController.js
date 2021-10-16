(function() {

angular
	.module('myApp')
	.controller('FlickrViewerController', FlickrViewerController);

FlickrViewerController.$inject = ['$scope', '$http'];

/* @ngInject */
function FlickrViewerController($scope, $http) {
	var vm = this;
	vm.getDogImgSrc = getDogImgSrc;
  vm.getTaggedImgSrc = getTaggedImgSrc;
  vm.showDogs = false
  vm.showTaggedImages = false
  vm.getDogs = getDogs
  vm.getTaggedImages = getTaggedImages

	function getDogs() {
		$http.get("/backend/flickr/getDogs")
			.then(response => {
				vm.dogs = response.data.photos.photo
        vm.showDogs = true
        vm.showTaggedImages = false
			}, err => {
				vm.err = err;
			});
	}
	function getDogImgSrc(p) {
		return `https://farm${p.farm}.staticflickr.com/${p.server}/${p.id}_${p.secret}.jpg`;
	}
  function getTaggedImages() {
    tag = $('#flickrTag').val()
    $http({
      url: "/backend/flickr/getTaggedImages",
      method: "GET",
      params: {tag: tag}
    }).then(response => {
      vm.taggedImages = response.data.photos.photo
      vm.showTaggedImages = true
      vm.showDogs = false
    }, err => {
      vm.err = err
    })
  }
  function getTaggedImgSrc(p) {
    return `https://live.staticflickr.com/${p.server}/${p.id}_${p.secret}.jpg`
  }
}
}());
