const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
  cors: {
    origin: "*"
  }
})

io.on('connection', (socket) => {
  socket.on("clickBristol", () => {
    socket.broadcast.emit('receiveEvent');
  });
  socket.on("restartBristol", () => {
    socket.broadcast.emit('receiveRestart');
  });
});

http.listen(5000, () => {
  console.log('listening on *:' + 5000);
});