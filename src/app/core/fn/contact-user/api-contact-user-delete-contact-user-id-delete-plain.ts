/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ContactUsUser } from '../../models/contact-us-user';

export interface ApiContactUserDeleteContactUserIdDelete$Plain$Params {
  id: number;
}

export function apiContactUserDeleteContactUserIdDelete$Plain(http: HttpClient, rootUrl: string, params: ApiContactUserDeleteContactUserIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ContactUsUser>> {
  const rb = new RequestBuilder(rootUrl, apiContactUserDeleteContactUserIdDelete$Plain.PATH, 'delete');
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

apiContactUserDeleteContactUserIdDelete$Plain.PATH = '/api/ContactUser/DeleteContactUser/{id}';
