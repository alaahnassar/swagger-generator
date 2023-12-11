/* tslint:disable */
/* eslint-disable */
import { NotificationDto } from '../models/notification-dto';
export interface NotificationDtoPaginationResult {
  currentPages?: number;
  data?: NotificationDto;
  error?: string | null;
  totalPages?: number;
}
