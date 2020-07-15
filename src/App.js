import React from "react";
import constants from "./constants";
import { Container } from "semantic-ui-react";
import MainCard from "./components/MainCard";
import "./App.css";

function App() {
  return (
    <Container fluid>
      <p>
        <a
          href={constants.formUrl}
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <code>DAT FORM</code>
        </a>
      </p>
      <p>
        <MainCard name="Cesar" />
      </p>
    </Container>
  );
}

export default App;
