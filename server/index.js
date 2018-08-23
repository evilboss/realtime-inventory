var express = require("express"),
    http = require("http"),
    app = require("express")(),
    server = http.createServer(app),
    bodyParser = require("body-parser"),
    io = require("socket.io")(server),
    liveCart = [];
import dotenv from 'dotenv';
import axios from 'axios';
import Inventory from './models/inventoryModel';
import {InventorySocket, SensorSocket, ScaleSocket} from './websocket/index';

dotenv.config();

const PORT = process.env.PORT || 8001;
console.log("Machine Visoin Devices running");
console.log("Server started");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.all("/*", function (req, res, next) {
    // CORS headers
    res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    // Set custom headers for CORS
    res.header(
        "Access-Control-Allow-Headers",
        "Content-type,Accept,X-Access-Token,X-Key"
    );
    if (req.method == "OPTIONS") {
        res.status(200).end();
    } else {
        next();
    }
});

app.get("/", function (req, res) {
    res.send(" Real time POS web app running.");
});

app.use("/api/devices", require("./api/devices"));
app.use("/api/inventory", require("./api/inventory"));
app.use('/api/events', require('./api/events'));

server.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
const connections = [];
io.on('connection', function (socket) {
    connections.push(socket);
    socket.on('disconnect', function () {
        console.log('Disconnected - ' + socket.id);
    });

    InventorySocket.start(socket);
    SensorSocket.start(socket);
    ScaleSocket.start(socket);
});