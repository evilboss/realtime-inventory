import {Tail} from 'tail';
import Inventory from "../models/inventoryModel";

const tail = new Tail('./databases/items.db');
const emit = (socket, data) => {
    socket.emit('initialList', (data));
};
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
const InventorySocket = {
    start: start,
    list: list,
    insert: insert
};
export default InventorySocket;