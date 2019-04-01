import React from 'react';
import {Jumbotron, Button, Container, Row, Col} from 'reactstrap';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.bindMethods();

        this.state = {
            myStateValue: "Default State Value",
            myOtherStateValue: "Update to myStateValue won't change or delete this"
        }
    }


    /**
     * Bind the various handlers to make sure they are attached to this class
     */
    bindMethods() {
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    /**
     * Button click handler
     * @param {SyntheticEvent} e - Look at https://reactjs.org/docs/events.html
     */
    onButtonClick(e) {
        // This is how we redirect in code
        this.props.history.push('/c2');
    }

    /**
     * Render the component based on the state and props (will be called every time state changes with setState)
     * @returns {*}
     */
    render() {
        let stateValue = this.state.myStateValue || "No value for myStateValue passed in the state";
        const coverImgUrl = "/images/Cover.jpg" ;
        const logoImgUrl = "/images/Logo.jpg" ;
        const fbUrl = "https://www.facebook.com/imagivent/" ;
        console.log("props", this.props, "state", this.state);
        return (
            <Container>
            {/*<div className={"imgContainer"}>
                <img className={"logoImg"} src={logoImgUrl} />
                <a href={coverImgUrl}>
                    <img className={"coverImg"} src={coverImgUrl} />
                </a>
            </div>*/}
                <Row className={"logoImgContainer"}>
                    <Col>
                        <a href={fbUrl}>
                            <img src={logoImgUrl} className={"logoImg"} />
                        </a>
                    </Col>
                </Row>
                <Row style={{"textAlign": "center", "fontFamily": "cursive"}}>
                    <Col>
                        <h1>Under Imagination</h1>
                        <br/>
                        <a href={fbUrl}>
                            <i className={"fa fa-2x fa-facebook-official"}></i>
                        </a>
                        <br/><br/>
                    </Col>
                </Row>
                <Row className={"coverImgContainer"}>
                    <Col>
                        <a href={coverImgUrl}>
                            <img src={coverImgUrl} className={"coverImg"} />
                        </a>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;
