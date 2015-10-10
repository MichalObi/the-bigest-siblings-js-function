function solution (N) {

	var input = N;

	inputString = input.toString();

	console.log(inputString.length);

	if (inputString.length > 6) {

		console.log('To big N to compute.');

		return false;
	}

	else {

		var digits = [];

		for (var i = 0, len = inputString.length; i < len; i += 1) {
	        digits.push(+inputString.charAt(i));
	    }

		digits = digits.sort(function (a, b) { 
			return a - b;
		});

		digits = digits.reverse().join("");

		digits = parseInt(digits);

	}

}

window.onload = solution;