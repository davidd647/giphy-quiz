import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

import About from "./Content/About";
import Play from "./Content/Play";
import New from "./Content/New";

export default class GiphyQuiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = { screen: "about" };

    console.log("This is first method called upon initialization");
  }

  changeScreen(screen) {
    console.log(screen);

    this.setState({ screen: screen });
  }

  render() {
    return (
      <Row>
        <Col xs={2}>
          <ListGroup>
            <ListGroup.Item
              variant="dark"
              onClick={() => this.changeScreen("about")}
            >
              ❓
            </ListGroup.Item>
            <ListGroup.Item
              variant="dark"
              onClick={() => this.changeScreen("play")}
            >
              ▶
            </ListGroup.Item>
            <ListGroup.Item
              variant="dark"
              onClick={() => this.changeScreen("new")}
              active
            >
              ➕
            </ListGroup.Item>
          </ListGroup>
        </Col>
        {/* <Col xs={10} onClick={() => console.log(this)}>
          Content
        </Col> */}
        {this.state.screen === "about" ? <About /> : null}
        {this.state.screen === "play" ? <Play /> : null}
        {this.state.screen === "new" ? <New /> : null}
      </Row>
    );
  }
}
