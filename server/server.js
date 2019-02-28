const WebSocket = require('ws');
 
const server = new WebSocket.Server({ port: 8080 });
 
server.on('connection', socket => {
  socket.on('message', message => {
    console.log(`received from a client: ${message}`);
  });
  socket.send('Hello world!');
});

server.on('connection', function connection(ws, req) {
	let url = require('url').parse(req.url);
	var query = url.parse(req.url,true).query;
  	const ip = req.connection.remoteAddress;
	console.log(ip);
	console.log(query);
});
