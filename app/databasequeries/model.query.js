var Model = require('../models/car.model')

function getCars(next) {
	Model.find({}).exec((error, data) => {
		if (error) next(error, data)
		next(null, data)
	})
}

module.exports = {
	getCars: getCars
}