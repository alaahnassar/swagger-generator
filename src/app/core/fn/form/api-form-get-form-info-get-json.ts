/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FormInfoListPaginationResult } from '../../models/form-info-list-pagination-result';

export interface ApiFormGetFormInfoGet$Json$Params {
  pageNume?: number;
  pageSize?: number;
}

export function apiFormGetFormInfoGet$Json(http: HttpClient, rootUrl: string, params?: ApiFormGetFormInfoGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<FormInfoListPaginationResult>> {
  const rb = new RequestBuilder(rootUrl, apiFormGetFormInfoGet$Json.PATH, 'get');
  if (params) {
    rb.query('pageNume', params.pageNume, {});
    rb.query('pageSize', params.pageSize, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<FormInfoListPaginationResult>;
    })
  );
}

apiFormGetFormInfoGet$Json.PATH = '/api/Form/GetFormInfo';
