import React from "react";
import ReactDOM from "react-dom"
import {connect} from 'react-redux'
import io from "socket.io-client"
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

const mapStateToProps = (state = {}) => {
    // console.dir(state)
    return {...state};
};

export class DeviceSettings extends React.Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='animated fadeIn'>
                    <Row>
                        <h1>Device Settings</h1>

                        <Col xs="12" sm="6" lg="3">
                            <Card className="text-white bg-info">

                            </Card>
                        </Col>
                    </Row>

                </div>
            </div>
        );
    }

}

export default connect(mapStateToProps)(DeviceSettings);