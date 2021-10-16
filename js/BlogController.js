(function() {

angular
	.module('myApp')
	.controller('BlogController', BlogController);

BlogController.$inject = ['$scope', '$http'];

/* @ngInject */
function BlogController($scope, $http) {
	var vm = this;
	vm.posts = null;
	init();

	function init() {
		getBlogPosts();
	}

	function getBlogPosts() {
		$http({
			method: 'GET',
			url: './xhr/blogPosts.json'
		}).then(function successCallBack(response) {
			vm.posts = response.data;
			return response.data;
		}, function errorCallBack(error) {
			console.log(error);
		}).then(function afterSuccess(data) {
			console.log(data);
		});
	}
}
}());
