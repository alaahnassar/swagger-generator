/* tslint:disable */
/* eslint-disable */
import { Team } from '../models/team';
export interface TeamListPaginationResult {
  currentPages?: number;
  data?: Array<Team> | null;
  error?: string | null;
  totalPages?: number;
}
