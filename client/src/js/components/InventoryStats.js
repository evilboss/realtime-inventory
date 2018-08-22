import React from "react";
import ReactDOM from "react-dom"
import {Inventory} from "./Inventory";
import {connect} from "react-redux";

let socket;
const mapStateToProps = (state = {}) => {
    // console.dir(state)
    return {...state};
};

export class InventoryStats extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (<h1>Stats</h1>);

    }
}
export default connect(mapStateToProps)(InventoryStats);