/* tslint:disable */
/* eslint-disable */
import { Honor } from '../models/honor';
export interface HonorListPaginationResult {
  currentPages?: number;
  data?: Array<Honor> | null;
  error?: string | null;
  totalPages?: number;
}
