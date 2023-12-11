/* tslint:disable */
/* eslint-disable */
import { Gallery } from '../models/gallery';
export interface GalleryListPaginationResult {
  currentPages?: number;
  data?: Array<Gallery> | null;
  error?: string | null;
  totalPages?: number;
}
