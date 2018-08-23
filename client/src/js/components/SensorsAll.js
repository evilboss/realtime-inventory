import React from "react";
import ReactDOM from "react-dom"
import {connect} from 'react-redux'
import io from "socket.io-client"
import {
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
    }

    componentWillUnmount() {
        socket.disconnect();
        console.log('disconnecting');
    }

    render() {
        const {dispatch, sensors} = this.props;
        return (
            <div className='container'>
                <h1>All Sensors </h1>
                <div className="table-responsive">
                    <table className="table table-hover table-striped table-bordered table-dark">
                        <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Status</th>
                            <th scope="col">Signature</th>
                            <th scope="col">Name</th>
                            <th scope="col">Item Asigned</th>
                            <th scope="col">Device Color</th>
                            <th scope="col">Item Weight</th>
                        </tr>
                        </thead>
                        <tbody>
                        {sensors.map((sensor, key) => <tr key={key}>
                            <td><span className={'badge badge-success'}>{sensor.status}</span></td>
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