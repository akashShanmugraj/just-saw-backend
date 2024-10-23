<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Socket.IO Chat</title>
    <script src="/socket.io/socket.io.js"></script>
</head>
<body>
    <h1>Socket.IO Chat</h1>
    <input id="message" placeholder="Type a message...">
    <button id="send">Send</button>

    <ul id="messages"></ul>

    <script>
        const socket = io();

        document.getElementById('send').onclick = () => {
            const msg = document.getElementById('message').value;
            socket.emit('message', msg);
            document.getElementById('message').value = '';
        };

        // Listen for messages
        socket.on('message', (msg) => {
            const messages = document.getElementById('messages');
            const li = document.createElement('li');
            li.innerText = msg;
            messages.appendChild(li);
        });
    </script>
</body>
</html>

