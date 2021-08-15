(function() {

angular
	.module('myApp')
	.controller('ColorsController', ColorsController);

ColorsController.$inject = ['$scope', '$timeout', '$interval'];

/* @ngInject */
function ColorsController($scope, $timeout, $interval) {
	var vm = this;
	vm.red = 0;
	vm.green = 0;
	vm.blue = 0;
	var myInterval = {};
	vm.bucketColor = 255;

	vm.startIncrease = function(value) {
		myInterval[value] = $interval(increaseColor, 10, 0, true, value);
	};
	function increaseColor(value) {
		if (vm[value] < 255) {
			vm[value] += 1;
			vm.bucketColor = Math.floor(255 - ((vm.red + vm.green + vm.blue) / 3));
		}
	}
	vm.startDecrease = function(value) {
		myInterval[value] = $interval(decreaseColor, 10, 0, true, value);
	};
	function decreaseColor(value) {
		if (vm[value] > 0) {
			vm[value] -= 1;
			vm.bucketColor = Math.floor(255 - ((vm.red + vm.green + vm.blue) / 3));
		}
	}
	vm.stopInterval = function(value) {
		$interval.cancel(myInterval[value]);
	};

}
}());