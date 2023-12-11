/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AuthModel } from '../../models/auth-model';

export interface ApiAuthLoginPost$Plain$Params {
  Email?: string;
  Password?: string;
}

export function apiAuthLoginPost$Plain(http: HttpClient, rootUrl: string, params?: ApiAuthLoginPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthModel>> {
  const rb = new RequestBuilder(rootUrl, apiAuthLoginPost$Plain.PATH, 'post');
  if (params) {
    rb.query('Email', params.Email, {});
    rb.query('Password', params.Password, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AuthModel>;
    })
  );
}

apiAuthLoginPost$Plain.PATH = '/api/Auth/Login';
