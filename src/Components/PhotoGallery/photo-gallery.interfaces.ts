export interface UnsplashPhoto {
  id: string;
  created_at: string | null;
  updated_at: string | null;
  promoted_at: string | null;
  width: number;
  height: number;
  color: string | null;
  blur_hash: string;
  description: string | null;
  alt_description: string | null;
  urls: UnsplashUrls;
  links?: object;
  categories?: object;
  likes: number;
  liked_by_user?: boolean;
  current_user_collections?: object;
  sponsorship?: object;
  user?: object;
}

interface UnsplashUrls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}
