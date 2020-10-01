import React, { useEffect, useState } from 'react';
import Unsplash, { toJson } from 'unsplash-js';

import { UnsplashPhotoDetails } from './photo-details.interfaces';
import './photo-details.component.scss';

interface PhotoDetailsProps {
  photoId: string;
}

export const PhotoDetails = ({ photoId }: PhotoDetailsProps) => {
  const unsplash = new Unsplash({
    accessKey: 'V9Y8-TqOBNxjEQp_XzDW3WHSowfFp300MywZwSWrGik'
  });
  const [photoDetails, setPhotoDetails] = useState<UnsplashPhotoDetails>();

  useEffect(() => {
    unsplash.photos
      .getPhoto(photoId)
      .then(toJson)
      .then((json: any) => {
        setPhotoDetails(json);
      });
  }, [photoId]);

  return (
    <div>
      {photoDetails && (
        <div className="modal">
          <div className="details wrapper">
            <div className="details-photo ">
              <img
                src={photoDetails.urls.full}
                alt={photoDetails.alt_description || 'Unsplash photo'}
              />
            </div>
            <div className="details-info">
              <ul>
                {Object.keys(photoDetails).map((detail: string) => {
                  console.log(detail);
                  if (typeof photoDetails[detail] === 'string') {
                    return <li>{photoDetails[detail]}</li>;
                  }
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
