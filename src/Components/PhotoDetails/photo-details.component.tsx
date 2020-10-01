import React, { useEffect, useState } from 'react';
import Unsplash, { toJson } from 'unsplash-js';

import { UnsplashPhotoDetails } from './photo-details.interfaces';

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
    <div className="wrapper">
      {photoDetails && (
        <div className="modal">
          <>
            <div className="details-photo">
              <img
                src={photoDetails.urls.full}
                alt={photoDetails.alt_description}
              />
            </div>
            <div className="details-info"></div>
          </>
        </div>
      )}
    </div>
  );
};
