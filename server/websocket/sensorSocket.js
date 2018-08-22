import {Tail} from 'tail';
import Devices from "../models/deviceModel";

const emit = (socket, data) => {
    socket.emit('sensorList', JSON.parse(data));
};
const emitData = () => {
};

const list = (socket) => {
    Devices.get((err, res) => {
        console.log(err, res);
        (res) ? emit(socket, res) : ''
    });
};
const insert = (socket) => {
    socket.on('setDevice', (addData) => {
        Inventory.insert(addData, (err, res) => {
            (res) ? list(socket) : ''

        });
    });
};
const start = (socket) => {
    list(socket);
    insert(socket);
};
const SensorSocket = {
    start: start,
    list: list,
    insert: insert
};
export default SensorSocket;