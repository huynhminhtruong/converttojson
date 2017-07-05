const companiesRoutes = require('express').Router(), 
companiesController = require('../../controllers/companies.controller')

companiesRoutes.use(['/'], companiesController.connection)

companiesRoutes.get('/', companiesController.getCompanies)

module.exports = companiesRoutes