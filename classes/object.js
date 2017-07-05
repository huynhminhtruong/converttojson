// (function(a_1, a_2) {
// 	console.log('f1: ', a_1 + a_2)
// }(1, 2));

var obj = { a: true }
console.log('Object: ', obj)
obj.a = false
console.log('Object: ', obj)

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

var func = {
	x: 1, 
	y: 2
}

var x, y

console.log('x, y are global: %s %s', x, y)

function s() {
	var x, y

	return {
		set: function(x_1, y_1) {
			x = x_1
			y = y_1
		}, 
		add: function() {
			return function(x_1, y_1) {
				console.log(x_1 + y_1)
			}
		}, 
		get_x: function() {
			return x
		}, 
		get_y: function() {
			return y
		}
	}
}

function person() {
	var name, age

	return {
		setName: function(name_1) {
			name = name_1
		}, 
		getName: function() {
			return name
		}
	}
}

function os() {
	return {
		name: 'Linux', 
		platform: 'cross-platform'
	}
}

var platform = {
	name: 'Unix', 
	platform: 'Unix'
}

var browser = function() {
	return {
		name: 'Chrome', 
		platform: 'cross-platform'
	}
}

var p_1 = person()
var p_2 = person()
var os_1 = os()
var os_2 = os()
var platform_1 = platform
var platform_2 = platform
var browser_1 = browser()
var browser_2 = browser()

browser_1.name = 'Firefox'

console.log('Browser 1: %s and Browser 2: %s', browser_1.name, browser_2.name)

os_2.name = 'Ubuntu'
platform_1.name = 'Ubuntu'

console.log('Platform 1: %s and Platform 2: %s', platform_1.name, platform_2.name)

console.log('OS 1: ', os_1.name)
console.log('OS 1: ', os_1.platform)

p_1.setName('John')

console.log(p_1.getName())
console.log(p_2.getName())

function showState() {
	console.log('Active')
}

var showState

showState()

showState = function() {
	console.log('Ready')
}










