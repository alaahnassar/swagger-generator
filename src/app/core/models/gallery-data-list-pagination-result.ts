/* tslint:disable */
/* eslint-disable */
import { GalleryData } from '../models/gallery-data';
export interface GalleryDataListPaginationResult {
  currentPages?: number;
  data?: Array<GalleryData> | null;
  error?: string | null;
  totalPages?: number;
}
