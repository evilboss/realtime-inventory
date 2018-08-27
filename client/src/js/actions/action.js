import axios from "axios";
import _ from 'underscore';

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
export const scaleList = (res) => ({
    type: "SCALE_LIST",
    scales: res
});
export const eventList = (res) => ({
    type: "EVENT_LIST",
    scales: res
});

/***************************************************************************************** */
/* Async Action items using - Sockets													   */
/***************************************************************************************** */
export const loadInitialDataSocket = (socket) => {
    return (dispatch) => {
        // dispatch(clearAllItems())
        socket.on('initialList', (res) => {
            // console.dir(res);
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
export const loadScaleSocket = (socket) => {
    return (dispatch) => {
        // dispatch(clearAllItems())
        socket.on('scaleList', (res) => {
            // console.dir(res);
            dispatch(scaleList(res));
        })
    }
};
export const loadEventsData = (socket) => {
    return (dispatch) => {
        // dispatch(clearAllItems())
        socket.on('eventList', (res) => {
            dispatch(eventList(res));
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

