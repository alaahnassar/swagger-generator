/* tslint:disable */
/* eslint-disable */
import { ContactUsUser } from '../models/contact-us-user';
export interface ContactUsUserListPaginationResult {
  currentPages?: number;
  data?: Array<ContactUsUser> | null;
  error?: string | null;
  totalPages?: number;
}
