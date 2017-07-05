var bot = require('facebook-chat-api')

bot({ email: 'huynhminhtruong2003@gmail.com', password: 'truongcode**@)' }, (error, api) => {
	if (error) return console.log(`${error}`)

	try {
		var answeredThread = {}

		api.setOptions({ listenEvents: true })

		api.listen((error, message) => {
			try {
				if (!answeredThread.hasOwnProperty(message.threadID)) {
					answeredThread[message.threadID] = true
					api.sendMessage('BOT - Hi bạn đang nói chuyện với bot của tui! Tui sẽ trả lời sau :D!', message.threadID)
				}
			} catch(e) {
				console.log(e)
			}
		})
	} catch(e) {
		console.log(e)
	}
})