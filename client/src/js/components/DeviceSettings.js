import React from "react";
import ReactDOM from "react-dom"
import {connect} from 'react-redux'
import io from "socket.io-client"
const mapStateToProps = (state = {}) => {
    // console.dir(state)
    return {...state};
};
export class DeviceSettings extends React.Component {
    render() {
        return (<h1>Device Settings</h1>)
    }

}
export default connect(mapStateToProps)(DeviceSettings);