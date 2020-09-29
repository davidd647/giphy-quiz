import React from "react";

import Col from "react-bootstrap/Col";

export default class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("This is first method called upon initialization");
  }

  render() {
    return <Col xs={10}>About</Col>;
  }
}
