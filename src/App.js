import React from "react";
import constants from "./constants";
import MainCard from "./components/MainCard";
import "./App.css";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
