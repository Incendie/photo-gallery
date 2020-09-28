import React from "react";
import "./App.css";
import { Provider } from 'react-redux';
import store from "./store";
import { HashRouter as Router, Route } from "react-router-dom";
// ES Modules syntax
import Unsplash, { toJson } from "unsplash-js";

const unsplash = new Unsplash({
  accessKey: "V9Y8-TqOBNxjEQp_XzDW3WHSowfFp300MywZwSWrGik",
});

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <p>Wow</p>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
