/* tslint:disable */
/* eslint-disable */
import { PlayerManagement } from '../models/player-management';
export interface PlayerManagementListPaginationResult {
  currentPages?: number;
  data?: Array<PlayerManagement> | null;
  error?: string | null;
  totalPages?: number;
}
