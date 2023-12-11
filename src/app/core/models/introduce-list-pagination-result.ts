/* tslint:disable */
/* eslint-disable */
import { Introduce } from '../models/introduce';
export interface IntroduceListPaginationResult {
  currentPages?: number;
  data?: Array<Introduce> | null;
  error?: string | null;
  totalPages?: number;
}
