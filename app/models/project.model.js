var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ProjectSchema = new Schema({
	name: {
		type: String, 
		trim: true
	}, 
	users: [
		{
			type: Schema.Types.ObjectId, 
			ref: 'User'
		}
	]
})

ProjectSchema.methods.toClient = function() {
	return {
		id: this._id, 
		name: this.name, 
		users: this.users
	}
}

module.exports = mongoose.model('Project', ProjectSchema)