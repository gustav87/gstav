$(document).ready(function() {

function goBack() {
	window.history.back();
}

if (document.querySelector('#goBack')) {
	var gobackButton = document.querySelector('#goBack');
	gobackButton.addEventListener('click', goBack);
}

$('#menuButton').click(function() {
	$('nav ul').slideToggle('slow');
});
$('.navButton').click(function() {
	if (window.innerWidth < 620) {
		$('nav ul').slideToggle('slow');
	}
});

var start = new Date().getTime();
$('body').on('load', onLoad());
function onLoad() {
	var now = new Date().getTime();
	var loadTime = now - start;
	console.log('loadtime in ms: ' + loadTime);
}
});
