(function() {

angular
	.module('myApp')
	.controller('DefaultController', DefaultController);

DefaultController.$inject = ['$scope'];

/* @ngInject */
function DefaultController($scope) {
}
}());
