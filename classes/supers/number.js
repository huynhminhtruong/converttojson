'use strict'

class Number {
	constructor(number) {
		this.number = number;
	}

	get isPrime() {
		
	}

	get isOdd() {
		return this.number % 2 !== 0
	}

	get isEven() {
		return this.number % 2 === 0
	}
}

module.exports = Number