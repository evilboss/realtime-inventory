import React from "react";
import {connect} from 'react-redux'
import io from "socket.io-client"
import {Events} from "./Events";

let socket;
const mapStateToProps = (state = {}) => {
    // console.dir(state)
    return {...state};
};

export class Users extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<h1>Users</h1>)
    };
}

export default connect(mapStateToProps)(Users);