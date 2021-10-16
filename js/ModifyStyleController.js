(function() {

angular
	.module('myApp')
	.controller('ModifyStyleController', ModifyStyleController);

ModifyStyleController.$inject = ['$scope', '$http', '$timeout', '$filter'];

/* @ngInject */
function ModifyStyleController($scope, $http, $timeout, $filter) {
	var vm = this;
	vm.test2 = 1;
	$scope.test = 2;
	$scope.updateVar = 15;

	$scope.$watch('test', function(newValue, oldValue) {
		if (newValue !== oldValue) {
			$scope.updateVar += 2;
		}
	});

}
}());
