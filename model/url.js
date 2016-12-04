var mongoose = require('mongoose')
var Schema = mongoose.Schema

var URLSchema = new Schema({
	content: String
})

module.exports = mongoose.model('URL', URLSchema)