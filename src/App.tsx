import React  from "react";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";

import { PhotoGallery } from './Components/photo-gallery.component';

function App() {

  return (
      <div className="App">
        <Router>
          <PhotoGallery />
        </Router>
      </div>
  );
}

export default App;
