//
// chat-app
//

const http = require('http');
const express = require('express');
const path = require('path');
const { Server } = require('socket.io');

const app = express();
const port = 9000;
const server = http.createServer(app);
const io = new Server(server);

// Socket.io
io.on('connection', (socket) => {
  console.log('A new user has connected', socket.id);
  socket.emit('hello', 'world');
});

app.use(express.static(path.resolve('./public')));

app.get('/', (req, res) => {
  return res.sendFile('./public/index.html');
});
server.listen(port, () => console.log(`Server started at PORT:${port}`));

// Socket.io
// io.on("connection", (socket) => {
//     socket.on("user-message", (message) => {
//       io.emit("message", message);
//     });
//   });
