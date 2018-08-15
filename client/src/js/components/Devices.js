import React, {Component} from "react";
import "./App.css";
import Header from "./Header";
import Product from "./Product";
import axios from "axios";
import {Modal, Button} from "react-bootstrap";

const HOST = "http://localhost:80";

class Devices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            snackMessage: ""
        }

    }

    componentWillMount() {

    }

    handleSnackbar = () => {
        var bar = document.getElementById("snackbar");
        bar.className = "show";
        setTimeout(function () {
            bar.className = bar.className.replace("show", "");
        }, 3000);
    };

    render() {
        let {snackMessage} = this.state;

        return (
            <div>
                <Header/>

                <div class="container">
                    Device List
                </div>
                <div id="snackbar">{snackMessage}</div>
            </div>
        );
    }
}

export default Devices;
