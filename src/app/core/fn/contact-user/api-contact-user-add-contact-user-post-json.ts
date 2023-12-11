/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ContactUsUser } from '../../models/contact-us-user';

export interface ApiContactUserAddContactUserPost$Json$Params {
      body?: {
'name'?: string;
'email'?: string;
'message'?: string;
'date'?: string;
'mobile'?: string;
'status'?: string;
}
}

export function apiContactUserAddContactUserPost$Json(http: HttpClient, rootUrl: string, params?: ApiContactUserAddContactUserPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ContactUsUser>> {
  const rb = new RequestBuilder(rootUrl, apiContactUserAddContactUserPost$Json.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ContactUsUser>;
    })
  );
}

apiContactUserAddContactUserPost$Json.PATH = '/api/ContactUser/AddContactUser';
