/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UserModel } from '../../models/user-model';

export interface ApiAuthGetAccountGet$Plain$Params {
}

export function apiAuthGetAccountGet$Plain(http: HttpClient, rootUrl: string, params?: ApiAuthGetAccountGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<UserModel>> {
  const rb = new RequestBuilder(rootUrl, apiAuthGetAccountGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UserModel>;
    })
  );
}

apiAuthGetAccountGet$Plain.PATH = '/api/Auth/GetAccount';
