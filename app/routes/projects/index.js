const projectRoutes = require('express').Router(), 
multer = require('multer'), 
projectController = require('../../controllers/project.controller')

// Apply same middleware for these paths
projectRoutes.use(['/', '/:projectid'], projectController.log, projectController.logSuccess)

projectRoutes.get('/', projectController.getAll)
projectRoutes.get('/:projectid', projectController.getProject)
projectRoutes.post('/new', projectController.add)
projectRoutes.put('/edit/:projectid', projectController.update)
projectRoutes.delete('/remove/:projectid', projectController.remove)
projectRoutes.post('/search', projectController.search)

module.exports = projectRoutes