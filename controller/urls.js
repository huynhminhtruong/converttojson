var request = require('request-promise')
var URL = require('../model/url')

function getUrls(url, next) {
	const options = {
		method: 'GET', 
		uri: url
	}, uri = new URL()

	request(options).then((data) => {
		uri.content = data
		uri.save((error, url) => {
			if (error) next(error)
			next(null, uri)
		})
	})
}

module.exports = (app) => {
	app.route('/urls').get((req, res) => {

	}).post((req, res) => {
		var url = req.body.url

		getUrls(url, (error, result) => {
			if (error) return res.status(304).json({ 'error': error })
			res.status(200).json({ 'Message': 'Get link successful' })
		})
	})
}