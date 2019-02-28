const WebSocket = require('ws');
const socket = new WebSocket('ws://localhost:8080/route1?clientId=myClient&username=foo');
 
socket.addEventListener('open', () => {
  socket.send('Hello World!');
});
 
socket.addEventListener('message', event => {
  console.log(`Message from server: ${event.data}`);
});
