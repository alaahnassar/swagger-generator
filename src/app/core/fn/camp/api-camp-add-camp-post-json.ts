/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Camp } from '../../models/camp';

export interface ApiCampAddCampPost$Json$Params {
      body?: {
'titel'?: string;
'date'?: string;
}
}

export function apiCampAddCampPost$Json(http: HttpClient, rootUrl: string, params?: ApiCampAddCampPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Camp>> {
  const rb = new RequestBuilder(rootUrl, apiCampAddCampPost$Json.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Camp>;
    })
  );
}

apiCampAddCampPost$Json.PATH = '/api/Camp/AddCamp';
