var mongoose = require('mongoose')
var Schema = mongoose.Schema
// var db = mongoose.connect('mongodb://localhost/socketio')

var isInteger = function (number) {
    return new RegExp('^[0-9]+$').test(number)
}

var encrypt = function (string) {
    return crypto.createHash('sha256').update(string).digest('base64')
}

var UserSchema = new Schema({
	firstName: {
		type: String, 
		trim: true
	}, 
	lastName: {
		type: String, 
		trim: true
	}, 
	phoneNumber: {
		type: Number, 
		validate: isInteger
	}, 
	project: {
		type: Schema.Types.ObjectId, 
		ref: 'Project'
	}, 
	status: {
		type: Number, 
		validate: isInteger
	}
})

UserSchema.virtual('fullName').get(function() {
	return this.firstName + ' ' + this.lastName
})

UserSchema.methods.toClient = function() {
	return {
		id: this._id, 
		name: this.fullName, 
		project: this.project
	}
}

module.exports = mongoose.model('User', UserSchema)