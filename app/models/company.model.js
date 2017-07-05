var mongoose = require('mongoose')
var Schema = mongoose.Schema

var CompanySchema = new Schema({
	name: {
		type: String, 
		trim: true
	}
})

CompanySchema.methods.toClient = function() {
	return {
		id: this._id, 
		name: this.name
	}
}

module.exports = mongoose.model('Company', CompanySchema)