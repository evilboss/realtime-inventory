import React, {Component} from "react";
import "./App.css";
import Header from "./Header";
import Product from "./Product";
import axios from "axios";
import {Modal, Button, SplitButton, MenuItem, ButtonToolbar} from "react-bootstrap";

const HOST = "http://localhost:8001";
const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger'];

class Devices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            snackMessage: "",
            deviceList: ""
        }

    }

    componentWillMount() {
        var url = HOST + `/api/devices/all`;
        axios.get(url).then(response => {
            this.setState({deviceList: response.data});

        });
    }

    handleSnackbar = () => {
        var bar = document.getElementById("snackbar");
        bar.className = "show";
        setTimeout(function () {
            bar.className = bar.className.replace("show", "");
        }, 3000);
    };
    renderDropdownButton = (title, i) => {
        return (
            <SplitButton
                bsStyle={title.toLowerCase()}
                bsSize="large"
                title={title}
                key={i}
                id={`dropdown-basic-${i}`}
            >
                <MenuItem eventKey="1">Action</MenuItem>
                <MenuItem eventKey="2">Another action</MenuItem>
                <MenuItem eventKey="3" active>
                    Active Item
                </MenuItem>
                <MenuItem divider/>
                <MenuItem eventKey="4">Separated link</MenuItem>
            </SplitButton>
        );
    };
    renderMenuItem = (device, idx) => {
        console.log(device, idx);
        return (
            <MenuItem eventKey="1">Device {device.deviceId}</MenuItem>
        );
    };

    buttonsInstance = (
        <ButtonToolbar>{BUTTONS.map(this.renderDropdownButton)}</ButtonToolbar>
    );


    render() {
        let {snackMessage, deviceList} = this.state;
        return (
            <div>
                <Header/>

                <div class="container">
                    {(deviceList) ? <SplitButton
                        bsSize="large"
                        title="Devices"
                        key="device"
                        id={`dropdown-basic-device`}
                    >
                        {
                            deviceList.map(this.renderMenuItem)
                        }
                    </SplitButton> : ''}
                </div>
                <div id="snackbar">{snackMessage}</div>
            </div>
        );
    }
}

export default Devices;
