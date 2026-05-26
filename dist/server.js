"use strict";
// import express from 'express';
// const express = require('express');
// const http = require('http');
// const websocket  = require('ws');
Object.defineProperty(exports, "__esModule", { value: true });
// const app = express();
// app.get('/', (req,res) =>{
// 	console.log("you are on the http route");
// }
// //this is http server
// const server = http.createServer(app);
// // this is the websocket.server({server})
// const wss = new Websocket.Server({server});
// wss.on("connection", (socket)=>{
// /// what to do to send msg to the client like " say hi"
// console.log("hey socket is on the way");
// socket.send("hi from the server");
// socket.on("message", (msg)=>{
// console.log("Recieved " + msg.toString());
// socket.send(" this is the reply for what you say ");
// }
// 	/// how to log the msg of the client?
// socket.on("close", () => {
//     console.log("Client disconnected");
//   });
// }
// server.listen(3000,()=>{console.log("server is listening at port 3000)});
// const express = require('express');
// const http = require('http');
// // Destructure WebSocketServer directly from 'ws'
// const { WebSocketServer } = require('ws');
// const app = express();
// app.get('/', (req:any, res:any) => {
//     res.send("You are on the http route"); // Changed console.log to res.send so the browser loads
// });
// // Attach Express to the HTTP server
// const server = http.createServer(app);
// // Pass the HTTP server into the modern WebSocketServer instance
// const wss = new WebSocketServer({ server });
// let user:number = 0;
// wss.on("connection", (socket:import('ws').WebSocket) => {
//     console.log(`Hey, socket ${user} client connected!`);
//     socket.send("Hi from the server!");
//     socket.on("message", (msg) => {
//         console.log(`Received from client ${user}: ` + msg.toString());
//         socket.send("This is the reply for what you said");
//     });
//     ++user;
//     socket.on("close", () => {
//         console.log("Client disconnected");
//         console.log(--user + " user is alive");
//         // --user;
//     });
//     console.log(user + " user is alive");
// });
// // Start the unified server on port 3000
// server.listen(3000, () => {
//     console.log("Server is listening at port 3000");
// });
// in simple nodejs thing
// import { WebSocketServer } from 'ws';
// const wss = new WebSocketServer({ port: 8080 });
// wss.on('connection', function connection(ws) {
//   ws.on('error', console.error);
//   ws.on('message', function message(data) {
//     console.log('received: %s', data);
//   });
//   ws.send('something');
// });
// import express from 'express';
const ws_1 = require("ws");
// const cors = require('cors');
// const app = express();
const wss = new ws_1.WebSocketServer({ port: 8080 });
// app.use(cors());
wss.on("connection", function chat(ws) {
    console.log("websocket connection established successfull");
    ws.on('message', function message(data) {
        const fdata = data.toString();
        // console.log(typeof (fdata));
        Pingpong(fdata);
        console.log("User : ", fdata);
    });
    function Pingpong(msg) {
        if (msg === "PING" || msg === "ping") {
            ws.send("pong");
        }
        else if (msg === "PONG" || msg === "pong") {
            const sentmsg = ws.send("ping");
        }
        else
            ws.send("Say ping or pong");
    }
});
//# sourceMappingURL=server.js.map