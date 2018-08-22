import React from "react";
import ReactDOM from "react-dom"
import {connect} from 'react-redux'
import io from "socket.io-client"
import {Inventory} from "./Inventory";

const mapStateToProps = (state = {}) => {
    // console.dir(state)
    return {...state};
};

export class SensorsAll extends React.Component {
    render() {
        return (<h1>All Sensors</h1>)
    }

}

export default connect(mapStateToProps)(SensorsAll);