import React, {useState, useEffect} from "react";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import Unsplash, { toJson } from "unsplash-js";

export enum FETCH_RANDOM_PHOTO {
  success = "FETCH_RANDOM_PHOTO_SUCCESS",
  pending = "FETCH_RANDOM_PHOTO_PENDING",
  fail = "FETCH_RANDOM_PHOTO_FAILURE",
}

const unsplash = new Unsplash({
  accessKey: "V9Y8-TqOBNxjEQp_XzDW3WHSowfFp300MywZwSWrGik",
});



function App() {
  const [photo, setPhoto] = useState({});

  const fetchPhoto = () => {
    unsplash.photos.getRandomPhoto({})
      .then(toJson)
      .then(json => {
        setPhoto(json)
      })
      .catch(err => {
        console.error("Error fetching random photo:", err);
      })
  }

  useEffect(() => {
    if (!Object.keys(photo).length) {
      fetchPhoto();
    }
  }, [photo])

  return (
      <div className="App">
        <Router>
          <p>Wow</p>
          {/* {photo && JSON.stringify(photo)} */}
        </Router>
      </div>
  );
}

export default App;
