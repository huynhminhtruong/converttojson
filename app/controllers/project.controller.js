var Project = require('../models/project.model'), 
dbquery = require('../databasequeries/project.query'), 
mongoose = require('mongoose')

function getProjects(req, res, next) {
	dbquery.getAll((Projects) => {
		res.status(200).json(Projects)
	})
}

function getProject(req, res, next) {
	dbquery.findById(mongoose.Types.ObjectId(req.params.projectid), (Project) => {
		res.status(200).json(Project.toClient())
	})
}

function addProject(req, res, next) {
	dbquery.insertProject({
		name: req.body.name, 
		email: req.body.email
	}, (data) => {
		if (data.status != 200 ) return res.status(500).json(data.error)
			
		res.status(200).json(data)
	})
}

function updateProject(req, res, next) {
	var filter = { _id: mongoose.Types.ObjectId(req.params.projectid) }, 
	data = { name: req.body.name }

	dbquery.updateProject(filter, data, (data) => {
		if (data.status != 200) return res.status(500).json(data.error)

		getProjects(req, res, () => {
			console.log('update Project')
		})
	})
}

function removeProject(req, res, next) {
	dbquery.removeProject({ _id: mongoose.Types.ObjectId(req.params.projectid) }, (status) => {
		getProjects(req, res, () => {
			console.log('remove Project')
		})
	})
}

function searchByEmail(req, res, next) {
	dbquery.findByEmail(req.body.email, (Project) => {
		res.status(200).json({ message: 'search Project by email', data: Project })
	})
}

function log(req, res, next) {
	console.log('Show log 1')
	next()
}

function logSuccess(req, res, next) {
	console.log('Show success log')
	next()
}

function render(req, res, next) {
	res.status(200).json({ template: 'Render template' })
}

module.exports = {
	getAll: getProjects, 
	getProject: getProject, 
	add: addProject, 
	update: updateProject, 
	remove: removeProject, 
	search: searchByEmail, 
	log: log, 
	logSuccess: logSuccess, 
	renderTemplate: render
}