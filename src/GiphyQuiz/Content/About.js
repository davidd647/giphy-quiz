import React from "react";

import Col from "react-bootstrap/Col";

export default class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("This is first method called upon initialization");
  }

  render() {
    return (
      <Col xs={9} className="text-left pt-3">
        <h2 className="pb-3 text-center">About</h2>

        <h3>What is this?</h3>
        <p>
          This is Giphy Quiz! It's a quiz maker/quiz sharing app that tests
          people on their pop-culture knowledge with gifs!
        </p>

        <h3>How do I use this?</h3>
        <p className="pl-3">
          <b>If you want to make a quiz for someone: </b> just click on the ➕
          tab on the left, and type in four separate words or phrases, and click
          "add question" for each question of your giphy quiz!
          <br />
          <br />
          Then you can copy the URL of the completed quiz at the bottom, and
          send it to them. When they open it, they can take your giphy quiz!
        </p>
        <p className="pl-3">
          <b>If you want to take a quiz someone else gave you:</b> you should be
          able to open the link they send you, and you can click your way
          through the quiz like any multiple-choice quiz.
        </p>

        <h3>Why though?</h3>
        <p>
          Giphy Quiz was made as an experiment for a{" "}
          <a href="https://mintbean.io/" target="_blank">
            Mintbean
          </a>{" "}
          hackathon.
        </p>

        <h3>Where is Mintbean?</h3>
        <p>
          Mintbean is an internet-based hackathon initiative. They host
          hackathons every week to help developers and recruiters find each
          other, and encourage continual learning.
        </p>

        <h3>When was this made?</h3>
        <p>Submitted on September 30, 2020.</p>

        <h3>Who made this?</h3>
        <p>
          Me!{" "}
          <a href="https://www.twitter.com/d2dev_" target="_blank">
            David Dales
          </a>
          .
        </p>
      </Col>
    );
  }
}
