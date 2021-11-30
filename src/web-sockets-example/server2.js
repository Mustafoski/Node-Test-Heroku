import { io } from 'socket.io-client';
import { colorfulLog } from 'colorful-log-node';

const createSocketClient = (name, interval) => {
  const socket = io('http://localhost:3000/');

  socket.on('connect', () => {
    colorfulLog(`${name} connected`);

    setInterval(() => {
      // const randomNumber = Math.ceil(Math.random() * 100);
      // socket.emit('newNumber', `Here's your number ${randomNumber}`);
      socket.emit('message', `Hello from ${name}`);
    }, interval);
  });

  socket.on('disconnect', () => {
    colorfulLog(`${name} Disconnected`);
  });
};

createSocketClient('Client server 1', 2000);
createSocketClient('Client server 2', 5000);
