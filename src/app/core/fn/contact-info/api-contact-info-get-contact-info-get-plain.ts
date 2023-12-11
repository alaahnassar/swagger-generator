/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ContactUsInfoListPaginationResult } from '../../models/contact-us-info-list-pagination-result';

export interface ApiContactInfoGetContactInfoGet$Plain$Params {
  pageNume?: number;
  pageSize?: number;
}

export function apiContactInfoGetContactInfoGet$Plain(http: HttpClient, rootUrl: string, params?: ApiContactInfoGetContactInfoGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ContactUsInfoListPaginationResult>> {
  const rb = new RequestBuilder(rootUrl, apiContactInfoGetContactInfoGet$Plain.PATH, 'get');
  if (params) {
    rb.query('pageNume', params.pageNume, {});
    rb.query('pageSize', params.pageSize, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ContactUsInfoListPaginationResult>;
    })
  );
}

apiContactInfoGetContactInfoGet$Plain.PATH = '/api/ContactInfo/GetContactInfo';
