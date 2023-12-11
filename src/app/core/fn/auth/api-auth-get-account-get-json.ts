/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UserModel } from '../../models/user-model';

export interface ApiAuthGetAccountGet$Json$Params {
}

export function apiAuthGetAccountGet$Json(http: HttpClient, rootUrl: string, params?: ApiAuthGetAccountGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<UserModel>> {
  const rb = new RequestBuilder(rootUrl, apiAuthGetAccountGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UserModel>;
    })
  );
}

apiAuthGetAccountGet$Json.PATH = '/api/Auth/GetAccount';
