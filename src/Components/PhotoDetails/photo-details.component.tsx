import React, { useEffect, useState } from 'react';
import Unsplash, { toJson } from 'unsplash-js';
import { Capitalize } from '../Utils/Capitalize';
import { format } from 'date-fns';

import { UnsplashPhotoDetails } from './photo-details.interfaces';
import './photo-details.component.scss';

interface PhotoDetailsProps {
  photoId: string;
  setShowEnlarged: any;
}

interface PhotoDetail {
  name: string;
  value: string;
}

export const PhotoDetails = ({
  photoId,
  setShowEnlarged
}: PhotoDetailsProps) => {
  const unsplash = new Unsplash({
    accessKey: 'V9Y8-TqOBNxjEQp_XzDW3WHSowfFp300MywZwSWrGik'
  });
  const [photoDetails, setPhotoDetails] = useState<UnsplashPhotoDetails>();
  const [displayDetails, setDisplayDetails] = useState<PhotoDetail[]>([]);

  // Fetch and parse the photo's details
  useEffect(() => {
    unsplash.photos
      .getPhoto(photoId)
      .then(toJson)
      .then((json: any) => {
        const details = [
          { name: 'Caption', value: Capitalize(json.alt_description) },
          {
            name: 'Uploaded',
            value: format(new Date(json.created_at), 'PPpp')
          },
          {
            name: 'Likes',
            value: json.likes
          },
          {
            name: 'Photographer',
            value: json.user.name
          },
          { name: 'Username', value: json.user.username },
          { name: 'Twitter', value: json.user.twitter_username },
          { name: 'Portfolio Link', value: json.user.portfolio_url },
          { name: 'Bio', value: json.user.bio },
          { name: 'Photographer Origin', value: json.user.location },
          { name: 'EXIF', value: json.exif },
          { name: 'Location', value: json.location.title },
          { name: 'Views', value: json.views }
        ];
        setPhotoDetails(json);
        setDisplayDetails(details);
      })
      .catch((err) => console.error('Error fetching photo:', err));
  }, [photoId]);

  // Handler for the 'X' button to close the modal
  const handleClick = () => {
    setShowEnlarged(false);
  };

  return (
    <div>
      {photoDetails && (
        <div className="modal">
          {console.log({ photoDetails, photoId })}
          <div className="details wrapper">
            <div className="details-close" onClick={handleClick}>
              X
            </div>
            <div className="details-photo ">
              <img
                src={photoDetails.urls.full}
                alt={photoDetails.alt_description || 'Unsplash photo'}
              />
            </div>
            <ul className="details-info">
              {displayDetails.map((detail: PhotoDetail, index) => {
                if (detail.name !== 'EXIF' && detail.value) {
                  return (
                    <li key={index} className={`details-info-${detail.name}`}>
                      {detail.name !== 'Caption' && `${detail.name} -`}{' '}
                      {detail.name === 'Portfolio Link' ||
                      detail.name === 'Twitter' ? (
                        <a
                          href={
                            detail.name === 'Twitter'
                              ? `https://twitter.com/${detail.value}`
                              : detail.value
                          }
                        >
                          {detail.value}
                        </a>
                      ) : (
                        detail.value
                      )}
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
