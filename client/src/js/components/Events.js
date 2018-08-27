import React from "react";
import {connect} from 'react-redux'
import io from "socket.io-client"
import {loadEventsData} from "../actions/action";

let socket;
const mapStateToProps = (state = {}) => {
    // console.dir(state)
    return {...state};
};

export class Events extends React.Component {
    constructor(props) {
        super(props);
        const {dispatch} = this.props;
        socket = io.connect("http://192.168.1.233:5000");
        dispatch(loadEventsData(socket));
    }

    render() {
        const {dispatch, events} = this.props;
        console.log(events);
        return (<h1>Events</h1>)
    };
}

export default connect(mapStateToProps)(Events);
