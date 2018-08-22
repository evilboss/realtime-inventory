import axios from "axios";
import _ from 'underscore';

const formatSensors = (sensors, items) => {
    let formatedSensors = [];
    _.each(sensors, (sensor) => {
        formatedSensors.push({name: sensor.name, signature: sensor.signature});
    });
};

export const AddItem = (data) => ({
    type: "ADD_ITEM",
    item: data.item,
    itemId: data.id,
    completed: data.completed
});

export const completeItem = (data) => ({
    type: "COMPLETED_ITEM",
    itemId: data.id,
    completed: data.completed
});

/* Used only by actions for sockets */
export const initialItems = (res) => ({
    type: "INITIAL_ITEMS",
    items: res
});


export const sensorList = (res) => ({
    type: "SENSOR_LIST",
    sensors: res
});

/***************************************************************************************** */
/* Async Action items using - Sockets													   */
/***************************************************************************************** */
export const loadInitialDataSocket = (socket) => {
    return (dispatch) => {
        // dispatch(clearAllItems())
        socket.on('initialList', (res) => {
            console.dir(res);
            dispatch(initialItems(res))
        })
    }
};
export const loadSensorSocket = (socket) => {
    return (dispatch) => {
        // dispatch(clearAllItems())
        socket.on('sensorList', (res) => {
            //console.dir(res);
            dispatch(sensorList(res));
        })
    }
};
export const addNewItemSocket = (socket, id, itemName) => {
    return (dispatch) => {
        let data = {
            name: itemName
        };
        socket.emit('addItem', data);
    }
};

export const markItemCompleteSocket = (socket, id, completedFlag) => {
    return (dispatch) => {
        let postData = {
            id: id,
            completed: completedFlag
        };
        socket.emit('markItem', postData)
    }
};

