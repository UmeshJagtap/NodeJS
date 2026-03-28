// index.html

<body>
<ol>
	
</ol>
<script>
	const socket = io();
	function sendMessage(){
		const input = document.getElementById('messageInput');
	}
</script>

// index.js
const express = require('express');
const http = require('http');
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = new Server(server);

app.get("/", (req, res) => {
	res.sendFile(_dirname + "/index.html");
});

io.on('connection',(socket) => {
	console.log("connected===", socket.id);

	socket.on("chat message", (msg) => {
		try {
			if(!msg) {
				console.log('message should not be empty');
			}
			io.emit('chat message', msg);
		} catch(err) {
			console.log(err);
		}
	});
}

socket.on('connect_error', (err) => {
	console.log('connection failed');
});

socket.broadcast.emit('event', data)

server.listen(3000, () => {
	console.log('server running =====');
})