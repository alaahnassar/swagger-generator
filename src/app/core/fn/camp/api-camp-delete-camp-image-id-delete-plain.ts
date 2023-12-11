/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CampImage } from '../../models/camp-image';

export interface ApiCampDeleteCampImageIdDelete$Plain$Params {
  id: number;
}

export function apiCampDeleteCampImageIdDelete$Plain(http: HttpClient, rootUrl: string, params: ApiCampDeleteCampImageIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CampImage>> {
  const rb = new RequestBuilder(rootUrl, apiCampDeleteCampImageIdDelete$Plain.PATH, 'delete');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CampImage>;
    })
  );
}

apiCampDeleteCampImageIdDelete$Plain.PATH = '/api/Camp/DeleteCampImage/{id}';
