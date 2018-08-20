import React from "react";
import ReactDOM from "react-dom"
import {connect} from 'react-redux'
import {
    addNewItem, loadInitialData, markItemComplete
    , loadInitialDataSocket, addNewItemSocket, markItemCompleteSocket
    , AddItem, completeItem
} from '../actions/action'
import io from "socket.io-client"


// import {List as List} from 'immutable';

import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin();

let robotFontStyle = {
    fontFamily: "Roboto, sans-serif",
    color: "rgba(0, 0, 0, 0.870588)"
};
let markCompleteStyle = {
    textDecoration: "line-through"
};
let socket
const mapStateToProps = (state = {}) => {
    // console.dir(state)
    return {...state};
};

export class Inventory extends React.Component {
    constructor(props) {
        super(props);
        const {dispatch} = this.props;
        //    dispatch(loadInitialData())
        socket = io.connect("http://localhost:5000");
        console.dir(socket);
        dispatch(loadInitialDataSocket(socket));

        socket.on('itemAdded', (res) => {
            console.dir(res);
            dispatch(AddItem(res))
        });

        socket.on('itemMarked', (res) => {
            console.dir(res);
            dispatch(completeItem(res))
        });
    }

    componentWillUnmount() {
        socket.disconnect();
        console.log('disconnecting');
    }

    render() {
        const {dispatch, items} = this.props;

        return (
            <div>
                <h1 style={robotFontStyle}>Machine Vision Inventory</h1>

                <input
                    hintText="Add New Item"
                    floatingLabelText="Enter the new item"
                    ref="newTodo"
                />
                <button
                    label="Click to add!" primary={true}
                    onTouchTap={() => {
                        const newItem = ReactDOM.findDOMNode(this.refs.newTodo.input).value;
                        newItem === "" ? alert("Item shouldn't be blank")
                            : dispatch(addNewItemSocket(socket, items.size, newItem));
                        {/*: dispatch(addNewItem(items.size,newItem))*/
                        }
                        ReactDOM.findDOMNode(this.refs.newTodo.input).value = ""
                    }
                    }
                />
                <ul>{items.map((item, key) => {
                    return <li key={key} style={item.completed ? markCompleteStyle : {}} onClick={(event) => {
                        {/*dispatch(markItemComplete(key+1,!todo.completed))*/
                        }
                        dispatch(markItemCompleteSocket(socket, key + 1, !item.completed))
                    }
                    } primaryText={item.name}>
                    </li>
                })
                }</ul>

            </div>
        );
    }
}

export default connect(mapStateToProps)(Inventory);