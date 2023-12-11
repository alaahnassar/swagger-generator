/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ContactUsUser } from '../../models/contact-us-user';

export interface ApiContactUserChangeContactUserStatusPatch$Json$Params {
  id?: number;
  status?: string;
}

export function apiContactUserChangeContactUserStatusPatch$Json(http: HttpClient, rootUrl: string, params?: ApiContactUserChangeContactUserStatusPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ContactUsUser>> {
  const rb = new RequestBuilder(rootUrl, apiContactUserChangeContactUserStatusPatch$Json.PATH, 'patch');
  if (params) {
    rb.query('id', params.id, {});
    rb.query('status', params.status, {});
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

apiContactUserChangeContactUserStatusPatch$Json.PATH = '/api/ContactUser/ChangeContactUserStatus';
