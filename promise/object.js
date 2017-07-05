(function(a_1, a_2) {
	console.log('f1: ', a_1 + a_2)
}(1, 2));

var a = 2

function animal(name, feet) {
	this.name = name;
	this.feet = feet;

	this.setName = function(name) {
		this.name = name
	}

	this.getName = function() {
		return this.name
	}

	this.setFeet = function(feet) {
		this.feet = feet
	}

	this.getFeet = function() {
		return this.feet
	}

	this.move = function() {
		return this.name + ' can move'
	}
}

var bird = function() {
	this.move = function() {
		return this.name + ' can fly'
	}
}

function sum() {
	var sum = 0

	if (arguments.length > 0) {
		for(var i = 0; i < arguments.length; i++) {
			sum += arguments[i]
		}
	}

	return sum
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9))

Number.prototype.func = function() {
	return this * this
}

var object = function(name) {
	this.name = name;
}

var obj = new object('Object 1')

object.prototype.setName = function() {
	this.name = 'Set new name';
}

object.prototype.getName = function() {
	return this.name;
}

var log = function(level, time, message) {
	console.log(level + ' - ' + time + ' : ' + message)
}

var errorLog = log.bind(null, 'Today', 'Overload')

errorLog('Out of memory')

function makeAdder(x) {
	return function(y) {
		return x + y
	}
}

var add_1 = makeAdder(1)
var add_2 = makeAdder(2)

console.log(add_1(5))
console.log(add_2(6))

obj.setName()
console.log(obj.getName())

for(let i = 0; i < 10; i++) {
	
}

for(var p = 0; p < 10; p++) {

}

var array = []

function add() {
	for (let  i = 0; i < 10; i++) {
		array.push(function(){
			console.log(i)
		})
	}
}

function count(string) {
	var array = new Array(26), list = []
	array.fill(0)

	for(var i = 0; i < string.length; i++) {
		if (string.charCodeAt(i) != 32) {
			if (array[string.charCodeAt(i) - 97] > 1) list.push(String.fromCharCode(string.charCodeAt(i)))
			else array[string.charCodeAt(i) - 97] += 1
		}
	}

	return list
}

function Shape(type, edge) {
	this.type = type
	this.edge = edge

	this.getType = function() {
		return this.type
	}

	this.setType = function(type) {
		this.type = type
	}

	this.getEdge = function() {
		return this.edge
	}

	this.setEdge = function(edge) {
		this.edge = edge
	}
}

Shape.prototype.getArea = function(){
	return this.edge * 2
}

function Square(type, edge, length) {
	Shape.call(this, type, edge)

	this.length = length
}

Square.prototype = Object.create(Shape.prototype)

Square.prototype.getArea = function(){
	return this.length * this.edge	
}

var square_1 = new Square('square', 4, 5)

console.log(square_1 instanceof Square)

console.log('Type: %s - Area: %s', square_1.getType(), square_1.getArea())








