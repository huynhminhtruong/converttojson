const express = require('express'), 
mongoose = require('mongoose'), 
path = require('path'), 
cookieParser = require('cookie-parser'), 
bodyParser = require('body-parser'), 
consolidate = require('consolidate'), 
integration = require('../config/integration')
config = require('../config/development')

module.exports = function(app) {
	mongoose.connect(config.database.project, (e, db) => {
		if (e) console.log(e)
		console.log('On Connect: ', __dirname)
	})
	app.use(cookieParser())
	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({ extended: false }))
	app.set('views', path.join(__dirname, './views'))
	app.use(function(req, res, next) {
	    res.header('Access-Control-Allow-Origin', '*')
	    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS')
	    res.header('Access-Control-Allow-Headers', 'Authorization, Content-Length, X-Requested-With')
	    
	    next()
	})
	app.use(express.static(path.join(__dirname, '../public')))
	app.use(express.static(path.join(__dirname, '../bower_components')))
	app.use(express.static(path.join(__dirname, '../src')))
}