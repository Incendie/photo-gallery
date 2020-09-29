import React, {useState, useEffect} from 'react';
import Unsplash, { toJson } from "unsplash-js";

export enum FETCH_RANDOM_PHOTO {
  success = "FETCH_RANDOM_PHOTO_SUCCESS",
  pending = "FETCH_RANDOM_PHOTO_PENDING",
  fail = "FETCH_RANDOM_PHOTO_FAILURE",
}

export const PhotoGallery = () => {
  const unsplash = new Unsplash({
    accessKey: "V9Y8-TqOBNxjEQp_XzDW3WHSowfFp300MywZwSWrGik",
  });
  const [photo, setPhoto] = useState({});
  
  useEffect(() => {
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
    
    if (!Object.keys(photo).length) {
      fetchPhoto();
    }
  }, [photo, unsplash.photos])
  return (
    <>
      <p>Wow</p>
    </>
  )
}