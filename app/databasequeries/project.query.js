const Project = require('../models/project.model')

function getAll(next) {
	Project.find({}).exec((error, Projects) => {
		next(Projects)
	})
}

function findById(id, next) {
	Project.findById({ _id: id}).exec((error, Project) => {
		next(Project)
	})
}

function findByName(name, next) {
	var nameRegExp = '/.*' + name + '.*/'
	Project.find({ name: nameRegExp }).exec((error, Projects) => {
		next(Projects)
	})
}

function insertProject(data, next) {
	const Project = new Project({
		name: data.name, 
		email: data.email
	})

	Project.save((error, Project) => {
		if (error) return next({ status: 304, error: error })

		next({ status: 200, Project: Project.toClient() })
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