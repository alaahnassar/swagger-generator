/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ContactUsUser } from '../../models/contact-us-user';

export interface ApiContactUserGetContactUserByIdIdGet$Plain$Params {
  id: number;
}

export function apiContactUserGetContactUserByIdIdGet$Plain(http: HttpClient, rootUrl: string, params: ApiContactUserGetContactUserByIdIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ContactUsUser>> {
  const rb = new RequestBuilder(rootUrl, apiContactUserGetContactUserByIdIdGet$Plain.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ContactUsUser>;
    })
  );
}

apiContactUserGetContactUserByIdIdGet$Plain.PATH = '/api/ContactUser/GetContactUserById/{id}';
