(function() {

angular
	.module('myApp')
	.controller('GithubController', GithubController);

GithubController.$inject = ['$scope', '$interval', '$location', '$rootScope'];

/* @ngInject */
function GithubController($scope, $interval, $location, $rootScope) {
	var vm = this;
	vm.username = 'angular';
	vm.countdown = 5;
	vm.checkCountdown = checkCountdown;
	vm.decrementCountdown = decrementCountdown;
	vm.search = search;
	var searchInputField = $('form input:first');

	startCountdown();
	getFocus();
	
	function search() {
		if ($rootScope.countdownInterval) {
			$interval.cancel($rootScope.countdownInterval);
		}
		$location.path("/playground/githubUser/" + vm.username);
	}
	function checkCountdown() {
		console.log('checking if countdown is done. countdown is ' + vm.countdown);
		if (vm.countdown <= 0) {
			vm.search();
		}
	}
	function startCountdown() {
		console.log('starting countdown, countdown is: ' + vm.countdown + '!');
		$rootScope.countdownInterval = $interval(vm.decrementCountdown, 1000, vm.countdown);
	}
	function decrementCountdown() {
		vm.countdown -= 1;
		vm.checkCountdown();
	}
	function getFocus() {
		searchInputField.focus();
	}

}
}());
