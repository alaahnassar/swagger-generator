/* tslint:disable */
/* eslint-disable */
import { Camp } from '../models/camp';
export interface CampListPaginationResult {
  currentPages?: number;
  data?: Array<Camp> | null;
  error?: string | null;
  totalPages?: number;
}
