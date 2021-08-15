(function() {

angular
	.module('myApp')
	.controller('AngularBasicsController', AngularBasicsController);

AngularBasicsController.$inject = ['$scope', '$http', '$timeout', '$filter'];

/* @ngInject */
function AngularBasicsController($scope, $http, $timeout, $filter) {
	var vm = this;
	vm.title = 'AngularBasicsController';
	var cap = $filter('capitalize');
	init();
	
	vm.nordicCountries = [
		{name: cap('sweden'), population: 9124254234535},
		{name: cap('norway'), population: 523423433333333345354},
		{name: cap('denmark'), population: 4005212342342342341},
		{name: cap('finland'), population: 7304385}
	];

	vm.showFormInfo = function() {
		$timeout(function() {
			vm.myForm.username.$dirty = true;
			console.log(vm.myForm);
		});
	};

	function init() {
		getPersonsJson();
	}

	function getPersonsJson() {
		$http.get('./xhr/persons.json')
			.then(function(response) {
				vm.people = response.data;
			}, function(response) {
				vm.people = response.data;
			});	
	}

}
}());