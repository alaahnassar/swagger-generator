/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ContactUsUser } from '../../models/contact-us-user';

export interface ApiContactUserGetContactUserByIdIdGet$Json$Params {
  id: number;
}

export function apiContactUserGetContactUserByIdIdGet$Json(http: HttpClient, rootUrl: string, params: ApiContactUserGetContactUserByIdIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ContactUsUser>> {
  const rb = new RequestBuilder(rootUrl, apiContactUserGetContactUserByIdIdGet$Json.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

apiContactUserGetContactUserByIdIdGet$Json.PATH = '/api/ContactUser/GetContactUserById/{id}';
