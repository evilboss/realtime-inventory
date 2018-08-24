import React from "react";
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

let socket;
const mapStateToProps = (state = {}) => {
    // console.dir(state)
    return {...state};
};

export class VideoCameras extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="container-fluid">
            <Col lg={12}>
                <Row>
                    <h1>Video Camera Stream</h1>
                </Row>
                <Row>
                    <Col xs="12" sm="12" lg="6">
                        <figure className="figure">
                            <img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22400%22%20height%3D%22300%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20300%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1656b0a35c5%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A20pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1656b0a35c5%22%3E%3Crect%20width%3D%22400%22%20height%3D%22300%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22148.8515625%22%20y%3D%22159.15%22%3E400x300%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" className="figure-img img-fluid rounded"
                                 alt="A generic square placeholder image with rounded corners in a figure."/>
                            <figcaption className="figure-caption text-right">Camera 1
                            </figcaption>
                        </figure>
                    </Col>
                    <Col xs="12" sm="12" lg="6">

                    <figure className="figure">
                            <img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22400%22%20height%3D%22300%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20300%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1656b0a35c5%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A20pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1656b0a35c5%22%3E%3Crect%20width%3D%22400%22%20height%3D%22300%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22148.8515625%22%20y%3D%22159.15%22%3E400x300%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" className="figure-img img-fluid rounded"
                                 alt="A generic square placeholder image with rounded corners in a figure."/>
                            <figcaption className="figure-caption text-right">Camera 1
                            </figcaption>
                        </figure>
                    </Col>
                    <Col>
                        <figure className="figure">
                            <img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22400%22%20height%3D%22300%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20300%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1656b0a35c5%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A20pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1656b0a35c5%22%3E%3Crect%20width%3D%22400%22%20height%3D%22300%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22148.8515625%22%20y%3D%22159.15%22%3E400x300%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" className="figure-img img-fluid rounded"
                                 alt="A generic square placeholder image with rounded corners in a figure."/>
                            <figcaption className="figure-caption text-right">Camera 1
                            </figcaption>
                        </figure>
                    </Col>



                </Row>
            </Col>
        </div>
    )
    };
    }

    export default connect(mapStateToProps)(VideoCameras);