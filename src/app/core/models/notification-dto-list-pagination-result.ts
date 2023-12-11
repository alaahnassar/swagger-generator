/* tslint:disable */
/* eslint-disable */
import { NotificationDto } from '../models/notification-dto';
export interface NotificationDtoListPaginationResult {
  currentPages?: number;
  data?: Array<NotificationDto> | null;
  error?: string | null;
  totalPages?: number;
}
