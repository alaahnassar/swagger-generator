/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ContactUsUser } from '../../models/contact-us-user';

export interface ApiContactUserGetContactUserByStatusGet$Json$Params {
  status?: string;
}

export function apiContactUserGetContactUserByStatusGet$Json(http: HttpClient, rootUrl: string, params?: ApiContactUserGetContactUserByStatusGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ContactUsUser>>> {
  const rb = new RequestBuilder(rootUrl, apiContactUserGetContactUserByStatusGet$Json.PATH, 'get');
  if (params) {
    rb.query('status', params.status, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ContactUsUser>>;
    })
  );
}

apiContactUserGetContactUserByStatusGet$Json.PATH = '/api/ContactUser/GetContactUserByStatus';
