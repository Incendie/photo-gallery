import React, { useState, useEffect } from 'react';
import Unsplash, { toJson } from 'unsplash-js';
import { UnsplashPhoto } from './photo-gallery.interfaces';

import './photo-gallery.component.scss';

export enum FETCH_RANDOM_PHOTO {
  success = 'FETCH_RANDOM_PHOTO_SUCCESS',
  pending = 'FETCH_RANDOM_PHOTO_PENDING',
  fail = 'FETCH_RANDOM_PHOTO_FAILURE'
}

export const PhotoGallery = () => {
  const unsplash = new Unsplash({
    accessKey: 'V9Y8-TqOBNxjEQp_XzDW3WHSowfFp300MywZwSWrGik'
  });
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(9);
  const [photos, setPhotos] = useState<UnsplashPhoto[]>([]);

  useEffect(() => {
    const fetchPhotos = () => {
      unsplash.photos
        .listPhotos(page, perPage, 'latest')
        .then(toJson)
        .then((json) => {
          setPhotos(json);
        })
        .catch((err) => {
          console.error('Error fetching photos:', err);
        });
    };

    if (!Object.keys(photos).length) {
      fetchPhotos();
    }
  }, [photos]);

  return (
    <main className="wrapper">
      <ul className="photo-grid">
        {photos.map((photo: UnsplashPhoto) => {
          return (
            <li>
              <img
                src={photo.urls.thumb}
                alt={photo.alt_description || 'Unsplash photo'}
              />
            </li>
          );
        })}
      </ul>
    </main>
  );
};
