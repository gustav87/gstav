(function() {

angular
  .module('myApp')
  .controller('PlaygroundController', PlaygroundController);

PlaygroundController.$inject = ['$scope', '$document', '$http'];

/* @ngInject */
function PlaygroundController($scope, $document, $http) {
  var vm = this;
  vm.title = 'PlaygroundPage';
  init();

  function init() {
    getProjects();
  }

  function getProjects() {
    $http.get('./xhr/playgroundProjects.json')
         .then(function(response) {
           vm.projects = response.data
         })
  }
}
}());
