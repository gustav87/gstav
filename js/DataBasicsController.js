(function() {

angular
	.module('myApp')
	.controller('DataBasicsController', DataBasicsController);

DataBasicsController.$inject = ['$scope', '$http'];

/* @ngInject */
function DataBasicsController($scope, $http) {
	var vm = this;
	vm.title = 'DataBasics..';
	vm.success = 'nothing posted yet...';
	vm.numbers = [];

	$.get('xhr/cat.html', function(data) {
		$('#tst').html(data);
	});

	var request = null;
	$('#myForm').submit(function(e) {
		e.preventDefault();
		if (request) {
			request.abort();
		}

		var inputs = $(this).find('input');
		var serializedData = $(this).serialize();
		inputs.prop('disabled', true);

		request = $.ajax({
			url: '/backend/databasics',
//			url: 'php/insertRow.php',
			type: 'GET',
//			type: 'POST',
			data: serializedData,
			success: function(data) {
				console.log('second');
				console.log('data:::: ', data);
				$('#resultText').html(data);
			}
		});
		request.done(function (response, textStatus, jqXHR){
			console.log("Hooray, im third!");
			console.log('response: ' + response);
			console.log('textStatus: ' + textStatus);
			console.log('jqXHR:', jqXHR);
		});
		request.fail(function (jqXHR, textStatus, errorThrown){
			console.error("The following error occurred: " + textStatus, errorThrown);
		});
		request.always(function () {
			setTimeout(function(){
				inputs.prop("disabled", false);
			}, 1500);
		});
		console.log('first!');
	});
}
}());

