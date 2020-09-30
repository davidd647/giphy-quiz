import React from "react";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

export default class New extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wrong1: "",
      wrong2: "",
      wrong3: "",
      right: "",
      quiz: [],
      gifUrl: undefined,
      quizUrl: "",
    };

    this.handleChangeWrong1 = this.handleChangeWrong1.bind(this);
    this.handleChangeWrong2 = this.handleChangeWrong2.bind(this);
    this.handleChangeWrong3 = this.handleChangeWrong3.bind(this);
    this.handleChangeRight = this.handleChangeRight.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
    this.previewGif = this.previewGif.bind(this);
    this.refreshStateUrl = this.refreshStateUrl.bind(this);
  }

  async getGif(query) {
    return await fetch(
      "https://api.giphy.com/v1/gifs/search?q=" +
        query +
        "&api_key=h5CX8Mt5sGAv3iMQ0OqmPRqK6Xf0Ed1n&limit=1"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var smallGif;
        try {
          smallGif = data.data[0].images.fixed_height.url;
        } catch (error) {
          smallGif = undefined;
        }
        return smallGif;
      });
  }

  async addQuestion() {
    let newGifUrl = "";
    if (this.state.gifUrl === undefined) {
      newGifUrl = await this.getGif(this.state.right);
      if (newGifUrl === undefined) {
        alert("No gif exists for that string, please use another query");
        return;
      }
    }
    const newQuestion = {
      right: this.state.right,
      wrong1: this.state.wrong1,
      wrong2: this.state.wrong2,
      wrong3: this.state.wrong3,
      giphUrl: this.state.gifUrl || newGifUrl,
    };
    const newState = this.state;
    newState.quiz.push(newQuestion);
    newState.right = "";
    newState.wrong1 = "";
    newState.wrong2 = "";
    newState.wrong3 = "";
    newState.gifUrl = undefined;
    this.refreshStateUrl();
    this.setState(newState);
  }

  handleChangeWrong1(e) {
    const newState = this.state;
    newState.wrong1 = e.target.value;
    this.setState(newState);
  }
  handleChangeWrong2(e) {
    const newState = this.state;
    newState.wrong2 = e.target.value;
    this.setState(newState);
  }
  handleChangeWrong3(e) {
    const newState = this.state;
    newState.wrong3 = e.target.value;
    this.setState(newState);
  }
  handleChangeRight(e) {
    const newState = this.state;
    newState.right = e.target.value;
    this.setState(newState);
  }

  async previewGif() {
    console.log("preview gif...", this.state.right);
    const gifUrl = await this.getGif(this.state.right);
    console.log(gifUrl);
    const newState = this.state;
    newState.gifUrl = gifUrl;
    this.setState(newState);
  }

  refreshStateUrl() {
    console.log(JSON.stringify(this.state.quiz));
    const quizString = JSON.stringify(this.state.quiz);
    const quizUriString = encodeURIComponent(quizString);
    const websiteOrigin = window.location.origin;
    const urlWithQuizData = `${websiteOrigin}/?data=${quizUriString}`;
    const newState = this.state;
    newState.quizUrl = urlWithQuizData;
    this.setState(newState);
  }

  render() {
    return (
      <Col xs={9} className="pt-3">
        <h2 className="pb-3">Make a Quiz</h2>
        <br />

        <p className="mb-1">
          <b>Steps:</b>
        </p>
        <ol className="text-left mb-5">
          <li>
            Find a gif you like - the word you use to find it will be the answer
            to the quiz question!
          </li>
          <li>Add three wrong answers to the question</li>
          <li>Click Add Question</li>
          <li>Add as many questions as you like</li>
          <li>
            When you are done, you can share the link at the bottom to give the
            quiz to your friends!
          </li>
        </ol>

        <span>Actual Giphy Query:</span>

        <ListGroup className="mb-3">
          <ListGroup.Item>
            <input
              type="text"
              value={this.state.right}
              onChange={this.handleChangeRight}
              className="mb-3"
            />
            <br />
            <Button onClick={this.previewGif} className="mb-3">
              Preview Giphy Gif
            </Button>
            {this.state.gifUrl === undefined ? null : (
              <img
                src={this.state.gifUrl}
                className="w-100"
                alt={`${this.state.right}`}
              />
            )}
          </ListGroup.Item>
        </ListGroup>

        <span>Wrong Answers:</span>
        <ListGroup className="mb-3">
          <ListGroup.Item>
            <input
              type="text"
              value={this.state.wrong1}
              onChange={this.handleChangeWrong1}
            />
          </ListGroup.Item>
          <ListGroup.Item>
            <input
              type="text"
              value={this.state.wrong2}
              onChange={this.handleChangeWrong2}
            />
          </ListGroup.Item>
          <ListGroup.Item>
            <input
              type="text"
              value={this.state.wrong3}
              onChange={this.handleChangeWrong3}
            />
          </ListGroup.Item>
        </ListGroup>

        <Button onClick={this.addQuestion}>Add Question</Button>

        <hr />

        {this.state.quiz.length === 0 ? (
          <div>No questions yet...</div>
        ) : (
          <ListGroup>
            {this.state.quiz.map((question, i) => (
              <ListGroup.Item key={question.right} variant="secondary">
                {i + 1}. ✔️: {question.right}, <br />
                X: {question.wrong1}, <br />
                X: {question.wrong2}, <br />
                X: {question.wrong3} <br />
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}

        <hr />

        <span>Link to play/share quiz:</span>
        <br />
        {this.state.quizUrl === "" ? (
          <span>(Link will appear when you have at least one question...)</span>
        ) : (
          <a href={this.state.quizUrl} className="truncate">
            ▶ {this.state.quizUrl}
          </a>
        )}
      </Col>
    );
  }
}
