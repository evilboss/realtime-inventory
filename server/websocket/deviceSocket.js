import {Tail} from 'tail';
import Devices from "../models/deviceModel";
const tail = new Tail('./databases/devices.db');
const emit = (socket, data) => {
    socket.emit('deviceList', (data));
};
const emitData = ()=>{};

const list = (socket) => {
    Inventory.get((err, res) => {
        (res) ? emit(socket, res) : ''
    });
};
const insert = (socket) => {
    socket.on('addItem', (addData) => {
        Inventory.insert(addData, (err, res) => {
            (res) ? list(socket) : ''

        });
    });
};
const start = (socket) => {
    list(socket);
    insert(socket);
};
const DeviceSocket = {
    start: start,
    list: list,
    insert: insert
};
export default DeviceSocket;