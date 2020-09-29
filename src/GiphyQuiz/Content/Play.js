import React from "react";

import Col from "react-bootstrap/Col";

export default class Play extends React.Component {
  constructor(props) {
    super(props);

    console.log("This is first method called upon initialization");
  }

  render() {
    return <Col xs={10}>Play</Col>;
  }
}
