/* tslint:disable */
/* eslint-disable */
import { PlayerManagementImage } from '../models/player-management-image';
export interface PlayerManagement {
  date?: string | null;
  description?: string | null;
  id?: number;
  image?: string | null;
  playerManagementImages?: Array<PlayerManagementImage> | null;
  titel?: string | null;
}
