import React from "react";
import {connect} from 'react-redux'
import io from "socket.io-client"
import {DeviceSettings} from "./DeviceSettings";
let socket;
const mapStateToProps = (state = {}) => {
    // console.dir(state)
    return {...state};
};
export class Events extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<h1>Events</h1>)
    };
}
export default connect(mapStateToProps)(Events);