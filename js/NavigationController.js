(function() {

angular
	.module('myApp')
	.controller('NavigationController', NavigationController);

NavigationController.$inject = ['$scope', '$interval', '$rootScope', '$location'];

/* @ngInject */
function NavigationController ($scope, $interval, $rootScope, $location) {
	var vm = this;
	vm.username = 'navigation...';
	vm.$location = $location;


	console.log('windowinnerwidth: ', window.innerWidth);
	console.log('bodyclientwidth: ', document.body.clientWidth);

	var navEl = $('nav');
	var height = navEl.offset().top;
	console.log(height);

	

	vm.stopCount = function() {
		console.log('inside stopCounter function');
		if ($rootScope.countdownInterval) {
			$interval.cancel($rootScope.countdownInterval);
		}
	};

	vm.navClass = function(path) {
		var currentRoute = $location.path();
		return currentRoute.includes(path) ? 'active' : '';
	};
}

}());