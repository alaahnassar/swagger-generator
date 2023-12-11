/* tslint:disable */
/* eslint-disable */
import { FormInfo } from '../models/form-info';
export interface FormInfoListPaginationResult {
  currentPages?: number;
  data?: Array<FormInfo> | null;
  error?: string | null;
  totalPages?: number;
}
