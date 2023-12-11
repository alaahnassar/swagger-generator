/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { HomeData } from '../../models/home-data';

export interface ApiHomeUpdateHomeDataPatch$Json$Params {
      body?: {
'About'?: string;
'Map'?: Blob;
'CTA'?: string;
'ProgramsDis'?: string;
}
}

export function apiHomeUpdateHomeDataPatch$Json(http: HttpClient, rootUrl: string, params?: ApiHomeUpdateHomeDataPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<HomeData>> {
  const rb = new RequestBuilder(rootUrl, apiHomeUpdateHomeDataPatch$Json.PATH, 'patch');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<HomeData>;
    })
  );
}

apiHomeUpdateHomeDataPatch$Json.PATH = '/api/Home/UpdateHomeData';
