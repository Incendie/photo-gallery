import { UnsplashPhoto } from '../PhotoGallery/photo-gallery.interfaces';

export interface UnsplashPhotoDetails extends UnsplashPhoto {
  [key: string]: any;
  exif: object;
  location: object;
  meta: object;
  tags: object[];
  related_collections: object;
}
