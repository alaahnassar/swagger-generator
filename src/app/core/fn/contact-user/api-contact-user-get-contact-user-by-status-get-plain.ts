/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ContactUsUser } from '../../models/contact-us-user';

export interface ApiContactUserGetContactUserByStatusGet$Plain$Params {
  status?: string;
}

export function apiContactUserGetContactUserByStatusGet$Plain(http: HttpClient, rootUrl: string, params?: ApiContactUserGetContactUserByStatusGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ContactUsUser>>> {
  const rb = new RequestBuilder(rootUrl, apiContactUserGetContactUserByStatusGet$Plain.PATH, 'get');
  if (params) {
    rb.query('status', params.status, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ContactUsUser>>;
    })
  );
}

apiContactUserGetContactUserByStatusGet$Plain.PATH = '/api/ContactUser/GetContactUserByStatus';
