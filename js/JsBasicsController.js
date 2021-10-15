(function() {

angular
	.module('myApp')
	.controller('JsBasicsController', JsBasicsController);

JsBasicsController.$inject = ['$scope'];

/* @ngInject */
function JsBasicsController($scope) {
  var vm = this;
}
}());
