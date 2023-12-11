/* tslint:disable */
/* eslint-disable */
import { ContactUsInfo } from '../models/contact-us-info';
export interface ContactUsInfoListPaginationResult {
  currentPages?: number;
  data?: Array<ContactUsInfo> | null;
  error?: string | null;
  totalPages?: number;
}
