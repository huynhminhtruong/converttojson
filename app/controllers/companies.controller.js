var Company = require('../models/company.model'), 
dbquery = require('../databasequeries/company.query'), 
mongoose = require('mongoose')

function getCompanies(req, res, next) {
	dbquery.getAll((error, companies) => {
		if (error != null) return res.status(404).json({ error: error.message })

		res.status(200).json({ companies: companies })
	})
}

function connection(req, res, next) {
	console.log('Company route is working')
	next()
}

function getUsers(req, res, next) {
	next();
}

module.exports = {
	getCompanies: getCompanies, 
	connection: connection
}