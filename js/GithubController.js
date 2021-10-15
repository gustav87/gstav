(function() {

angular
	.module('myApp')
	.controller('GithubController', GithubController);

GithubController.$inject = ['$scope', '$interval', '$location'];

/* @ngInject */
function GithubController($scope, $interval, $location) {
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
		if (vm.countdownObject) {
			$interval.cancel(vm.countdownObject);
		}
		$location.path("/playground/githubUser/" + vm.username);
	}
	function checkCountdown() {
		if (vm.countdown <= 0) {
			vm.search();
		}
	}
	function startCountdown() {
		vm.countdownObject = $interval(vm.decrementCountdown, 1000, vm.countdown);
	}
	function decrementCountdown() {
		vm.countdown -= 1;
		vm.checkCountdown();
	}
	function getFocus() {
		searchInputField.focus();
	}

  $scope.$on('$destroy', function() {
    if (vm.countdownObject) {
      $interval.cancel(vm.countdownObject);
    }
  })

}
}());
