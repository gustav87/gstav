(function() {

angular
	.module('myApp')
	.filter('num', function() {
		return function(num) {
			num = num + '';
			var arr = num.split('');
			arr.reverse();
			for (var i = 0, j = 0; i < arr.length; i += 1) {
				if (i % 3 === 0 && i !== 0) {
					arr.splice(i + j, 0, ' ');
					j += 1;
				}
			}
			return arr.reverse().join('');
		};
	})

	.filter('capitalize', function() {
		return function(text) {
			return text.replace(/(?:^|\s)\S/g, function(match) { return match.toUpperCase(); });
		};
	});

}());


		// return function(num) {
		// 	num = num + '';
		// 	var temp = '';
		// 	for (var i = num.length - 1, k = 0; i >= 0; i -= 1) {
		// 		temp += num[i];
		// 		k += 1;
		// 		if (k % 3 === 0) {
		// 			temp += ' ';
		// 		}
		// 	}
		// 	num = '';
		// 	for (var j = temp.length - 1; j >= 0; j -= 1) {
		// 		num += temp[j];
		// 	}
		// 	return num;
		// };


		// 		return function(num) {
		// 	num = num + '';
		// 	var arr = num.split('');
		// 	arr.reverse();
		// 	var arr2 = [];
		// 	for (var i = 0; i < arr.length; i += 1) {
		// 		if (i % 3 === 0 && i !== 0) {
		// 			arr2.push(' ');
		// 		}
		// 		arr2.push(arr[i]);
		// 	}
		// 	arr2.reverse();
		// 	return arr2.join('');
		// };


		// return function(num) {
		// 	num = num + '';
		// 	var arr = num.split('');
		// 	arr.reverse();
		// 	for (var i = 0, j = 0; i < arr.length; i += 1) {
		// 		if (i % 3 === 0 && i !== 0) {
		// 			arr.splice(i + j, 0, ' ');
		// 			j += 1;
		// 		}
		// 	}
		// 	arr.reverse();
		// 	return arr.join('');
		// };