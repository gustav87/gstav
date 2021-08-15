(function() {

angular
	.module('myApp')
	.controller('DefaultController', DefaultController);

DefaultController.$inject = ['$scope', '$rootScope'];

/* @ngInject */
function DefaultController($scope, $rootScope) {
	$scope.username = 'gus';
	$rootScope.test = 'hej';
	this.title = 'DefaultController';
}
}());

