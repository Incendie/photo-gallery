import React, { useEffect, useState } from 'react';
import Unsplash, { toJson } from 'unsplash-js';
import { Capitalize } from '../Utils/Capitalize';
import { format } from 'date-fns';

import { UnsplashPhotoDetails } from './photo-details.interfaces';
import { UnsplashPhoto } from '../PhotoGallery/photo-gallery.interfaces';
import { Loading } from '../Utils/Loading/loading.component';
import './photo-details.component.scss';

interface PhotoDetailsProps {
  setShowEnlarged: any;
  photos: UnsplashPhoto[];
  position: number;
  setPosition: any;
}

interface PhotoDetail {
  name: string;
  value: string;
}

export const PhotoDetails = ({
  setShowEnlarged,
  photos,
  position,
  setPosition
}: PhotoDetailsProps) => {
  const unsplash = new Unsplash({
    accessKey: 'V9Y8-TqOBNxjEQp_XzDW3WHSowfFp300MywZwSWrGik'
  });
  const [photoDetails, setPhotoDetails] = useState<UnsplashPhotoDetails>();
  const [displayDetails, setDisplayDetails] = useState<PhotoDetail[]>([]);
  const [showLoading, setShowLoading] = useState<boolean>(true);

  // Fetch and parse the photo's details
  useEffect(() => {
    unsplash.photos
      .getPhoto(photos[position].id)
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
        setShowLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching photo:', err);
        setShowLoading(false);
      });
  }, [position]);

  // Handler for the 'X' button to close the modal
  const handleClick = () => {
    setShowEnlarged(false);
  };

  const handleNav = (e: any) => {
    if (e.target.className.includes('prev')) {
      setPosition(decPos());
    } else if (e.target.className.includes('next')) {
      setPosition(incPos());
    }
  };

  const decPos = () => {
    if (position > 0) {
      return position - 1;
    } else {
      return photos.length - 1;
    }
  };

  const incPos = () => {
    if (position < photos.length - 1) {
      return position + 1;
    } else {
      return 0;
    }
  };

  return (
    <div>
      {photos && (
        <div className="modal">
          <div className="modal-prev" onClick={handleNav}>
            <div className="modal-prev-img">
              <img
                src={photos[decPos()].urls.thumb}
                alt={photos[decPos()].alt_description || 'Unsplash Photo'}
              />
            </div>
            <div className="modal-prev-icon">{`<`}</div>
          </div>
          <div className="modal-next" onClick={handleNav}>
            <div className="modal-next-img">
              <img
                src={photos[incPos()].urls.thumb}
                alt={photos[incPos()].alt_description || 'Unsplash Photo'}
              />
            </div>
            <div className="modal-next-icon">{`>`}</div>
          </div>
          <div className="details wrapper">
            <div className="details-close" onClick={handleClick}>
              X
            </div>
            {showLoading ? (
              <Loading />
            ) : (
              <>
                {photoDetails && (
                  <div className="details-photo ">
                    <img
                      src={photoDetails.urls.full}
                      alt={photoDetails.alt_description || 'Unsplash photo'}
                    />
                  </div>
                )}
                <ul className="details-info">
                  {displayDetails.map((detail: PhotoDetail, index) => {
                    if (detail.name !== 'EXIF' && detail.value) {
                      return (
                        <li
                          key={index}
                          className={`details-info-${detail.name}`}
                        >
                          <span>
                            {detail.name !== 'Caption' && `${detail.name}`}
                          </span>
                          <span>{` - `}</span>
                          <span>
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
                          </span>
                        </li>
                      );
                    }
                    return null;
                  })}
                </ul>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
