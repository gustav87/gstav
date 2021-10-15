(function() {

angular
	.module('myApp', ["ngRoute"])
	.config(gustavRoute)
	.run(run);

function run($rootScope, $location, $log) {
	$rootScope.$on('$locationChangeStart', function(event, next, current) {
		$log.info('location changing to: ' + next);
	});
}

gustavRoute.$inject = ['$routeProvider'];

/* @ngInject */
function gustavRoute($routeProvider) {
	$routeProvider
		.when("/index", {
			templateUrl: "templates/index.html",
			controller: "DefaultController",
			controllerAs: "vm"
		})
		.when("/blog", {
			templateUrl: "templates/blog.html",
			controller: "BlogController",
			controllerAs: "vm"
		})
		.when("/playground", {
			templateUrl: "templates/playground.html",
			controller: "PlaygroundController",
			controllerAs: "vm"
		})
		.when("/contact", {
			templateUrl: "templates/contact.html",
			controller: "ContactController",
			controllerAs: "vm"
		})
		.when("/playground/githubSearch", {
			templateUrl: "templates/githubSearch.html",
			controller: "GithubController",
			controllerAs: "vm"
		})
		.when("/playground/githubUser/:username", {
			templateUrl: "templates/githubUser.html",
			controller: "UserController",
			controllerAs: "vm"
		})
		.when("/playground/colors", {
			templateUrl: "templates/colors.html",
			controller: "ColorsController",
			controllerAs: "vm"
		})
		.when("/playground/map", {
			templateUrl: "templates/map.html",
			controller: "MapController",
			controllerAs: "vm"
		})
		.when("/playground/angularBasics", {
			templateUrl: "templates/angularBasics.html",
			controller: "AngularBasicsController",
			controllerAs: "vm"
		})
		.when("/playground/flickrViewer", {
			templateUrl: "templates/flickrViewer.html",
			controller: "FlickrViewerController",
			controllerAs: "vm"
		})
		.when("/playground/jsBsics", {
			templateUrl: "templates/jsBasics.html"
		})
		.when("/playground/dataBasics", {
			templateUrl: "templates/dataBasics.html",
			controller: "DataBasicsController",
			controllerAs: "vm"
		})
		.otherwise({redirectTo:"/index"
	});
}
}());
