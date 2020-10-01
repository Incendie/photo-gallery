import React, { useState, useEffect } from 'react';
import Unsplash, { toJson } from 'unsplash-js';
import { UnsplashPhoto } from './photo-gallery.interfaces';
import { Capitalize } from '../Utils/Capitalize';

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

  // Fetch a new batch of photos every time the page increases
  useEffect(() => {
    const fetchPhotos = () => {
      unsplash.photos
        .listPhotos(page, perPage, 'latest')
        .then(toJson)
        .then((json) => {
          if (!Object.keys(photos).length) {
            setPhotos(json);
          } else {
            const displayPhotos = [...photos];
            displayPhotos.push(...json);
            setPhotos(displayPhotos);
          }
        })
        .catch((err) => console.error('Error fetching photos:', err));
    };
    fetchPhotos();
  }, [page]);

  // Handler for when user clicks a photo
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const element = e.target as HTMLElement;
    const imgElement = element.nextSibling as HTMLImageElement;

    if (imgElement.nodeName === 'IMG') {
      setShowEnlarged(true);
      setEnlargePhoto(imgElement.id);
    }
  };

  // Handler to kick start searching for next page of photos for Infinite Scroll
  const handleLoad = () => {
    setPage(page + 1);
  };

  return (
    <main className="wrapper">
      <ul className="photo-grid">
        {photos.map((photo: UnsplashPhoto) => {
          return (
            <li key={photo.id}>
              <div className="overlay" onClick={handleClick}>
                {Capitalize(photo.alt_description)}
              </div>
              <img
                src={photo.urls.thumb}
                alt={photo.alt_description || 'Unsplash photo'}
                id={photo.id}
              />
            </li>
          );
        })}
      </ul>
      {showEnlarged && (
        <PhotoDetails
          photoId={enlargePhoto}
          setShowEnlarged={setShowEnlarged}
        />
      )}
      <button onClick={handleLoad}>Load More</button>
    </main>
  );
};
