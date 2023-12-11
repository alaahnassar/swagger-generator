/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FormInfoListPaginationResult } from '../../models/form-info-list-pagination-result';

export interface ApiFormGetFormInfoGet$Plain$Params {
  pageNume?: number;
  pageSize?: number;
}

export function apiFormGetFormInfoGet$Plain(http: HttpClient, rootUrl: string, params?: ApiFormGetFormInfoGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<FormInfoListPaginationResult>> {
  const rb = new RequestBuilder(rootUrl, apiFormGetFormInfoGet$Plain.PATH, 'get');
  if (params) {
    rb.query('pageNume', params.pageNume, {});
    rb.query('pageSize', params.pageSize, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<FormInfoListPaginationResult>;
    })
  );
}

apiFormGetFormInfoGet$Plain.PATH = '/api/Form/GetFormInfo';
