(function() {

angular
	.module('myApp')
	.controller('UserController', UserController);

UserController.$inject = ['$scope', 'githubFactory', '$routeParams'];

/* @ngInject */
function UserController($scope, githubFactory, $routeParams) {

	var onUserComplete = function(data) {
		$scope.account = data;
		githubFactory.getRepos(data).then(onRepos, onError);
	};
	var onRepos = function(data) {
		$scope.repos = data;
	};
	var onError = function(reason) {
		$scope.error = 'could not fetch data';
	};
	var searchUser = function() {
		console.log('Searching for ' + $scope.username);
		githubFactory.getUser($scope.username).then(onUserComplete, onError);
	};

	$scope.account = null;
	$scope.username = $routeParams.username;
	$scope.repoSortOrder = '+stargazers_count';
	searchUser();
}

}());
