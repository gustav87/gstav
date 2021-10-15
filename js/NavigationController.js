(function() {

angular
  .module('myApp')
  .controller('NavigationController', NavigationController);

NavigationController.$inject = ['$scope', '$interval', '$location'];

/* @ngInject */
function NavigationController ($scope, $interval, $location) {
  var vm = this;
  vm.$location = $location;
  var navEl = $('nav');
  var height = navEl.offset().top;

  vm.navClass = function(path) {
    var currentRoute = $location.path();
    return currentRoute.includes(path) ? 'active' : '';
  };
}

}());
