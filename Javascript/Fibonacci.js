function fibonacciSequence(limit) {
	var currentFibonacci = 0,
		lastFibonacci = 0,
		fibonacciNumbers = [],
		limit = limit || 10;

	for (i = 0; i < limit; i += 1) {

		newCurrentFibonacci = currentFibonacci + lastFibonacci;
		
		currentFibonacci = lastFibonacci;
		
		lastFibonacci = newCurrentFibonacci;
		
		fibonacciNumbers.push(newCurrentFibonacci);

		if (lastFibonacci === 0 && currentFibonacci === 0) {
			currentFibonacci = 1;
		}

	}
	
	return fibonacciNumbers;

}

console.log( fibonacciSequence() );