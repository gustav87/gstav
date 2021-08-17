(function() {

angular
	.module('myApp')
	.controller('BlogController', BlogController);

BlogController.$inject = ['$scope', '$http'];

/* @ngInject */
function BlogController($scope, $http) {
	var vm = this;
	vm.username = 'blog..';
	vm.posts = null;
	init();

	function init() {
		getBlogPosts();
		// getHostName();
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

	function getHostName() {
		$http({
			method: 'GET',
			url: './php/hostTest.php'
		}).then(function success(response) {
			vm.hostName = response.data;
		});	
	}
}
}());

