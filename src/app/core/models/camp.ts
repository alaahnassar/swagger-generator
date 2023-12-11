/* tslint:disable */
/* eslint-disable */
import { CampImage } from '../models/camp-image';
export interface Camp {
  campImages?: Array<CampImage> | null;
  date?: string | null;
  id?: number;
  titel?: string | null;
}
