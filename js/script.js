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

/*$(window).on('resize', function(){
      var win = $(this); //this = window
      if (win.width() >= 581) {
      	$("#navButtons").css("display", "block");
      }
      if(win.width() <= 580) {
      	$("#navButtons").css("display", "none");
      }
});
----start ansync load cv page
$('#cvContent').click(function() {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			document.getElementById('cvContent').innerHTML = xhr.responseText;
		}
	};
	xhr.open('GET', 'cv_ajax.html');
	$('main').hide();
	$('#navButton3_thisPage').attr('id', 'navButton3');
	$('#navButton4').attr('id', 'navButton4_thisPage');
	xhr.send();
});
});
----end async load cv page
*/
