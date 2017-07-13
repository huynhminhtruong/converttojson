const routes = require('express').Router(), 
root = './views/', 
mainController = require('../controllers/main.controller')

routes.use('/companies', require('./companies'))
routes.use('/users', require('./users'))
routes.use('/projects', require('./projects'))
routes.use('/models', require('./models'))
routes.get('/', mainController.showHome)

module.exports = routes