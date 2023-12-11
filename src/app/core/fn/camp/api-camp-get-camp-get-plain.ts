/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CampListPaginationResult } from '../../models/camp-list-pagination-result';

export interface ApiCampGetCampGet$Plain$Params {
  pageNume?: number;
  pageSize?: number;
}

export function apiCampGetCampGet$Plain(http: HttpClient, rootUrl: string, params?: ApiCampGetCampGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CampListPaginationResult>> {
  const rb = new RequestBuilder(rootUrl, apiCampGetCampGet$Plain.PATH, 'get');
  if (params) {
    rb.query('pageNume', params.pageNume, {});
    rb.query('pageSize', params.pageSize, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CampListPaginationResult>;
    })
  );
}

apiCampGetCampGet$Plain.PATH = '/api/Camp/GetCamp';
