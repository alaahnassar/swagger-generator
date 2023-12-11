/* tslint:disable */
/* eslint-disable */
import { ImageGallery } from '../models/image-gallery';
import { VideoGallery } from '../models/video-gallery';
export interface Gallery {
  categoryTitleAr?: string | null;
  categoryTitleEn?: string | null;
  id?: number;
  imageGalleries?: Array<ImageGallery> | null;
  videoGalleries?: Array<VideoGallery> | null;
}
