import React from "react";

import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function randomizedOrder(size) {
  const order = [];

  for (let x = 0; x < size; x++) {
    let y = 0;
    do {
      y = Math.round(Math.random() * (size - 1));
    } while (order.includes(y));
    order.push(y);
  }

  return order;
}

export default class Play extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      disabledQuestions: [],
      userAnswered: {},
    };

    this.handleClickWrong = this.handleClickWrong.bind(this);
    this.handleClickRight = this.handleClickRight.bind(this);
  }

  handleClickWrong(questionIndex, userChose) {
    const newState = this.state;
    newState.disabledQuestions.push(questionIndex);
    newState.userAnswered[questionIndex] = {
      index: questionIndex,
      answer: this.props.quiz[questionIndex]["wrong" + (userChose + 1)],
    };

    this.setState(newState);
  }

  handleClickRight(questionIndex, userChose) {
    const newState = this.state;
    newState.disabledQuestions.push(questionIndex);
    newState.score++;
    newState.userAnswered[questionIndex] = {
      index: questionIndex,
      answer: this.props.quiz[questionIndex]["right"],
    };

    this.setState(newState);
  }

  render() {
    return (
      <Col xs={9} className="pt-3">
        <h2 className="pb-3">Play</h2>
        <br />
        <p className="mt-3 mb-0">
          The writer of the quiz used the text from one of the four buttons to
          find the gif - can you guess what text they used?
        </p>
        {this.props.quiz !== null ? null : (
          <p className="text-danger mt-3">
            It seems there is no quiz data here - please go to the 'new' screen
            to add a new quiz!
          </p>
        )}
        <br />
        {console.log("this.props: ", this.props)}
        {this.props.quiz === null
          ? null
          : this.props.quiz.map((question, questionIndex) => {
              const newOrder = randomizedOrder(4);

              return (
                <div key={question.right}>
                  <img
                    src={question.giphUrl}
                    className="w-100 py-3"
                    style={{ maxHeight: "200px", maxWidth: "200px" }}
                    alt="Question"
                  />
                  <br />

                  {this.state.disabledQuestions.includes(questionIndex) ? (
                    <div>
                      You answered:{" "}
                      {this.state.userAnswered[questionIndex].answer}
                      <br />
                      The answer was: {question.right}
                      <br />
                      {this.state.userAnswered[questionIndex].answer ===
                      question.right ? (
                        <span aria-label="checkmark">✔️</span>
                      ) : (
                        <span aria-label="wrong">X</span>
                      )}
                    </div>
                  ) : (
                    newOrder.map((orderling) => {
                      if (orderling === 0) {
                        return (
                          <Button
                            onClick={() =>
                              this.handleClickWrong(questionIndex, 0)
                            }
                            key={question.wrong1}
                          >
                            {question.wrong1}
                          </Button>
                        );
                      } else if (orderling === 1) {
                        return (
                          <Button
                            onClick={() =>
                              this.handleClickWrong(questionIndex, 1)
                            }
                            key={question.wrong2}
                          >
                            {question.wrong2}
                          </Button>
                        );
                      } else if (orderling === 2) {
                        return (
                          <Button
                            onClick={() =>
                              this.handleClickWrong(questionIndex, 2)
                            }
                            key={question.wrong3}
                          >
                            {question.wrong3}
                          </Button>
                        );
                      } else if (orderling === 3) {
                        return (
                          <Button
                            onClick={() =>
                              this.handleClickRight(questionIndex, 3)
                            }
                            key={question.right}
                          >
                            {question.right}
                          </Button>
                        );
                      }
                      return null;
                    })
                  )}
                  <br />
                  <br />
                  <br />
                </div>
              );
            })}
        {this.props.quiz === null ? null : (
          <span>
            Score: {this.state.score} / {this.props.quiz.length}
          </span>
        )}
      </Col>
    );
  }
}
