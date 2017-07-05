var events = require('events')
var emitter = new events.EventEmitter()

var ring = function() {
	console.log('ring the bell')
}

emitter.on('ring', ring)
emitter.emit('ring')