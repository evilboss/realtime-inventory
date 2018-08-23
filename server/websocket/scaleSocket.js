import {Tail} from 'tail';
import Scales from "../models/scaleModel";

const emit = (socket, data) => {
    socket.emit('scaleList', JSON.parse(data));
};
const emitData = () => {
};

const list = (socket) => {
    Scales.get((err, res) => {
        (res) ? emit(socket, res) : ''
    });
};
const start = (socket) => {
    list(socket);
};
const ScaleSocket = {
    start: start,
    list: list,
};
export default ScaleSocket;