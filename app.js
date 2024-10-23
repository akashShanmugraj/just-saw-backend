const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

// Initialize express and HTTP server
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files (optional, e.g., HTML)
app.use(express.static(__dirname + '/public'));

// Socket.IO connection event
io.on('connection', (socket) => {
    console.log('A user connected', socket.id);

    // Listen for custom events
    socket.on('message', (msg) => {
        console.log('Message received:', msg);

        // Broadcast message to other clients
        socket.broadcast.emit('message', msg);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('User disconnected', socket.id);
    });
});

// Start the server
const PORT = 3160;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

