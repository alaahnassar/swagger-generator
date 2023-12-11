/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CampImage } from '../../models/camp-image';

export interface ApiCampAddCampImagePost$Json$Params {
      body?: {
'campId'?: number;
'image'?: Blob;
}
}

export function apiCampAddCampImagePost$Json(http: HttpClient, rootUrl: string, params?: ApiCampAddCampImagePost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CampImage>> {
  const rb = new RequestBuilder(rootUrl, apiCampAddCampImagePost$Json.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CampImage>;
    })
  );
}

apiCampAddCampImagePost$Json.PATH = '/api/Camp/AddCampImage';
