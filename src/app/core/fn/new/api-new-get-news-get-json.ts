/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { New } from '../../models/new';

export interface ApiNewGetNewsGet$Json$Params {
}

export function apiNewGetNewsGet$Json(http: HttpClient, rootUrl: string, params?: ApiNewGetNewsGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<New>>> {
  const rb = new RequestBuilder(rootUrl, apiNewGetNewsGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<New>>;
    })
  );
}

apiNewGetNewsGet$Json.PATH = '/api/New/GetNews';
