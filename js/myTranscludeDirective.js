(function () {

angular
	.module('myApp')
	.directive('myTransclude', myTranscludeDirective);

myTranscludeDirective.$inject = ['$location'];

/* @ngInject */
function myTranscludeDirective($location) {

	var directive = {
		transclude: true,
		template: templateHtml,
		link: function(scope, element, attrs) {
				element.addClass('red');
		}
	};

	return directive;
}


var templateHtml =
		"<div> jag gillar ostfrallor </div>" +
		"<p ng-transclude> och en bit sås</p>";

}());
