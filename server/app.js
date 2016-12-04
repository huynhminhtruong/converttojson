var http = require('http')
var express =require('express')()
var mongoose = require('mongoose')
var request = require('request-promise')
var bodyParser = require('body-parser')

var server = http.createServer((request, response) => {
	response.writeHead(200, { 'Content-Type': 'text/html' })
	response.write('<body>Hello world</body>')
	response.end()
})

mongoose.connect('mongodb://localhost/socketio')

express.use(bodyParser.urlencoded({ extended: false }))

require('../controller/urls')(express)

express.listen(9000, () => {
	console.log('Server is listening on port 9000')
})