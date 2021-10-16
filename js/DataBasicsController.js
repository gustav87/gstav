(function() {

angular
  .module('myApp')
  .controller('DataBasicsController', DataBasicsController);

DataBasicsController.$inject = ['$scope', '$http'];

/* @ngInject */
function DataBasicsController($scope, $http) {
  var vm = this;

  $.get('xhr/nameLabel.html', data => {
    $('#nameLabel').html(data);
  });

  $('#insertRowForm').submit(event => {
    event.preventDefault();

    var inputs = $(event.currentTarget).find('input');
    var serializedData = $(event.currentTarget).serialize();
    inputs.prop('disabled', true);

    request = $.ajax({
      url: '/backend/databasics/insertRow',
      type: 'POST',
      data: serializedData,
      success: data => {
        console.log('second');
        $('#insertRowResult').html(data);
      }
    });
    request.done((response, textStatus, jqXHR) => {
      console.log("Hooray, im third!");
    });
    request.fail((jqXHR, textStatus, errorThrown) => {
      $('#resultText').html(`The following error occurred: <br> ${textStatus}: ${errorThrown}`);
      console.error("The following error occurred: " + textStatus, errorThrown);
    });
    request.always(() => {
      setTimeout(() => {
        inputs.prop("disabled", false);
      }, 1500);
    });
    console.log('first!');
  });

  $('#searchDbForm').submit(event => {
    event.preventDefault()
    var serializedData = $(event.currentTarget).serialize()
    console.log(serializedData)

    request = $.ajax({
      url: '/backend/databasics/getDocuments',
      data: serializedData,
      success: json => {
        jsonArr = JSON.parse(json)
        $('#getAllDocsResult').html(
          `<tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date added</th>
          </tr>`
        )
        for(var i = jsonArr.length - 1; i >= 0; i--) {
          var obj = jsonArr[i];
          $('#getAllDocsResult').append(`
            <tr>
              <td>${obj.name}</td>
              <td>${obj.email}</td>
              <td>${obj.dateAdded}</td>
            </tr>`
          )
        }
      }
    })
  })
}
}());
