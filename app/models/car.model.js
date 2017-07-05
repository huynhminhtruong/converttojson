var mongoose = require('mongoose')
var Schema = mongoose.Schema

var modelSchema = new Schema({
	author: {
		type: Schema.Types.ObjectId, 
		ref: 'User'
	}, 
	content: {
		type: String
	}, 
	like: {
		type: Number, 
		'default': 0
	}
})

module.exports = mongoose.model('Car', modelSchema)