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
  }

  componentDidMount() {
    if (this.state.quizData !== null) {
      const newState = this.state;
      newState.screen = "play";
      this.setState(newState);
    }
  }

  changeScreen(screen) {

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
              {this.state.quizData === null ? null : (
                <ListGroup.Item
                  variant="dark"
                  onClick={() => this.changeScreen("play")}
                  active={this.state.screen === "play" ? true : false}
                >
                  ⏎▶
                </ListGroup.Item>
              )}
              <ListGroup.Item
                variant="dark"
                onClick={() => this.changeScreen("play1")}
                active={this.state.screen === "play1" ? true : false}
              >
                1
              </ListGroup.Item>
              <ListGroup.Item
                variant="dark"
                onClick={() => this.changeScreen("play2")}
                active={this.state.screen === "play2" ? true : false}
              >
                2
              </ListGroup.Item>
              <ListGroup.Item
                variant="dark"
                onClick={() => this.changeScreen("play3")}
                active={this.state.screen === "play3" ? true : false}
              >
                3
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
          Content
        </Col> */}
          {this.state.screen === "about" ? <About /> : null}
          {this.state.screen === "play" ? (
            <Play quiz={this.state.quizData} />
          ) : null}
          {this.state.screen === "play1" ? (
            <Play
              quiz={[
                {
                  right: "🖖",
                  wrong1: "star wars",
                  wrong2: "✌️",
                  wrong3: "hitchhiker's guide",
                  giphUrl:
                    "https://media1.giphy.com/media/3oEduUDvycvu3GYkdG/200.gif",
                },
                {
                  right: "lotr",
                  wrong1: "the notebook",
                  wrong2: "titanic",
                  wrong3: "D&D",
                  giphUrl:
                    "https://media1.giphy.com/media/A2GXvZmG73hQc/200.gif",
                },
                {
                  right: "rick and morty",
                  wrong1: "ren and stimpy",
                  wrong2: "cow and chicken",
                  wrong3: "tom and jerry",
                  giphUrl:
                    "https://media3.giphy.com/media/tJqyalvo9ahykfykAj/200.gif",
                },
                {
                  right: "fry",
                  wrong1: "finneas",
                  wrong2: "bender",
                  wrong3: "hiccup",
                  giphUrl:
                    "https://media3.giphy.com/media/aVytG2ds8e0tG/200.gif",
                },
                {
                  right: "one-punch man",
                  wrong1: "goku",
                  wrong2: "astroboy",
                  wrong3: "naruto",
                  giphUrl:
                    "https://media2.giphy.com/media/yo3TC0yeHd53G/200.gif",
                },
              ]}
            />
          ) : null}
          {this.state.screen === "play2" ? (
            <Play
              quiz={[
                {
                  right: "jean luc picard",
                  wrong1: "spock",
                  wrong2: "luke",
                  wrong3: "arthur dent",
                  giphUrl:
                    "https://media3.giphy.com/media/TJawtKM6OCKkvwCIqX/200.gif",
                },
                {
                  right: "data",
                  wrong1: "vader",
                  wrong2: "sauron",
                  wrong3: "mark zuckerberg",
                  giphUrl:
                    "https://media0.giphy.com/media/zEU2uwmialC4U/200.gif",
                },
                {
                  right: "sean of the dead",
                  wrong1: "dawn of the dead",
                  wrong2: "downtown abbey",
                  wrong3: "east enders",
                  giphUrl:
                    "https://media3.giphy.com/media/QsyPRpG6WVR6SYfBVw/200.gif",
                },
              ]}
            />
          ) : null}
          {this.state.screen === "play3" ? (
            <Play
              quiz={[
                {
                  right: "kirby",
                  wrong1: "toad",
                  wrong2: "diddy kong",
                  wrong3: "little mac",
                  giphUrl:
                    "https://media3.giphy.com/media/5ev3alRsskWA0/200.gif",
                },
                {
                  right: "solid snake",
                  wrong1: "snake pliskin",
                  wrong2: "cloud strife",
                  wrong3: "chrom",
                  giphUrl:
                    "https://media0.giphy.com/media/OrFmkOFx7PVK/200.gif",
                },
                {
                  right: "hal 9000",
                  wrong1: "wheatley",
                  wrong2: "TARS",
                  wrong3: "terminator",
                  giphUrl:
                    "https://media4.giphy.com/media/wypKXPQggwaCA/200.gif",
                },
              ]}
            />
          ) : null}
          {this.state.screen === "new" ? <New /> : null}
        </Row>
      </div>
    );
  }
}
