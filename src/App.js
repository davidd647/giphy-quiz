import React from "react";
import GiphyQuiz from "./GiphyQuiz/GiphyQuiz";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div className="App">
      <Container>
        <GiphyQuiz />
      </Container>
    </div>
  );
}

export default App;
