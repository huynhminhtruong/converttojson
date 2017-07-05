var model = require('../databasequeries/model.query')

function getAll(req, res, next) {
	model.getCars((error, data) => {
		if (error) return res.json({ status: failure, data: null })

		res.status(200).json(data)
	})
}

module.exports = {
	getAll: getAll
}