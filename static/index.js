const socket = io('/events');

socket.on('connect', () => {
  let count = 0;
  setInterval(() => {
    console.log(count);
    socket.emit('message', count++);
  }, 5000);
});
