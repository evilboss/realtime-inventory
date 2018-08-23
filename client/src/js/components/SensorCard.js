import React from "react";
import io from "socket.io-client"
import {
    Badge,
    Button,
    ButtonDropdown,
    ButtonGroup,
    ButtonToolbar,
    Card,
    CardBody,
    Collapse,
    CardFooter,
    CardHeader,
    CardTitle,
    Col,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Form,
    FormGroup,
    FormText,
    Label,
    Input,
    Progress,
    Row,
    Table,
} from 'reactstrap';
import {loadInitialDataSocket} from "../actions/action";
import {connect} from "react-redux";
import {SensorsAll} from "./SensorsAll";

let socket;
const mapStateToProps = (state = {}) => {
    // console.dir(state);
    return {...state};
};

export class SensorCard extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            dropdownOpen: false,
            radioSelected: 2,
            collapse: false
        };
        const {dispatch} = this.props;

    }

    componentWillUnmount() {
        socket.disconnect();
        console.log('disconnecting');
    }

    save() {
        console.log(this.refs);
    }

    render() {
        const {dispatch, sensor, color, colors, items} = this.props;
        return (
            <Col xs="12" sm="12" lg="6">
                <Card className={`text-white ${color}`}>
                    <CardBody className="pb-0">
                        <ButtonGroup className="float-right">
                            <ButtonDropdown id='card' isOpen={this.state.card} toggle={() =>
                                this.setState({collapse: !this.state.collapse})
                            }>
                                <DropdownToggle color="transparent">
                                    <i className={`far fa-caret-square-${(this.state.collapse) ? 'down' : 'left'}`}
                                       style={{paddingLeft: '10px'}}></i>
                                </DropdownToggle>
                            </ButtonDropdown>
                        </ButtonGroup>
                        <div className="text-value">Sensor Signature: {sensor.signature}</div>
                        <div>Sensor Status {sensor.status}</div>
                        <Collapse isOpen={this.state.collapse}>
                            <Form>
                                <FormGroup>
                                    <Input ref="scaleId" type="hidden" name="scaleId" id="scaleId"
                                           value={sensor.signature}/>
                                    <Input ref="sensorId" type="hidden" name="sensorId" id="sensorId"
                                           value={sensor.signature}/>
                                    <Input ref="" type="hidden" name="name" id="name" placeholder="Sensor Name"/>

                                    <Label for="name">Sensor Name:</Label>
                                    <Input ref="name" type="text" name="name" id="name" placeholder="Sensor Name"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="color">Sensor Color</Label>
                                    <Input type="select" name="color" id="color">
                                        {colors.map((shade, key) =>
                                            <option ref="color"><span
                                                className="btn btn-block btn-pill btn-primary">{key}</span></option>
                                        )}
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="Item">Item in Sensor</Label>
                                    <Input type="select" ref="itemId" name="itemId" id="itemId">
                                        {items.map((item, key) => <option key={key}
                                                                          value={item._id}>{item.name}</option>)}
                                    </Input>
                                </FormGroup>
                                <Button className="float-right" onClick={this.save.bind(this)}>Save</Button>
                            </Form>
                        </Collapse>
                    </CardBody>
                    <div className="mx-3" style={{height: '45px'}}>
                    </div>
                </Card>
            </Col>
        );
    };
};
export default connect(mapStateToProps)(SensorCard);