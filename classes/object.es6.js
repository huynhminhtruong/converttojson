'use strict'

class number {
	constructor(name, subject) {
		this.name = name;
		this.subject = subject;
		this.getName = function() {
			return this.name
		};
		this.getSubject = function() {
			return this.subject
		}
	}
}

class Polygon {
	constructor(width, height) {
		this.width = width;
		this.height = height;
	}

	get area() {
		return this.width * this.height;
	}

	get w() {
		return this.width;
	}

	get h() {
		return this.height;
	}
}

class Square extends Polygon {
	constructor(width, height) {
		super(width, height);
	}

	get sum() {
		return this.width * 4;
	}
}

var square_1 = new Square(4, 10)

console.log(square_1.sum)

function binary(array, number) {
	if (number >= 2) {
		binary(array, number / 2)
	}

	array.push(Math.floor(number % 2))

	return array
}

function f(array) {
	var odd = 0, even = 0

	for(var i = array.length - 1; i >= 0; i--) {
		((array.length - i) % 2 == 0) ? (even += array[i]) : (odd += array[i])
	}

	return Math.abs(even - odd) % 3 == 0
}

function isPrime(number) {
	var i = 2

	while(i <= Math.sqrt(number)) {
		if (number % i == 0) return false
		i++
	}

	return true
}

function fib_1(number) {
	var x = 0, y = 1

	for(let i = 0; i < number; i++) {
		x += y
		y = x - y
	}

	return x
}

function fib_2(number) {
	if (number == 1 || number == 2) return 1

	if (number > 2) return fib_2(number - 1) + fib_2(number - 2)

	return number
}

var fib = []

function fib_3(number) {
	if (number == 1 || number == 2) fib[number - 1] = 1

	if (number > 2) fib[number - 1] = fib_3(number - 2) + fib_3(number - 1)

	return fib[number - 1]
}

var array = [1, 2, 3, 4, 5, 6]
var map = array.map((number) => {
	return number * 2
})
var filter = array.filter((number) => {
	if (number % 2 !== 0) return number
})
var reduce = array.reduce((x, y) => {
	return x + y
})

var arr = []

for (var  i = 0; i < 3; i++) {
	arr.push((
		(p) => {
			return () => {
				console.log(p)
			}
		}
	)(i))
}

const a = 1

a = 2

console.log(a)

// var add = (function(x, y){
// 	var count = 0

// 	return function() {
// 		return count += 1
// 	}
// }(1, 2))
















