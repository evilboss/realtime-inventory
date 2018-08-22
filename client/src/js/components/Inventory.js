import React from "react";
import ReactDOM from "react-dom"
import {connect} from 'react-redux'
import {
    addNewItem, loadInitialData, markItemComplete
    , loadInitialDataSocket, addNewItemSocket, markItemCompleteSocket
    , AddItem, completeItem
} from '../actions/action'
import io from "socket.io-client"
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin();

let robotFontStyle = {
    fontFamily: "Roboto, sans-serif",
    color: "rgba(0, 0, 0, 0.870588)"
};
let markCompleteStyle = {
    textDecoration: "line-through"
};
let socket;
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

                <div className="table-responsive">
                    <table className="table table-hover table-striped table-bordered table-dark">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Current Stock</th>
                            <th scope="col">Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        {items.map((item, key) => {
                            return <tr key={key} onClick={(event) => {
                                {/*dispatch(markItemComplete(key+1,!todo.completed))*/
                                }
                                dispatch(markItemCompleteSocket(socket, key + 1, !item.completed))
                            }

                            }>
                                <td>{key}</td>
                                <td> {item.name}</td>
                            </tr>
                        })
                        }
                        </tbody>
                    </table>
                </div>

                <input
                    hintText="Add New Item"
                    floatingLabelText="Enter the new item"
                    ref="newItem"
                />
                <button
                    onClick={() => {
                        const newItem = ReactDOM.findDOMNode(this.refs.newItem).value;
                        newItem === "" ? alert("Item shouldn't be blank")
                            : dispatch(addNewItemSocket(socket, items.size, newItem));
                        {/*: dispatch(addNewItem(items.size,newItem))*/
                        }
                        ReactDOM.findDOMNode(this.refs.newItem).value = ""
                    }
                    }
                >Add
                </button>

            </div>
        );
    }
}

export default connect(mapStateToProps)(Inventory);