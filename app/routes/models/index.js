const modelRoutes = require('express').Router(), 
modelController = require('../../controllers/models.controller')

modelRoutes.get('/', modelController.getAll)

module.exports = modelRoutes