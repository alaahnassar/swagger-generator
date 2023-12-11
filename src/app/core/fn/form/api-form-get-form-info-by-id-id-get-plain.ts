/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FormInfo } from '../../models/form-info';

export interface ApiFormGetFormInfoByIdIdGet$Plain$Params {
  id: number;
}

export function apiFormGetFormInfoByIdIdGet$Plain(http: HttpClient, rootUrl: string, params: ApiFormGetFormInfoByIdIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<FormInfo>> {
  const rb = new RequestBuilder(rootUrl, apiFormGetFormInfoByIdIdGet$Plain.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<FormInfo>;
    })
  );
}

apiFormGetFormInfoByIdIdGet$Plain.PATH = '/api/Form/GetFormInfoById/{id}';
