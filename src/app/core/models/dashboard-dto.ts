/* tslint:disable */
/* eslint-disable */
import { New } from '../models/new';
export interface DashboardDto {
  campCount?: number;
  contactInfoCount?: number;
  contactUserCount?: number;
  formCount?: number;
  honorCount?: number;
  introduceCount?: number;
  lastNews?: Array<New> | null;
  playerManagementCount?: number;
  programsCount?: number;
  teamCount?: number;
}
