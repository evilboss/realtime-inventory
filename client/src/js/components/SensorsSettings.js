import React from "react";
import ReactDOM from "react-dom"
import {connect} from 'react-redux'
import io from "socket.io-client"
const mapStateToProps = (state = {}) => {
    return {...state};
};
export class SensorsSettings extends React.Component {
    render() {
        return (<h1>Sensor Settings</h1>)
    }

}
export default connect(mapStateToProps)(SensorsSettings);