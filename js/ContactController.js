(function() {

angular
	.module('myApp')
	.controller('ContactController', ContactController);

ContactController.$inject = ['$scope'];

/* @ngInject */
function ContactController($scope) {
  var vm = this;

  var nameInput = $('#name');
  var emailInput = $('#email');
  var form = $('#contactMeForm');
  var header = $('#header');

  init();

  function init() {
    nameInput.focus()

  	if (localStorage.name) {
  		nameInput.val(localStorage.name);
  	}
  	if (localStorage.email) {
  		emailInput.val(localStorage.email);
  	}
  }

  form.submit(function(e) {
  	e.preventDefault();
  	if ($('#saveCredentials:checked').val()) {
  		localStorage.name = nameInput.val();
  		localStorage.email = emailInput.val();
  	}
  	console.log('jq serialized', $(this).serialize());
  	$(this).ajaxSubmit({success: successCallback});
  });

  function successCallback(responseText, statusText, xhr, $form) {
  	console.log('responseText:\n' + responseText + '\n\nstatusText:\n' + statusText);

  	form.css('display', 'none');
  	header.css('text-align', 'center');
  	header.text('Thank you for contacting me!');
  	$('main').css('min-height', 'auto');
  }
}
}());
