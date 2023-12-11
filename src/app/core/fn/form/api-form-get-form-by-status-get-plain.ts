/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FormInfo } from '../../models/form-info';

export interface ApiFormGetFormByStatusGet$Plain$Params {
  status?: string;
}

export function apiFormGetFormByStatusGet$Plain(http: HttpClient, rootUrl: string, params?: ApiFormGetFormByStatusGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<FormInfo>>> {
  const rb = new RequestBuilder(rootUrl, apiFormGetFormByStatusGet$Plain.PATH, 'get');
  if (params) {
    rb.query('status', params.status, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<FormInfo>>;
    })
  );
}

apiFormGetFormByStatusGet$Plain.PATH = '/api/Form/GetFormByStatus';
