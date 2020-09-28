import React from "react";
import logo from "./logo.svg";
import "./App.css";

// ES Modules syntax
import Unsplash, { toJson } from "unsplash-js";

const unsplash = new Unsplash({
  accessKey: "V9Y8-TqOBNxjEQp_XzDW3WHSowfFp300MywZwSWrGik",
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
