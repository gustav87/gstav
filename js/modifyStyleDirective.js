(function () {

angular
	.module('myApp')
	.directive('modifyStyle', ['$location', function($location) {

		var Directive = {
			controller: 'ModifyStyleController',
			controllerAs: 'vm',
			scope: true,
			transclude: true,
			template: templateContent(),
			link: function(scope, element, attrs, ctrl) {
				element.addClass('red');
				element.on('mouseover', function(e) {
					
					scope.$apply(function() {
						ctrl.test2 += 1;
						scope.test += 1;
					});
				});
			}
		};
		function templateContent() {
			return '<span ng-transclude></span><span> {{vm.test2}} {{test}} {{updateVar}}</span>';
		}

		return Directive;
	}]);
}());