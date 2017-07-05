var fs = require('fs')
var http = require('http')
var querystring = require('querystring')
var url = require('url')
var net = require('net')

var postData = querystring.stringify({
	'msg': 'Hello world'
})

var proxy = http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain' })
	res.end('Look good')
})

proxy.on('connect', (req, cltSocket, head) => {
  // connect to an origin server
  var srvUrl = url.parse(`http://${req.url}`)
  var srvSocket = net.connect(srvUrl.port, srvUrl.hostname, () => {
    cltSocket.write('HTTP/1.1 200 Connection Established\r\n' +
                    'Proxy-agent: Node.js-Proxy\r\n' +
                    '\r\n')
    srvSocket.write(head)
    srvSocket.pipe(cltSocket)
    cltSocket.pipe(srvSocket)
  })
  console.log('Proxy on connect')
})

proxy.listen(8080, 'localhost', () => {
	console.log('Server is running on ', 8080)

	var req = http.request({
		host: 'localhost', 
		port: 8080, 
		path: 'www.google.com:80', 
		method: 'CONNECT'
	})

	req.end()

	req.on('connect', (res) => {
		console.log('Connecting')

		socket.on('data', (chunk) => {
			console.log(chunk)
		})
	})
})