import React, { useState, useEffect } from 'react';
import Unsplash, { toJson } from 'unsplash-js';
import { UnsplashPhoto } from './photo-gallery.interfaces';

import './photo-gallery.component.scss';

import { PhotoDetails } from '../PhotoDetails/photo-details.component';

export const PhotoGallery = () => {
  const unsplash = new Unsplash({
    accessKey: 'V9Y8-TqOBNxjEQp_XzDW3WHSowfFp300MywZwSWrGik'
  });
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(9);
  const [photos, setPhotos] = useState<UnsplashPhoto[]>([]);
  const [showEnlarged, setShowEnlarged] = useState<boolean>(false);
  const [enlargePhoto, setEnlargePhoto] = useState<string>('');

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

  const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const element = e.target as HTMLImageElement;
    console.log(e.target);
    setShowEnlarged(true);
    setEnlargePhoto(element.id);
    console.log(element.id);
  };

  return (
    <main className="wrapper">
      <ul className="photo-grid">
        {photos.map((photo: UnsplashPhoto) => {
          return (
            <li key={photo.id}>
              <img
                src={photo.urls.thumb}
                alt={photo.alt_description || 'Unsplash photo'}
                id={photo.id}
                onClick={handleClick}
              />
            </li>
          );
        })}
      </ul>
      {showEnlarged && <PhotoDetails photoId={enlargePhoto} />}
    </main>
  );
};
