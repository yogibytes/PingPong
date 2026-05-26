"use strict";
// import WebSocket, { WebSocketServer } from 'ws';
// import http from 'http';
Object.defineProperty(exports, "__esModule", { value: true });
// const server = http.createServer(function(request: any, response: any) {
//     console.log((new Date()) + ' Received request for ' + request.url);
//     response.end("hey server from this side glad to see you here");
// });
// const wss = new WebSocketServer({ server });
// let user = 0;
// wss.on('connection', function connection(ws) {
//   ws.on('error', console.error);
//   ws.on('message', function message(data, isBinary) {
//     wss.clients.forEach(function each(client) {
//       if (client.readyState === WebSocket.OPEN) {
//         client.send(data, { binary: isBinary });
//       }
//     });
//   });
//   // console.log(data);
//   ws.send('Hello! Message From Server!!');
//   console.log("user" + ++user);
// });
// server.listen(3000, function() {
//     console.log((new Date()) + ' Server is listening on port 3000');
// });
// import express from 'express'
// import { WebSocketServer } from 'ws'
// const app = express()
// const httpServer = app.listen(3000)
// const wss = new WebSocketServer({ server: httpServer });
// let user = 0;
// wss.on('connection', function connection(ws) {
//   ws.on('error', console.error);
//   ws.on('message', function message(data,isBinary) {
//     wss.clients.forEach(function each(client) {
//       if (client.readyState === WebSocket.OPEN) {
//         client.send(data, { binary: isBinary });
//       }
//     });
//   });
//   console.log("user " + ++user + " is connected");
//   ws.send('Hello! Message From Server!!');
// });
// console.log(" server is running on port 3000 ");
//# sourceMappingURL=index.js.map