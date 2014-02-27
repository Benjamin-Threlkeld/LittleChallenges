function fibonacciSequence(limit, array) {
	var fibonacciNumbers = [0, 1],
			limit = limit || 10;

	// iterator starts at one, while iterator is less than limit(we subtract one to make it more like you would expect. 
	// example: I want four of them, it would give 5, so we subtract one so you really get 4), subtract one, every time you run add one to iterator
	for (i = 1; i < limit - 1; i += 1) {

		// use iterator as index, since this is the first time it runs this will equal 1, add the index before that to equal 1 again, and now append that to the array
		// next time this runs iterator will be 2 so we get 1 + 1.
		fibonacciNumbers.push(fibonacciNumbers[i] + fibonacciNumbers[i - 1]);
	}

	// if the limit less then the ones we already have in the array
	if (limit < 3) {

		// we need to cut them off
		fibonacciNumbers.splice(limit, fibonacciNumbers.length - 1)
	}

	// if they want it in array form or just the last value
	if (array != true) {

		// return the value of the length of the array of Fibonacci numbers, minus one
		return fibonacciNumbers[fibonacciNumbers.length - 1];
	}

	// return Fibonacci numbers as an array
	return fibonacciNumbers;
}

console.log( fibonacciSequence(10, true) );