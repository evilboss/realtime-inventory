import React from "react";
import ReactDOM from "react-dom";
import {connect} from 'react-redux';
import io from "socket.io-client";
import {Bar, Line} from 'react-chartjs-2';
import {CustomTooltips} from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {getStyle, hexToRgba} from '@coreui/coreui/dist/js/coreui-utilities'
import {SensorCard} from "./SensorCard";
import {
    Badge,
    Button,
    ButtonDropdown,
    ButtonGroup,
    ButtonToolbar,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardTitle,
    Col,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Progress,
    Row,
    Table,
} from 'reactstrap';
import {loadSensorSocket, loadInitialDataSocket} from "../actions/action";

let socket;
const brandPrimary = getStyle('--primary');
const brandSuccess = getStyle('--success');
const brandInfo = getStyle('--info');
const brandWarning = getStyle('--warning');
const brandDanger = getStyle('--danger');
const colorArray = [
    'bg-primary', 'bg-info', 'bg-success', 'bg-warning', 'bg-danger'];
const getRandomColor = () => {

    let randomIndex = Math.floor(Math.random() * colorArray.length);
    let randomColor = colorArray[randomIndex];
    return randomColor;

};
// Card Chart 2
const cardChartData2 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: brandInfo,
            borderColor: 'rgba(255,255,255,.55)',
            data: [1, 18, 9, 17, 34, 22, 11],
        },
    ],
};

const cardChartOpts2 = {
    tooltips: {
        enabled: false,
        custom: CustomTooltips
    },
    maintainAspectRatio: false,
    legend: {
        display: false,
    },
    scales: {
        xAxes: [
            {
                gridLines: {
                    color: 'transparent',
                    zeroLineColor: 'transparent',
                },
                ticks: {
                    fontSize: 2,
                    fontColor: 'transparent',
                },

            }],
        yAxes: [
            {
                display: false,
                ticks: {
                    display: false,
                    min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
                    max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
                },
            }],
    },
    elements: {
        line: {
            tension: 0.00001,
            borderWidth: 1,
        },
        point: {
            radius: 4,
            hitRadius: 10,
            hoverRadius: 4,
        },
    },
};
const mapStateToProps = (state = {}) => {
    // console.dir(state);
    return {...state};
};

export class SensorsSettings extends React.Component {

    constructor(props) {
        super(props);
        const {dispatch} = this.props;
        socket = io.connect("http://localhost:5000");
        dispatch(loadSensorSocket(socket));
        dispatch(loadInitialDataSocket(socket));
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
            radioSelected: 2,
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
        });
    }


    render() {
        getRandomColor();
        const {sensors, items} = this.props;
        return (
            <div className='container-fluid'>
                <div className='animated fadeIn'>
                    <Row><h1>Sensor Settings</h1>
                    </Row>
                    <Row>
                        {
                            sensors.map(
                                (sensor, key) =>
                                    <SensorCard key={key} sensor={sensor} colors={colorArray} color={getRandomColor()}
                                                items={items}/>
                            )
                        }
                    </Row>
                </div>
            </div>
        )
    }

}

export default connect(mapStateToProps)(SensorsSettings);