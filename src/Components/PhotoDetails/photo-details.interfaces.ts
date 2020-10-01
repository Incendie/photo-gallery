import { UnsplashPhoto } from '../PhotoGallery/photo-gallery.interfaces';

export interface UnsplashPhotoDetails extends UnsplashPhoto {
  exif: object;
  location: object;
  meta: object;
  tags: object[];
  related_collections: object;
}
