/* tslint:disable */
/* eslint-disable */
import { Programs } from '../models/programs';
export interface ProgramsListPaginationResult {
  currentPages?: number;
  data?: Array<Programs> | null;
  error?: string | null;
  totalPages?: number;
}
