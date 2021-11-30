import express from 'express';
import http from 'http';
import socketIo from 'socket.io';
import { colorfulLog } from 'colorful-log-node/index.js';

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  colorfulLog(`Connected to ${socket.client.id}`);

  socket.on('message', (data) => {
    colorfulLog(data);
  });

  socket.on('disconnect', () => {
    colorfulLog(`Disconnected from ${socket.client.id}`);
  });
});

server.listen(3000, () =>
  colorfulLog('Waiting on connection on port 3000', '')
);
