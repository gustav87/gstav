$(document).ready(function() {

var calcPromise = new Promise(function(resolve, reject) {
	var num = null;
	setTimeout(function() {
		resolve(4 + 1);
	}, 1000);
});

function addTen(val) {
	console.log('in addTen function.', 'val:', val);
	return (val + 10);
}
function logVal(value) {
	console.log('value from promise: ', value);
}
calcPromise
	.then(addTen)
	.then(logVal);

$.get('xhr/cat.html', function(data) {
	$('#cat').html(data);
});

var x = {
	write: function() {
		console.log('this1: ', this);
		function ost() {console.log('this2: ', this);}
		ost();
	}
};
var la = x.write;
la.bind(x)();

/* start display "I am a happy pancake" paragraph */
(function getPancake () {
	var xhr2 = new XMLHttpRequest();
	xhr2.onreadystatechange = function() {
		if (xhr2.readyState === 4) {
			console.log('pancake responsetext: ' + xhr2.responseText);
			var inputEl = document.getElementsByName('radioBtn3')[0];
			var pEl = document.createElement('p');
			pEl.textContent = xhr2.responseText;
			inputEl.parentNode.insertBefore(pEl, inputEl.nextSibling);
		}
	};
	xhr2.open('GET', 'xhr/pancake.html');
	xhr2.send();	
}());
/* end display "I am a happy pancake" paragraph */

/* start hide button on button click and display content in x.html */
var xhr3 = new XMLHttpRequest(); 

xhr3.onreadystatechange = function() { 
	console.log("request.onreadystatechange called. readyState: " + this.readyState);
	if(xhr3.readyState === 4) {
		if (xhr3.status === 200) { 
			$('#ajax3').html(xhr3.responseText);
		} else {alert(xhr3.statusText);}
	}
};
console.log('readystejt innan open kallats: ' + xhr3.readyState);
xhr3.open('GET', 'xhr/x.html');
console.log('readystejt efter open kallats: ' + xhr3.readyState);
var sendAjax = function() {
	console.log('inside sendAJAX function. efter send() så får requestet state 2 (headers received), 3 (loading) och sen 4 (done).');
	xhr3.send();
	$('#load3').css('display', 'none');
};
$('#load3').click(sendAjax);
/* end hide button on button click and display content in x.html */

(function personsJson() {
	$.get('./xhr/persons.json', function(response) {
		$('#personsJson').text(response[4].name);
	});
}());
/* start create your own jsonObject form */
var input1 = $('#jsonInput1');
var input2 = $('#jsonInput2');
var jsonObject = [];
var counter = $('#jsonObjectCounter');

var submitJsonFunction = function() {
	if (input1.val() && input2.val()) {
		var obj = {};
		obj[input1.val()] = input2.val();
		console.log(obj);
		jsonObject.push(obj);
		input1.val('');
		input2.val('');
		counter.html('Objects collected: ' + jsonObject.length);
		input1.focus();
	}
};
var publishJsonFunction = function() {
	var tBody = jsonTable.children[0];

	jsonObject.forEach(function(obj) {
	var tRow = document.createElement('tr');
	var tData1 = document.createElement('td');
	var tData2 = document.createElement('td');
		for (var key in obj) {
			tData1.textContent = key;
			tData2.textContent = obj[key];
		}
	tRow.appendChild(tData1);
	tRow.appendChild(tData2);
	$(tBody).append(tRow);
	});
	jsonObject = [];
	counter.html('');
	input1.focus();
};

$('#submitJson').click(submitJsonFunction);
$('#publishJson').click(publishJsonFunction);
/* end create your own jsonObject form */

/* start q*/
console.log('this outside function: ', this); //document
var that = this;
one().then(function() {
	console.log('that: ', that); //document
	console.log('this inside function: ', this); //window, if not bind(this), then document
}.bind(this));

function one() {
	var deferred = Q.defer();
	deferred.resolve();
	return deferred.promise;
}
/* end q*/

var l = document.querySelector('#myListenerTest');
l.addEventListener('click', function(e) {
	console.log('l:', l);
	console.log('this:', this);
	console.log('event.target:', event.target);
});



function addListeners() {
	var links = document.querySelectorAll('#myListenerTest2 a');
	console.dir(links);

	links.forEach(function(item, index) {
		item.addEventListener('click', function(e) {
			console.log('item: ' + item + ' index: ' + index);
		});
	});
}
addListeners();

});
