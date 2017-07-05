var request = require('request')
var fs = require('fs')
var http = require('http')
var url = require('url')
var router = require('routes')()
var mongoose = require('mongoose')
var querystring = require('querystring')
var net = require('net')
var User = require('../../app/models/user.model')

// router.addRoute('GET /users', getUsers)

var server = http.createServer((req, res) => {
	var path = url.parse(req.url).pathname
	var match = router.match(req.method + ' ' + req.url)

	routes(req, res, () => {
		console.log('Routing')
	})

	// if (match) match.fn(req, res, match.params)
}).listen(9000, 'localhost', () => {
	console.log('Server is running on port %s', 9000)
})

function getUsers(req, res, next) {
	try {
		User.find({}).select('email').exec((error, users) => {
			if (error) return res.end(JSON.stringify({ error: error.message }))

			fs.readFile('../files/index.html', (error, html) => {
				if (error) return console.log(`{$error.message}`)

				try {
					res.writeHead(200, { 'Content-Type': 'application/json' })
					res.end(JSON.stringify({ user: users }))
				} catch(e) {
					returnError(e)
				}
			})
		})
	} catch(e) {
		returnError(e)
	}
}

function insertUser(req, res, next) {
	try {
		req.on('data', (data) => {
			try {
				var body = querystring.parse(data.toString())
				var user = new User({
					name: body.name, email: body.email
				})

				user.save((error, status) => {
					if (error) return res.end(JSON.stringify({ error: error.message }))

					try {
						res.writeHead(200, { 'Content-Type': 'application/json' })
						res.end(JSON.stringify({ status: status }))
					} catch(e) {
						returnError(e)
					}
				})
			} catch(e) {
				returnError(e)
			}
		})
	} catch(e) {
		returnError(e)
	}
}

function routes(req, res, next) {
	var method = req.method

	if (method == 'GET') return get(req, res, next)

	if (method == 'POST') return post(req, res, next)
}

function returnError(e) {
	console.log(e)
	res.writeHead(200, { 'Content-Type': 'application/json' })
	res.end(JSON.stringify({ status: 400, message: e}))
}

function get(req, res, next) {
	req.on('error', (error) => {
		console.log(`{$error.message]`)
		res.statusCode = 400
		res.end
	})

	res.on('error', (error) => {
		console.log(error)
	})

	if (req.url == '/users') return getUsers(req, res, next)
}

function post(req, res, next) {
	req.on('error', (error) => {
		console.log(`{$error.message]`)
		res.statusCode = 400
		res.end
	})

	res.on('error', (error) => {
		console.log(error)
	})

	if (req.url == '/users') return insertUser(req, res, next)
}