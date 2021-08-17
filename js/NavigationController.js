(function() {

angular
  .module('myApp')
  .controller('NavigationController', NavigationController);

NavigationController.$inject = ['$scope', '$interval', '$rootScope', '$location'];

/* @ngInject */
function NavigationController ($scope, $interval, $rootScope, $location) {
  var vm = this;
  vm.$location = $location;
  var navEl = $('nav');
  var height = navEl.offset().top;

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
