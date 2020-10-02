import { UnsplashPhoto } from '../PhotoGallery/photo-gallery';

export interface PhotoDetailsProps {
  setShowEnlarged: any;
  photos: UnsplashPhoto[];
  position: number;
  setPosition: any;
}

export interface PhotoDetailObj {
  name: string;
  value: string;
}

export interface UnsplashPhotoDetails extends UnsplashPhoto {
  [key: string]: any;
  exif: object;
  location: object;
  meta: object;
  tags: object[];
  related_collections: object;
}
