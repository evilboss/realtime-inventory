import React from "react";
import ReactDOM from "react-dom";
import {connect} from 'react-redux';
import io from "socket.io-client";
import {Bar, Line} from 'react-chartjs-2';
import {CustomTooltips} from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {getStyle, hexToRgba} from '@coreui/coreui/dist/js/coreui-utilities'

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
import {loadSensorSocket} from "../actions/action";

let socket;
const brandPrimary = getStyle('--primary');
const brandSuccess = getStyle('--success');
const brandInfo = getStyle('--info');
const brandWarning = getStyle('--warning');
const brandDanger = getStyle('--danger');

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
        const {sensors} = this.props;
        return (
            <div className='container-fluid'>
                <div className='animated fadeIn'>
                    <Row>
                        <h1>Sensor Settings</h1>

                        <Col xs="12" sm="6" lg="3">
                            <Card className="text-white bg-info">
                                <CardBody className="pb-0">
                                    <ButtonGroup className="float-right">
                                        <ButtonDropdown id='card1' isOpen={this.state.card1} toggle={() => {
                                            this.setState({card1: !this.state.card1});
                                        }}>
                                            <DropdownToggle caret className="p-0" color="transparent">
                                                <i className="icon-settings"></i>
                                            </DropdownToggle>
                                            <DropdownMenu right>
                                                <DropdownItem>Action</DropdownItem>
                                                <DropdownItem>Another action</DropdownItem>
                                                <DropdownItem disabled>Disabled action</DropdownItem>
                                                <DropdownItem>Something else here</DropdownItem>
                                            </DropdownMenu>
                                        </ButtonDropdown>
                                    </ButtonGroup>
                                    <div className="text-value">Sensor Signature</div>
                                    <div>Sensor Status</div>
                                </CardBody>
                                <div className="chart-wrapper mx-3" style={{height: '70px'}}>
                                </div>
                            </Card>
                        </Col>
                    </Row>

                </div>
                <table>
                    <tbody>
                    {
                        sensors.map(
                            (sensor, key) =>
                                <tr key={key}>
                                    <td>{sensor.status}</td>
                                    <td>{sensor.signature}</td>
                                </tr>
                        )
                    }
                    </tbody>

                </table>


            </div>
        )
    }

}

export default connect(mapStateToProps)(SensorsSettings);