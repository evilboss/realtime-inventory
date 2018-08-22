import React from "react";
import ReactDOM from "react-dom"
import {connect} from 'react-redux'
import io from "socket.io-client"
import {
    loadInitialDataSocket,
    loadSensorSocket,
} from '../actions/action';

let socket;
const mapStateToProps = (state = {}) => {
    // console.dir(state);
    return {...state};
};

export class SensorsAll extends React.Component {
    constructor(props) {
        super(props);
        const {dispatch} = this.props;
        //    dispatch(loadInitialData())
        socket = io.connect("http://localhost:5000");
        dispatch(loadSensorSocket(socket));
        dispatch(loadInitialDataSocket(socket));

    }

    componentWillUnmount() {
        socket.disconnect();
        console.log('disconnecting');
    }

    render() {
        const {dispatch, sensors, items} = this.props;
        console.log(sensors, items);
        return (
            <div className='container'>
                <h1>All Sensors </h1>
                <div className="table-responsive">
                    <table className="table table-hover table-striped table-bordered table-dark">
                        <thead>
                        <tr>
                            <th scope="col">Status</th>
                            <th scope="col">Signature</th>
                        </tr>
                        </thead>
                        <tbody>
                        {sensors.map((sensor, key) => <tr>
                            <td>{sensor.status}</td>
                            <td>{sensor.signature}</td>
                        </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}

export default connect(mapStateToProps)(SensorsAll);