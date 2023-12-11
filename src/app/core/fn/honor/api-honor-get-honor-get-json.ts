/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { HonorListPaginationResult } from '../../models/honor-list-pagination-result';

export interface ApiHonorGetHonorGet$Json$Params {
  pageNume?: number;
  pageSize?: number;
}

export function apiHonorGetHonorGet$Json(http: HttpClient, rootUrl: string, params?: ApiHonorGetHonorGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<HonorListPaginationResult>> {
  const rb = new RequestBuilder(rootUrl, apiHonorGetHonorGet$Json.PATH, 'get');
  if (params) {
    rb.query('pageNume', params.pageNume, {});
    rb.query('pageSize', params.pageSize, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<HonorListPaginationResult>;
    })
  );
}

apiHonorGetHonorGet$Json.PATH = '/api/Honor/GetHonor';
