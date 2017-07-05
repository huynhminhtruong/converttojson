const Company = require('../models/company.model')

function getAll(next) {
	Company.find({}, { _id: 0, name: 1, category_code: 1 }).exec((error, companies) => {
		if (error) return next(error, null)

		next(null, companies)
	})
}

module.exports = {
	getAll: getAll
}