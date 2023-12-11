/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Camp } from '../../models/camp';

export interface ApiCampGetCampByIdIdGet$Plain$Params {
  id: number;
}

export function apiCampGetCampByIdIdGet$Plain(http: HttpClient, rootUrl: string, params: ApiCampGetCampByIdIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Camp>> {
  const rb = new RequestBuilder(rootUrl, apiCampGetCampByIdIdGet$Plain.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Camp>;
    })
  );
}

apiCampGetCampByIdIdGet$Plain.PATH = '/api/Camp/GetCampById/{id}';
