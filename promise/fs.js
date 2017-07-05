var fs = require('fs')
var promise = require('bluebird')
var request = require('request')
var mongoose = require('mongoose')
var needle = require('needle')
var User = require('../app/models/user.model')
var readFileAsync = promise.promisify(fs.readFile)

var getURLContent = function(url) {
	return new Promise((fulfill, reject) => {
		request.get(url).on('error', (error) => {
			reject(error)
		}).pipe(fs.createWriteStream('./files/index.html')).on('finish', () => {
			fulfill({ 'status': 200 })
		}).on('error', (error) => {
			reject(error)
		})
	})
}

var findUser = function (arg) {
	mongoose.connect('mongodb://localhost/myoutime')
	return new Promise((fulfill, reject) => {
		User.find(arg).select('email').exec((error, users) => {
			if (error) reject(error)
			if (users.length == 0) reject()
		})
	})
}

getURLContent('http://bluebirdjs.com/docs/getting-started.html').then((object) => {
	console.log('Status: ', object.status)
}).catch((error) => {
	console.log('Error: ', error.message)
})