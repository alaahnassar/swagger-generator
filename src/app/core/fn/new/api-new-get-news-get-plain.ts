/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { New } from '../../models/new';

export interface ApiNewGetNewsGet$Plain$Params {
}

export function apiNewGetNewsGet$Plain(http: HttpClient, rootUrl: string, params?: ApiNewGetNewsGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<New>>> {
  const rb = new RequestBuilder(rootUrl, apiNewGetNewsGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<New>>;
    })
  );
}

apiNewGetNewsGet$Plain.PATH = '/api/New/GetNews';
