/* tslint:disable */
/* eslint-disable */
import { HonorImage } from '../models/honor-image';
export interface Honor {
  date?: string | null;
  description?: string | null;
  honorImages?: Array<HonorImage> | null;
  id?: number;
  titel?: string | null;
}
