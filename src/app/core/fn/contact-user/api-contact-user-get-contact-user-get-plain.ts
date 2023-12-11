/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ContactUsUserListPaginationResult } from '../../models/contact-us-user-list-pagination-result';

export interface ApiContactUserGetContactUserGet$Plain$Params {
  pageNume?: number;
  pageSize?: number;
}

export function apiContactUserGetContactUserGet$Plain(http: HttpClient, rootUrl: string, params?: ApiContactUserGetContactUserGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ContactUsUserListPaginationResult>> {
  const rb = new RequestBuilder(rootUrl, apiContactUserGetContactUserGet$Plain.PATH, 'get');
  if (params) {
    rb.query('pageNume', params.pageNume, {});
    rb.query('pageSize', params.pageSize, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ContactUsUserListPaginationResult>;
    })
  );
}

apiContactUserGetContactUserGet$Plain.PATH = '/api/ContactUser/GetContactUser';
