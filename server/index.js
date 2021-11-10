const http = require('http');
const express = require('express');
const cors = require('cors');
const socketIO = require('socket.io');
// const { disconnect } = require('process');

const app = express();
const port = 4500 || process.env.PORT;

const users = [];

app.use(cors());
app.get('/', (req, res) => {
  res.send('ITS WORKING');
});

const server = http.createServer(app);

const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('New Connection');

  socket.on('joined', (e) => {
    users[socket.id] = e.name;
    console.log(`${e.name} has joined`);
    socket.broadcast.emit('userJoined', {
      user: 'Admin',
      message: `${users[socket.id]} has joined`,
    });
    socket.emit('welcome', {
      user: 'Admin',
      message: `Welcome to the chat, ${users[socket.id]}`,
    });
  });

  socket.on('message', ({ message, id }) => {
    io.emit('sendMessage', { user: users[id], message, id });
  });

  socket.on('userDisconnect', () => {
    socket.broadcast.emit('leave', {
      user: 'Admin',
      message: ` ${users[socket.id]} has left`,
    });
    console.log('User left');
  });
});

server.listen(port, () => {
  console.log(`server is working on http://localhost:${port}`);
});
