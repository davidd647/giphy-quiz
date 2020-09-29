import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs={2}>
            <ListGroup>
              <ListGroup.Item variant="dark"> ❓ </ListGroup.Item>
              <ListGroup.Item variant="dark"> ▶</ListGroup.Item>
              <ListGroup.Item variant="dark"> ➕ </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col xs={10}>Content</Col>
        </Row>
      </Container>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello... Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
