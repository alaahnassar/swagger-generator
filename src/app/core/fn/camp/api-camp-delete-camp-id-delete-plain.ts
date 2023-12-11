/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Camp } from '../../models/camp';

export interface ApiCampDeleteCampIdDelete$Plain$Params {
  id: number;
}

export function apiCampDeleteCampIdDelete$Plain(http: HttpClient, rootUrl: string, params: ApiCampDeleteCampIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Camp>> {
  const rb = new RequestBuilder(rootUrl, apiCampDeleteCampIdDelete$Plain.PATH, 'delete');
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

apiCampDeleteCampIdDelete$Plain.PATH = '/api/Camp/DeleteCamp/{id}';
