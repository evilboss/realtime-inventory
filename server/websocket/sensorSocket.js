import {Tail} from 'tail';
import Sensors from "../models/sensorModel";

const emit = (socket, data) => {
    socket.emit('sensorList', data);
};
const emitData = () => {
};

const list = (socket) => {
    Sensors.get((err, res) => {
        (res) ? emit(socket, res) : '';
    });
};
const insert = (socket) => {
    socket.on('addSensor', (addData) => {
        Sensors.set(addData, (err, res) => {
            (res) ? list(socket) : console.log(err);
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