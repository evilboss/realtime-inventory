import {List} from 'immutable';

let id = 0;
const initialState = {items: List([]), sensors: List([]), events: List([])};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                items: state.items.push({id: action.itemId, item: action.item, completed: action.completed})
            };

        case 'COMPLETED_ITEM':
            return {
                ...state,
                items: state.items.update(action.itemId - 1, (value) => {
                    return {...value, completed: action.completed}
                })
            };
        case 'INITIAL_ITEMS':
            return {
                ...state,
                items: List(action.items)
            };
        case 'SENSOR_LIST':
            return {
                ...state,
                sensors: List(action.sensors)
            };
        case 'SCALE_LIST':
            return {
                ...state,
                scales: List(action.scales)
            };
        case 'EVENT_LIST':
            return {
                ...state,
                events: List(action.events)
            };
        default:
            return state
    }
};


export default reducer
