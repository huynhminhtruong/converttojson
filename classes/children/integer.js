'use strict'

const Number = require('../supers/number')

class Integer extends Number {
	constructor(number) {
		super(number);
	}

	get isOdd() {
		return 'Is this number is an odd number? ' + super.isOdd
	}
}

var integer_number = new Integer(2)

console.log(integer_number.isOdd)