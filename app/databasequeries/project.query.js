const Project = require('../models/project.model')

function getAll(next) {
	Project.find({}).exec((error, projects) => {
		next(projects)
	})
}

function findById(id, next) {
	Project.findById({ _id: id}).exec((error, project) => {
		next(project)
	})
}

function findByName(name, next) {
	var nameRegExp = '/.*' + name + '.*/'
	Project.find({ name: nameRegExp }).exec((error, projects) => {
		next(projects)
	})
}

function insertProject(data, next) {
	const Project = new Project({
		name: data.name, 
		email: data.email
	})

	Project.save((error, project) => {
		if (error) return next({ status: 304, error: error })

		next({ status: 200, Project: project.toClient() })
	})
}

function removeProject(filter, next) {
	Project.remove(filter).exec((error, status) => {
		next(status)
	})
}

function updateProject(filter, data, next) {
	Project.update(filter, {$set: data }).exec((error, status) => {
		if (error) return next({ status: 304, error: error })

		next({ status: 200, status: status })
	})
}

module.exports = {
	getAll: getAll, 
	findById: findById, 
	findByName: findByName, 
	insertProject: insertProject, 
	removeProject: removeProject, 
	updateProject: updateProject
}