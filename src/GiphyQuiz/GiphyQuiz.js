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

    this.state = { screen: "about", quizData: null };

    const urlParams = new URLSearchParams(window.location.search);
    this.state.quizData = JSON.parse(urlParams.get("data"));
    console.log(this.state.quizData);
  }

  componentDidMount() {
    if (this.state.quizData !== null) {
      const newState = this.state;
      newState.screen = "play";
      this.setState(newState);
    }
  }

  changeScreen(screen) {
    console.log(screen);

    this.setState({ screen: screen });
  }

  render() {
    return (
      <div>
        <h1 className="mb-3">Giphy Quiz!</h1>
        <Row>
          <Col xs={3} className="mt-5">
            <ListGroup className="mt-3">
              <ListGroup.Item
                variant="dark"
                onClick={() => this.changeScreen("about")}
                active={this.state.screen === "about" ? true : false}
              >
                ？
              </ListGroup.Item>
              <ListGroup.Item
                variant="dark"
                onClick={() => this.changeScreen("play")}
                active={this.state.screen === "play" ? true : false}
              >
                ▶
              </ListGroup.Item>
              <ListGroup.Item
                variant="dark"
                onClick={() => this.changeScreen("new")}
                active={this.state.screen === "new" ? true : false}
              >
                ✚
              </ListGroup.Item>
            </ListGroup>
          </Col>
          {/* <Col xs={10} onClick={() => console.log(this)}>
          Content
        </Col> */}
          {this.state.screen === "about" ? <About /> : null}
          {this.state.screen === "play" ? (
            <Play quiz={this.state.quizData} />
          ) : null}
          {this.state.screen === "new" ? <New /> : null}
        </Row>
      </div>
    );
  }
}
