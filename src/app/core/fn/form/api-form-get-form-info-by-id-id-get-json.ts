/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FormInfo } from '../../models/form-info';

export interface ApiFormGetFormInfoByIdIdGet$Json$Params {
  id: number;
}

export function apiFormGetFormInfoByIdIdGet$Json(http: HttpClient, rootUrl: string, params: ApiFormGetFormInfoByIdIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<FormInfo>> {
  const rb = new RequestBuilder(rootUrl, apiFormGetFormInfoByIdIdGet$Json.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<FormInfo>;
    })
  );
}

apiFormGetFormInfoByIdIdGet$Json.PATH = '/api/Form/GetFormInfoById/{id}';
