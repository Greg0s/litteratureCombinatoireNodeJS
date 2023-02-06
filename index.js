const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
  cors: {
    origin: "*"
  }
})

io.on('connection', (socket) => {
  socket.on("msg", (data) => {
    socket.broadcast.emit('event', data);
  });

});

http.listen(5000, () => {
  console.log('listening on *:' + 5000);
});